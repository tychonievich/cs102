---
title: Undecideable problems would prove much of mathematics
...

It is possible to prove that there are problems that algorithms cannot solve,
but those proofs reply on pardoxes and different sizes of infinity
and other tools that most people find difficult to accept.
This page gives a more intuitive but less formal argument for the idea that some problems are hard to solve.

Suppose I wrote a program $H$ that took as input another program $f$
and returned as output one of two things:
either an assertion that $f$ always returns after a finite amount of time,
or an example input $x$ that would make $f(x)$ run forever.

If such a program existed, it could be used to solve huge numbers of open math problems
that mathematicians have spent centuries trying to solve without success.
That power strongly suggests that we could never create $H$.
We outline a proof that $H$ cannot exist on [another page](halt.html),
but since that proof is hard for many to grasp
we give examples here that show why $H$ would be weirdly powerful if it did exist.

Many unsolved math problems are complicated to even describe,
but not all are.
The rest of this page shows how $H$, if it existed,
could be used to solve some famously hard problems in mathematics.

Collatz conjecture
:   The Collatz conjecture asks if, for any positive integer $x$,
    we would eventually reach $1$ if we repeatedly
    replace $x$ with $\begin{cases}x/2&\text{if }x\text{ is even}\\3x+1&\text{if }x\text{ is odd}\end{cases}$.
    
    To solve this using $H$, define the following $f$:
    
        f(positive integer x):
            repeat until x is 1:
                if x is odd, replace x with 3x+1
                otherwise, replace x with x/2

    Then call $H(f)$; it will either return an $x$ that never reaches $1$ under Collatz's rules
    or it will prove that there is no such $x$.


Goldbach's conjecture
:   Goldbach's conjecture asks if every even integer is the sum of two prime numbers.

    To solve this using $H$, define the following $f$:
    
        f(even integer x):
            For every integer k from 2 to x-2:
                if k is prime and x-k is also prime:
                    stop running
            If you get here, repeat doing something pointless forever
    
    Then call $H(f)$; it will either return an even $x$ that is not the sum of two prime numbers
    or it will prove that there is no such $x$.


Legendre's conjecture
:   Legendre's conjecture asks if there is always at least one prime number between $n^2$ and $(n+1)^2$.

    To solve this using $H$, define the following $f$:
    
        f(integer n):
            For every integer k from n squared to (n+1) squared:
                if k is prime:
                    stop running
            If you get here, repeat doing something pointless forever
    
    Then call $H(f)$; it will either return an $n$ that has no primes between $n^2$ and $(n+1)^2$
    or it will prove that there is no such $n$.


Are all Fermat numbers square-free?
:   A Fermat number has the form $F_n = 2^{2^n}}$.
    A square-free number cannot be divided by any integer $k>1$ twice without a remainder.
    It is not known if all Fermat numbers are square free.
    
    To solve this open problem using $H$, define the following $f$:
    
        f(positive integer n):
            Compute F_n = 2^(2^n)
            For every k between 2 and F_n
                If (F_n / k) / k is an integer,
                    repeat doing something pointless forever
    
    Then call $H(f)$; it will either return an $n$ for which $F_n$ is not square-free
    or it will prove that there is no such $n$.

