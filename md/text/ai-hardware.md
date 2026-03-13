---
title: AI hardware and memory
...

The traditional <abbr>CPU</abbr> (Central Processing Unit)
that runs most of the computer and phone apps you are used to
is designed to run long sequences of interdependent and conditional operations quickly.
If you describe as task as "first do 𝑥, then do 𝑌, ..." then a CPU is the right tool for the job.

In the 1980s there started to be interest in alternative processors
that were optimized for a different type of task.
The most successful of these was the <abbr>GPU</abbr> (Graphics Processing Unit)
which was originally designed specifically to create 3D graphics.
3D graphics runs the exact same operation many many times,
originally by breaking a 3D model into millions of tiny triangles
and finding which pixels each triangle covered.
As GPUs developed, they moved past just graphics;
nowadays if you describe as task as "first do 𝑥 a million times with different inputs each time" then a GPU is the right tool for the job.

The main operation performed by LLMs is evaluating linear operators.
Linear operators are big lists of numbers multiplied by big lists of numbers.
This is a perfect fit for a GPU.

# How GPUs work

GPUs use a model called <dfn>Single Instruction Multiple Data (<abbr>SIMD</abbr>)</dfn>.
The idea here is that one control unit
(the part of the processor that decides what to do next)
controls a big list of registers
(the part of the processor that stores information it is working on)
each with its own ALU
(the part of the processor that does math and related work).
Because there's just one control unit for all ALUs,
they have to work in lock-step:
if one multiplies, they all multiply; if one adds, they all add; and so on.

:::example
In a SIMD kitchen, only one chef has the recipe
but many cooks each have their own set of ingredients, cookware, etc.

1. The chef calls out "grab the ingredient in the large bowl"; every cook does so.
2. The chef calls out "stir for 2 minute"; every cook does so.
3. ...

If every cook had the same ingredients, the result will be many copies of the same prepared dish.
If each cook had different ingredients, the result will be many different dishes,
though finding steps for the cook to call out that make sense for many different ingredients is tricky.
:::

Some parts of programming are not very suitable to GPU-style execution.
Selection generally doesn't work,
and repetition only works if every ALU needs to repeat the same number of times.

GPUs also generally prioritize high <dfn>throughput</dfn> (the total number of instructions completed over a large time window) over low <dfn>latency</dfn> (the time between one instruction being issued and completed).
If you tried to run common apps on the GPU they'd seem very slow because most apps need low latency to seem responsive;
but for specific tasks like (running an LLM or rendering a 3D game) the throughput of GPUs easily outstrips the low latency of CPUs.

:::example
A package delivery company that prioritizes high throughput
might let some packages stay in the depot for a long time
while focussing on groups of packages that are going to similar destinations and can be delivered together.
This company might boast of how many packages it delivers each year.

A package delivery company that prioritizes low latency
always focusses on delivering the package that's been in the depot the longest next.
This company might boast of how little time passes between an order being placed and the package being delivered.
:::

# FLOPS / Watt

At their core, LLMs perform trillions of multiplications and additions for each word they produce;
as a rule of thumb, they do one multiplication and one addition per parameter in their underlying ANN model.

As of March 2026, high-end LLMs have between 400 billion and 4 trillion parameters.

Before LLMs, the usual measure of computation power was <abbr>FLOPS</abbr>,
standing for <dfn>FLoating-point Operations Per Second</dfn>,
where a floating-point operation is a single math operation (addition, multiplication, etc.) on a non-integer number.
With LLMs, the "per second" part is seen as less important that the energy used
(to run a data center you pay for electricity, not time)
so the common unit is "FLOPS / Watt"
where a Watt is a measure of power (energy per time).
FLOPS / Watt = operations / Joule.

As of March 2026, high-end GPUs have something shy of 100 billion FLOPS/Watt.

Combining these, current high-end LLMs running on new high-end GPUs consume in the neighborhood of between 5 and 50 Joules per word they produce.
The average American consumes about 12,000 kWh per year in total,
or about 1400 Watts;
this includes heat, cooling, electricity, vehicle fuel, energy used by companies to produce and ship products that we consume, etc.
This suggests that if we had LLMs produce between 30 and 300 words per second per person
that would double our overall energy use.

