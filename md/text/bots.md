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
GPS^[<abbr>GPS</abbr> stands for Global Positioning System and is also the name of the first satellite network using its ideas, owned by the US government. Other agencies have also deployed similar satellites, and the general term for all such systems is Global Navigation Satellite System (<abbr>GNSS</abbr>).] is based on four satellites broadcasting their position and the current time.
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

But what good is it to an attacker to take over your doorbell?
They might be able to harass you by making it ring all the time and try to get a payoff to make them go away,
but if that happens you're likely to just disconnect the device and report it to the manufacturer.
More likely, they'll incorporate your device into a bot net.

A <dfn>bot net</dfn> is a collection of attacker-compromised devices
that are connected to the Internet and can be used to mount other kinds of attacks.
One of the most common such attacks is a <dfn>distributed denial of service</dfn> (<abbr>DDOS</abbr>) attack,
where a website is shut down by overwhelming it with a very large number of simultaneous requests,
more than their servers can handle.
If one computer creates all of the requests then the IP address of the computer can be identified and blocked,
but if the requests are coming from a million different doorbells, thermostats, refrigerators, and other household devices
then figuring out which are malicious and which are not is very difficult.

All of that said, from your experience as a smart device user
the risks are fairly low.
While it is likely that your device is part of a bot net
and being used to attack others,
that fact is unlikely to impede its functioning in your home:
in fact, the attackers likely *want* it to keep functioning so that you keep the device,
recommend that your friends buy the same device,
and they have more devices to add to their bot net.


# Robots

The word <dfn>robot</dfn> entered English in 1923 and derives from the Old Slavic word for slave.
It originally referred to mechanical people who differed from humans in
being stronger and more intelligent than us but in having no soul and thus no moral prohibition to being enslaved.
For many years the idea was limited to science fiction,
but with the advent of more advanced machinery it gained new use
referring to machinery that did "advanced" or "human-like" work;
and from there has been extended to most systems where a computer
is attached to sensors and actuators
to enable its interaction with the physical world.

Robotics is a large field, and much of it focuses on the hardware used
and the software that controls that hardware.
Often an advance in robotics comes with the combination
of new hardware that can do things previous hardware could not
and new software that uses those operations to solve new problems,
but perhaps more important than either is the recognition that a robot could help with a new task.

:::example
The First Roomba

In 2002, iRobot released its first Roomba, a robot vacuum cleaner that became the first commercially-successful home robot.
Later Roombas and other robots have more involved algoritmhs, but the first one was quite simple.

The device had four main sensors:

- A bumper on its front that detected when it ran into something.
- Infrared proximity sensors that detected when it was near a solid surface, of two kinds:
    - wall sensors on its sides, and
    - a "cliff" sensor under its front bumper.
- A microphone in its vacuum intake.

These were used to implement four basic behaviors:

- Spiral outward from an initial point until one of the sensors indicated a different action.
- If the side sensors detect a wall, follow that wall for a randomly-chosen distance.
- If the front bumper or cliff sensor detects and obstacle, rotate a random amount and move a random distance.
- If the microphone detects the sound of debris rattling down the vacuum intake, go in a small circle to clean that area again.

This simple algorithm meant that no expensive or fragile sensors were needed
and the computer running on the device could be inexpensive and low-power,
helping keep the device affordable and sturdy.
It was used for 8 years before being replaced by more complicated algorithms
backed by more comprehensive sensors.
:::


## Bugs and robots


A bug in a computer that is only connected to a screen and other computers has limited potential for harm;
a computer that can move things has greatly heightened risks.

<details class="example"><summary>Therac-25: computer bugs as the cause of death</summary>

In the 1980s, a cancer radiation treatment machine called the Therac-25
was created that worked well in most cases.
But it had an error in how it showed error messages to the operator,
which could cause an operator who pressed `x` for X-ray instead of `e` for electron
and then corrected that quickly
before pressing `b` for emit beam
showed an error message suggesting the beam was not emitted
when in fact it was, resulting in the operator trying again and sending another dose of radiation into the patient.
Additionally, if the time gap between `x` and `e` was less than 8 seconds,
the incomplete X-ray selection interacted with the electron selection
to open the machine to full power, which was roughly 100× more powerful than is appropriate for this kind of therapy.
The result was pain, burnt flesh, and sufficient radiation to create lethal radiation sickness.

