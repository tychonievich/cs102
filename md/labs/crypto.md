---
title: Simplified cryptography tools
header-includes:
  - |
    <script>
    function c2n(charcode) {
        if (charcode < 32 || charcode > 126) return String.fromCharCode(charcode)
        return charcode - 32;
    }
    function vignere_e(key, text) {
        const knum = [...key].map(e=>c2n(e.charCodeAt(0))).filter(e=> 'number' === typeof e)
        const codepoints = [...text]
            .map(e=>c2n(e.charCodeAt(0)))
            .map((n,i) => ('number' === typeof n) ? (n+knum[i%knum.length]) % 95 + 32 : n.charCodeAt(0));
        return String.fromCharCode(...codepoints);
    }
    function vignere_d(key, text) {
        const knum = [...key].map(e=>c2n(e.charCodeAt(0))).filter(e=> 'number' === typeof e)
        const codepoints = [...text]
            .map(e=>c2n(e.charCodeAt(0)))
             //.filter(e=> 'number' === typeof e)
             //.map((n,i) => (95+n-knum[i%knum.length]) % 95)
             //.map(n => n+32);
            .map((n,i) => ('number' === typeof n) ? (95+n-knum[i%knum.length]) % 95 + 32 : n.charCodeAt(0));
        return String.fromCharCode(...codepoints);
    }
    function str2n(s) {
        let ans = 0n;
        for(let i=0; i<s.length; i+=1) {
            const n = c2n(s.charCodeAt(i));
            if ('string' === typeof n) continue;
            ans *= 95n;
            ans += BigInt(n);
        }
        return ans;
    }
    function n2str(n) {
        let ans = '';
        while (n > 0n) {
            const dig = Number(n % 95n);
            n /= 95n;
            ans = String.fromCharCode(dig+32) + ans;
        }
        return ans;
    }

    function powmod(b, e, m) {
        let r = 1n;
        b %= m;
        while (e > 0n) {
            if (e & 1n) r = (r*b)%m;
            b = (b**2n)%m;
            e >>= 1n;
        }
        return r;
    }
    function fivechar_oneway(pub, priv) { // for Diffie-Hellman
        const v = str2n(priv);
        const u = str2n(pub);
        const m = powmod(u, v, 7737809363n);
        return n2str(m);
    }
    function hash(s) {
        let n = 7654321098n;
        for(let i=0; i<s.length; i+=1) {
            n *= 2955580179n; // phi times the modulus
            n += BigInt(s.charCodeAt(i)) * 0x1357n;
            n %= 7737809363n; // the largest prime smaller than 95**5
        }
        return n2str(n);
    }
    function probablyPrime(n) {
        let s = 0, d = n-1n;
        while(!(d&1n)) {
            s += 1;
            d >>= 1n;
        }
        for(let _1 = 0; _1 < 20; _1 += 1) {
            const a = BigInt(Math.floor(Math.random() * (Number(n)-1)));
            let x = powmod(a, d, n);
            let y;
            for(let _2 = 0; _2 < s; _2 += 1) {
                y = (x ** 2n) % n;
                if (y == 1n && x != 1n && x != (n-1n)) return false;
                x = y;
            }
            if (y != 1) return false;
        }
        return true;
    }
    function makePrime(min, max) {
        let p = (BigInt(Math.floor(Math.random()*Number(max-min)))+min) | 1n;
        while(!probablyPrime(p)) {
            p = (BigInt(Math.floor(Math.random()*Number(max-min)))+min) | 1n;
        }
        return p
    }
    function gcd(a, b) {
        while(b) { [a,b] = [b, a%b]; }
        return a;
    }
    function lcm(a, b) {
        if (!a || !b) return 0n;
        return (a * b) / gcd(a,b);
    }
    function modInverse(a, n) {
      let lowerA = a % n;
      let lowerN = n;
      let prevX = 1n, x = 0n;
      let prevY = 0n, y = 1n;
      let r = lowerN, oldR = lowerA;
      while (r) {
        const quotient = oldR / r;
        [oldR, r] = [r, oldR - quotient * r];
        [prevX, x] = [x, prevX - quotient * x];
        [prevY, y] = [y, prevY - quotient * y];
      }
      if (oldR != 1n) throw new Error(a+' is not invertable modulo '+n);
      return ((prevX % lowerN) + lowerN) % lowerN;
    }
    function privkeygen() {
        while(true) {
            const p = makePrime(81450626n, 7737809363n);
            const q = makePrime(81450626n, 7737809363n);
            const n = p * q;
            const l = lcm(p-1n, q-1n);
            const e = 0x10001n;
            if (l < e || gcd(l,e) != 1n) {
                console.log('gcd(',l,',',e,') =', gcd(l,e))
                continue;
            }
            const d = modInverse(e, l);
            return [n,d];
        }
    }
    function sign(text, pub, priv) {
        return n2str(powmod(str2n(hash(text)), str2n(priv), str2n(pub)));
    }
    function sig2hash(pub, sig) {
        return n2str(powmod(str2n(sig), 0x10001n, str2n(pub)));
    }
    </script>
  - |
    <style>
    textarea { width: 100%; height: 10em; }
    textarea, input[type="text"], input:not([type]) { font-size: 1rem; font-family: monospace; }
    input:disabled, textarea:disabled { color:inherit; border: thin solid #0008; background:none; }
    </style>
...

This page has several example functions that are the kinds of tools used to build cryptographic protocols.
The functions on this page are insecure, deigned for exploration not for actual security.

Most functions on this page use a "base-95" encoding, representing numbers as printable ASCII characters.

# Hash

<textarea id="hashin"></textarea>

<input type="button" onclick="document.getElementById('hashout').value = hash(document.getElementById('hashin').value)" value="Compute hash">

<label>Hash: <input disabled id="hashout" size="5"></label>

# Key exchange function

<label>Public information: <input id="dhpub" ></label>

<label>Secret information: <input id="dhpriv" ></label>

<input type="button" onclick="document.getElementById('dhres').value = fivechar_oneway(document.getElementById('dhpub').value, document.getElementById('dhpriv').value)" value="Compute function">

<label>Computed secret: <input disabled id="dhres" size="5"></label>

# Symmetric cipher

This uses a variant of the Vignere cipher that uses all printable ASCII instead of just letters
for both the key and the text being en/decrypted.

<textarea id="symmin"></textarea>

<label>Symmetric key: <input id="symmkey"></label>

<input type="button" onclick="document.getElementById('symmout').value = vignere_e(document.getElementById('symmkey').value, document.getElementById('symmin').value)" value="encrypt">
<input type="button" onclick="document.getElementById('symmout').value = vignere_d(document.getElementById('symmkey').value, document.getElementById('symmin').value)" value="decrypt">

<textarea disabled id="symmout"></textarea>

# Sign

```{=html}
<script>
function newkeys() {
    const [pub,priv] = privkeygen()
    document.getElementById('pubkey').value = n2str(pub);
    document.getElementById('privkey').value = n2str(priv);
}
</script>
```

<input type="button" value="Generate a signature key pair" onclick="newkeys()">

<label>Public part (share this): <input disabled id="pubkey" size="10"></label>

<label>Private part (don't share this): <input disabled id="privkey" size="10"></label>

<textarea id="signin"></textarea>

<input type="button" onclick="document.getElementById('signout').value = sign(document.getElementById('signin').value, document.getElementById('pubkey').value, document.getElementById('privkey').value)" value="Sign message">

<label>Signature: <input disabled id="signout" size="10"></label>

# Check signature


<label>Signature: <input id="checksig" size="10"></label>

<label>Signer's public key: <input id="checkkey" size="10"></label>

<input type="button" onclick="document.getElementById('checkout').value = sig2hash(document.getElementById('checkkey').value, document.getElementById('checksig').value)" value="Decrypt signature">

<label>Signed hash: <input disabled id="checkout" size="10"></label>

Note: if the signed hash is longer than 5 characters, that means key was not used to create the signature.
If it is ≤5 characters but doesn't match the message's hash, that means the signature is from the signer but was for a different message.
