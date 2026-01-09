---
title: Processors
...

<dfn>Hardware</dfn> is a term used for physical machines that process information and make p a computer.
There are multiple hardware components in any usable computer,
and each can be designed in multiple ways.
This page attempts to give an overview of a few of the most common components.

Each hardware component will have some way of storing 0 and 1,
but those ways vary between components and sometimes within a single component.
Examples include

- A tiny magnet with the north (1) or south (0) pole pointing up.
- A wire with high (1) or low (0) electrical pressure.
- An optical fiber with bright (1) or dim (0) light.
- An electrically isolated component with a negative (1) or neutral (0) ionization.
- A reflective surface that is smooth and shiny (1) or rough and matte (0).

... and so on.
Any two distinguishable states will work,
and each hardware component uses a pair that makes sense for it.

<dfn>Processors</dfn> are hardware that perform arithmetic and other computations.
By far the most common processor technology today
uses electricity for information
and microscopically-small silicon-based semiconductor components to implement the machinery.
But that's just because those are fast and cheap; the same ideas can be built using much larger, more easily visualized components as well.

Processors use some kind of pressure to represent 1 and its absence to represent 0.
Commonly, this is electrical pressure, also called voltage,
but we could also use something else (like water pressure) if we wanted.

Processor work by letting that pressure flow through established channels.
Commonly, this flow is electrical current through wires,
but it could be something else (like water current though pipes) if we wanted.

# Switches (transistors)

The key component that lets processors work is two kinds of pressure-activated switches,
called transistors in an electrical setting or valves in a water setting.
One type of switch connects two channels into one when pressure is applied and disconnects them when it is removed;
the other type does the complement, disconnecting two channels when pressure is applied and connecting them when it is removed.
Both have some kind of <dfn>threshold</dfn> pressure, a pressure strong enough to activate the switch, and some noise or variation in individual switches;
to deal with that variation "1" is chosen as a pressure high enough that even the stiffest switch is activated
and "0" as a pressure low enough that even the softest switch is not.

<details class="example"><summary>Illustrations of several switches</summary>

<figure>
<div style="display: flex; gap: 10%">
<svg viewBox="0 0 144.5 80.013">
<path d="m77.5 5-12.5 10h5v50h-5l12.5 10 12.5-10h-5v-50h5z" fill="#0bf"/>
<g fill="none" stroke="#000">
<path d="m97 39.998c0-8.2843 4.2386-15 7-15s7 6.7157 7 15-0.23858 15-3 15-3-6.7157-3-15 4.2386-15 7-15 7 6.7157 7 15-0.23858 15-3 15-3-6.7157-3-15 4.2386-15 7-15 7 6.7157 7 15-0.23858 15-3 15-3-6.7157-3-15 4.2386-15 7-15 7 6.7157 7 15-0.23858 15-3 15-3-6.7157-3-15 4.2386-15 7-15 7 6.7157 7 15-0.23858 15-3 15-3-6.7157-3-15"/>
<path d="m144 39.998c0 11.046-1.7909 20-4 20s-4-8.9543-4-20 1.7909-20 4-20 4 8.9543 4 20z"/>
<path d="m140 19.998h-40v-20"/>
<path d="m60-0.00218v20h-60"/>
<path d="m140 59.998h-40v20"/>
<path d="m60 79.998v-20h-60"/>
<path d="m62 39.992c0 10.497-1.7909 19.006-4 19.006s-4-8.5091-4-19.006 1.7909-19.006 4-19.006 4 8.5091 4 19.006z"/>
</g>
<path d="m58.22 21.005c2.1135 0.50903 3.7812 8.8372 3.7812 19.006 0 10.497-1.7909 19.006-4 19.006h5c0-1.9681 6.7157-3.5636 15-3.5636s15 1.5954 15 3.5636h45c2.2091 0 4-8.5091 4-19.006s-1.7909-19.006-4-19.006h-45c0 1.9681-6.7157 3.5636-15 3.5636s-15-1.5954-15-3.5636z" fill="#bbb" stroke="#000"/>
</svg>
<svg viewBox="0 0 144.5 80.013">
<g fill="none" stroke="#000">
<path d="m97 39.638c0-8.28 4.24-15 7-15s7 6.72 7 15-0.239 15-3 15-3-6.72-3-15 4.24-15 7-15 7 6.72 7 15-0.239 15-3 15-3-6.72-3-15 4.24-15 7-15 7 6.72 7 15-0.239 15-3 15-3-6.72-3-15 4.24-15 7-15 7 6.72 7 15-0.239 15-3 15-3-6.72-3-15 4.24-15 7-15 7 6.72 7 15-0.239 15-3 15-3-6.72-3-15"/>
<path d="m24 39.65c0 10.453-1.79 19.006-4 19.006s-4-8.5051-4-19.006 1.79-19.006 4-19.006 4 8.5051 4 19.006z"/>
<path d="m144 39.638c0 11-1.79 20-4 20s-4-8.95-4-20 1.79-20 4-20 4 8.95 4 20z"/>
<path d="m140 19.638h-40v-20"/>
<path d="m60-0.36218v20h-60"/>
<path d="m140 59.638h-40v20"/>
<path d="m60 79.638v-20h-60"/>
</g>
<path d="m20 20.644c2.11 0.50935 3.78 8.8377 3.78 19.006 0 10.453-1.79 19.006-4 19.006h5c0-1.9671 6.72-3.5636 15-3.5636s15 1.5965 15 3.5636h45c2.21 0 4-8.5051 4-19.006s-1.79-19.006-4-19.006h-45.019c0 1.9671-6.72 3.5636-15 3.5636s-15-1.5965-15-3.5636z" fill="#bfbfbf" stroke="#000"/>
</svg>
</div>
<figcaption>
An example pressure-activated water valve.

