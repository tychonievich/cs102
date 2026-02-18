---
title: Intractable problems
...

Computer science includes the study of what properties algorithms that solve specific problems must have.
Among that study are proofs that some problems are probably intractable.
It's not known if *any* problem is intractable,
but if any are then these problems, which we call <dfn>provably hard</dfn>, are intractable.

---------

Recall that an algorithm is intractable
if it has exponential runtime;
that is, the time it takes to create its output
is proportional to $2^n$, where $n$ is the size of its input.

Also recall that Moore's Law observes that computers have thus far
doubled in complexity every 2 years.
That's also exponential growth: $2^{y/2}$.
Notably, Moore's law is an observation, not a prediction or guarantee for the future
and Moore's law is not about speed, it's about the number of transistors on a chip.

Even ignoring all the caveats of Moore's law, it at best means that every two years
we can solve a problem 1 larger than we could before.
If in 1976 we could break 40-bit passwords by guessing every password,
then 50 years later in 2026 we should be able to break 65-bit passwords, having added 1 bit every 2 years.

Better hardware does not make intractable problems become tractable.
That would require better algorithms.

# An intuition about intractable problems

Most intractable problems share three properties:

The number of possible answers is exponential in the input size.
:   This usually means some version of "all combinations of" or "all orders of."
    
    <div class="example">

    A password could be any combination of letters, so guessing passwords might be intractable.
    
    A route through every city on a map could be any order of cities visited, so finding such a specific such route might be intractable.

    </div>

It's not obvious how to rule out most answers as incorrect.
:   There are a variety of ways that some answers could be ruled out, so it's not always clear whether one of them will work or not.
    
    <div class="example">

    The shortest route that visits every city might include almost any road; it's hard to rule any of them out.
    
    The shortest route that connects two cities likely goes more-or-less along the line between them; if we can make that intuition more precise, we might be able to rule most routes out.

    </div>
   
The goal is one specific answer, not one of many or something "close enough".
:   <div class="example">

    Finding *a* route that visits every city is easy.
    
    Finding a quite-long or quite-short route that visits every city is fairly easy.
    
    Finding the longest or the shortest route that visits every city is hard.

    </div>

# Mathematical definitions of "hard"

In CS, there are a set of related mathematical[^CSMath] theorems and definitions
that help define what we mean when we say that a given problem is hard.

[^CSMath]:
    Computers are named after the fact that they can compute, so much of what they do is arguably mathematical in nature,
    and the kinds of math you've learned in math classes are useful for some computing applicaitons.
    
    The math that analyzes computers themselves
    belongs to a few specific branch of mathematics (notably discrete mathematics and combinatorics)
    which are traditionally not taught very early in other fields,
    nor are they widely used outside of computing.
    This can make CS math look unfamiliar even to people with otherwise-strong math backgrounds.
    
Before reviewing that definition, let's tidy up a few other terms:

Exponential runtime
:   This is a property of a given **algorithm**,
    and means that making the input 1 item longer
    multiplies the time the algorithm takes to complete by a constant factor.
    
    We also write this as $O(2^n)$.

Intractable
:   This is a property of a given **problem**,
    and means that all algorithms (that we know of) to solve the problem have exponential runtime.

Computer science has not (yet) found a way to prove that any problem is intractable,
but it has found a way to prove that if any problems are intractable then certain specific problems are.

That idea is strange enough to be worth restating in a different way.

It could be that nothing is intractable;
than any problem that can be solved with an exponential-time algorithm
can also be solved by a faster algorithm.

Or it could be that some things are intractable;
that some problems cannot be solved except with exponential-time algorithms.

We don't know which of those two things is the case,
but if the second one is then we do know specific problems that are intractable.

<details class="example"><summary>Other "if anything, this thing" scenarios</summary>

The uncertainty of the existence of intractability,
coupled with the confidence that if it exists then specific problems are intractable,
seems unusual in a mathematical sense but is fairly commonly expressed in day-to-day life.
Some examples from the instructor's personal life:

