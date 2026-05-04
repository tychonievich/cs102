---
title: Computer creation and supply chains
...

It is likely
that the computer you are using to view this page
was designed in the US
and built on silicon created in Japan
that was turned into a processor in Taiwan
using a machine built in Holland
with a part bult in Japan getting the design into the machine.
The memory chip in the computer was likely designed and created in Korea,
also using a Japanese piece of silicon and a machine from Holland with a key Japanese part.

# Design

Designing computer chips is a a complicated task,
but one done all over the world:
it requires care and thought, but it doesn't require vast physical infrastructure.
Many of the leading chips that run phones, servers, laptops, and tablets
are designed by companies in the US^[Notably Intel, NVIDIA, and AMD],
but certainly not all of them^[A notable exception is ARM in England, which designs Apple's processors and many phone and tablet chips.].

One of the major obstacles to the success of new hardware designs
is the supporting software, infrastructure, and marketing.
I often read reviews of new hardware designs
that note their superiority over designs by established designers,
yet advise the reader to stick with the established designs instead
because of the available software ecosystem.


# Silicon wafers

Modern computer chips have components that measure only a few atoms across.
That small size is essential: at the speed we run computers, even light can only travel about 2 inches per CPU clock cycle,
and performing the work of computation slows down electricity below that.
Electrons in chips with larger components simply cannot keep up.

At that scale, the base silicon must be entirely pure:
even a single non-silicon atom in the wrong place can ruin a chip's functionality.
While silicon itself is very abundant,
getting it that pure is very challenging.
Electronic-grade silicon is currently expected to be 99.999999999% pure,
with no more than one atom of another element per 100 billion silicon atoms.
Creating that involves converting the input silicon (often sand)
into a gas and then back into a solid in carefully controlled environment.

Given the pure silicon, it is then necessary to get it into a very regular molecular structure.
This is done by melting it and then slowly solidifying it into a single massive crystal
called a boule.
The boule it then sliced into wafers using diamond wire to create smooth, pure, uniform silicon substrates suitable for creating chips.

The silicon refinement and crystalization process is widely understood
and can theoretically be done anywhere,
but it is so sensitive to details of the manufacturing process that only a few companies have mastered it.
Five companies produce the vast majority of these boules:
Shin-Etsu and SUMCO in Japan,
GlobalWafer in Taiwan,
Siltroni AG in Germany,
and SK Siltron in Korea.
There are other suppliers (notably in Finland, China, and the US) but none that can meet even a noticeable fraction of global demand.

# X-ray lithography

Given a suitably pure, uniform, and smooth silicon wafer,
it is then necessary to add the electrical components that make up a chip.
This is done using lithography,
meaning the wafer is coated in photoreactive material
and then focused light shines on some parts but not others to make the desired components.
This process is repeated several times with several different materials to build up multi-layer circuitry.
The focused light allows miniaturization
by passing the light through masks that cast shadows on some parts of the wafer;
placing these masks in the path of the light before it is focused,
allowing the masks to be much larger (and thus easier to create) than the chip itself.

Light has a wavelength that limits the maximum focus it can achieve, and chips have components much smaller that the wavelength of visible light.
To get smaller components, shorter-wavelength (and thus higher-energy) light is needed;
since the 2010s that has meant light so energetic that it ionizes anything it passes through, making it impossible to focus with lenses.
Instead, it is focused with special mirrors which themselves need to be molecularly smooth,
but many mirrors are needed to get the right light focus
and since mirrors absorb some light that means the light source needs to be very bright.

To control diffraction when passing through the mask, all the light needs to have the same wavelength^[In particular, ASML machines use 13.5 nanometer light; for contrast, the atomic diameter of silicon is 102 nm and the shortest wavelength most humans can see is 390 nm.],
which means the photons need to all come from the same reaction of the same element.
This is done by shooting tiny droplets of molten tin with high-powered lasers
several times in a row
in a vacuum
at a precise location in front of the first mirror,
turning them into a plasma that emits the correct wavelength of light.

As of 2026, only one company in the world has successfully created machines that can create enough X-rays quickly enough with precise enough focus to generate modern computer chips at scale:
ASML in Holland.
It took ASML more than 30 years to go from the concept
to working machines that were able to produce chips at the scale needed for commercial viability^[That scale includes hitting 50,000 tin droplets per second 2 or 3 times each, raising their temperature to 40 times hotter than the sun; using rarified oxygen to clean the tin residue off the mirrors; and moving the silicon wafer and mask at 60 mph jerking back and forth at 20G with nanometer precision of resulting locations. Each of those tasks is a multi-year engineering marvel],
and so far no other company seems to be positioned to compete with them in the near future.
If the device you are using to view this page was created after 2015,
odds are it has *at least* two chips in it made with an ASML machine,
a CPU and a GPU.

# Fabrication

Given a chip design, a source of silicon wafers, and a lithography machine from ASML,
there remains two major hurdles for creating actual chips.

First, the lithography machine needs a mask to cast shadows on the right part of the chip.
Making that mask is a significant engineering challenge of its own,
requiring careful consideration of diffraction and precise manufacturing.
There are a few companies that can do this;
of the seven largest, four are in Japan and one each in the US, Taiwan, and Scotland.

Next, the chips themselves need to be created, a process called fabrication.
In principle this is as simple as putting the mask and wafer in the ASML machine,
but in practice it is much more complicated than that.
The environment must be kept perfectly clean,
the chips must be cut out of the wafer after they are printed,
the machine must be cleaned and maintained,
each chip must be tested to see if it was one of the unlucky ones that had an atom of impurity in the silicon wafer and thus doesn't work,
and so on.
Again, there's not great secret to these steps
but there are many of them and each one is very sensitive to details,
meaning it is very difficult to get the entire process right,
especially at the scale needed for commercial viability.

The vast majority of processor fabrication is done by three companies:
TSMC in Taiwan is by far the largest,
with Samsung in Korea and Intel in the US also both being quite large.
For memory chips, Samsung and SK Hynix in Korea have about 70% of the total market share,
with Micron in the US making up most of the rest.

