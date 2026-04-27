---
title: Quiz 3 review
...


# All homework questions

## Question 1 {.unnumbered .unlisted}

What kinds of **bugs** can be turned into security vulnerabilities?

A.  Fatal errors, where the program freezes or crashes.
B.  Logic errors, where a function runs but computes a slightly wrong result.
C.  Missing features not present in the program at all.



## Question 2 {.unnumbered .unlisted}

Which of the following is a difference between a **vulnerability** and an **exploit**?

A.  A vulnerability is a specific type of exploit.
B.  An exploit is a specific type of vulnerability.
C.  Code has exploits that attackers use to create vulnerabilities.
D.  Code has vulnerabilities that attackers use to create exploits.
E.  They are synonyms.



## Question 3 {.unnumbered .unlisted}

What's the best security advice regarding **updating software** like operating systems and applications you use?

A.  Don't update: updates used to reduce the security of old software to encourage people to buy newer devices and applications.
B.  Update after a delay: updates are sometimes buggy and waiting avoids getting a bad update.
C.  Update right away: delaying updates can open your computer to cyber attacks.



## Question 4 {.unnumbered .unlisted}

Which of the following is the most secure way to manage your **passwords**?

A.  Come up with one long and unguessable password I can't forget and use it everywhere.
B.  Have two passwords: one for important sites and another for unimportant sites.
C.  Just remember one password, the one for your email, and use "forgot your password" options for everything else.
D.  Use a password manager (either an app or a piece of paper) to keep track of a different password for each site.



## Question 5 {.unnumbered .unlisted}

Could installing a **browser extension** be a security risk?

A.  Maybe, some extensions are malicious and create holes in the browser's sandbox.
B.  No, extensions are contained by the browser's sandbox and are as safe as the browser itself is.
C.  Yes, even well intentioned extensions weaken the browser's sandbox.



## Question 6 {.unnumbered .unlisted}

Signatures use **public keys** to authenticate websites. How do we know if the public key is authentic instead of being created by an attacker?

A.  Each computer comes with the public keys for all the major websites; we trust the computer manufacturers to give us the right keys.
B.  Each website gives us a certificate telling us its public key, signed by someone else we already know.
C.  If the public key can decrypt the signature, it is authentic.
D.  The first time we visit a website it tells us its key; we remember that for all future visits.



## Question 7 {.unnumbered .unlisted}

Digital certificates have **expiration dates**. Why?

A.  To keep up with Moore's law, which makes what used to be too hard to do become doable as new hardware comes along.
B.  To keep us buying new certificates.
C.  To make ensure time-consuming attacks on certificates don't complete their work until after the certificate has expired.
D.  To protect against the possibility that quantum computers might break older certificate technology.



## Question 8 {.unnumbered .unlisted}

The **Diffie-Hellman key exchange** is used to create

A.  Blockchains
B.  Digital certificates
C.  Hashes
D.  Keys for symmetric encryption
E.  Public and private keys for making signatures
F.  Signatures



## Question 9 {.unnumbered .unlisted}

What is the difference between **authentication** and **authorization**?

A.  Authentication ensures a message hasn't been altered, authorization ensures only intended recipients receive the message.
B.  Authentication ensures only intended recipients receive the message, authorization ensures a message hasn't been altered, .
C.  Authentication tells me what you are allowed to do, authorization tells me who you are.
D.  Authentication tells me who you are, authorization tells me what you are allowed to do.



## Question 10 {.unnumbered .unlisted}

Which of the following best describes the **principle of least privilege**?

A.  Granular rights systems, where each user has only those they absolutely need, are more secure.
B.  Simpler systems with fewer roles and sets of rights are more secure.
C.  The less you have to think about your rights, the more usable the system is.
D.  The usability of a system is dominated by the least-privileged user's experience.



## Question 11 {.unnumbered .unlisted}

Which cryptography tools are used by common **blockchains** such as BitCoin and Etherium?

A.  Hashes, used to ensure old transactions are never lost.
B.  Key exchange, used to ensure blockchain users agree on they keys used.
C.  Signatures, used to ensure only coin owners can give them away.
D.  Symmetric ciphers, used to keep others from eavesdropping on private transactions.



## Question 12 {.unnumbered .unlisted}

Suppose a million users are on a blockchain and the blockchain contains 100 GB of data. How much of that data is stored by the average blockchain user?

A.  100 GB
B.  100 GB / 1 million = 100 KB
C.  100 GB / sqrt(1 million) = 100 MB
D.  A fixed, constant amount; only a few users have data that scales with blockchain size



