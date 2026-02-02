---
title: Computer Programs
...

Modern computers are <dfn>programmable<dfn>, meaning the specific things they do
can be changed freely and are not defined by the machine designer.
The set of things a computer is asked to do is called a <dfn>program</dfn>.

# Instructions

A program consists of a sequence of instructions.
Each <dfn>instruction</dfn> encodes one action to take
and where to find any data that action might operate on.

Many instructions and handled by the ALU
and compute arithmetic operations.
They generally have four parts:

1. The operation to perform
2. The location of the first number to perform it on
3. The location of the second number to perform it on
4. The location to store the results.

These are encoded as binary numbers and put together into a single instruction.

:::example
Suppose we have 200 operations (requiring 8 bits to store them all),
and have come up with a list of them with a number for each:
0 means add, 1 means subtract, 2 means multiply, 3 means divide, and so on.

Suppose we also have 32 possible operand locations (requiring 5 bits to store them all).

Then we can encode multiplying location 2 and location 5 and putting the result in location 11 as

| Operation | Operand | Operand | Destination |
|:---------:|:-------:|:-------:|:-----------:|
| `00000010`| `00010` | `00101` | `01011`     |
:::

Another important class of instructions
are <dfn>conditional jumps</dfn>.
These are handled in the control unit
and change which instruction will be executed next
but changing the value stored in the program counter.
Normally, the program counter is increased after each instruction
to read the thing in memory after that instruction as the next instruction;
but a conditional jump sometimes changes the program counter entirely.
Conditional jumps allow us to express complicated and many-step tasks much more succinctly
by encoding notions of repetition.

:::example

The following human-oriented instructions use both conditional and unconditional jumps.

1. Let $x$ be your age in years
2. Let $y$ be the number 0
3. If $x = 1$, jump to step 11
4. If $x$ is even, jump to step 8
5. Compute $3$ times $x$ and store it in $x$
6. Compute $1$ plus $x$ and store it in $x$
7. Compute $1$ plus $y$ and store it in $y$
8. Compute $x$ divided by $2$ and store it in $x$
9. Compute $1$ plus $y$ and store it in $y$
10. Jump to step 3
11. Say "My Collatz number is"
12. Say the value of $y$

<details><summary>Expand to see steps followed by a 20-year-old:</summary>

| Step | Action                                 |
|-----:|:---------------------------------------|
| 1    | set $x=20$                             |
| 2    | set $y=0$                              |
| 3    | don't jump ($20 \ne 1$)                |
| 4    | jump ($20$ is even)                    |
| 8    | compute $20\div 2 = 10$; set $x=10$    |
| 9    | compute $1+0 = 1$; set $y=1$           |
| 10   | jump                                   |
| 3    | don't jump ($10 \ne 1$)                |
| 4    | jump ($10$ is even)                    |
| 8    | compute $10\div 2 = 5$; set $x=5$      |
| 9    | compute $1+1 = 2$; set $y=2$           |
| 10   | jump                                   |
| 3    | don't jump ($5 \ne 1$)                 |
| 4    | don't jump ($5$ is not even)           |
| 5    | compute $3\times 5 = 15$; set $x = 15$ |
| 6    | compute $15+1 = 16$; set $x = 16$      |
| 9    | compute $2+1 = 3$; set $y=3$           |
| 8    | compute $16\div 2 = 8$; set $x=8$      |
| 9    | compute $3+1 = 4$; set $y=4$           |
| 10   | jump                                   |
| 3    | don't jump ($8 \ne 1$)                 |
| 4    | jump ($8$ is even)                     |
| 8    | compute $8\div 2 = 4$; set $x=4$       |
| 9    | compute $4+1 = 5$; set $y=5$           |
| 10   | jump                                   |
| 3    | don't jump ($4 \ne 1$)                 |
| 4    | jump ($4$ is even)                     |
| 8    | compute $4\div 2 = 2$; set $x=2$       |
| 9    | compute $5+1 = 6$; set $y=6$           |
| 10   | jump                                   |
| 3    | don't jump ($2 \ne 1$)                 |
| 4    | jump ($2$ is even)                     |
| 8    | compute $2\div 2 = 2$; set $x=1$       |
| 9    | compute $6+1 = 2$; set $y=7$           |
| 10   | jump                                   |
| 3    | jump ($1 = 1$)                         |
| 11   | say "My Collatz number is"             |
| 12   | say "7"                                |

</details>

:::

A third important class of instructions
simply move data around.
We might move data between disk, memory, and processor.
We might make a cope of data in a new place before modifying one copy.
We might move data from the computer out to the Internet,
or from the Internet back to our computer.
It may not seem exciting, but moving data is important to many things computers do.

<details class="aside"><summary>Booting a Computer: BIOS/UEFI and OS</summary>

In the [The von Neumann architecture],
programs and data are both just bit stored in memory.
The only way to know that a given set of bits is intended to be a program
rather than data is by knowing in advance where to look in memory to find a program.

To get this started, computers are designed to always look in the space place
when they first receive power.
In that location will be a program that does 
initialization steps, such as checking to see what devices and disks are connected to the computer;
and then loads the first program that will run in that environment.
This initializer is generally built in to the computer itself,
expecting few if any updates and changes after the computer is delivered,
and typically conforms to with the older BIOS
or younger UEFI standards.

The first program that is run has the job of starting up all other programs.
That program is typically called an <dfn>operating system</dfn>
because it helps the operation of the entire system of applications and data
that make up our usual view of a computer.

The operating system has many roles,
many of which are arguably just convenience,
but four of them are key to how we use computers:

- They interpret bytes on disk using a <dfn>file system</dfn>
    that breaks the disk contents into files and folders,
    allowing us to effectively store are retrieve disparate pieces of information in a single device.

- They isolate running programs
    so that data in one program cannot be seen by other running programs.

- They provide a way for users to select other programs to run,
    or, as it is commonly called in computing, to <dfn>execute</dfn>.

- They provide an abstraction over shared devices
    such as keyboards, screens, and network connections,
    ensuring that input intended for a given program
    make it to that program and not to any other.

</details>

# Assembly Language

For a computer to run a program,
it has to be encoded in the binary representation of instructions;
things like the `00000010000100010101011` in our example above.
But that representation, while good for computers,
is not good for humans.

In 1947, Kathleen Hylda Valerie Britten^[Who three years later married and took the last name Booth, and hence is generally known as Kathleen Booth.]
created a simple textual representation of binary instructions.
It has the same parts as the machine instruction,
generally in the same order,
but uses a word instead of a number for the operation
and adds other symbols to make it clearer what parts are locations to find values
and what parts are actual values themselves.
This textual representation would later become known as <dfn>assembly language</dfn>,
sometimes abbreviated as assembly, assembler, or <abbr title="assembly">asm</abbr>.

:::example
We noted above a scenario when "multiply location 2 and location 5 and putting the result in location 11" might be represented in binary as

| Operation | Operand | Operand | Destination |
|:---------:|:-------:|:-------:|:-----------:|
| `00000010`| `00010` | `00101` | `01011`     |

The corresponding assembly for each part might be

| Operation | Operand | Operand | Destination |
|:---------:|:-------:|:-------:|:-----------:|
| `mul`     | `$t2`   | `$t5`   | `$t11`      |


and the full instruction written in assembly code as

```asm
mul $t1, $t5, $t11
```
:::

When first introduced, assembly language was a tool to help programmers not make mistakes:
you'd program by hand in assembly, verify that it should work as expected,
and then manually convert each line of assembly into binary and put it in the computer's memory.
This process was called by Britten the "planning and coding style":
you plan in assembly an then encode the assembly to bits;
this is one of the claimed origins of the verb <dfn>code</dfn> meaning "create a computer program".

As computers grew applications called <dfn>assemblers</dfn> were created
that could convert the textual representation of assembly into the binary representation of instructions automatically.
Assemblers are still part of the program creation pipelines used <time datetime="2026">today</time>.

# Programming Language

While assembly is much more usable than raw binary machine instructions,
it is still tedious and error-prone.
Grace Hopper was working for a computer company in 1949
and thought it would be possible to have a computer convert programs written in an English-like language
into machine instructions automatically.
She had trouble getting others to accept the idea,
even building working programs (which she called called <dfn>compilers</dfn>) that would convert English-like text to machine instructions
and still being told it was impossible,
but after 10 years of persistence her ideas were finally accepted
and programming languages, as we know them today, were created.

<details class="aside"><summary>The origin of programming languages: 10 years of persistence</summary>

Rear Admiral Grace Brewster Hopper retired from active service in the US Navy in 1949 and took a position at an early computer company,
the Eckert-Mauchley Computer Corporation
which was soon bought by the Remmington Rand corporation.

Shortly after she was hired, Hopper proposed that writing programs one instruction at a time
was problematic, and that humans should write programs in English and have the computer translate that into machine instructions.
She was told that was impossible because computers don't understand English.
She knew it was not impossible, and proved it by writing a program, the first compiler,
that turned a subset of English into machine instructions -- but it was not accepted by the company.

Undeterred, Hopper both spread her ideas to others in computing
and wrote another language and compiler that turned a subset of mathematical notation into machine instructions;
this Remmington Rand knew how to market, selling it as the "A Compiler" version "A-0".

Using the success of A,
Hopper begane work on a redo of her English idea.
After 10 years, in 1959 she was finally successful in launching her original idea in the form of COBOL (an acronym for **CO**mmon **B**usiness-**O**riented **L**anguage).
Along the way her proposals were also accepted by other companies,
resulting in both [Fortran]{.smallcaps} (an acronym for **FOR**mual **TRAN**slating system)
and ALGOL (an acronym for **ALGO**rithmic **L**anguage) in 1958
and LISP (an acronym for **LIS**t **P**rocessing) in 1960.

All four of these early programming languages remain major influences on programming languages today.

</details>

Programming languages are inspired by English^[Or other human languages, but English strongly dominates the field.]
but are not actually English text.
Instead, they use a mix of
specific English words,
punctuation,
and ordering to express common patterns of instruction usage.
Common elements of programming languages include

Variables
:   Name a location in memory where a value is stored.

    The name "variable" is taken from mathematics;
    unlike in mathematics, in programming the same variable might have different meanings at different times during a program's execution.

Selection
:   Chose one of a few options.

    These options might be things to do (commonly indicated with the words `if`{.js} and `else`{.js})
    or data to do it on (commonly indicated by putting the selector inside brackets like `x[i]`{.js}).

Repetition
:   Repeat a sequence of actions until some condition is met (commonly indicated with the words `while`{.js} and/or `for`{.js}).

Functions
:   Functions have two parts.

    A <dfn>function definition</dfn> gives a name to a sequence of actions.
    
    A <dfn>function invocation</dfn> or <dfn>function call</dfn> tells the program to do the named actions.
    
    Function invocation commonly uses a notation borrowed from algebra, like `function_name(values, to_use, in_function)`{.js}.


