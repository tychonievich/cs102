---
title: DNS Lookups
...

This page queries some of the records stored in the DNS system.
Because DNS is frequently cached, it does not show exactly which servers respond
and does not support top-level domains (like `edu`),
but does support second-level (like `illinois.edu`) and below.

<label>Hostname: <input id="hostname" onchange="lookup(this)"></label>

```{=html}
<table>
<thead><tr><th>Host</th><th>Type</th><th>Data</th></tr></thead>
<tbody id="entries"></tbody>
</table>

<script>
async function lookup(elem) {
  const resp = await fetch('dns.php?q='+elem.value);
  const data = await resp.json();
  const tb = document.getElementById('entries');
  tb.innerHTML = '';
  for(let entry of data) {
    const tr = tb.insertRow();
    tr.insertCell().append(entry.host);
    tr.insertCell().append(entry.type);
    tr.insertCell().append(entry[{
      A:'ip',
      AAAA:'ipv6',
      NS:'target',
      CNAME:'target',
    }[entry.type]]);
    
  }
}

</script>
```

We show four (of many) DNS record types:

A
:   Shows the IPv4 IP address associated with the host.

    To visit in IPv4 address in your browser, use it in place of the hostname in the URL.
    
    <div class="example">
    The `/index.html` path of IPv4 `130.126.151.14` can be visited by entering <https://130.126.151.14/index.html> in your browser's location bar.
    </div>

AAAA
:   Shows the IPv6 IP address associated with the host.

    To visit in IPv6 address in your browser, enclose it in brackets and use it in place of the hostname in the URL.

    <div class="example">
    The `/index.html` path of IPv6 `2620:12a:8000::3` can be visited by entering `<a href="https://[2620:12a:8000::3]/index.html">https://[2620:12a:8000::3]/index.html</a>`{=html} in your browser's location bar.
    </div>
    
CNAME
:   Shows the canonical domain name (the one preferred for use) of an alias (which is kind of like a nickname or stage name for a computer).
    
    Also shows entries for that canonical name in the same query, since you almost always want those.

NS
:   Shows the domain name of the computer that answers DNS queries for subdomains of this domain.

