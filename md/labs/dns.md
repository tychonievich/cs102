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
