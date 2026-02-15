---
title: Computing Jargon
...

<dfn>Jargon</dfn> is the set of terms and expressions that have defined meaning within a field
but lack that meaning (or perhaps any meaning) outside that field.
Computing's jargon is primarily based on English words with computing-specific meanings
which may or may not be related to the English meanings of those words.

On this page are terms I have defined in class
and which I expect you to understand.

Abstract Data Type
:   Some kinds of *information* can be stored in multiple ways,
    with sometimes nuanced difference in how the different *data structures* that store it perform.
    An abstract data type provides an *abstraction barrier*,
    allowing *algorithms* to be designed ignoring the details of the data structure chosen.

    Practically, an abstract data type consist of a set of named algorithms (i.e. *functions*)
    that perform specific tasks on the data.
    For example, an abstract data type representing a queue of things waiting their turn
    might have functions for "add to back of line" and "remove from front of line".
    And data structure for which those functions can be created
    is said to implement the abstract data type.

Abstraction
:   An essential tool in organizing large programs.
    Consists of *generalization* of many related actions (often with *parameters*)
    and *detail removal* to guide focus and simplify action (often with *functions*).

Abstraction barrier
:   Abstraction strong enough
    that we can use the abstraction without thinking about the details it hides.

    No abstraction barrier is perfect:
    there are always limitations of nuances
    which do matter in some cases.
    For example,
    [Ariane flight V88](https://en.wikipedia.org/wiki/Ariane_flight_V88) exploded
    and a [Pariot Missle hit the army that fired it](https://barrgroup.com/sites/default/files/case-study-patriot-missile-defects.pdf)
    both because the abstraction barrier
    between bits and numbers failed.

Algorithm
:   Unambiguously-defined steps to accomplish some task.

    Algorithms are generally described in terms of
    the problem they solve (or approximately solve in the case of *heuristics*),
    the data used to encode that problems inputs,
    and the steps used to compute the answer.

    The word "algorithm" is a Latinization of the name of [Muḥammad ibn Mūsā al-Khwārizmī](https://en.wikipedia.org/wiki/Al-Khwarizmi)
    who wrote books that Europeans adopt the ideas of algorithms with place-value numbers.
    Algorithms themselves long predate his work.

Analog
:   Often used to mean simply "not digital", or the part of the world that is not computers.

    Sometimes used to mean a signal with a meaning based on being analogous to (directly or naturally representing, not using symbols but more intrinsic properties like quantity or frequency) the thing is describing.

Arguments
:   Concerete values provided to a function or program in place of its *paramters*.

    The square root function has one parameter, the number to find the root of.
    In $\sqrt{2}$, the number $2$ is the argument to that function.

Assembly
:   A textual representation of *machine instructions*.
    Also sometimes called "assembly code" or "assembler code."

Backwards compatibility
:   A new system is backwards compatible with an old system
    if data created by/for the old system works without modification in the new system.

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

Call
:   A colloqialism for invoking a *function*.

Compiler
:   A program that converts source code written in a *programming language*
    into a sequence of *machine instructions* that can be *executed*
    by a specific type of computer processor.

    Typically, programming languages that use a compiler
    provide fewer abstractions and thus require more effort to program in than those that use an *interpreter*;
    but they also tend to create programs that run more quickly than those created for an interpreter.

Data
:   A defined, unambiguous representation of *information*.

    Ways of representing simple information like numbers are commonly called "data types" or "primitive data types".
    Ways of representing multipart information like lists are commonly called *data structures*.

Data Structure
:   A way of storing data that consists of multiple related but distinct pieces of information.

    Most data structures are designed to implement some *abstract data type*.
    For example, the data structure "array"
    is implemented by putting one value after another in memory
    and is one implementation of the abstract data type "list".
    "List" could also be implemented with other data structures,
    such as by having each element in the list store both a value
    and the location in memory to find the element that comes after it.

Detail Removal
:   One of two common forms of *abstraction*.

    The most common form of detail removal is to refer to a complicated set of actions
    by name instead of by the actions themselves.
    *Functions* are the primary tool for that form of detail removal.

    Another important form of detail removal is an *abstract data type*,
    which helps use build algorithms that do not depend too closely on the specifics of how we represet *data*.

Digital
:   Represented or operating using a set of discrete symbols called digits,
    rather than using continuous or analog signals.
    
    Because of the prevalence of programmable general-purpose digital computers,
    "digital" is sometimes used as a synonym for "done with computers".

Execute
:   Formally: load the *machine instructions* of a *compiled* program into memory
    and have the processor begin following those instructions.

    Informatlly, also used for running an *interepreter* on a program's source code
    or, less often, for invoking a *function*.

Exploit
:   A concerete use of a *vulnerability*, in most cases to enact crime.

    The possibility that an attacker could take control of my machine
    using a flaw in one of its systems is a vulnerability.
    The specific tools they use to do so is an exploit.

Float
:   Short for "floating-point number", a float is the binary version of scientific notation
    stored as three parts:
    
    - + or ‒
    - An exponent
    - The rest of the number (the "significand" or "mantissa")
    
    For example, 56⅔, which in binary is 111000.1010101010101010...,
    stored as a float with 8-bit significand
    would be +1.1100010 × 2^101^ (or in decimal as 1.765625 × 2^5^).

Function
:   A tool in programming to name a set of actions and use them later by name.

    A function definition defines the actions and the name used to refer to them.
    Many function definitions include *parameters*.

    A function invocation requests that the actions in a previosuly-defined function be performed.
    If the function definition included *parameters*, the function invocation includes *arguments* to use for those parameters this time.

    The phrase "call a function" or "function call" is synonymous with "invoke a function" or "function invocation,"
    but with a stronger verbal *abstraction barrier*, referring to the function as if it were some external entity you call up
    instead of a set of actions you take.

Gate
:   An abstraction of a group of transistors that implement some simple operation on a few bits.
    
    The most commonly discussed gates are [and]{.smallcaps}, [or]{.smallcaps}, [not]{.smallcaps}, and [xor]{.smallcaps}.
    For some specific hardware cases, [nand]{.smallcaps} and [nor]{.smallcaps} are also used.

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

Generalization
:   One of two common forms of *abstraction*.

    The most common form of generalization is by adding *parameters* to a *function*.
    For example, $\sqrt{x}$ is a one-parameter function that finds a square root;
    $\sqrt[y][{x}$ is a two-parameter function that generalizes $\sqrt{x}$ to also compute other roots.

    Another common form of generalization is to add parameters to a *data structure*;
    for example by defining a generic "list of $x$" structure
    instead of a specific "list of integers" structure.
    Parameterized data structures have more variation in how they are implemented between programming languages
    than do parameterized functions, leading to them having many names:
    generics, templates, type parameters, mixins, etc.

GHz
:   The [SI abbreviation for "giga" meaning one billion](https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes) (G)
    followed by the abbreviation for Hertz (Hz) which means "per second,"
    together meaning "one billion per second."
    Commonly used to measure the clock speed of processors,
    roughly meaning how many billion arithmetic problems the processor can complete per second.

Heuristic
:   An *algorithm* that (usually) only approximates the solution to a problem
    rather than finding the full solution.

    Heuristics are more often applied to problems that seek the best of many options,
    and return not the best option possible, but a pretty good option.

    Most heuristics return the optimal output for some inputs
    but not for most
    and may return quite poor outputs for a few particularly bad inputs.

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

Information
:   Usually, "information" is used in a loose, human way to refer to the human-understood meaning carred by data.

    The information that I am 20 years old could be conveyed by various data:
    the text "I'm 20",
    the bits 00010100 in a location where age values are expected,
    the difference between the current date and a birthdate,
    etc.

    Less often, "information" is used as a technical term for the bits of some digital communication that could not be anticipated,
    an important concept in designing efficient networking, compression, and storage technologies.

Interpreter
:   A program that reads the source code of a *programming language*
    and takes the actions described by each line of that code.

    Typically, programming languages that use an interpreter
    run much more sloely than those that use a *compiler*;
    but they also tend to provide more abstractions and thus require lesse effort to program in than those created for a compiler.

Machine instructions
:   A set of simple actions a processor can take,
    encoded in a compact binary format.
    Common machine instruction types include:

    - Arithmetic operations, like $x + y → z$.
    - Operations that copy data between locations.
    - Jumps that continue *execution* at a new location in the set of machine instructions, often only if certain codintions are met.

    Machine instructions can be directly converted to and from *assembly*.
    *Compilers* generate machine instructions from source code, but that operation generally cannot be reversed.

Metadata
:   Data about the (main) data.

    For example, in an image file the color of each pixel is the main data;
    information about the camera that took the image is metadata.
    
    Many file formats store metadata along with the data, and many applications ignore most of the metadata.

Overflow
:   Most numbers in computers are represented in a fixed number of *bits*.
    If math would produce a number that requires more bits than that, the number overflows.
    What happens after overflow depends on the kind of number:
    
    - For integers, the most common is to simply discard the digits that won't fit;
        so 10011 stored in 4 digits would become 0011.
      
    - For *floats*, when the exponent overflows the number changes into a special "infinity" value.
        It loses its ability to engage in most math, but is still clearly "a big number".

Parameter
:   A placeholder, often implemented as a *variable*, to achieve *generalization*.

    An algorithm to compute $\sqrt{2}$ has no paramters: each time it is used it creates the same result.
    An algorithm to compute $\sqrt{x}$ has one parameter, $x$: to use the algorithm we have to provide an *argument*,
    a value to use in place of $x$ for this run of the algorithm;
    and for each $x$ we provide the alorithm will create a different result.

Problem
:   Often used as it is in English, to refer to anything that's not going well or needs to be addressed.

    Also used as a desired the relationship between inputs and outputs
    defining the goal of an *algorithm*.
    "Find if a number is odd" is a problem;
    "write it in binary and see if its low-order bit is 1" is one of many algorithms for solving that problem.

    An algorithm solving a problem
    needs to pick what *data* to use to represent the input and outout *information*.
    An implementation of the algorithm as a *function* will have the input data as its *paramters*.

Programmable
:   One of the key qualifiers of a computer,
    indicating that the specific computations it performs
    is not fixed when it is created
    but rather can be specified as inputs to the computer.
    
    Usually, "programmable" is also assumed to mean that the program it follows
    is stored inside the computer's memory and can be an entire *algorithm*,
    not just one of a machine-defined set of operations selected by simple switches and buttons.

Repetition
:   A component of programs that indicates that some set of actions should be performed repeatedly.
    Also called iteration or looping.

    The most common programming language vocabulary for repetition are `for` and `while`.

Run
:   A colloquialism meaning to *exceute* a program or invoke a *function*.

Selection
:   There are two types of selection.

    One, also called conditionals, jumps, or branches,
    is a component of a program that indicates that some set of actions should only be performed under certain conditions
    and skipped if those conditions do not hold.
    The most common programming language vocabulary for this type of selection are `if` and `else`.

    The other, also called indexing,
    is a component of a program that indicates which one out of several candiadte peices of data should be used.
    The most common programming language vocabulary for this type of selection are the name of the set of candidates, followed by which candidate in the set to chose in brackets, like `some_list[3]` to pick item 3 out of a list.

TB
:   The [SI abbreviation for "tera" meaning one trillion](https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes) (T)
    followed by the abbreviation for Byte (B).
    Commonly used to measure the disk space of computers,
    indicating they can store a trillion bytes of data.
    
    Some of that space is typically used to store an index of sorts to help find the rest of the data,
    so the usable space is generally lower than the advertised, theoretically-provided space.

Type
:   How the bits inside some piece of data are converted into meaning.

    For example, the bits 01100110 could have many meanings.
    If they are interpreted with the data type "integer" they mean 102.
    If they are interpreted with the data type "UTF-8 character" they mean lower-case F (`f`).
    The bits (the information we actually store in the computer) have not changed, only how we interpret it.

Variable
:   The name of a location where data can be stored.

    Unlike in mathematics, variables in computing are expected to change their meaning as a program progresses.
    It is perfectly OK for a program to say `x = 3` on one line and `x = 4` on another.

    Most programming languages use `=` not to mean "is the same as"
    but rather "gets the value of", in a directional way.
    `x = 3 + 4` means the memory named by variable `x` should have the number `7` stored inside it.
    Conversely, `3 + 4 = x` is a nonsensical an erroneous request that the number `7` have the contents of the memory named by variable `x` put inside it.

Vulnerability
:   Some aspect of a computer system -- usually software, but sometimes hardware -- that has the potential to be used in ways that the designers did not intend and the legitimate users do not desire.

    Vulnerabities can arise from many sources:
    programmer error,
    software designer oversight,
    unexpected interplay between individually-correct components,
    failure to remove development aids like bypass codes,
    malicious insertion by software developers with secret agendas,
    and so on.

    It is generally assumed that nearly all computer systems contain many vulnerabilities,
    and new volunerabilities are discovered every day.
    It is essential that software be regularly updated to close vulnerabilities as they are discovered
    to prevent them being targeted by *exploits*.
