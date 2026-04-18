---
title: Robots, agents, scripts, and automation
...

A great deal of computing is focused on manipulating information that is already digital into new forms,
but computers also interact with the physical world.
This page overviews some of those physical interactions,
sometimes called "cyber-physical systems" or "internet of things.

# Digital replacements of analog tools

One class of cyber-physical systems is a computer replacing an analog system without adding extra features.

:::example
Many microwaves have a computer backing buttons and a display
that do just three things:

- Sets a timer
- Sets a power between 0 and 100%
- Names some presets of power and time

These can be done just as well using two analog knobs with preset markers around them.
Even microwaves that have scales and humidity sensors for fancier presets
could be made analog with the same components.
:::

Switching to being digital with a computer backing them offers several advantages:

- Computers are general purpose so they can be mass produced and used in many applications.
    This can be more economical that using custom-built analog controls for each device.

- Software is much easier to update than hardware.

- Digital devices look newer and help sell devices better.

- Unrelated extras can be added to make devices more multipurpose,
    like a microwave doubling as a clock or a thermostat doubling as a security camera.

On the other hand, computers are generally much less secure than other devices
and special-purpose devices like doorbells and locks
tend to get fewer updates (and thus be more vulnerable to cyber attacks)
than general-purpose devices like laptops and phones.

# Computed precision

Computers can compute.
We often use that computation to create other kinds of behaviors,
but sometimes the computation itself -- the ability to find the result of non-trivial mathematical expressions -- is valuable in and of itself.

:::example
GPS is based on four satellites broadcasting their position and the current time.
Because the signal takes time to travel, differences in the times stated and the time they are received
can be used to create a system of four equations in four unknowns: the latitude, longitude, and altitude of the GPS receiver
and the current time.

We can design analog systems to solve system of equations,
but only if those equations are fairly simple.
These equations are not simple:
they depend not just on distances (and hence square roots)
but also on the time dilation^[In Special Relativity, the faster you move the more time you have. GPS satellites orbit fast enough to have about 7 more milliseconds per day than the earth does.] caused by fast-moving satellites,
and the unequal time progression^[In General Relativity, gravity is caused by mass generating time. GPS satellites are far enough from the earth to have about 45 fewer milliseconds per day than we do on the surface of the earth.] that creates the Earth's gravitational field.

A computer is able to solve this system of equations with enough precision to power GPS tools.
:::

:::example
ASML is the company that makes the machines that make almost all modern computer processors.
Their machines focus X-rays with molecularly-smooth mirrors onto microscopic regions of silicon chips to create transistors that are only a few atoms across.
To create the X-rays, they melt tin and form it into a stream of tiny droplets, then shoot each droplet several times in a row with high-powered lasers to cause them to burst with controlled X-ray radiation.
To hit thousands of droplets a second without missing any and damaging the machinery behind them requires very precise computation of droplet position and speed and laser targeting,
and focusing the resulting X-rays on the right part of the silicon requires very precise positioning of the mirrors and silicon.
:::

In principle, computed precision does not require a general-purpose computer.
It is possible to encode the entire operation of these systems directly in hardware with no software needed.
Chips with a single purpose like this are called <abbr>ASIC</abbr>s (<dfn>application-specific integrated circuit</dfn>s),
and can be faster and use less energy than a general-purpose chip.
However, designing an ASIC has significant cost,
and because of Moore's Law older ASICs are less efficient then newer general-purpose computers;
because of these costs, ASICs are primarily used for devices that will be sold in large quantities and won't be integrated into a larger computer system.

# Smart <var>X</var>

You might have a smart thermostat, smart doorbell, smart home security system,
or another household application with "smart" added in front of its name.
In general, these devices have two properties beyond smart-less options:

- They have more sensors and more complicated computation.
    
    <div class="example">
    
    A regular thermostat turns heat on when the room is too cold and off when it is warm.
    
    A smart thermostat might also have occupancy sensors, predicted schedules,
    and a model of how long heating is likely to take given external temperatures.
    It sill turns heat on and off, but does so based on a more complicated set of rules.
    
    </div>

- They are connected to the Internet and allow for remote operation via IP connection.

    <div class="example">
    
    A regular thermostat has buttons or dials for setting target temperatures.
    
    A smart thermostat might have an app that can be used from anywhere to adjust those targets.
    
    </div>

Smart devices can have features not found on regular devices
that improve quality of life
and potentially also operational efficiency.
I've spoken with researchers suggesting that 20–50% of home energy usage
could be reduced by more intelligent automated decisions about when to turn devices off or on.

Countering these benefits is the fat that smart devices are also general-purpose computers
connected to the Internet
that are rarely updated, making them attractive targets for cyber attacks.
There have been so many reports of vulnerabilities in and exploits of smart devices
that I was spoiled for choices in which to highlight here.
A [web search](https://ddg.gg/smart+thermostat+botnet) will turn up dozens of examples,
including [news reports](https://www.forbes.com/sites/alexvakulov/2024/12/22/how-not-to-become-a-botnet-victim-a-practical-guide-for-everyone/),
[government vulnerability briefs](https://www.cisa.gov/news-events/ics-advisories/icsa-25-205-02),
[blogs summarizing attacks](https://blog.halonex.app/posts/threats-to-smart-thermostats.html),
and so on.


# Robots



# Self-driving cars



