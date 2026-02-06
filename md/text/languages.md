---
title: Comparing Programming Languages
...

As explained [on the previous page](executable.html),
most software is created using programming languages
which use a mix of
specific English words,
punctuation,
and ordering to express common patterns of instruction usage.
They generally include variables, selection, repetition, and functions for describing actions,
as well as some way of describing data.
There are a very large number of programming languages;
this page looks at just a few as a way of exploring why one might chose one language over another.

# C

C Was invented by Dennis Ritchie in the 1970s
so that he could use it to build an operating system^[The operating system he built with it, Unix, is the direct ancestor of every major operating system today except Windows and has been a strong influence on Windows too.].

Some facts about C:

Compiled
:   C is designed to be compiled, meaning there is a program (a C compiler)
    that converts the C source code into machine instructions once,
    and then the machine instructions are run repeatedly.

Minimal
:   C only adds a few things that assembly and machine instructions lack:
    it allows any variable name instead of only a fixed set,
    lets you write looks and selection and functions directly instead of with a lot of "jump to line $x$"-type instructions,
    and helps you keep track of the <dfn>type</dfn> of each variable,
    meaning how the bits it stores should be interpreted.
    
    Everything else -- how to use memory, how to structure data, and so on -- is left up to the programmer.

Prevalent
:   Most medium- to large-scale programs written in the 1980s and 1990s were written in C.
    
    Still today, most embedded systems, operating systems, and device drivers
    and many performance-critical applications are written at least in part in C.

Influential
:   Many other languages are directly derived from or inspired by C.
    
    - C++ and Objective C were two of many languages that started as C with some extra features added.
    - Java and D and Rust and Go and Odin and Zig were all originally trying to rethink some mix of C and C++.
    - C# was originally trying to mimic Java.
    - JavaScript was originally trying to look like Java.
    
    If you see code that has braces^[Sometimes braces are called "curly braces" because people often have low comprehension of the difference between braces `{}`, brackets `[]`, and parentheses `()`.] in it (`{` and `}`), it's probably descended from C.

Unsafe
:   C lets the programmer do anything.
    Including things they really shouldn't do.
    There are so many things they shouldn't do, it is hard to write C that doesn't do something wrong.
    
    The lack of safety in C
    is one of the major drivers of the development and adoption of Rust,
    a broadly C-like language that is *much* safer than C.

# Java

Java was invented by James Gosling in the 1990s.
He wanted something kind of like C++
but that could create programs that would run safely on any computer.

Some facts about Java:

Compiled *and* Interpreted
:   Java is designed to be compiled, meaning there is a program (a Java compiler)
    that converts the Java source code into a much simpler language that's kind of like machine instructions.
    That simpler code is interpreted, meaning it is input into a program (the Java Virtual Machine)
    that uses a few machine instructions to do the thing that each simpler-code instruction wants to have done.
    
    This split design makes Java slower than C to run,
    but much easier to share between machines.

Memory-managed
:   C and C++ let you do almost anything you want with memory.
    Java does not: it has strict rules about what can be put in memory and how it is organized.
    Those rules allow Java to take care of tedious operations like reclaiming unused memory for the programmer
    and also prevent a wide range of errors and security vulnerabilities.

Object-oriented
:   When designing large programs, programmers have to consider how the code and data interact.
    One common way of ordering it is called "object orientation" or <abbr>OO</abbr>.
    OO was rising in popularity in the 1990s and is embedded into Java's design:
    it is hard to write non-OO code in Java.

Successful
:   Java prevents a wide range of unsafe and unwise programming practices,
    which makes it a safe choice for large projects with many developers working on them.
    It also became *the* language taught in most schools for many years,
    which means most professional programmers know it.
    Large enterprises and large applications
    likely have significant amounts of Java in them.

# Python

Python was invented by Guido Van Rossum in the 1980s
as a side project because he could
and named after his favorite comedy troupe, Monty Python.
He declared himself the languages' "Benevolent Dictator for Life" (a post he has since resigned),
included jokes all through the language's documentation,
urged people to think of the language as fun,
wrote pithy sayings about how to write "pythonic" code,
and generally didn't treat things too seriously.

Some facts about Python:

Interpreted
:   Python is designed to be read line-by-line at run-time
    with each line understood and acted on in the context of the state of the program at that time.
    This lets it have some very succinct and simple-looking code
    that does quite complicated things.
    It also means that it is one of the slowest languages to run.

Readable
:   Python emphasizes being easy to read and understand.
    Partly that is a language design decision,
    partly an actively-promoted culture within the language support community.

Glue
:   Python makes up for being slow itself
    by letting most of the hard work be handled
    by <dfn>libraries</dfn>, meaning supporting code written by other people,
    that are mostly written in C.
    It is sometimes referred to as a "glue language" where it's primary job is to hold other code together.
    
    This glue-like role helps Python be readable:
    the complicated computations generally happen behind the scenes
    in some C-language library that Python programmers only see as a few simple function calls.

Batteries Included
:   Python ships with a large standard library
    full of code that does many of the tasks programmers often want to do.
    This means that quite large tasks
    can often be written in just a few lines of code.

# R

R was invented by Ross Ihaka and Robert Gentleman in the 1990s
as a free copy of S they could use in teaching students.
S was invented by a team at Bell Labs in the 1970s to be an intuitive interface over functions written in Fortran.
Fortran was one of the very first programming languages ever.

Some facts about R:

Interpreted
:   Like Python, R is interpreted.
    However, it language constructs are not as complicated to run,
    resulting in a faster interpreter and less-succinct code.

Domain-specific
:   R is intended to be used to analyze and visualize data.
    There is nothing in its design that prevents it from being used for other purposes,
    but much of its language features, documentation, and standard library functions
    assume a statistics and data visualization focus.

Wrapper
:   Originally, R was a thin wrapper around a group of standard functions
    all of which were implemented in Fortran.
    Over time, more R-native code has been added,
    but it remains the case that many of its core operations
    are sent to Fortran routines.
    
    The difference between wrapper and glue is not a crisp one,
    but sometimes implies that
    glue starts with what the programmer will write in the interpreted language
    and then figures out the compiled library to make that work,
    while wrappers start with what the compiled library does
    and then figures out how to expose that to the user.

App
:   R ships not just as the interpreter and library needed to run it,
    but also with an entire development environment app.
    To program in C, Java, Python, or many other languages
    the programmer must supply their own tools
    for writing and running code;
    to program in R, all that is needed is the default R app.

