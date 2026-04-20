---
title: The Internet
...

When a group of computers are directly connected to one another with a centrally-managed connection scheme, we say they are <dfn>networked</dfn>.
The prefix "inter-" means "between", thus leading to an early effort to connect multiple networks
"the <dfn>Internet</dfn>."

It is common (though not universal) to use a capital letter for the name of "the Internet"
and a lower-case letter for adjectives like "internet protocol" and "internet traffic."

This page explores some of the most important components of the Internet,
including:

- IP, a protocol for getting messages from one machine to another.
- DNS, a protocol for converting URLs to IP addresses.
- TCP and QUIC, protocols for reliable transport over unreliable connections.
- Multiple meanings of "online."

# IP

<abbr>IP</abbr>, which stands to "internet protocol", is how messages get between computers on the Internet.

Each computer on the Internet is given an IP Address, which is a large number.
There are two common versions of IP in use today:
IPv4 and IPv6; the most obvious difference between them is how large those numbers are:
32 bits for IPv4 addresses^[There are about 4 billion IPv4 addresses, roughly 1 for every 2 people alive in 2026.]
and 128 bits for IPv6 addresses^[There are about 100 quintillion quintillion IPv6 addresses, roughly 50 times the Earth's mass measured in nanograms.].

There are several aspects to IP, but the main operation to get a message from one computer to another
is:

- If the destination is a computer you're connected to, send it to them.
- Otherwise, send it to a computer you are connected to that you think is closer.

There are various tools used to estimate what computers might be closer to the destination than others,
but the end result is still something of a best-effort guess-and-check.
One benefit of this design is that the Internet is very robust to changes in connectivity:
add or remove a computer or connection and traffic will naturally route around the new connections.

IP is a <dfn>unreliable</dfn> communication medium,
in the sense that any computer engaged in IP communication can chose not to deliver a message.
We discuss how to add reliability in [a later section](#reliable).

IP is an <dfn>insecure</dfn> communication medium,
in the sense that any computer might see any message
and if they do they can change it before sending it on.
It is common for IP communications to be [encrypted](crypto.html) to provide security.

The Internet relies on no two computers having the same IP address.
Allocating addresses is manged by the Internet Assigned Numbers Authority (<abbr>IANA</abbr>)
who is responsible for ensuring the uniqueness of IP addresses.


## National borders

The Internet derived from a project by the US military
and while it is now governed by an international standards body,
it is still seen by many as a USA-based system.
Because of this, various nations who have had poor relations with the US
have explored how the Internet might work if they detached at their national borders.

Note that detaching is generally possible.
While wireless communication is good for the relatively small amounts of data reaching a single device,
it is insufficient for the vast amounts of data traversing the Internet
so there are physical cables crossing national borders to make the Internet an international communication platform.

Because IP is already designed to work in a decentralized way that is robust to disconnections,
cutting the connections that cross out of a nation has relatively little impact on IP routing.
External IP addresses simply appear to be unreachable.
It is even straightforward to make external IP addresses seem to still work
by routing their traffic to internal servers instead.

China is well known for doing a more selective form of cut-off
with what is known as the "great firewall of China",
blocking traffic at the border if that traffic was routed to some IP addresses but not others.

# DNS

You likely don't know the IP address of any of the websites you use.
Instead, you access websites by their <dfn>hostname</dfn>,
which is the part of their URL between the `://` and the next `/`.
Each hostname is made of two or more <dfn>domain names</dfn> separated by periods,
with the last domain name being the <dfn>top-level domain name</dfn>
and each step to the left being one level lower down.

:::example

The full URL of this page is

<center><code id="url"></code></center>

The hostname is

<center><code id="host"></code></center>

which is made of the following domain names, from top level to lowest level:

```{=html}
<ol id="domains"></ol>
<script>
document.getElementById('url').textContent = location.href;
document.getElementById('host').textContent = location.hostname;
location.hostname.split(/\./g).reverse().forEach(n => {
  document.getElementById('domains').append(document.createElement('li'));
  document.getElementById('domains').lastElementChild.innerHTML = '<code>'+n+'</code>';
})
</script>
```

:::

Everything that comes after the hostname in a URL is called the <dfn>path</dfn>
and can be interpreted by the server however they wish,
but the hostname itself maps to a specific IP address
using a system called the <dfn>domain name system</dfn> (<abbr>DNS</abbr>).

DNS has several parts, but the most interesting for our purposes is how it maps a hostname to an IP address.
This is done hierarchically:

- My local network knows a list of IANA server IP addresses
- Each IANA servers know a list of .com servers, and .edu servers, and so on for every other top-level domain.
- Each .edu server knows a list of illinois.edu servers, and uic.edu servers, and uis.edu servers, and so on for every second-level .edu domain.
- Each illinois.edu server knows a list of grainger.illinois.edu servers, and las.illinois.edu servers, and so on for every third-level illinois.edu domain.
- .. and so on.

Each time I visit a new URL,
my browser finds its hostname,
breaks it into domain names,
and queries each of the relevant servers to find the IP address of the host in question;
it then sends that host the rest of the URL to get the page's contents.

This hierarchical design allows decentralized control.
If I want to create `info102.illinois.edu` I don't need to contact IANA,
I can just ask the owners to `illinois.edu` to add my IP address to their DNS server.
This local control can seem good if they are responsive and responsible or bad if they are not,
but either way it is a local problem only.


## National borders

A key part of detaching a national part of the Internet from the rest of the world
is to detach DNS.
Instead of providing IANA's servers, provide a local copy
that only has local IP addresses.
Since DNS is already implemented by many servers, this is quite simple to do:
just get a copy of the national part of the IANA top-level DNS servers
and host it internally.
Local networks needn't even know this has happened:
once the network limited to national borders, 

Russia famously experimented with this kind of full national cut-off,
restricting parts of the Internet to just within Russia briefly in 2023 to prove they could
and then trying to use it in a more targeting manner in 2026 as part of their conflict with Ukraine.

# Reliable transport {#reliable}

IP is fundamentally an unreliable medium.
This unreliability manifests in two ways:

- Data sent over the Internet is split into <dfn>packets</dfn> of up to a few kilobytes and each is routed separately to its destination. This means that packets might arrive out of order, with packets from later in a long message arriving conceptually-earlier packets.

- The Internet provided <dfn>best-effort</dfn> delivery. Most packets arrive promptly, but some are not delivered at all. There's not explicit notice when this happens: the packets are simply lost.

To deal with this unreliability, messages sent over IP typically have have additional information added to them to check for and recover from unreliable delivery.
<abbr>TCP</abbr> (transmission control protocol) is the best-known reliable transport technique,
which uses the following elements to achieve reliability:

- Each packet is given an order number, so that if packet 3 arrives before packet 2 it can be held on to until packet 2 arrives to put it back in order.

- The recipient of a packet responds to acknowledge receipt. If not such response is received within a reasonable time, the packet is re-sent.
    
The many rounds of receipt acknowledgments does add significant time to the process,
and sometimes some steps can be skipped by using other information present in the messages being sent.
For example, web pages can sometimes avoid sending receipts by having the browser re-request missing data
and a different protocol based on that (called <abbr>QUIC</abbr>) is increasingly common in that space.

# Is your computer on the Internet?

The computer you are using to connect to this webpage
is online,
but what does that mean?
Let's assume the common case where you're connecting wirelessly.

- Your device is directly connected (via radio waves) to a router,
    which is a special-purpose computer with a radio signal array.
    Common routers are WiFi routers and cell tower.
    
    Your computer likely has a special IP address that only works within the set of computers connected to the same router.
    You can use that special local IP address to communicate with those other computers,
    but no one outside of that limited local-area network (<abbr>LAN</abbr>) can use these addresses.

- The router is connected (typically via wire or fiber) to other computers making up a network.
    This network is typically owned and managed by the group you are paying for Internet access:
    your internet service provider (<abbr>ISP</abbr>), cell carrier, or the like.
    
    Within this network, each computer has an IP address.
    However, these networks are usually set up to limit routing,
    not allowing most computers to send messages to each other.

- Somewhere within the network is a computer that is actually on the Internet,
    connected to other computers on the Internet and participating in IP to send, receive, and route messages.
    This computer is sometimes called a <dfn>gateway</dfn> or switch.
    
    This computer may only have a single IP address that the rest of the Internet can see
    and uses that for all the computers attached to it.
    This is implemented using a process called <dfn>Network Address Translation</dfn> (<abbr>NAT</abbr>)
    where your computer thinks it has one IP address
    but that is changed to the shared IP address by the gateway;
    messages that come back are matched with the outgoing message that prompted them
    and then forwarded to the correct computer inside the network.

One consequence of this design is that your computer cannot be directly addressed by others on the Internet.
Sometimes this is good, removing the risk of attackers directly sending malicious content to your computer;
other times it is bad, making initiating something like a video call far more complicated than it would be otherwise with a required intermediate server to achieve some otherwise-simple goals.

# VPNs and Tor

Because IP involves many computers handing a message off one to another,
it requires that the IP addresses of both receiver and sender^[Receiver is needed to get the message where it is going; sender is needed so that NAT and related ideas can successfully communicate nontrivial return paths.] be sent in plaintext,
unencrypted and visible to every computer making up the packet's route.
This means that, while the *contents* of messages can be encrypted,
who sent messages when to whom cannot.

Knowing what IP addresses you are sending each packet to
allows ISPs to selectively throttle traffic,
for example by prioritizing packets sent to and from an Internet connection speed test site
and delaying traffic to the sites of competitors.
It allows companies to block access from work computers to sites they deem inappropriate.
It allows countries to block access to sites they deem to be a security risk or in violation of intellectual property laws
and to use the quantity and timing of messages in legal action.
These technical allowances are all things some users might object to and wish to disallow.

<dfn>Virtual private networks</dfn> (<abbr>VPN</abbr>s) are the main tool for obfuscating communicating IP addresses.
To send a message to illinois.edu using a VPN,

1. You open a secure connection (such as HTTPS) with the VPN.

2. You send the VPN a request to send illinois.edu your message.

3. The VPN opens a secure connection to illinois.edu.

4. The VPN sends your message to illinois.edu and gets a reply.

5. The VPN sends you the reply.

The end result of this is the VPN knows who you are talking to,
and your ISP and other Internet computers know that you're talking to the VPN,
but your ISP and other Internet computers don't know who your using the VPN to talk to.
The VPN thus has the same power to see your communications that an ISP would otherwise,
but no one else does.

But what if you don't trust your VPN?
Then you can use <dfn>onion routing</dfn> by picking three unrelated VPNs.

1. You send a message to VPN1
2. requesting they send a message to VPN2
3. requesting they send a message to VPN3
4. requesting they send a message to your destination website.

This results in VPN1 knowing that you are communicating with someone but not whom;
VPN3 knowing that someone is communicating with the site but not whom;
and VPN2 being an extra buffer to keep either of the other VPNs from even knowing what countries the two communicating parties live in.

The most successful onion routing network is called the <dfn>Tor network</dfn>
and accepts volunteers from across the world to be the VPNs.
Tor was created by researchers working for the US military
but has seen significant buy-in from many nations,
including heavy use by journalists in nations without full freedom of the press
and by those seeking to connect to one another without being susceptible to wiretaps,
including criminals and political dissenters.
It is also widely used to hide embarrassing Internet usage from ISPs and employers.

Tor also supports a special protocol for any computer connected to Tor
to serve a website that is only accessible through Tor.
Initially designed to protect servers from even being visible to the governments where they operated,
these websites can easily be ephemeral, coming and going as computers connect and disconnect;
they lack human-readable URLs;
and they cannot readily be indexed by search engines or the like.
Together, these sites that depend on and are hidden by Tor (and other related onion routing systems) are called the <dfn>dark web</dfn>.