A piston is placed in T-junction of three pipes.
Pressure in the central pipe will push against the piston, moving it one way;
lack of pressure allows a spring to move it back the other way.
A hole bored through part of the piston connects the other two pipes in one position of the piston
but does not connect them in the other position.

The illustrated piston has the bore aligned to connect the pipes when pressure is applied
and disconnect them when pressure is removed.
Moving the bore to the other side of the piston would create the complementary type of switch
which connects without pressure and disconnects with pressure.
</figcaption>
</figure>


<figure>
<div style="display: flex; gap: 10%"><img src="mosfet-idle.svg" style="width:45%"/><img src="mosfet-active.svg"  style="width:45%"/></div>
<figcaption>An example transistor.

A central wire ends in a plate that is near but not electrically connected to the rest of the transistor.
Below that is a piece of silicon that is doped with a second element that gives it some spare negative charge carriers (electrons not bound to any one electron cloud).
On either side of that are pieces of silicon doped with a different element that gives it some spare positive charge carriers (holes in the electron clouds);
each of these has a wire attached.

In the normal state, this transistor does not allow current to flow between the two wires
because current cannot transition between the negative and positive charge carriers.

When electrical pressure is applied to the central wire, the plate fills with electrons,
creating an electrical field that pushes the negative charge carriers in the central silicon away
and then pushes even more electrons away, creating space for positive charge carriers near the plate.
Current can now flow between the other two wires,
using positive charge carriers across all three pieces of silicon.

The illustrated transistor connects the wires
when given a negative charge voltage.
Swapping the two types of doped silicon would create the complementary type of switch
which connects with positive charge voltage.
</figcaption>
</figure>

</details>

Switches require a source of power to operate.
Power provides the computer with two pools,
one with high pressure (1) and one with low pressure (0).
As a computer operates, the pressure carrier (electricity, water, etc)
will move from the high- to low-pressure pool,
reducing the pressure differential between the pools;
energy is required to restore the previous pressures and continue operation.
If we disconnect the power source, the two pools will quickly reach the same pressure
and all operation will stop.

 

With switches and power, a processor is designed in many layers.
We design gates out of switches,
and adders out of gates,
and multipliers out of adders,
and so on until we have a full computer.
You could readily understand each individual step,
but each would take time to understand
and there are so many steps we can't hope to cover them all in this course.
Instead, we'll illustrate a few steps to give a sense of how computers can be built.

# Switches to Gates

