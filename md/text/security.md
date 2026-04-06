---
title: Security in computing
...

We often hear about cybersecurity, digital security, insecure software, security breaches, and the like. What does this mean?

A <dfn>security incident</dfn> occurs when someone does something that they were not intended to be able to do.
Because this is about intended scope, sometimes people disagree about if something was an incident or not.
An <dfn>exploit</dfn> is a technique used to create security incidents.
A <dfn>vulnerability</dfn> is the gap in the software and its associated systems that the exploit used.

There are various ways that vulnerabilities get reported.
For example, the US Government maintains a list of [over 300,000 vulnerabilities](https://nvd.nist.gov/vuln/search#/nvd/home?resultType=records).


# Run arbitrary code

The **most serious** vulnerabilities allow attackers to run arbitrary code on your computer.
By "attacker" we mean here anyone who was not intentionally given an account on the computer by the owner of the computer.

There are many ways that these most serious vulnerabilities might occur,
but a broad over-generalization is

1. If the code accepts input of any kind (including Internet traffic) from others,
2. And an attacker has enough time and motivation,
3. Then they can find some bug in the program that can become this kind of vulnerability.

By "enough time" we generally mean months or years.
Typically these vulnerabilities are found by some researcher finding a class of vulnerabilities,
then some attacker searching through known vulnerability classes to see if any are present in the software.
This is tedious, dull work (though less so with LLMs).
Most hacking is less like lockpicking than it is like having a keyring with a million keys on it and trying each one until one works.

Bugs become vulnerabilities because a bug represents a pattern of use that the programmer did not consider.
If they didn't think to handle some case, then something will still happen in that case anyway
and there may be some specific inputs that will make something the attacker wants to have happen happen.

The most important protection against others attacking your system is to (a) only use actively-maintained software and (b) update that software often.
If you don't, someone will find some exploit in the old version of the upstream libraries of the software
and use the not-updated nature of your copy of the software to take over your computer.

:::important
Always apply software updates.

Never use unmaintained software while online.
:::

Some tools spend a great deal of effort preventing the possibility of arbitrary-code exploits,
generally by preventing certain broad classes of possible program behavior.
The most common example is code that runs inside a browser without using any browser add-ons or extensions.
Even malicious webpages are limited in the severity of their attacks (as long as the browser itself is up-to-date).


# Human vulnerabilities

The **most common** exploits take advantage of a vulnerability that almost all software shares: human users.

There are *many* ways that attackers can get humans to give them access to software they should not have access to,
but a few are so common that everyone should know them and know how to avoid them.

## Password reuse

When you make an account on any site,
they now have the username and password you used.
And they can use that anywhere and in any way they want.
Including logging in as you on other sites where you used the same credentials.

:::important
Never use the same password on multiple sites.
:::

You should obviously not use the same password for an important site (like your email)
and an unimportant site (like a game).
But you should also not use the same password on two different important sites.
Developers of these sites may have access to your account information,
and while they will be monitored for what they do with that internally,
they will generally not be monitored if they chose to use your email credentials to try to log into your banking site or the like.

Two-factor authentication helps mitigate the harm of password reuse,
but only in part; there are attacks were
when you log into one site they use the same credentials to log into another site as if they were you,
you accept that sites push notification thinking it was for the other site, and then they are in.
There are much more secure types of two-factor authentication than push notifications that bypass this problem,
but even with those it's best to not re-use passwords.

A <dfn>password manager</dfn> is a tool that helps generate a unique password for each site you need to log in to.
Unless you have an amazing memory and can dozens of passwords straight in your head,
you should use a password manager.
Use one your trust,
and maybe keep your most important passwords only in your head,
but *definitely* use one for all the less-important accounts you have.

## Emotional manipulation: kindness, urgency, embarrassment



# Authentication, authorization, and permissions

# Integrity and confidentiality

