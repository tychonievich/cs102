---
title: Abstraction
...

Abstraction is an essential element of both software and hardware design.
Computers with billions of transistors
and software with millions of code statements
are much too large for any one person to hold in their head,
so it is navigated by the use of wide-spread, hierarchical way.


# Types of abstraction

Abstraction can be achieved by <dfn>detail removal</dfn>;
in this sense, a silhouette is more abstract than a portrait
and a stick figure more abstract than a silhouette.

In programming, detail removal is primarily achieved
by naming things: instead of listing the steps needed to compute a the square root of $x$
we just say `sqrt(x)`{.c},
defining elsewhere the detailed steps involved in the `sqrt` set of actions.

 

Abstraction can also be achieved by <dfn>generalization</dfn>;
in this sense, "a human" is more abstract than "Ada Lovelace"
and "a legal entity" is more abstract than "a human."

In programming, generalization is primarily achieved
by parameterization: instead of naming square root `sqrt` and cube root `cbrt` and so on
we make one function `pow(x,y)` which computes $x^y$ for any $x$ and $y$,
including square root ($y = \frac{1}{2}$) and cube root ($y = \frac{1}{3}$).


# Abstraction barriers