<dfn>Gates</dfn> are small collections of transistors connected to a power source with 1 output wire and usually 2 input wires. They are designed so that specific combinations of voltage on the input wires will connect the output wire to the power source, while other combinations will not.

The simplest gate is the [not]{.smallcaps} gate.
A [not]{.smallcaps} gate has the property that its output has voltage if and only if its input does not.
A [not]{.smallcaps} gate can be built from two switches:
one connects the output to the high voltage and is disconnected when there's input voltage,
the other connects the output to the low voltage and is connected when there's input voltage.

<figure>
```pikchr
down
text "high pressure (1)"
line
D: box "switch:" "pressure" "disconnects"
line
A: line
C: box "switch:" "pressure" "connects"
line
text "low pressure (0)"
right
line from A.n
text "output"
De: line left from D.w
Ce: line left from C.w
line from De.w to Ce.w
left
line from last line.c
text "input"
```
<figcaption>An illustration of a [not]{.smallcaps} gate, as described in the text above.</figcaption>
</figure>

:::example
Two modes of a [not]{.smallcaps} gate

If there is low pressure in the input (it is 0)
then the pressure-disconnecting switch connects the output to the high pressure
while the pressure-connecting switch does not connect the output to the low pressure,
meaning the output has high pressure (it is 1).

<figure>
```pikchr
down
text "high pressure (1)"
line
D: box invisible
line
A: line
C: box invisible
line
text "low pressure (0)"
right
line from A.n
text "output = 1"
De: line left from D.w
Ce: line left from C.w
line from De.w to Ce.w
left
line from last line.c
text "input = 0"
line from D.n to D.s
text at D.e "switch:" "pressure" "disconnects"
text at C.e "switch:" "pressure" "connects"
text "0" color green with .w at De.e
text "0" color red with .w at Ce.e
```
<figcaption>An illustration of the input = 0 case</figcaption>
</figure>


If there is low pressure in the input (it is 1)
then the pressure-disconnecting switch does not connect the output to the high pressure
while the pressure-connecting switch does connect the output to the low pressure,
meaning the output has low pressure (it is 0).


<figure>
```pikchr
down
text "high pressure (1)"
line
D: box invisible
line
A: line
C: box invisible
line
text "low pressure (0)"
right
line from A.n
text "output = 0"
De: line left from D.w
Ce: line left from C.w
line from De.w to Ce.w
left
line from last line.c
text "input = 1"
line from C.n to C.s
text at D.e "switch:" "pressure" "disconnects"
text at C.e "switch:" "pressure" "connects"
text "1" color red with .w at De.e
text "1" color green with .w at Ce.e
```
<figcaption>An illustration of the input = 0 case</figcaption>
</figure>

:::


A simple two-input gate is the [and]{.smallcaps} gate.
An [and]{.smallcaps} gate has the property that its output has voltage if and only both of its inputs have voltage.
An [and]{.smallcaps} gate can be built from four switches^[Modern computers build [and]{.smallcaps} gates out of 6 switches instead of 4 to handle some nuances of transistor performance, but the 4-switch version is clearer to understand.]:

- A 0-connecting switch with input A, connecting the output to the 0 power
- A 0-connecting switch with input B, connecting the output to the 0 power
- A 1-connecting switch with input A, connecting the output to the next switch in this list
- A 1-connecting switch with input B, connecting the previous switch in this list to the 1 power


<figure>
```pikchr
box at 0,0.5 "0" "connects"
box at 2,0.5 "0" "connects"
box at 1,1.5 "1" "connects"
box at 1,2.2 "1" "connects"
line from 3rd box.n to 4th box.s
line up from 4th box.n
text "power = 1" with .s at last line.n
line down from 1st box.s
text "power = 0" with .n at last line.s
line down from 2nd box.s
text "power = 0" with .n at last line.s
line from 1st box.n to 0,1 to 3,1
text "output" with .w at last line.end
line from 2nd box.n to 2,1
line from 3rd box.s to 1,1
left
line from 1st box.w
text "A"
line from 2nd box.w
text "B"
line from 3rd box.w
text "A"
line from 4th box.w
text "B"
```
<figcaption>An illustration of an [and]{.smallcaps} gate, as described in the text above.</figcaption>
</figure>

