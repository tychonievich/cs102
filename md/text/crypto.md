---
title: Basics of cryptography
...

# Cryptographic functions

Cryptographic functions have the property
that they are *much* harder to invert
than they are to compute.
We generally aim for functions that are [NP-hard](hard.html) to invert,
such that for big enough inputs it would take a prohibitively long time to invert them.

There are many cryptographic functions,
almost all relying on mathematical principles that most of you have not learned.
That said, there are a few classes of functions that are worth understanding
even if the details of their implementation is more complicated than we want to discuss.

## Hash

A cryptographically secure hash (there are other, hashes used elsewhere in computing that are not secure) has the following properties:

Input
:   A message of arbitrary type and length; typically provided as a list of bytes.

Output
:   A message of fixed length; typically provided as a list of bytes.

Properties
:   Going form big message to hash is fast and easy
    
    Finding a message that would give a particular hash is very hard

Example
:   The SHA-1 hash of "Hi!" is eb8e0e5fcbd4675e9e6fc6f770a170e56bd5923b
    
    The SHA-1 hash of "Hi." is 0693b2ba3945a014125952e12afe4cd5a1519161

## Symmetric cipher

A symmetric cipher is a pir of functions,
one to encrypt and one to decrypt.
These look quite similar in most ways

Input
:   1. A message of arbitrary type and length; typically provided as a list of bytes.
        
        For encryption, this is the "plaintext" -- the message we want to send.
        For decryption, this is the "ciphertext" -- it looks random to everyone except the intended recipient.
    
    2. A <dfn>key</dfn>, which is an arbitrary secret number known only to the two communicating parties.

Output
:   For encryption, the ciphertext.
    
    For decryption, the plaintext.

Properties
:   If you and I know the same key, we can encrypt messages efficiently and decrypt what the other encrypted.

    If you and I do not know the same key, encrypting or decrypting or guessing the key is very hard.

## Diffie-Hellman Key Exchange

Diffie-Helman key exchange is a way of having two people agree on a single random number
without anyone else being able to figure out what number they came up with
even if they hear everything both of them say to each other.

<details class="aide"><summary>Diffie, Hellman, and Merkle</summary>

There is some difference of opinion about the justice of this name. Whitfield Diffie and Martin Hellman published a paper describing it in 1976, but Hellman later stated the idea in the paper was that of their graduate student Ralph Merkle.
When Diffie and Hellman were given the Turing award in 2015 (the top prize in computer science),
the press photo for the award announcement was a clipped version of a photo that, if unclipped, included Merkle.