I was once told "I know you don't like cake, but if you'll ever like any cake then you'll like this cake."

My church had a door we'd never seen opened; a friend told me "if Pat can't open it, no one can."

A teacher once posed a complicated problem and told me and my fellow students "If you can solve this problem, you can do everything in the course and I'll give you an A now."

We can argue if any of those statements was actually true,
but all had the same kind of dichotomy:
either nothing has a property (being likeable/openable/unsolvable), or this specific thing has that property.

</details>

----

To show a specific problem is intractable (if there are any intractable problems), we need several tools.

We define a **reduction** from problem *A* to problem *B* to be an algorithm that solves *A* using "solve *B*" as one of the operations it uses.

:::example
The following algorithm reduces "find $x+y$" to the problem of counting.

1. REPEAT UNTIL $x = 0$:
    a. *count* $y$ up one step
    b. *count* $x$ down one step
2. RETURN $y$
:::

We define **P** to be the set of all problems that have tractable algorithms to solve them.
Showing that some problem is part of this set can be done by showing a less-than-exponential-time algorithm to solve it.

We assume, but don't know for sure, that there are decidable problems that are not in **P**.

We define **NP** to be the set of all problems
where there's a tractable answer for checking if a candidate solution is in fact a solution.
Showing that some problem is part of this set can be done by showing a less-than-exponential-time algorithm to check candidate answers.

There are problems (like "guess my password") that are clearly in **NP**
(given a candidate password, I can check if it's right by typing it into your login screen)
but that we don't think are in **P** (we don't think guessing passwords can be done efficiently).

A surprising but important theorem called the <dfn>Cook-Levin Theorem</dfn>
shows that there are some special problems in **NP**
to which *every other* problem in **NP** reduces.
In other words, these problems, called <dfn>NP complete</dfn>,
are "as hard as" every other problem in **NP**.

An example of such an NP-complete problem is

> Input
> :   A program $p$ implementing an algorithm in **P**.
>
>     A candidate input $s$ to that algorithm.
>
> Output
> :   An input to $p$ the same size as $s$ that produces the answer "0", if such an input exists.

That special problem is in **NP**
because checking if a output is correct is as simple as running the program on that input.
And any other problem in **NP** can be solved by giving this problem the answer-checker
of the other problem as its input.

Surprisingly, that example is not unique or even very special;
there are *many* problems in **NP** that every other problem in **NP** can be reduced to.

If we show that all of **NP** can be reduced to a given problem
but don't show that the problem in question is itself in **NP**
then we call the problem <dfn>NP hard</dfn>.
Every NP-complete problem is also NP-hard.

----

All known algorithms for solving NP-complete problems
run in exponential time,
and are thus seen as intractable.

If a less-than-exponential-time algorithm is ever found for any NP-complete problem,
then that algorithm can be used to solve every other problem in **NP**
in less-than-exponential time
and none of those problems will turn out to be intractable,
meaning they're all in **P** and thus **P** = **NP**.
So far, we have no evidence that **P** = **NP**
and it is widely assumed that **P** ≠ **NP**,
but we don't have a proof of that.

There's some additional theorems that show that if problems in **NP** are tractable
than many problems that seem harder than **NP** are also not tractable.

:::aside
Would discovering that **P** = **NP** be good?

Yes, it would be amazing! Problems that seem to hard to solve today would suddenly become solvable and everything would become easier, more efficient, and better!

No, it would be terrible! Nothing would be hard, not even breaking passwords or impersonating others and reading secrete messages. Privacy would vanish, authentication would become impossible, online shopping and digital banking and the stock market and just about the entire global financial system would collapse. Phones wouldn't be able to rout messages to the right people, all subscription services would fail, and we'd be forced back to a pre-digital age, with widespread panic and general mayhem during the transition.
:::