:::example
Four modes of an [and]{.smallcaps} gate

If both inputs are 0,
the output is connected to 0 by two side-by-side switches
and disconnected from 1 by by two switches in a row,
meaning the output is 0.

<figure>
```pikchr
box at 0,0.5 invisible
box at 2,0.5 invisible
box at 1,1.5 invisible
box at 1,2.2 invisible
line from 3rd box.n to 4th box.s
line up from 4th box.n
text "power = 1" with .s at last line.n
line down from 1st box.s
text "power = 0" with .n at last line.s
line down from 2nd box.s
text "power = 0" with .n at last line.s
line from 1st box.n to 0,1 to 3,1
text "output = 0" with .w at last line.end
line from 2nd box.n to 2,1
line from 3rd box.s to 1,1
left
line from 1st box.w
text "A = 0"
line from 2nd box.w
text "B = 0"
line from 3rd box.w
text "A = 0"
line from 4th box.w
text "B = 0"
line from 1st box.s to 1st box.n
line from 2nd box.s to 2nd box.n
```
<figcaption>An illustration of an [and]{.smallcaps} gate with both inputs 0, as described in the text above.</figcaption>
</figure>

If both inputs are 1,
the output is disconnected from 0 by both side-by-side switches
and connected to 1 by two switches in a row,
meaning the output is 1.

<figure>
```pikchr
box at 0,0.5 invisible
box at 2,0.5 invisible
box at 1,1.5 invisible
box at 1,2.2 invisible
line from 3rd box.n to 4th box.s
line up from 4th box.n
text "power = 1" with .s at last line.n
line down from 1st box.s
text "power = 0" with .n at last line.s
line down from 2nd box.s
text "power = 0" with .n at last line.s
line from 1st box.n to 0,1 to 3,1
text "output = 1" with .w at last line.end
line from 2nd box.n to 2,1
line from 3rd box.s to 1,1
left
line from 1st box.w
text "A = 1"
line from 2nd box.w
text "B = 1"
line from 3rd box.w
text "A = 1"
line from 4th box.w
text "B = 1"
line from 3rd box.s to 3rd box.n
line from 4th box.s to 4th box.n
```
<figcaption>An illustration of an [and]{.smallcaps} gate with both inputs 1, as described in the text above.</figcaption>
</figure>

If one input is 0 and the other is 1,
the output is connected to 0 by one of the two side-by-side switches
and disconnected from 1 by one of the two switches in a row,
meaning the output is 0.

<figure>
```pikchr
box at 0,0.5 invisible
box at 2,0.5 invisible
box at 1,1.5 invisible
box at 1,2.2 invisible
line from 3rd box.n to 4th box.s
line up from 4th box.n
text "power = 1" with .s at last line.n
line down from 1st box.s
text "power = 0" with .n at last line.s
line down from 2nd box.s
text "power = 0" with .n at last line.s
line from 1st box.n to 0,1 to 3,1
text "output = 0" with .w at last line.end
line from 2nd box.n to 2,1
line from 3rd box.s to 1,1
left
line from 1st box.w
text "A = 0"
line from 2nd box.w
text "B = 1"
line from 3rd box.w
text "A = 0"
line from 4th box.w
text "B = 1"
line from 1st box.s to 1st box.n
line from 4th box.s to 4th box.n
```

```pikchr
box at 0,0.5 invisible
box at 2,0.5 invisible
box at 1,1.5 invisible
box at 1,2.2 invisible
line from 3rd box.n to 4th box.s
line up from 4th box.n
text "power = 1" with .s at last line.n
line down from 1st box.s
text "power = 0" with .n at last line.s
line down from 2nd box.s
text "power = 0" with .n at last line.s
line from 1st box.n to 0,1 to 3,1
text "output = 0" with .w at last line.end
line from 2nd box.n to 2,1
line from 3rd box.s to 1,1
left
line from 1st box.w
text "A = 1"
line from 2nd box.w
text "B = 0"
line from 3rd box.w
text "A = 1"
line from 4th box.w
text "B = 0"
line from 2nd box.s to 2nd box.n
line from 3rd box.s to 3rd box.n
```
<figcaption>Illustration both ways an [and]{.smallcaps} gate might have one input 0 and the other input 1, as described in the text above.</figcaption>
</figure>