Is that realistic? Could we possibly use 30 (let alone 300) words per second?

If humans were reading all of those words, no.
Humans can generally only read about 3–5 words per second.
But current LLM systems mostly produce words that are not read by humans
but instead by other programs and LLMs. 

If we ask an LLM to find what we should ask an LLM,
and use an LLM to refine its response,
then have an LLM generate inputs to a program,
run that program and have an LLM summarize the program's output,
then ask the LLM to write a program,
ask an LLM to review the code of the program it wrote,
ask an LLM to change the code based on the review,
ask the LLM how to run the program,
run the program that way and have an LLM summarize the program's output,
and so on and so forth...
then 300 words per second can easily be not only achieved but vastly exceeded.

# Memory and Silicon

As of March 2026,
common phones and personal computers in 2026 use 4–32 GB of memory;
storing just the parameters of a high-end LLM model requires roughly 100× that much memory.
Every piece of that memory needs to be accessed for every word the LLM produces,
meaning it all needs to be high-speed for effective LLM operation;
we can't do what we do for computers and put the less-used parts in some cheaper place like disk
because that would slow down the LLM by a factor of a hundred or more.

This has created a huge spike in the demand for high-capacity, high-speed memory.
Not only do we need many more computers to run all the new LLM workloads,
but each one needs a hundredfold more memory than was common for computers before.

Memory (and CPUs and GPUs and many other computer components)
is created as follows:

1. Grow a large, pure silicon crystal called a <dfn>boule</dfn>.
    A single boule is often a foot (30cm) across and a meter or more long.

2. Slice the crystal into thin, perfectly smooth wafers.

3. Coat the crystal in a photoreactive material called a mask.

4. Use highly focussed light to weaken the mask in bands only a few molecules across.

5. Wash away the weakened parts of the mask, leaving a mask with holes in it.

6. Expose the material to a substance that reacts with or binds to the silicon, but not the mask.

7. Wash away the mask.

8. Repeat steps 3–7 with a different pattern of light in step 4 and a different substance in step 6 each time, building up molecular-scale transistors, capacitors, wires, and related microelectrical components.

9. Cut individual <dfn>chips</dfn> out of the wafer (typically many are placed on one wafer).

10. Add macro-scale wires called <dfn>pins</dfn> to the sides of the chip which can be used to power it, send it inputs, and detect its outputs.

The entire process is complicated, time-consuming, expensive, and can fail at almost any step.
For example:

- (step 1) Because the transistors measure only a few molecules across,
even a single non-silicon atom in the original crystal can ruin a memory or processor chip
which makes even getting started expensive challenging.

- (step 4) Focusing light on areas that are smaller than the wavelength of a single photon
requires either high-energy photons or advanced lenses.
and so on.

Because of the complexity of this process, it was largely developed under the assumption of an open global trade network,
with the equipment needed for different steps manufactured in specialized labs in different countries
and used in a few dedicated companies that create chips for many other companies' based on those companies' designs.
With the degradation of global trade in the last decade,
many countries are racing to try to replicate this entire supply chain within their own borders,
with the usual losses of efficiency that comes from such decentralization and unspecialization.

:::example
Taiwan Semiconductor Manufacturing Company (TSMC) is the single largest manufacturer of high-end computer processors
and creates many of the highest-end products for
AMD, Apple, ARM, Broadcom, Intel, MediaTek, NXP, Qualcomm, Nvidia, Texas Instruments, among others.
Though some companies that use TSMC can also produce their own chips (such as Intel, NXP, and Texas Instruments),
most don't have the ability to make their own chips at all,
relying on TSMC or similar companies for all their chip production.
Because companies often contract with a single chip producer to create a single product,
it is very likely that any high-end computer you buy has both its CPU and GPU produced by TSMC.

Memory production is more diverse than processor production,
in part because there's generally more market for slower chips using larger transistors and less delicate manufacturing processes
and in part because memory is far more interchangeable than processors.
That said, SK Hynix and Samsung (both headquartered in Korea) and Micron (USA) together account^[You can find many different market ratios claimed online; the numbers here are aggregated from how three leading LLMs summarize diverse Internet sources, and align with other sources I consulted.] for over 90% of the memory produced worldwide.
:::