This exact set of actions happened rarely, and radiation sickness can take a few months to result in death,
both of which contributed to this bug taking 2 years of operation and 6 patient deaths before the error was identified and corrected.

</details>

One of the challenges in trying to prevent these kinds of harm
is that they are generally unexpected.
We have developed intuition about what kinds of human conditions and behaviors are riskier than others,
but that intuition does not generally apply to robots.
Efforts to make robots safe often focus more on processes that are believed to reduce the risk that bugs would be overlooked than they do on specific technical innovations that make the software bug-free or the robots innocuous.

# Self-driving cars

One of the largest and most visible class of robots is self-driving cars.
Their actuators are generally understood by most drivers:
an accelerator, a brake, a steering wheel, and turn signals.
Their sensors have more variety:

Cameras
:   Roads contain many visual signals based on color, such as signs and painted pavement.
    Detecting these requires cameras.
    
    Machine vision often relies on artificial neural networks, similar to the core of LLMs,
    but with vision-based adjustments instead of the text-based encoders, decoders, and transformers of LLMs.
    Notably, they do not perceive the way that humans do.
    The kinds of "optical illusions" that fool humans don't fool computers,
    and the ones that fool computers don't even look like illusions to humans.
    This means that relying primarily on vision to navigate (as humans do)
    leads to mistakes humans cannot understand.
    They also make mistakes that humans do understand in foggy or other low-visibility situations.

LiDAR
:   LiDAR is short for Light Detection and Ranging
    and uses pulsing scanning lasers and high-speed cameras sensitive to the lasers' wavelength
    to create 3D models of the environment surrounding the car.
    
    LiDAR essentially solves millions of trigonometry problems a second:
    given a laser in one location and its light seen by a camera at a particular angle, where in 3D space is that point?
    It works very well, but can be fooled by things that reflect some light and let other light through
    such as heavy snow, blowing dust, and falling leaves.
    
    LiDAR hardware is expensive and can be somewhat delicate.
    

Radar
:   Radar bounces radio waves (which are long-wavelength low-energy light) off of objects
    and uses the time taken for the bounce to determine distances
    and the dopler shift in the light to determine relative velocities.
    
    Because radio waves are long-wavelength, they cannot see small things.
    This can be both good -- they aren't fooled by snow like LiDAR is --
    and bad -- they can't make out any kind of details, including not being able to tell what they detected, only that they detected something.
    

Sonar
:   Sonar emits beeps of sound too high for humans to hear it
    and uses how long it takes for an echo of the sound to return to detect the distance of objects.
    
    Sonar is very inexpensive, allowing many sensors to be distributed across the car.
    However, its effective range is limited to just a few meters.


GPS
:   As noted in an example [above](#computed-precision),
    GPS uses precise times broadcast from satellites to determine location on the planet.
    All major self-driving cars use GPS rather than road signs to plot paths for the car to follow.
    
    GPS only works when it can detect signals from multiple satellites simultaneously.
    This makes it ineffective in tunnels and underpasses that block satellite signals.
    It also only is only as up to date as the maps it stores.


Accelerometers and Gyroscopes
:   Accelerometers and gyroscopes can be used to detect the vehicle's motion.
    This is more accurate than steering wheel position and tire speed which can be fooled by slippery roads and strong winds,
    but both methods accumulate error over time
    and are primarily used for (hopefully brief) times when the car is inside a tunnel or otherwise cannot see enough GPS satellites for GPS to work.


Microphones
:   Vehicles behave differently when they hear sirens then when they do not.
    Self driving cars thus need microphones to hear sirens with.


Internet
:   GPS by itself only tells a car where it is on the globe.
    Paired with the Internet, it can be updated with traffic alerts
    and with the shared GPS locations of other cars,
    helping it know if there's an upcoming traffic jam or diversion.
    

A great deal of the work done by self-driving cars
is combining these inputs into a single cohesive model of the environment around the car.
That model needs to be quite complex:
not just the car's position in the road,
but also detecting and distinguishing between
pedestrians, animals, and blowing leaves and litter;
road markings and graffiti;
emergency vehicle lights and Christmas trees;
poorly-maintained roads and impassible obstacles;
and so on.
We've had cars that can drive in most situations correctly
for many years, but the difference between most and all is key to their safety and ability to go beyond the best-maintained roads.

