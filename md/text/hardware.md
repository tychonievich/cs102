---
title: Hardware
...

[<dfn aria-describedby="hardware">Hardware</dfn> is a term used for physical machines that process information and make p a computer.]{#hardware}
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

# Processors

[<dfn aria-describedby="processors">Processors</dfn> are hardware that perform arithmetic and other computations.]{#processors}
By far the most common processor technology today
uses electricity for information
and microscopically-small silicon-based semiconductor components to implement the machinery.
But that's just because those are fast and cheap; the same ideas can be built using much larger, more easily visualized components as well.

Processors use some kind of pressure to represent 1 and its absence to represent 0.
Commonly, this is electrical pressure, also called voltage,
but we could also use something else like water pressure if we wanted.

Processor work by letting that pressure flow through established channels.
Commonly, this flow is electrical current through wires,
but it could be something else like water current though pipes if we wanted.

The key component that lets processors work is two kinds of pressure-activated switches,
called transistors in an electrical setting or valves in a water setting.
One type of switch connects two channels into one when pressure is applied and disconnects them when it is removed;
the other type does the converse, disconnecting two channels when pressure is applied and connecting them when it is removed.
Both have some kind of [<dfn aria-describedby="threshold">threshold</dfn> pressure, a pressure strong enough to activate the switch]{#threshold}, and some noise or variation in individual switches;
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

# Memory

# Storage

# Networks
