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
and 128 bits for IPv6 addresses^[There are about 100 quentillion quentillion IPv6 addresses, roughly 50 times the Earth's mass measured in nanograms.].

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

