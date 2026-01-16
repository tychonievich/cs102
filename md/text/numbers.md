---
title: 1s and 0s (and so on)
...

You've likely heard something like

> In a computer, everything is just 0s and 1s.

That's true... for a given definition of true.
This page tries to explore this idea in more detail.

# "Ordinary" numbers revisited

As a child, you learned a way of handling numbers
that a worldwide standard.
Formally, that system of numbers is called "base-ten place-value numbers"
or sometimes simply "decimal numbers."^[You may also have heard "decimal number" being used to mean "noninteger numbers represented with a decimal point, like 3.14". That's *not* what we mean by "decimal" on this page: we mean "using the decimal digits 0 through 9".]

Base-ten place-value numbers are not what most humans used for most of history,
nor are they the most optimal or most sensible possible number system.
They're pretty good for many things,
and they make sense to you because you've used them so much,
and there is *immense* value in everyone using the same system:
after all, the main purpose of numbers is to communicate values,
and if we switched to a different system then communicating with older documents would become challenging.

That said, base-ten place-value numbers
are not a good pick for building computing machines.
Such machines can be built,
but they require more machine and more power for the same level of performance
as machines built with a different number system,
so we generally don't build machines that way.

How do base-ten place-value numbers work?

## Ten symbols

We pick a set of symbols with an arbitrary integral meaning for each.
    
For example, the symbol `3` means three things; if we're counting 🧡s, `3` means 🧡🧡🧡.

These meanings need to be consecutive, and we need one that means zero.

The specific symbols we use are:

| Symbol | Number of 🧡s |
|:-:|:-:|
| 0 | |
| 1 | 🧡 |
| 2 | 🧡🧡 |
| 3 | 🧡🧡🧡 |
| 4 | 🧡🧡🧡🧡 |
| 5 | 🧡🧡🧡🧡🧡 |
| 6 | 🧡🧡🧡🧡🧡🧡 |
| 7 | 🧡🧡🧡🧡🧡🧡🧡 |
| 8 | 🧡🧡🧡🧡🧡🧡🧡🧡 |
| 9 | 🧡🧡🧡🧡🧡🧡🧡🧡🧡 |

There are ten symbols in this list,
which is why we call them "base-ten numbers."

## In order

We arrange several of these symbols in a specific order.
One end of the ordering is the "big end"
and the other is the "little end".

The specific order we use puts the little end on the right and the big end on the left^[Incidentally, the standard of little end on the right applies in both left-to-right languages like English and right-to-left languages like Arabic. From a global, multilingual perspective it's <u>big on left</u>, not <del>big first</del>.].
    
## With place-dependent meaning

We change the meaning of the symbols based on where they are in the ordering:
that is, their *value* depends on their *place* in the list of symbols,
which is why we call them "place-value numbers."

For example, in the number `121`
the first symbol `1` does not mean the same thing as the last symbol `1`,
even though they are the same symbol.

The little end symbol has the meaning we gave above.

Each other symbol's value
is ten times the value it would have if it were one place closer to the little end:
ten, again, because these are base-ten numbers.

Thus, to figure out what `121` 🧡s means:

- The low-end symbol is `1`, which means 🧡

- The next symbol is `2`, which normally means 🧡🧡 but in this place means ten times that:
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡

- The next symbol is `1`, which normally means 🧡
  but in this place means ten times ten times that:
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡

- Adding those together gets the full meaning:
  🧡
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡
  🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡

## Combined in mathematical notation

The meaning of symbol $s$
in a position $k$ symbols to the left of the right end of the number
is $s \times \text{ten}^k$.

:::example
In the number
2026
the meaning of the digits is:

- The big-end "2" has 3 digits to its right, so it means $2\times \text{ten}^3$ or two thousand.
- The "0" has 2 digits to its right, so it means $0\times \text{ten}^2$ or zero hundred (which is just zero).
- The other "2" has 1 digit to its right, so it means $2\times \text{ten}^1$ or twenty.
- The "6" has 0 digits to its right, so it means $6\times \text{ten}^0$ or six.

The full number is thus two thousand zero hundred twenty-six.
:::

Sometimes this is conveniently written out in tabular form, so for the Fall 2025 [total student enrollment at the University of Illinois Urbana-Champaign](https://dmi.illinois.edu/stuenr/class/enrfa25.htm) of 60848 we might write:

| Place value | $10^4$ | $10^3$ | $10^2$ | $10^1$ | $10^0$ |
|--------|:-:|:-:|:-:|:-:|:-:|
| Number | 6 | 0 | 8 | 4 | 8 |

## Grouping symbols

While place value numbers are very useful,
far superior to early number systems from the perspective of doing arithmetic,
they can get unwieldy if they get too long.
For example, for a fraction of a second near the beginning of 2026 the [US national debt](https://www.usdebtclock.org/) was 38558175645385.
That number has so many digits we get lost in the middle and have trouble even telling its order of magnitude.

A tool for helping people understand such numbers
is to group digits in some predictable spacing;
in English it's common to group by 3 digits,
giving us the more-understandable 38,558,175,645,385 instead.

Grouped digits can also be considered as if the groupings were themselves individual symbols.
There are exactly one thousand possible groupings of three base-ten digits,
which are adjacent and include a zero (`000`),
which means we can use the same place-value logic on the resulting base-one-thousand numbers as we did on base-ten numbers.
For example,
in this form the debt becomes

| Place value | $1000^4$ | $1000^3$ | $1000^2$ | $1000^1$ | $1000^0$ |
|--------|:-:|:-:|:-:|:-:|:-:|
| Number | 38 | 558 | 175 | 645 | 385 |

# Bases for computers

It is common for digital computers to use two different place-value number systems,
with two more used by programmers,
for four total number systems!

These are:

- Base 2: Easiest to build into hardware.
- Base 256: A digit grouping of base 2 used for larger data.
- Base 16: A digit grouping of base 2 that programmers find easier to read.
- Base 10: Most familiar to most programmers.

## Easiest base for hardware: base two

The most fundamental operation digital computers engage in
is arithmetic on numbers.
How they do this is beyond the scope of this course,
but we can get the right intuition with a hand-wavy discussion.

:::example
Suppose we perform arithmetic on a pair of multi-digit numbers
by building a table of all single-digit results
and chain tables together with one for each digit.
That's not exactly how digital computing machines are built,
but its also not that far off.

Let's see how big a machine like that would need to be
to handle arithmetic of numbers up to a billion.

In base 10:
each table has 100 entries (10×10 = 100)
and we need 9 of them (9 base-10 digits gets us up to 999,999,999, which is nearly a billion)
for around a size-900 machine.

In base 5:
each table has 25 entries (5×5 = 25)
and we need 13 of them (15 base-5 digits gets us up to 1,220,703,124, which is over a billion)
for around a size-325 machine.

In base 2:
each table has 4 entries (2×2 = 4)
and we need 30 of them (30 base-2 digits gets us up to 1,073,741,823, which is over a billion)
for around a size-120 machine.

This suggests that if we built both a base-two machine and a base-ten machine with the same power,
the base-ten machine would be over seven times larger and more expensive.
Why build a big, expensive machine when a small, cheap one is just as powerful?
:::

While the exact numbers in the example above are not precise,
the overall pattern holds:
smaller bases lead to smaller, more efficient, less expensive machines,
with base 2 being the most efficient base of all.^[Base two is also more efficient for humans: no need to learn big multiplication tables or try several guesses per digit during long division: each step is simple and straightforward with no more than 4 (and usually just 2) choices at each step. That said, you should still teach your children base ten, not because it's better but because it's common. It's more useful to know what other people know than to know a better tool that you can't use to communicate with most people.]

Let's work through base-two place-value numbers:

We need two symbols

| Symbol | Number of 🧡s |
|:-:|:-:|
| 0 | |
| 1 | 🧡 |

Places increase by a factor of two instead of ten as they move to the left

| Place value | $2^6$ | $2^5$ | $2^4$ | $2^3$ | $2^2$ | $2^1$ | $2^0$ |
|--------|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Number | 1 | 1 | 0 | 0 | 1 | 1 | 0 |

Thus 1100110 in base two means the same thing as 102 in base ten: 
$$\begin{array}{rl}
1100110\text{ in base two}=&1 \times 2^6 + 1 \times 2^5 + 0 \times 2^4 + 0 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 0 \times 2^0\\
=& 2^6 + 2^5 + 2^2 + 2^1\\
=& 64 + 32 + 4 + 2\\
=& 102 \text{ in base 10}
\end{array}$$

The implementation efficiency of base two is the origin of the statement
"in a computer, everything is 0s and 1s."
It's a similar kind of statement to
"on a book, everything is white paper and black ink":
it's not false, exactly, but also not super insightful.

The word <dfn>binary</dfn> means "related to two"
and is used in computing both as a shorthand label for
base-two place-value numbers,
and for data stored in a computer-friendly format,
and for data that makes sense to a computer program but not to most humans.
Binary is also used outside of computing to modify other words to emphasize "two",
such as a "binary decision" (a choice between one of two things with no middle-ground).

A single base-two digit is called a <dfn>bit</dfn>,
a portmanteau of "**bi**nary dig**it**".

## Digit grouping for bigger data: base 256

One bit of data doesn't tell us very much;
almost any interesting problem a computer might be asked to do
needs multi-bit inputs and outputs.
Early in computing it was decided to group bits together for most purposes (other than actually doing computation)
into large enough groups to be "useful".

And what did useful mean?

The primarily British and US engineers working on early computers
decided to have one digit be big enough to represent one action of a mechanical typewriter:
type a letter, number, punctuation mark, advance or back up the print head, and so on.
They found about 100 things to do, rounded up to have room for later additions,
and chose 256,
which is a grouping of 8 bits.
They named each such 8-bit grouping a "byte";
thus a <dfn>byte</dfn> is eight bits,
a number between 0 and 255,
a digit in base-256 place-value numbers,
or something else (such as an action on an English typewriter) represented by such a number.^[In some technical documents, the word "octet" is used instead of "byte" because in early computing history not all hardware used 8-bit bytes so "octet" (from the Greek word for eight) is seen as more precise.]

Bytes aren't just a convenient way of writing:
they're built into almost all hardware.
The inner workings of one piece of modern computers
(the processor) works on the bits of base-2 numbers;
everything else (memory, disks, displays, networks, etc.)
works on the bytes of base-256 numbers.

## Easier to read: base 16

Bits are useful for computation,
but it's easy to get lost reading binary numbers;
even smallish numbers like 58
are long enough binary numbers (111010)
that it's easy to mistake them for other numbers (such as 1111010 = 122).

Bytes are useful for data storage,
but 256 is too many values to try to learn a symbol for each one
and 8 is too many bits apart for separators like commas to be readily readable.

The compromise used by computing professionals
is base 16.
From a bits perspective, that's 4 bits, so base 16 is just a digit grouping of base 2.
From a bytes perspective, that's half a byte, so base 256 is just a digit grouping of base 16.
And learning 16 symbols is much more doable.

We call base-sixteen <dfn>hexadecimal</dfn> or simply <abbr title="hexadecimal">hex</abbr>.

The hexadecimal symbols that are used are the ten base-ten digits
followed by the English letters `A` through `F` (in either upper or lower case).

| Hex Symbol | Number of 🧡s | Binary | Decimal |
|:-:|:-:|--:|--:|
| 0 | | 0 | 0 |
| 1 | 🧡 | 1 | 1 |
| 2 | 🧡🧡 | 10 | 2 |
| 3 | 🧡🧡🧡 | 11 | 3 |
| 4 | 🧡🧡🧡🧡 | 100 | 4 | 
| 5 | 🧡🧡🧡🧡🧡 | 101 | 5 | 
| 6 | 🧡🧡🧡🧡🧡🧡 | 110 | 6 | 
| 7 | 🧡🧡🧡🧡🧡🧡🧡 | 111 | 7 |
| 8 | 🧡🧡🧡🧡🧡🧡🧡🧡 | 1000 | 8 | 
| 9 | 🧡🧡🧡🧡🧡🧡🧡🧡🧡 | 1001 | 9 | 
| A or a | 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 | 1010 | 10 |
| B or b | 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 | 1011 | 11 |
| C or c | 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 | 1100 | 12 |
| D or d | 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 | 1101 | 13 |
| E or e | 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 | 1110 | 14 |
| F or f | 🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡🧡 | 1111 | 15 |

Hex numbers make it into end user experiences
in some unexpected places,
especially when the computer is exposing something like byes,
such as internal color codes or a computer's unique identifier on a network.

:::note
Number base prefixes

When you see a number like 101,
how do you know if its in base two (meaning five),
base ten (meaning one hundred one),
or base sixteen (meaning two hundred fifty-seven)?

The most common way for computer programming languages to distinguish these is with a prefix on the number:
`0x` for hexadecimal, `0b` for binary, and no prefix for decimal.
Thus, you might see something like
0x101 = 257 = 0b100000001.

Also, programmers don't use `×` for multiplication,
they use `*` instead,
which helps `0x101` not look like the multiplication of 0 and 101.
:::

<details class="aside"><summary>Hex-based jokes</summary>

In various places inside a computer we find 4-byte values
that will be represented to programmers debugging their code as 8-hex-digit hexadecimal numbers.
Because there are several English letters possible, these hexadecimal numbers can spell things out;
it's not uncommon to see numbers like
DEAD2BAD and BADF00D and 0FF1CE
inside computing code,
often as part of error reporting or as a development team's inside joke that made it past quality assurance and into the real world.
See also [Wikipedia's entry on Hexspeak](https://en.wikipedia.org/wiki/Hexspeak).

</details>
