---
title: Halt and other Undecideable problems
...


Computer science includes the study of what properties algorithms that solve specific problems must have.
Among that study are proofs that some problems are *impossible* to solve.
We call such problems <dfn>undecideable</dfn>.

The problems that have been shown as undecideable thus far have the following properties:

- They are general problems, trying to answer questions about very large sets of inputs.

- They accept algorithms or programs as (part of) their input.

- There is a paradox we can create by using the algorithm as (part of) its own input.

The existence of the paradox is evidence of the lack of exitence of the algorithm,
and is the core of the proof that the problem cannot be solved.

Many people find the proof structure
"if $x$ exited then it would cause a paradox, so $x$ must not exist"
to be unsatisfying or unconvincing.
We could teach you enough about proof structure for you to understand these proofs fully,
but don't want to spend the time on that in this course.
Instead, we offer two other ways of arguing that some problems cannot be solved by any algorithm:
a [proof that there are more problems than there are algorithms](more-problems.html)
and an [argument that if such an algorithm existed, it would magically solve many very hard problems](halt-proves-many-things.html).

------

Programs can invoke other programs.
This is well-established in both theory and practice:
when you turn on your computer it runs a program called an Operating System,
which you then use to select and run all the other programs you use.

Programs can take other programs as inputs.
This is well-established in both theory and practice:
it's how web browsers run programs in the browser,
how virus scanners check for viruses in programs before they run,
and how some programs become faster while they run.

We can use these two facts to show that certain kinds of programs
cannot exist, because if they did we'd have a paradox.
The most famous example of this is called "the halting problem"
which has two common variants; the simpler variant is given here.

:::example
Halting Problem

Theorem
:   We cannot create a program `halt`
    which takes another program as input
    and produces as output
    `true` if the input program always stops running after a finite amount of time
    and `false` if the input program might run forever.


Proof
:   If `halt` existed, then we could make a paradox program as follows:

    `paradox`: if `halt(paradox)` is `true`, repeat something forever; otherwise stop running now.
    
    What does `halt(paradox)` return?
    
    It can't by `true` because if it was then `paradox` would run forever, which by the definition of `halt` means `halt(paradox)` must return `false`.
    
    It can't by `false` because if it was then `paradox` would stop running, which by the definition of `halt` means `halt(paradox)` must return `true`.
:::

The halting problem probably looks kind of strange to most of you.
How does coming up with a strange paradox prove that some task is impossible?
Computer science students spend approximately two semesters
building up the understanding of all of the mathematical properties
needed to fully understand this proof,
but the end result is some tasks can't be solved.

The formal name for a problem
that does not admit an algorithmic solution
is an <dfn>undecidable</dfn> problem.

One of the most general impossibility results
is Rice's Theorem
which states that it's not just "does this program run forever" that is undecidable:
we can't make programs that answer *any* non-trivial question
about other programs.

A huge caveat in all undecidability results
is they only say that we can't solve *every* instance of a problem.
In practice, we have programs
that can implement `halt` for *most* input programs we give them,
but these programs are never complete:
there's always some program we could give them
that they have to answer "I can't tell."