:::


An [or]{.smallcaps} gate
is like an [and]{.smallcaps} gate
except its output is 1 if *either* of its inputs is 1.
If you swap the 1 and 0 power connections of an [and]{.smallcaps} gate you get an [or]{.smallcaps} gate.

These gates are named after English words
because they have some relationship to how we use those words.
If we think of inputs set to 1 as being true statements
and inputs set to 0 as being false statements,
then modifying those statements with the word a gate is named after
gives a statement with the same truth as the gate's output.

:::example
Suppose input A is the statement "I am happy"
and input B is the statement "I am hungry."
Both statements be 0 (false) or 1 (true).
The combined statement "I am happy [and]{.smallcaps} I am hungry"
is true precisely when the [and]{.smallcaps} gate would output 1 for those two inputs.
:::

But some English words have more than one meaning.
For example, if at a restaurant you are asked "would you like salt [or]{.smallcaps} pepper?"
you can answer "yes" meaning you want one or both;
but if you are asked "is that for here [or]{.smallcaps} to go?"
then "yes" is not an option: you're to pick one and only one of the two.

This leads to another kind of or-like gate,
the exclusive or [xor]{.smallcaps}.
This gate outputs 1 if either one of its inputs is 1 and the other is 0,
but outputs 0 if both inputs are the same.
We can make an [xor]{.smallcaps} out of switches, but we can also make it out of other gates:

- Put the inputs into an [or]{.smallcaps} gate
- Also put the inputs into an [and]{.smallcaps} gate
- Put the output of the [and]{.smallcaps} gate into a [not]{.smallcaps} gate
- Put the outputs of the [or]{.smallcaps} and [not]{.smallcaps} gates into a second [and]{.smallcaps} gate
- Use the output of the second [and]{.smallcaps} gate as the output of the [xor]{.smallcaps} gate

<figure>
```pikchr
box "AND"
line
box "NOT"
line right then up 0.3 then right
line left then up 0.3 then left from .2 above last line.end
box "OR"
box with .w at 0.1 below last line.start "AND"
right
line
"output"
line left from .1 above 1st box.w
"A"
line left from .1 below 1st box.w
"B"
line left from .1 above 3rd box.w
"A"
line left from .1 below 3rd box.w
"B"
```
<figcaption>An illustration of making an [xor]{.smallcaps} out of an [or]{.smallcaps}, a [not]{.smallcaps}, and two [and]{.smallcaps}s.</figcaption>
</figure>

While such a gate made from other gates may not be optimal
(we can probably use fewer than the 14 switches this would need),
it does show how we can design new components out of pieces we've already designed.

Sometimes gates are summarized by making a table
of all their possible input and output combinations.
In keeping with the true/false interpretation of 1/0 that inspires the gate names,
these are called <dfn>truth tables</dnf>.
The four gates we've see so far would have the following truth tables:


 A   [not]{.smallcaps} A
--- ---------------------
 0      1
 1      0


 A   B   A [and]{.smallcaps} B
--- --- -----------------------
 0   0         0
 0   1         0
 1   0         0
 1   1         1


 A   B   A [or]{.smallcaps} B
--- --- ----------------------
 0   0         0
 0   1         1
 1   0         1
 1   1         1


 A   B   A [xor]{.smallcaps} B
--- --- -----------------------
 0   0         0
 0   1         1
 1   0         1
 1   1         0


# Gates to Addition

Consider adding two 1-bit numbers

- 0 + 0 = 0; in 2-bit binary that's 00
- 0 + 1 = 1; in 2-bit binary that's 01
- 1 + 0 = 1; in 2-bit binary that's 01
- 1 + 1 = 2; in 2-bit binary that's 10

The 2s bit of the answer is the same as the [and]{.smallcaps} gate:
it's 0 except when both input bits are 1.

The 1s bit of the answer is the same as the [xor]{.smallcaps} gate:
0+0 and 1+1 both have a 0, while 0+1 and 1+0 both have a 1.

