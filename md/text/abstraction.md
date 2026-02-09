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

A common way to use abstraction in computing
is to tame complexity, keeping people from needing to think about most details most of the time.
An abstraction where you can operate effectively only thinking about the abstraction
and not thinking about the details behind it is called an <dfn>abstraction barrier</dfn>.

:::example
Cars provide the driver with an abstraction barrier:
drivers can think about a pedal that speeds up, a pedal that slows down, and a wheel that steers
without thinking about engines and fuel mixtures and differentials and so on.
:::

:::example
Processors provide an abstraction barrier,
allowing programmers to think about numbers
instead of bits.
:::

:::example
Well-designed functions provide an abstraction barrier in code,
allowing programmers to think about the function as an entity
instead of the individual steps used inside it to compute a value.
:::

Most abstraction barriers are imperfect:
there are situations where the abstraction fails and thinking about what's behind them becomes important.

:::example
A car's abstraction barrier fails when (for example)
driving through pools of water, where the air-breathing nature of the engine fails.
:::

:::example
A processor's abstraction barrier files when (for example)
integers overflow their available space
or floating-point numbers fail to represent 0.1 exactly.
:::


# A Hierarchy of abstractions

Computing has become the versatile and powerful tool it is
by allowing new abstractions to be readily created
using existing abstraction as their building blocks.

When one system uses abstractions to hide that it was implemented with another system,
we call the one more-abstracted system <dfn>higher-level</dfn>
and the less-abstracted system <dfn>lower-level</dfn>.
This type of level is a fundamental property of many parts of computing
and is often mention by computing professionals
as a way of helping guide conversations and collaboration on a task.

:::example
The following are listed with the highest-level first
and lowest-level last.
Each item in the list uses abstraction to conceal the details of the level below it.

- Python, which is implemented using
- C, which compiles to
- Assembly, which hides the bit patterns of
- Machine language, which abstracts the functionality of
- Processor components, which are composed of many
- Logic gates, which are built out of
- Transistors, which depend on specific
- Semiconductor electrical and quantum effects.

:::


