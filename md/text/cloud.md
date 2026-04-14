---
title: The Cloud and X-as-a-Service
...

# The Cloud

What does it mean for something to be
"in the cloud",
"cloud-native",
"cloud-based architecture",
or the like?

"The Cloud" isn't a formally-defined thing.
However, it generally suggests the following ideas:

Data is stored on remote computers and accessed via the Internet.
The exact location of data is not fixed; there may be multiple copies stored in different locations.
Additional copies can be created to support intense levels 

Most code is also stored and run remotely.
Typically there is a small amount of code that is run on users' machines,
usually limited to basic user interaction rather than more involved computation
and generally sent to the user anew each time they use the app.

Both the code and data are stored on and served by computers that have many cloud apps they host.
This shared nature is a key part of the cloud.
Most apps have bursty usage patterns with short periods of heavy use and long periods of little to no use.
By having many different apps running on the same hardware, the bursts of activity of one app are likely to align with down times of others,
allowing much higher overall hardware utilization.

<details class="aside"><summary>The origin of the cloud</summary>

In the US, a great deal of shopping occurs the day after thanksgiving, colloquially called "Black Friday."
In the 1990s, Amazon became a successful online retailer
but many people did not have sufficient Internet access to use it effectively from home.
When they went to work the Monday after Black Friday they used their work computers to visit Amazon and do the shopping they hadn't gotten done on Black Friday.

Amazon wanted to support this huge increase in shoppers on that one day,
and to do so bought many more servers to keep up with all their traffic.
But the rest of the year, those servers were mostly sitting idle;
So they decided to lease those computer out,
letting other people store data and run code on them
the rest of the year.
This became the first incarnation of what is now called Amazon Web Services
and the first instance of what we now call "the cloud":
large numbers of computers owned by one company
and letting people buy space and application runtime on them.

</details>

Because cloud-based apps are running on computers shared with many other cloud-based apps,
there is a need for each app to be isolated from others.
This has led to the rise of "virtual machines" and "containers,"
two different ways to make an app think it is running on a computer of its own
when it fact it is being run on a computer that is also running many other apps at the same time.

# Service architectures

(section to appear later)