Thus, one [and]{.smallcaps} and one [xor]{.smallcaps} can add two 1-bit numbers.

To add three 1-bit numbers we

- Add the first two
- Add the third to the ones' place of the result
- add the twos' places of the two addition results (this never has a twos' place)

:::example
1 + 0 + 1

- first two: 1 + 0 = 01
- third plus ones' place: 1 + 1 = 10
- two twos' places: 0 + 1 = 1
- result: 10
:::

:::example
1 + 1 + 1

- first two: 1 + 1 = 10
- third plus ones' place: 1 + 0 = 01
- two twos' places: 1 + 0 = 1
- result: 11
:::

With three 1-bit additions we can now build arbitrary-bit addition,
using the same digit-by-digit algorithm that you learned as a child.

- Starting with the low-order digit (right end)
- Add the carry (initially 0) and a digit from each number -- a total of three digits
    - Put the ones' place digit of the result in the answer
    - Put the other digit of the result as the new carry
- Move on to the next higher digit (one step to the left)

:::example
Add in base ten

To add 3141 + 9876 we do the following:

1. Add the last digits and the carry (0): 1+6+0 = 07
    a. Put the ones' place in the output: 7
    a. Put the tens' place in the carry: 0
1. Add the next digits and the carry (0): 4+7+0 = 11
    a. Put the ones' place in the output: 17
    a. Put the tens' place in the carry: 1
1. Add the next digits and the carry (1): 1+8+1 = 10
    a. Put the ones' place in the output: 017
    a. Put the tens' place in the carry: 1
1. Add the next digits and the carry (1): 3+9+1 = 13
    a. Put the ones' place in the output: 3017
    a. Put the tens' place in the carry: 1
1. Add the next digits and the carry (1): 0+0+1 = 01
    a. Put the ones' place in the output: 13017
    a. Put the tens' place in the carry: 0
1. Add the next digits and the carry (0): 0+0+0 = 00
    a. Put the ones' place in the output: 013017
    a. Put the tens' place in the carry: 0

... and so on until we are tired of adding 0s
:::

:::example
Add in base two

To add 1100 + 0101 we do the following:

1. Add the last digits and the carry (0): 0+1+0 = 01
    a. Put the ones' place in the output: 1
    a. Put the twos' place in the carry: 0
1. Add the next digits and the carry (0): 0+0+0 = 00
    a. Put the ones' place in the output: 01
    a. Put the twos' place in the carry: 0
1. Add the next digits and the carry (0): 1+1+0 = 10
    a. Put the ones' place in the output: 001
    a. Put the twos' place in the carry: 1
1. Add the next digits and the carry (1): 1+0+1 = 10
    a. Put the ones' place in the output: 0001
    a. Put the twos' place in the carry: 1
1. Add the next digits and the carry (1): 0+0+1 = 01
    a. Put the ones' place in the output: 10001
    a. Put the twos' place in the carry: 0
1. Add the next digits and the carry (0): 0+0+0 = 00
    a. Put the ones' place in the output: 010001
    a. Put the twos' place in the carry: 0

... and so on until we are tired of adding 0s
:::

This algorithm is just three 2-bit adders per bit,
where a 2-bit adder is an [and]{.smallcaps} and an [xor]{.smallcaps},
where each of those is just a few switches.

We don't have to stop there.
Subtraction is a lot like addition;
multiplication uses a 1-digit multiplication table (which in binary is just an [and]{.smallcaps} gate)
and a bunch of additions;
and so on.


# Gates to Muxes

In a programmable computer, we often want to pick an option based on an input.
For example, we want to add if we see a `+` but subtract if we see a `-`.
Picking complicated things like that will be built off of picking a single wire,
a tool that is called a multiplexer or mux.

A mux has 3 inputs:
two things to pick between
and one to use in picking one of them.
We can write this out as a truth table:

<style>.r { color: red; } .g { color: green; }</style>


 S   [A]{.r}   [B]{.g}   mux (A, B) using S
