---
title: Computing Jargon
...

<dfn>Jargon</dfn> is the set of terms and expressions that have defined meaning within a field
but lack that meaning (or perhaps any meaning) outside of that field.
Computing's jargon is primarily based on English words with computing-specific meanings
which may or may not be related to the English meanings of those words.

On this page are terms I have defined in class
and which I expect you to understand.

Abstract
:   A continuous property; something can be more or less abstract, but can't be simply abstract or not.

    More abstract means described in bigger steps or with elided details.
    To make something less abstract, you answer "how do we do step $x$", adding more detail.
    To make something more abstract, you replace several steps with a generalization that describes them all.

Algorithm
:   Unambiguously-defined steps to accomplish some task.

    The word "algorithm" is a Latinization of the name of [Muḥammad ibn Mūsā al-Khwārizmī](https://en.wikipedia.org/wiki/Al-Khwarizmi)
    who wrote books that Europeans adopt the ideas of algorithms with place-value numbers.
    Algorithms themselves long predate his work.

Analog
:   Often used to mean simply "not digital", or the part of the world that is not computers.

    Sometimes used to mean a signal with a meaning based on being analogous to (directly or naturally representing, not using symbols but more intrinsic properties like quantity or frequency) the thing is is describing.

Base
:   Place-value number systems are defined by a single integer called their base.
    The base tells us
    
    - How many digits the system uses (including 0)
    - The value multiple for moving a digit one place to the left
    
    The most popular bases are:
    
    - Base 2, also called *binary* with digits called *bits*, used to build computer processors.
    - Base 10, also called decimal, used by humans in most modern cultures.
    - Base 16, also called *hexadecimal* or *hex*, used by computing professionals to communicate binary values more easily.
    - Base 256, with digits called *bytes*, used to build computer memory, storage, and communication devices and protocols.

Binary
:   Multiple meanings:
    
    - The *base*-2 number system.
    - A program that is ready to be run directly on a processor without further translation.
    - Any computer file containing non-textual information.

    When it is necessary to distinguish that a number is written in binary,
    it is traditional to precede it with `0b`;
    thus `0b1101` means a binary number with digits `1101` and represents the value thirteen.
    
Bit
:   A single digit in *base* 2: either 0 or 1.
    
    The word "bit" is a portmanteau of "<u>bi</u>nary digi<u>t</u>".

Byte
:   A group of 8 *bits*.
    Equivalently, a group of 2 *hex* digits.
    Equivalently, a number between 0 and 255 (inclusive).

    When it is necessary to write out a byte for human viewing,
    it is traditional to write it as two hex digits;
    thus `0D` means a byte with the value thirteen
    and `F3` means a byte with the value two hundred forty-three.

Digital
:   Represented or operating using a set of discrete symbols called digits,
    rather than using continuous or analog signals.
    
    Because of the prevalence of programmable general-purpose digital computers,
    "digital" is sometimes used as a synonym for "done with computers".

General-purpose
:   One of the key qualifiers of a computer,
    indicating that the computer hardware
    is capable of doing any information-processing task
    that any other computer can do.
    
    The Church-Turing thesis posits the existence of general-purpose computers,
    and of related Turing-complete systems and forms of expression that are capable of describing the operation of general-purpose computers.
    While not formally proven, this thesis is widely accepted as true.
    
    One consequence of the fact that almost all computers are general-purpose
    is that new computer technologies (like quantum computers)
    might differ from others in efficiency and speed,
    but not in the set of tasks they could eventually do, given unlimited time and storage.

Hex
:   A common abbreviation for *hexadecimal*.

Hexadecimal
:   A group of 4 *bits*.
    Equivalently, a number between 0 and 15 (inclusive).
    
    Hexadecimal digits are typically represented as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (with the same meanings they have in decimal)
    and A, B, C, D, E, F (meaning ten through fifteen in the order listed).
    Capitalization of the letters is not important:
    
    When it is necessary to distinguish that a number is written in hexadecimal,
    it is traditional to precede it with `0x`;
    thus `0x10E` means a hexadecimal number with digits `10E` and represents the value two hundred seventy.

Programmable
:   One of the key qualifiers of a computer,
    indicating that the specific computations it performs
    is not fixed when it is created
    but rather can be specified as inputs to the computer.
    
    Usually, "programmable" is also assumed to mean that the program it follows
    is stored inside the computer's memory and can be an entire *algorithm*,
    not just one of a machine-defined set of operations selected by simple switches and buttons.
