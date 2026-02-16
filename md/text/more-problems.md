---
title: There are more problems than there are programs
...

There are more problems than there are programs. But there are infinitely many of both, which means to explain how there can be more of one than the other we have to explore a few types of infinity.

:::note
Most people find almost everything about infinities confusing or counter-intuitive.
It feels wrong or offputing because we have no lived experience with infinity
and many things we know about finite things do not apply to infinite things.

I recommend trying to suspend your disbelief while reading this.
Instead of getting caught up on things being strange and unreal-feeling,
just see if each step follows from the one before.
:::

One set, $A$ is no larger than another set, $B$,
if we can show to map each element of $A$ to a different element of $B$.

If $A$ is no larger than $B$, and $B$ is no larger than $A$, then $A$ and $B$ have the same size^[For those familiar with different notions of set size, this kind of size is called "cardinality."].

Many infinite sets are the same size,
even when one set clearly lacks elements the other contains.

:::example
The set of all integers is the same size as the set of positive integers.
We show this with two mappings:

Positive integers to Integers:
:   $x \mapsto x$
    
    This is intuitive:  no work is needed to map positive integers to integers
    because positive integers are integers already.
    It tells us the set of positive integers is no larger than the set of integers.

Integers to Positive integers:
:   $x \mapsto \begin{cases}2x&\text{if }x > 0\\1-2x&\text{if }x\le 0\end{cases}$

    This is less intuitive, but does map each integer to a unique positive integer:
    positive integers are mapped to even positive integers
    and negative integers to odd positive integers,
    with 0 mapped to 1.
    
    It tells us the set of all integers is no larger than the set of positive integers.
:::

:::example
The set of pairs of non-negative integers is the same size as the set of non-negative integers.
We show this with two mappings:

Non-negative integers to Pairs of non-negative integers
:   $x \mapsto (x, 0)$

    We picked $0$ arbitrarily; any other number would still suffice to show this direction of mapping.

Pairs of non-negative integers to Non-negative integers
:   $(x, y) \mapsto 2^x 3^y$
    
    This uses the fundamental theorem of arithmetic (integer has a unique prime factorization)
    to ensure no two inputs give the same output.
:::


Despite many infinite sets being the same size,
even ones that intuitive seem like they shouldn't be,
there are sets that are different sizes.
We can't prove that just by failing to provide a mapping;
we have to prove that *any* mapping you might come up with
*must* fail to account for some values.

:::example
There are more positive real numbers than positive integers,
because any mapping from real number to positive integers without duplicates
must omit some real numbers.

To show this, consider an arbitrary mapping from real numbers to integers without duplicates.
The decimal representation of an example real number that this mapping fails to include can be constructed as follows:
the digit in this example number's the $10^{-k}$ place
is 5 minus the digit in the $10^{-k}$ place of the real number that maps to $k$.
(if none map to $k$ it doesn't matter what digit we pick).
We know this number was omitted from the mapping because it differs in at least one digit
from each number that was mapped.
:::

:::example
There are more functions from one integer to another
than there are integers.

Consider an arbitrary mapping from functions to integers.
Let's call the function that maps to integer $k$ "$f_k$".
An example function that is not covered by this mapping
is $g(x) = \begin{cases}f_x(x) + 1&\text{if }f_x\text{ is in the mapping}\\0&\text{otherwise}\end{cases}$.
We know this number was omitted from the mapping because it differs in at least one input-output pair
from each function that was mapped.
:::


There are the same number of programs as there are integers, as is shown by the following two mappings:

Programs to integers
:   $x \mapsto$ the binary integer interpretation of the bytes of program $x$ compiled to machine instructions.

Integers to programs
:   $x \mapsto$ a program that takes no input and always produces the integer $x$ as its output.


However, there are more problems than there are integers
because "compute a function with an integer input and integer output"
is one type of problems,
and as noted in the last example above there are more such functions than there are integers.

Because there are more problems than there are programs,
there must be problems that no program can solve.

