---
title: Digital computers
...

A <dfn>computer</dfn> is something that performs computations.
In arithmetic classes, you learn to be a computer.
Prior to the 1970s, some people were professional computers, solving mathematical expressions for other people.

A <dfn>computing machine</dfn> is a computer that is a device, not a person.
There are many devices that could be argued to be computing machines,
ranging from bags and boxes that can perform addition
(pour one into another and you find the sum of the things in them)
to specialized electrical circuits that perform integration.
Most of these, however, would not be called computers
because the computation they perform is fixed at the time the machine is constructed.

A <dfn aria-describedby="programmable-computer">programmable computer</dfn> accepts two kinds of inputs:
the <dfn>arguments</dfn> or input values to compute a result based on
and <dfn>instructions</dfn> describing what specific computations to perform on those arguments.

:::example
When you are presented with an arithmetic expression like
$$3+4\times 5 - 6 \div 7$$
you are getting both instructions (in the form of the operators $+$, $\times$, $-$, and $\div$ and the order in which they appear)
and arguments (in the form of the values $3$, $4$, $5$, $6$, and $7$ and the results of intermediate computations you peform).
:::

A <dfn>digital computer</dfn> represents both its arguments and the results it produces using digits, not analogs.
Analog signals represent a single value by another single value,
while digital signals represent it by a formalism known as place-value numbers.

:::example
If you decided to hum with the volume of your hum analogous to your net worth
and the pitch of your hum analogous to how quickly that net worth was changing,
then

- Wealthy people would hum more loudly than broke people.
- People earning money would hum higher notes than people spending money.

These are analog signals: a signal being communicated
is matched by an analogous signal.
:::

:::example
If you decided to share your net worth using the Latin version of Arabic base-10 digits,
you might say something like 102.26.
That's six distinct signals (`1`, `,`, `0`, and so on to `6`)
no one of which is analogous to your net worth,
but when put together using special rules we learned as children
the represented value can be recovered.
:::

<details class="aside"><summary>Charles Babbage's Difference Engine, the first programmable digital computer</summary>

![A portrait of Charles Babbage, circa 1820, by an unknown artist. Public domain, hosted by [wikimedia](https://commons.wikimedia.org/wiki/File:British_(English)_School_-_Charles_Babbage_(1792%E2%80%931871)_-_814168_-_National_Trust.jpg#/media/File:British_(English)_School_-_Charles_Babbage_(1792%E2%80%931871)_-_814168_-_National_Trust.jpg)](https://upload.wikimedia.org/wikipedia/commons/8/83/British_%28English%29_School_-_Charles_Babbage_%281792%E2%80%931871%29_-_814168_-_National_Trust.jpg)

In 1822, Charles Babbage built a clockwork machine for computing various polynomial expressions
which he called a Difference Engine,
and designed several larger versions for computing larger expressions to more digits of precision.
This is generally cited as the first programmable digital computer.

![A print of a drawing of Charles Babbage's engine by his eldest son, Benjamin Herschel Babbage. Public domain, hosted by [wikimedia](https://commons.wikimedia.org/wiki/File:Difference_engine_plate_1853.jpg#/media/File:Difference_engine_plate_1853.jpg)](https://upload.wikimedia.org/wikipedia/commons/9/9e/Difference_engine_plate_1853.jpg)

Charles Babbage was trained in mathematics
and worked in a variety of fields,
including economics, management, theology, meteorology, medicine, mechanical engineering, and cryptography.
Arguably his most impactful invention during his own lifetime
was a metal frame to attach to the front of locomotives to clear the track of obstacles such as grazing cattle.


</details>

If a programmable digital computer uses the same media for storing
instructions, arguments, and the results of computations;
and if it is of specific limited by versatile set of computations;
then it becomes a <dfn>general purpose</dfn> programmable computer.
General-purpose computers can do dramatically more than other computers
because they can use the operations they were built to perform
to define other types of operations.


<details class="aside"><summary>Ada Lovelace, the first general-purpose programmer</summary>

![A photograph of Ada Lovelace by Antoine Claudet, 1843. Public domain, hosted by [wikimedia](https://commons.wikimedia.org/wiki/File:Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png#/media/File:Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png)](https://upload.wikimedia.org/wikipedia/commons/4/4c/Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png)

Augusta Ada King née Byron, Countess of Lovelace,
observed Charles Babbage's difference engine and understood its potential in a way that Babbage himself did not.
Babbage was intent on building what we'd now think of as a calculator:
a tool for computing the value of polynomials at various arguments to solve arithmetic problems that arose in various contexts.
Ada Lovelace understood that, while the machine he'd built was limited to those arithmetical tasks,
with some adjustments a general-purpose version might be built.
Working with Babbage, she helped design the Analytical Engine
which would have been the first general-purpose programmable digital computer
had it been built.

The Analytical Engine was not completed
because its original backers, the British government, did not think it was worth the cost.
In 1842 the British Prime Minister, Sir Robert Peel, is recorded^[In Additional Manuscript 40,514 folio 223 in the British Library.] to have said

> What shall we do to get rid of Mr. Babbage and his calculating Machine? Surely if completed it would be worthless as far as science is concerned?

Historians debate whether it was Charles or Ada who wrote the first computer program;
both programs are recorded, but the relative dates of the two is unclear.

An example of her understanding of the potential of this yet-unbuilt machine can be found in her 1842 submission to the journal *Scientific Memoirs*:

> Supposing, for instance, that the fundamental relations of pitched sounds in the science of harmony and of musical composition were susceptible of such expression and adaptations, the engine might compose elaborate and scientific pieces of music of any degree of complexity or extent.

Ada Lovelace's background in mathematics that prepared her to make these discoveries
was gained as part on her mother's efforts to distance her from her father, Lord Byron,
who was known for writing romantic poetry and for pursuing sexual relations with many people, both men and women, both single and married, including some of his own cousins.

</details>


With the above understanding of general-purpose computers, we can distinguish between three key concepts:

Hardware
:   The physical machinery of the computer.
    
Firmware
:   Instructions provided to a programmable computer in durable form,
    such as and arrangement of physical switches
    or in their electronic equivalent.

Software
:   Instructions provided to a programmable general-purpose computer in mutable form,
    using the same medium as is used for arguments and results.

This also helps us distinguish between several computing professions:

Computer Engineers
:   Primarily consider the design of hardware.

Computer Scientists
:   Primarily consider the scope, possibilities, and limitations of software.

Software Developers
:   Create software.

Software Engineers
:   Create large-scale software using engineering principles:
    understanding both the problem space and the constraints under which the software is to be developed,
    then using orderly process to design and create software that solves those problems subject to those constraints.

Information Technology
:   A broad term, not always used in the same way.

    One common use is for the people who procure, install, integrate, and maintain hardware and software purchased from others.
    
    Another common use is as an umbrella term for all of the professions in this list.