--- --------- --------- --------------------
 0   [0]{.r}   [0]{.g}       [0]{.r}
 0   [0]{.r}   [1]{.g}       [0]{.r}
 0   [1]{.r}   [0]{.g}       [1]{.r}
 0   [1]{.r}   [1]{.g}       [1]{.r}
 1   [0]{.r}   [0]{.g}       [0]{.g}
 1   [0]{.r}   [1]{.g}       [1]{.g}
 1   [1]{.r}   [0]{.g}       [0]{.g}
 1   [1]{.r}   [1]{.g}       [1]{.g}

Note that in this table, the result us the same as A when S=0
and the same as B when S=1.

We could try to find switches for this entire set of inputs,
but it's much easier to just use gates.
(([not]{.smallcaps} S) [and]{.smallcaps} A) [or]{.smallcaps} (S [and]{.smallcaps} B)
will give us the result we want:

 S   [not]{.smallcaps} S   [A]{.r}   [B]{.g}   ([not]{.smallcaps} S) [and]{.smallcaps} A   S [and]{.smallcaps} B   (([not]{.smallcaps} S) [and]{.smallcaps} A) [or]{.smallcaps} (S [and]{.smallcaps} B)
--- --------------------- --------- --------- ------------------------------------------- ----------------------- --------------------------------------------------------------------------------------
 0            1            [0]{.r}   [0]{.g}                      [0]{.r}                           0                 [0]{.r}
 0            1            [0]{.r}   [1]{.g}                      [0]{.r}                           0                 [0]{.r}
 0            1            [1]{.r}   [0]{.g}                      [1]{.r}                           0                 [1]{.r}
 0            1            [1]{.r}   [1]{.g}                      [1]{.r}                           0                 [1]{.r}
 1            0            [0]{.r}   [0]{.g}                       0                               [0]{.g}            [0]{.g}
 1            0            [0]{.r}   [1]{.g}                       0                               [1]{.g}            [1]{.g}
 1            0            [1]{.r}   [0]{.g}                       0                               [0]{.g}            [0]{.g}
 1            0            [1]{.r}   [1]{.g}                       0                               [1]{.g}            [1]{.g}

:::aside
Cognitive Overload

At this point (and possibly long before it) you are probably feeling overwhelmed and lost.
Even if you can work through every line in the table above,
you're probably still wondering where it all came from
and why it is the way it is
and feeling lost and confused.

This is normal.

If you were learning to be computer engineers,
you would have spent at least a few weeks getting to this point,
learning about tricks you can do with truth tables
and properties of different gates
and notation for combining them
and so on and so forth.
We skipped all of that, which leaves you feeling overwhelmed and confused.

What should you be taking away from all of this so far?
That the steps, though strange seeming and with somewhat opaque goals,
can be understood.
There's no magic, there's just one step after another
and a fair amount of someone figuring something out and everyone else just learning that thing.
The details of the specific things learned are not the point here.
::: 

# And so much more

Registers are a kind of high-speed memory
that is designed by connecting the inputs and outputs of specific gates
in a loop that can store one bit at a time.

Gated^[Here "gate" does not mean a few-input one-output collection of switches; instead if means "there's a barrier that prevents things usually but can be opened sometimes".] registers use a few more gates
to add a special "clock" input that makes them ignore their input except at specific moments in time.
They allow the entire processor to operate in synchronized steps,
doing one thing to conclusion before the clock ticks and they move on to the next thing.

A counter is a gated register with its output run through a "+ 1" computation
and put into its input, causing it to count up by one each time the clock ticks.

A variant on muxes lets us do indexing or addressing,
picking not between just two things
but between billions of things stored in a giant grid of register-like storage
we call "memory".

In memory we put a sequence of instructions.
By having the selector that picks a value out of memory
be the output of a counter, we see the instructions one at a time in order.

Instructions (which are many bits in size) are broken into groups of bits
which are used to pick which values to operate on (by using them as selectors for memory)
and what operation to do with those values (by using muxes to pick one arithmetic circuits outputs to keep).

Some instructions use a mux to pick whether to let the counter act like normal
(moving from one instruction to the next)
or to change the counter to a new value.
This allows the program to run through the same set of instructions several times in a loop,
jump to a set of instructions of interest and later jump back,
and otherwise do much more complicated things then simply doing a specific set of actions in order.