![Press photo.](https://news.stanford.edu/__data/assets/image/0033/129588/16185-turingtwo_news.jpg)

![Original photo from same photography session.](https://blog.hnf.de/wp-content/uploads/2016/03/MerkleDiffieHellman.jpg)

</details>

The core work of Diffie-Hellman is an operator in a cyclic group, which is similar to the idea of associative operators.
As long as $(a \oplus b) \oplus c = a \oplus (b \oplus c)$
and the inverse of $\oplus$ is hard to compute,
we can exchange keys as follows:

1. We both agree (publically) on a random value $b$.
2. We each pick (separately and secretly) random values $a$ and $c$.
3. I share (publically) $a \oplus b$; you share $b \oplus c$.
4. We both compute $a \oplus b \oplus c$, which no one else can do because they only know $b$, $a \oplus b$, and $b \oplus c$, but not $a$ or $c$.

## Signature

A signature is very much like a hash, but it also has *two* keys:
one used by the signer (called the <dfn>private key</dfn>) and another shared publicly with everyone (called the <dfn>public key<dfn>).
Both keys are needed to encrypt,
but only the public key is needed to decrypt.

To *create* a signature, we do this:

1. Given a message, a public key, and its corresponding private key
2. Hash the message
3. Encrypt the hash with the public and private key

To *check* a signature, we do this:

1. Given a message, a signature, and a public key
2. Hash the message
3. Decrypt the signature with the public key
4. If the hash and the decrypted signature match, the owner of the key signed this message

Note that public and private key pairs are potentially valuable in many contexts,
forming what is called an asymmetric cipher.
However, they tend to be quite limited in how they can be securely used,
often working only on fixed-size input (like the outputs of a hash),
and some only work reliably in the context of a signature.

# Using cryptography

## Providing confidentiality

To provide confidential communication with a single other party,

1. Use Diffie-Hellman key exchange to agree on a random secret key
2. Use the key to communicate using a symmetric cipher

Note that this provides confidentiality (no one can listen in),
but does not provide authentication:
you know you're talking to just one person
but don't know who that person is.

## Providing integrity

Suppose I want you be confident that the message I'm sending you has not been tampered with by others;
and that you know my public key.
I share the message and my signature of it; you can check the signature to verify that the message has not been changed.

## Learning others' public keys

Suppose I want to know what your public key is.
I can't just ask you: someone could change your reply.
Instead, I ask for a <dfn>certificate</dfn> signed by someone I already trust and have a public key for,
called a <dfn>certificate authority</dfn>.

The certificate has four important pieces of information:

1. A public key
2. The identity of the owner of a public key
3. An expiration date of the public key
4. A signature from a certificate authority

The expiration date is very important: cryptography is hard to invert, but not impossible,
so we need to make keys expire so enough that finding an inversion can't be done in time.

Certificate authorities are important in this process:
if I trust an authority I shouldn't
or don't have the right key for the authority
then someone I don't trust can pretend to be someone,
giving me a forged certificate with their own key instead of the correct key of entity I wnated to contact.

The public keys of several certificate authority companies are shipped with your computer.
Those companies have a financial interest in never having been found to give bad certificates,
giving reasonable assurance that they should be trusted.

## Checking passwords without storing them

When I log into some system, I send them my username and password.
They need to compare those to the information they have on file.
But if they have my password stored then they become an attractive mark for others wishing to steal my information.

Instead, they can store the hash of my password.
If the password I type hashes to the hash they have on file, I must have typed the right password.

But hashes are predictable, meaning if someone finds a password with the same hash they can break my password,
leading to a similar desire to steal those files.

To prevent that, we store not just the hash of the password as-is,
but rather a hash of the a longer message containing both password and some additional data.
Ideally that is two different pieces of data:
one, called the <dfn>salt</dfn>, is different for each user and stored in the file of hashed passwords;
the other, called the <dfn>pepper</dfn>, is the same for all users but kept secret and not stored anywhere.

## Checking identity without sharing any secret

Instead of having you send me a password,
I can send you random value and ask you to add your password to it and send me back the resulting hash.
If you and I both know your password, we will get the same hash doing this
but others listening in won't learn what that password was.

If instead of us both knowing your password
I know your public key, I can send you a random value and you can send back your a signature of that value.
This way your secret key never needs to be shared with anyone, not even initially when creating your account.

These kinds of techniques are used by tools such as chip-based credit cards
and [highly secure 2-factor authentication](https://answers.uillinois.edu/illinois/72159).

## Logging in with another site

If you go to a site that tells you you can log in with another site,
what happens?

1. The <dfn>service provider</dfn> site (the one you are visiting)\
    sends you a list of <dfn>identity providers</dfn> (ones you may have and account with) that it trusts.

2. You
    a. Pick an identity provider from the list
    b. Log in to that provider however you usually do
    c. Ask the provider to sign a certificate of your identity
    d. Send that certificate to the service provider

There are more complicated protocols
that let the service provider to ask the identity provider more questions about you,
but the main parts of the flow are the same.

:::example
Suppose I visit Slack,
which  has me log in with Google,
and use a security key as my 2-factor authentication with Google.

1. I visit https://slack.com
    a. My computer sends a list of ciphers it knows
    b. The server picks one
    c. The server sends a certificate of its public key
    d. The server sends a signed half key
    e. My computer sends my half of the key
    f. We both switch to a symmetric cipher and send a hash of the entire exchange so far

    I now know I'm talking to Slack and not someone else,
    and can talk with them securely.

2. The site asks me to pick a login provider from a list it supports

3. I pick Google and am redirected to their login page.

    This is HTTPS, so I repeat step 1 with this page.

    I now know I'm talking to Google and not someone else,
    and can talk with them securely.

4.  To log in

    a. I send my username and password
    b. They look up my salt in their list of users
    c. They add my salt and their pepper to my password and hash it
    d. If the hashes match, they ask me to dual-authenticate
    e. I enter my security key into my computer
    f. They send me a random value
    g. My security key signs it with its private key
    h. They check the signature with the public key of the security key, which they have on file

    Google now knows who I am.

5. Google gives me a certificate of my identity to share with Slack

6. I send the certificate with Slack

    Slack now knows who I am.

:::