## Question 13 {.unnumbered .unlisted}

IP (Internet Protocol) is used to route messages between computers. Which of the following are true of IP?

A.  It connects computers with the help of other intermediate computers.
B.  It identifies computers by their URL hostname (for example, "illinois.edu").
C.  It reliably delivers messages if possible, or gives an error message if not possible.



## Question 14 {.unnumbered .unlisted}

What best describes the security of IP traffic?

A.  Both who you are communicating with and what you are saying to them can be encrypted if you both agree to do so.
B.  Both who you are communicating with and what you are saying to them is always encrypted.
C.  Neither Who you are communicating nor what you are saying to them can be encrypted.
D.  Who you are communicating with cannot be encrypted, but what you are saying to them can be encrypted if you both agree to do so.
E.  Who you are communicating with cannot be encrypted, but what you are saying to them is always encrypted.



## Question 15 {.unnumbered .unlisted}

Which best describes the computer you are using to access this homework right now?

A.  It is not part of the internet, but it is "on" the internet by being connected to a computer that is.
B.  It is part of the internet, but because it's only attached to one other computer no messages are routed through it.
C.  It is part of the internet, participating routing messages between other computers.



## Question 16 {.unnumbered .unlisted}

DNS is primarily used to

A.  Add security (authentication, integrity, and/or confidentiality) to internet communication.
B.  Connect two computers with the help of other intermediate computers.
C.  Convert URLs to IP addresses.
D.  Deal with connection failures.



## Question 17 {.unnumbered .unlisted}

Suppose I want to have the URL "https://info102.illinois.edu" be created and used for this course's webpage.
Who should I ask to do that?

A.  EDUCAUSE, the nonprofit association that controls .edu URLs.
B.  I ask the University; if they agree they then ask EDUCAUSE.
C.  I ask the University; if they agree they then ask IANA.
D.  IANA, the international agency that controls IP addresses.
E.  The University of Illinois Urbana-Champaign, the organization that owns the illinois.edu site.



## Question 18 {.unnumbered .unlisted}

Which of the following could a hacker do if they owned a computer that helps route internet traffic?

This is one of two related questions that differ in what level of Internet access the attacker has.

A.  Look for an exploit vulnerabilities in other computers.
B.  Prevent access to certain websites by failing to deliver those requests.
C.  Read the contents of email between different email clients.
D.  Read the passwords users type into webpages.



## Question 19 {.unnumbered .unlisted}

Which of the following could a hacker do if they connect through an internet service provider?

This is one of two related questions that differ in what level of Internet access the attacker has.

A.  Look for an exploit vulnerabilities in other computers.
B.  Prevent access to certain websites by failing to deliver those requests.
C.  Read the contents of email between different email clients.
D.  Read the passwords users type into webpages.



## Question 20 {.unnumbered .unlisted}

TCP adds reliability on top of unreliable communication by using the digital equivalent of which two of the following human communication patterns?

A.  Adding page numbers to a stack of printed pages to help put them in order if they are dropped.
B.  Asking others to repeat themselves if what they said was hard to hear or nonsensical.
C.  Repeating yourself if the person you are talking to doesn't respond.
D.  Saying the same thing in multiple ways to ensure it is understood.
E.  Using abbreviations like "it" to avoid repeating previously-stated items.



## Question 21 {.unnumbered .unlisted}

When a program "lives in the cloud" or is "cloud native", that means

A.  It's still an idea, not yet realized as a concrete application.
B.  Its owners rent time on computers to run it instead of running it themselves.
C.  Its webpage doesn't have a static URL or IP address.
D.  Users access it through the Internet.



## Question 22 {.unnumbered .unlisted}

It is common for 1 hour of compute time using serverless computing
to cost as much as 10 hours of compute time and wear-and-tear on servers you own yourself.
Why is serverless computing still attractive?

A.  Many apps are used only sporadically; serverless models avoid paying for down time.
B.  Serverless computing can do more in 1 hour than commodity servers could do in 10 hours.
C.  Servers are bad for the environment; it's worth paying extra to run without a server.
D.  Servers only work for online programs; programs that run locally need to be run in a serverless way.



## Question 23 {.unnumbered .unlisted}

Which of the following is the primary reason why
**computer chip creation machines**
use a computer?

A.  Computers can be cheaper than building customized analog hardware.
B.  Computers can be communicate over the Internet or with wireless signals.
C.  Computers can be configured to handle many different tasks with one device.
D.  Computers can integrate multiple sensors to implement more involved decisions.
E.  Computers can solve math that is hard to build as an analog device.