And each of these ideas has multiple variants,
ways of being more complicated and faster and fancier
in ways that make new computers able to run faster than old ones.

# How computers are built

Most processors are made from silicon transistors.
The basic steps are:

1. Make a single monocrystal of 100% pure silicon the size of a small tree trunk.
2. Slice it into perfectly smooth wafers.
3. Cover the wafer in a photoreactive chemical.
4. Use a super-accurate microprojector to expose some of it to light and others not.
5. Wash it with something that cleans off the exposed parts but not the unexposed (or vice-versa).
6. Repeat steps 3--5 with different materials to build up the full computer chip.

There are variants on this process,
but the overall design (atomically-perfect silicon crystals and microscopically-accurate light delivery)
allows creating chips of mindbogglingly tiny dimensions.
Entire transistors may be no more than a few hundred atoms across^[Chip component sizes are measured in nanometers, not atoms, but most of us have no concept of how small a nanometer is. The atomic radius of silicon (the principle element in most chips today) is about .11 nm and silicon bonds with itself at about 4.3 atoms per nm.].
That extreme small size has three big benefits:

- The smaller the transistor, the more we can fit on a chip.

    More transistors implies more things the computer can do at the same time.

    Moore's Law predicts that the number of transistors on newly-produced computer chips
    will double every 2 years, and [has proven true](https://ourworldindata.org/grapher/transistors-per-microprocessor) for more than 50 years,
    resulting tens of billions of transistors per chip on modern computers.
    
- The smaller the transistor, the less energy it takes to push current through it.

    This means that the electricity per unit of computation decreases as transistors shrink.
    
    This is not a perfectly smooth relationship: two chips with the same transistor size might use very different amounts of energy.
    But it is a strong overall trend.

- The smaller the transistors, the faster each computation can complete.
    
    Nothing can go faster than the speed of light.
    But computers run in the multiple GHz speed range,
    meaning they do multiple entire arithmetic computations
    each nanosecond^[1 GHz means 1 thing per nanosecond. Common computers today have a clock speed somewhere around 3 GHz, meaning they do 3 steps of computation (roughly a many-digit addition) each nanosecond].
    A nanosecond is roughly the time it takes light to travel 1 foot^[The speed of light is exactly 29.979246 cm per ns].
    Information in a computation needs to travel back and forth across the chip in a non-straight path,
    and doing work (like changing from low- to high-voltage) takes time beyond what information flow does.
    The smaller the chip components get, the less time it takes information to flow across them.

<details class="aside"><summary>Moore's Law</summary>

In 1965 a reporter writing for Electronics Magazine
asked Gordon Moore, director of R&D at Fairchild Semiconductor,
to predict the future of semiconductors over the next ten years.
Moore observed that the number of components per chip had been doubling each year
and predicted it would continue doing so for the next ten years.

![Gordon Moore in 1978, 13 years after coining "Moore's Law" and 10 years after co-founding Intel. Ⓒ Intel Free Press, CC-by-sa license, [hosted by wikimedia](https://commons.wikimedia.org/wiki/File:Gordon_Moore_1978_(cropped).png)](https://upload.wikimedia.org/wikipedia/commons/e/eb/Gordon_Moore_1978_%28cropped%29.png)

This doubling claim was was a bold enough to make some impact,
but likely would have faded in importance quickly
had not Carver Mead, one of Moore's collaborators at CalTech,
named it "Moore's Law" and that term often enough that it became common.

In 1975 Moore revised his prediction from doubling every year
to doubling every two years, which has been a roughly accurate prediction ever since.
Arguably this is partially a self-fulfilling prophesy:
it has held for so long that chip manufacturers expect someone will find a way to keep it up
and don't want to fall behind, so they set it as an internal goal driving design and development.
User-visible chip performance, realized in part by transistor count increases, improves much more slowly.

The success of Moore's Law, both as a name and as a prediction,
has led to a variety of spin-offs and variants.
It is common to hear a wide variety of exponential-growth predictions
related to computers being called "Moore's Law,"
even if the prediction being discussed is about speed, power, size, concurrency, cost, or almost anything else.

</details>