## Question 24 {.unnumbered .unlisted}

Which of the following is the primary reason why
**modern car tires**
use a computer?

A.  Computers can be cheaper than building customized analog hardware.
B.  Computers can be communicate over the Internet or with wireless signals.
C.  Computers can be configured to handle many different tasks with one device.
D.  Computers can integrate multiple sensors to implement more involved decisions.
E.  Computers can solve math that is hard to build as an analog device.



## Question 25 {.unnumbered .unlisted}

Which of the following is the primary reason why
**microwave ovens**
use a computer?

A.  Computers can be cheaper than building customized analog hardware.
B.  Computers can be communicate over the Internet or with wireless signals.
C.  Computers can be configured to handle many different tasks with one device.
D.  Computers can integrate multiple sensors to implement more involved decisions.
E.  Computers can solve math that is hard to build as an analog device.



## Question 26 {.unnumbered .unlisted}

If my devices uses an **ASIC**, which of the four defining properties of what we usually mean by "computer" does it have?

A.  Computer
B.  Digital
C.  General-purpose
D.  Programmable



## Question 27 {.unnumbered .unlisted}

Which two of the following are generally implied by describing a household device as "smart"?

A.  Contains multiple actuators
B.  Contains multiple sensors
C.  Has a screen
D.  Has buttons or keys for direct input
E.  Is connected to the Internet
F.  Powers itself off when not in use
G.  Rechargeable
H.  Uses AI



## Question 28 {.unnumbered .unlisted}

If you have a smart thermostat or other smart household appliance, it probably

A.  has been hacked, and will be used to harm you at some point in the future.
B.  has been hacked, but cybercriminals are using it to harm others not you.
C.  is safe from cybercriminals because it has few functions to be hacked.
D.  is safe from cybercriminals because it isn't worth a hacker taking it over.



## Question 29 {.unnumbered .unlisted}

The first Roomba from iRobot is often cited as the first commercially-viable household robot.
Its success was in part due to

A.  Advanced sensors that helped it correctly tell furniture, walls, and feet apart.
B.  Advanced vision algorithms that helped it create a 3D map of the rooms it was cleaning.
C.  Planned motion that systemically cleaned everywhere efficiently.
D.  Randomized motion that cleaned everywhere eventually.



## Question 30 {.unnumbered .unlisted}

Given what we shared about self-driving cars, which of the following seems likely to be the hardest for them to do?

A.  Avoid obstacles in the road
B.  Detour around road closures
C.  Drive in snow, rain, and other slippery conditions
D.  Follow directions of officers directing traffic by hand
E.  Navigate through narrow gaps and into tight spaces
F.  Parallel park
G.  Read road signs, traffic lights, and the like


# All Lab Questions

## Question 31 {.unnumbered .unlisted}

Define Authentication


## Question 32 {.unnumbered .unlisted}

Define Confidentiality


## Question 33 {.unnumbered .unlisted}

Define Integrity


## Question 34 {.unnumbered .unlisted}

Define Authorization


## Question 35 {.unnumbered .unlisted}

Define the principle of least privilege


## Question 36 {.unnumbered .unlisted}

Why is it less secure to install a browser extension that changes how the window border looks than it is to visit a webpage that is running complicated code that you don’t understand or trust?


## Question 37 {.unnumbered .unlisted}

What are the two most important tips for using computers safely?


## Question 38 {.unnumbered .unlisted}

What is the primary purpose of IP?


## Question 39 {.unnumbered .unlisted}

What is the primary purpose of DNS?


## Question 40 {.unnumbered .unlisted}

What is the primary purpose of TCP?


## Question 41 {.unnumbered .unlisted}

Your computer is online, but it is not part of the Internet. Which of the following operations can it do?

- [ ] Send data to other machines
- [ ] Send DNS requests
- [ ] Receive data from other machines
- [ ] Respond to DNS requests sent by others
- [ ] Route data between two other machines
- [ ] Use TCP


## Question 42 {.unnumbered .unlisted}

Recently U of I announced (https://massmail.illinois.edu/massmail/1486908145.html) a plan to find a “cloud‑based platform” to handle student registration. What does “cloud-based” mean?


## Question 43 {.unnumbered .unlisted}

A robot was defined in lecture as having three components and in lab as what those three components do. Give either list here:

- \_\_\_\_\_\_\_\_\_\_\_\_
- \_\_\_\_\_\_\_\_\_\_\_\_
- \_\_\_\_\_\_\_\_\_\_\_\_
