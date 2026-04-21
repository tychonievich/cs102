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
    and a [Patriot Missile hit the army that fired it](https://barrgroup.com/sites/default/files/case-study-patriot-missile-defects.pdf)
    both because the abstraction barrier
    between bits and numbers failed.

Algorithm
:   Unambiguously-defined steps to accomplish some task.

    Algorithms are generally described in terms of
    the problem they solve (or approximately solve in the case of *heuristics*),
    the data used to encode that problems inputs,
    and the steps used to compute the answer.

    The word "algorithm" is a Latinization of the name of [Muḥammad ibn Mūsā al-Khwārizmī](https://en.wikipedia.org/wiki/Al-Khwarizmi)
    who wrote books that helped Europeans adopt the ideas of algorithms with place-value numbers.
    Algorithms themselves long predate his work.

Analog
:   Often used to mean simply "not digital", or the part of the world that is not computers.

    Sometimes used to mean a signal with a meaning based on being analogous to (directly or naturally representing, not using symbols but more intrinsic properties like quantity or frequency) the thing is describing.

Arguments
:   Concrete values provided to a function or program in place of its *parameters*.

    The square root function has one parameter, the number to find the root of.
    In $\sqrt{2}$, the number $2$ is the argument to that function.

Artificial Intelligence (<abbr>AI</abbr>)
:   A field within Computer Science that works on algorithms that humans find to be "intelligent."
    Exactly what that means changes over time. Currently, it is seen to consist of
    
    - Things that can fool a human into thinking the computer is human, like chat.
    - Planning, picking actions based on an evolving and uncertain future, like playing games.
    - Summarizing, turning high-dimension inputs into low-dimension outputs, like naming what is in an image.
    - *Machine learning*.

Assembly
:   A textual representation of *machine instructions*.
    Also sometimes called "assembly code" or "assembler code."

Authentication
:   Identifying who someone is.
    This includes both user authentication through usernames, passwords, push notifications and the like;
    and server authentication though digital *certificates*.

Authorization
:   Identifying what an *authenticated* user is permitted to do.
    
    Course-grained authorization might look like a firewall: if you're permitted inside, you can do anything.
    Fine-grained authorization might look like an access control list: each user, resource, and action grouping might have its own permission control.
    
    The *principle of least privilege* is a widely-cited guide to picking an authorization scheme.


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

Blockchain
:   A family of related technologies for implementing a distributed indelible ledger,
    where in this context those words mean
    
    distributed
    :   shared by many users' computers with no central control
    
    indelible
    :   cannot be edited or erased once created
    
    ledger
    :   a list of structured entries with new entries appearing only at the end
    
    Each block consists of the hash of the preceding block,
    a transaction (typically moving virtual currency between accounts),
    and a signature from each user losing resources in the transaction.
    
    The chain of blocks found by starting from the most recent block
    and using hashes to identify each preceding block
    gives the full state of the blockchain.
    
    Most blockchains allow anonymous users
    and prevent one user from overwhelming consensus with a large number of voting accounts
    by making votes cost, typically using either *proof of work* or *proof of stake*.

Brittle
:   A characteristic of software, describing the difficulty of making changes
    or the likelihood that small-sounding changes will either break existing systems or require a large amount of work.
    
    Brittleness is usually accumulated over time as a form of *technical debt*.

Byte
:   A group of 8 *bits*.
    Equivalently, a group of 2 *hex* digits.
    Equivalently, a number between 0 and 255 (inclusive).

    When it is necessary to write out a byte for human viewing,
    it is traditional to write it as two hex digits;
    thus `0D` means a byte with the value thirteen
    and `F3` means a byte with the value two hundred forty-three.

Cache
:   As a verb, storing values to prevent the need to compute them again in the future.
    As a noun, the place where those values are stored.

    Caching is widely used to speed up operations that might otherwise be repetitive,
    such as *DNS* lookups or the bytes that make up image files used on many webpages.

Call
:   A colloquialism for invoking a *function*.

Categorical
:   A family of *AI* tasks where the output is one of a discrete set of options (labels, group membership, words, etc.), not *continuous* real numbers.

Classical AI
:   *Artificial intelligence* where humans designed the algorithms based on their understanding of the problem and how to solve it.
    Often contrasted with *machine learning*, though many successful AI systems use a mix of both.

Classification
:   A family of *AI* tasks where the output is *categorical* and the set of possible outputs is known during *training*.
    This is generally *supervised* learning.
    
    Examples might be "pick the next word" or "tell which person is shown in this image."

Clustering
:   A family of *AI* tasks where the output is *categorical* and the set of possible outputs is not specified but instead learned by the AI system.
    This is a form of *unsupervised* learning.
    
    Examples might be "organize these images into groups of similar images" -- the number of groups and what kinds of images belong in each is learned, not provided in the *training data*.

Certificate
:   In general, any document signed by a trusted party.

    Most often, a document that says the public key used by the legitimate owner of a specific URL.
    
    Certificates always include expiration dates
    because cracking signatures is a matter of time and computing power;
    adding an expiration date keeps people from using the same certificate long enough
    for others to crack it.

Ciphertext
:   The name for the output of an encryption (usually a *symmetric encryption*)
    and the input of the associated decryption.
    
    Ideally, it should be nearly impossible to convert from ciphertext to *plaintext* without knowing the encryption key.

Cloud
:   A name for applications and data that are hosted on shared computers rented by cloud providers to multiple users.

    Cloud hosting allows averaging out bursty usage patterns that most apps experience
    between many apps,
    keeping each server more uniformly busy and allowing fewer overall servers than if each app owned their own.
    
    Cloud providers often use *virutal machines* or *containers* to issolate different users' code and data.

Compiler
:   A program that converts source code written in a *programming language*
    into a sequence of *machine instructions* that can be *executed*
    by a specific type of computer processor.

    Typically, programming languages that use a compiler
    provide fewer abstractions and thus require more effort to program in than those that use an *interpreter*;
    but they also tend to create programs that run more quickly than those created for an interpreter.

Confidentiality
:   A property of secure communications that prevents people other than the intended recipient from knowing the contents of the communication.
    
    The most common tools for achieving confidentiality are *symmetric ciphers*.

Container
:   A lighter-weight way of isolating programs and providing the illusion of each running on its own computer than a *virtual machine*.

    In a container, each *system call* is checked by the container program
    and adjusted to simulate being on its own computer,
    but is then handled by the *kernel* of the computer running the container.
    This means (for example) that a program running in a container might have every effort to open a file
    pretend that one directory on the computer is the entire file system, preventing the program from even being able to refer to other program's files at all.
    
    Containers are widely used in *cloud*-based computing.

Continuous
:   A family of *AI* tasks where the output is one or more real numbers (a score, a grid of pixel intensities, etc.), not *categorical* data.

Dark web
:   A collection of websites that are only accessible via *Tor*
    and are not linked to from more visible *Internet* sites.
    
    Pages on the dark web are called "onion sites" and may be hosted by any Internet-connected device,
    and can be created and changed without notice or centralized control.
    Their *hostnames* are 56 random characters followed by `.onion`;
    these *URL*s are not accessible except through Tor.

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

Design
:   The high-level outline of how software approaches its tasks.
    This typically includes
    how the task is broken into parts,
    the major *algorithms* and *data structures* used in each part,
    and concrete decisions that realize *requirements* that could be met in several ways.

Detail Removal
:   One of two common forms of *abstraction*.

    The most common form of detail removal is to refer to a complicated set of actions
    by name instead of by the actions themselves.
    *Functions* are the primary tool for that form of detail removal.

    Another important form of detail removal is an *abstract data type*,
    which helps use build algorithms that do not depend too closely on the specifics of how we represent *data*.

Diffie-Hellman key exchange
:   A way for two parties to agree on a shared secret,
    such as the key used in a *symmetric cipher*,
    with no prior shared information over an insecure communication channel.
    
    The exchange uses three random numbers and one hard-to-invert function.
    One number is shared,  and one is kept secret by each party.
    Both parties apply the function to the two numbers they know (their secret number and the shared number)
    and share the results,
    then apply it again to their secret and what the other person shared.
    With the correct choice of function, this resilts in both having the same number at the end.

Digital
:   Represented or operating using a set of discrete symbols called digits,
    rather than using continuous or analog signals.
    
    Because of the prevalence of programmable general-purpose digital computers,
    "digital" is sometimes used as a synonym for "done with computers".

DNS
:   Short for "Domain Name System," a hierarchical mapping between *domains* and *IP* addresses.
    DNS also contains other related information, such as entries stating that one hostname is an alias of another.
    
    DNS lookups proceed with one query per domain in the hostname,
    starting with the last.
    Each request asks for an IP address of a *subdomain*;
    for example, to get the IP address of `grainger.illinois.edu`
    we ask `illinois.edu` for it.
    
    DNS is frequently *cached* to avoid needing to send all these IP lookup requests repeatedly.
    
Domain
:   A valid suffix of a *hostname*.
    For example, in the hostname `courses.grainger.illinois.edu`
    the domains are `edu`, `illinois.edu`, `grainger.illinois.edu`, and `courses.grainger.illinois.edu`.
    
    Typically, *DNS* performs one IP lookup per domain.

Encrypt
:   To hide from most people's understanding using a cipher, most often a *symmetric cipher*.

Execute
:   Formally: load the *machine instructions* of a *compiled* program into memory
    and have the processor begin following those instructions.

    Informally, also used for running an *interpreter* on a program's source code
    or, less often, for invoking a *function*.

Exploit
:   A concrete use of a *vulnerability*, in most cases to enact crime.

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

    A function invocation requests that the actions in a previously-defined function be performed.
    If the function definition included *parameters*, the function invocation includes *arguments* to use for those parameters this time.

    The phrase "call a function" or "function call" is synonymous with "invoke a function" or "function invocation,"
    but with a stronger verbal *abstraction barrier*, referring to the function as if it were some external entity you call up
    instead of a set of actions you take.

Gate
:   An abstraction of a group of transistors that implement some simple operation on a few bits.
    
    The most commonly discussed gates are [and]{.smallcaps}, [or]{.smallcaps}, [not]{.smallcaps}, and [xor]{.smallcaps}.
    For some specific hardware cases, [nand]{.smallcaps} and [nor]{.smallcaps} are also used.

Gateway
:   A computer that is part of the *Internet*, engaging in routing messages between computers using *IP*;
    and is also part of a *network* of computers that are not part of the Internet themselves
    but gain access to it through the gateway.
    
    Gateways are the component of *ISP*s that separates them from other networks.

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
    $\sqrt[y]{x}$ is a two-parameter function that generalizes $\sqrt{x}$ to also compute other roots.

    Another common form of generalization is to add parameters to a *data structure*;
    for example by defining a generic "list of $x$" structure
    instead of a specific "list of integers" structure.
    Parameterized data structures have more variation in how they are implemented between programming languages
    than do parameterized functions, leading to them having many names:
    generics, templates, type parameters, mixins, etc.

Generative AI
:   A family of *AI* tasks that aim to complete a pattern, filling in the missing parts.
    Because this is generally *trained* on complete patterns, it is a form of *supervised* learning.
    It can be either *categorical* (such as when picking the missing word in a piece of text)
    or *continuous* (such as when picking the missing pixel color in an image).

GHz
:   The [SI abbreviation for "giga" meaning one billion](https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes) (G)
    followed by the abbreviation for Hertz (Hz) which means "per second,"
    together meaning "one billion per second."
    Commonly used to measure the clock speed of processors,
    roughly meaning how many billion arithmetic problems the processor can complete per second.

Hash
:   A function that turns arbitrary bytes into a fixed-size number
    where any change to the input has (with high probability) a different resulting number.
    
    Cryptographically secure hashes are quite large
    and it is very hard to find two inputs that give the same output.
    This allows these hashes to be used as unique fingerprints of arbitrary data,
    making them useful for *signatures* and *blockchains*
    as well as a tool for verifying the *integrity* of data.

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

Hill climbing
:   A technique used to *train* a *machine learning* model by
    
    1. Picking a random function
    2. Analyzing in what direction each parameter might need to change for that function to better match the *training data*
    3. Picking a new function with parameters moved in that direction
    4. If the new function is not good enough, return to step 2

Hostname
:   On part of a URL, in particular being between the `://` and the following `/`.
    The hostname identifies a single computer and can be converted to an *IP* address using *DNS*.
    
    Because every hostname is a valid *domain*, it is common for "domain" to be used as a synonym for "hostname" when the difference is not important.

Information
:   Usually, "information" is used in a loose, human way to refer to the human-understood meaning carried by data.

    The information that I am 20 years old could be conveyed by various data:
    the text "I'm 20",
    the bits 00010100 in a location where age values are expected,
    the difference between the current date and a birthdate,
    etc.

    Less often, "information" is used as a technical term for the bits of some digital communication that could not be anticipated,
    an important concept in designing efficient networking, compression, and storage technologies.

Integrity
:   A property of secure communications that ensures messages are not modified in transit,
    or at a minimum that if they are that change can be detected.
    
    The most common tools for achieving confidentiality are *hashes* (which detect changes) and *symmetric ciphers* (with make making a specific change almost impossible).

Internet
:   The Internet is a collection of computers using *IP* and *DNS* to connect computers in a mostly-decentralized way.

    It is common to capitalized "Internet" when it is referring to the Internet
    and leave "internet" lower-case when it is used as an adjective.
    It is also possible (though uncommon) to use "internet" (lower-case) to refer to connections between different *LAN*s
    even when those connections are not part of the Internet (upper-case).

Interpreter
:   A program that reads the source code of a *programming language*
    and takes the actions described by each line of that code.

    Typically, programming languages that use an interpreter
    run much more slowly than those that use a *compiler*;
    but they also tend to provide more abstractions and thus require less effort to program in than those created for a compiler.

IP
:   Short for "internet protocol", a way for computers that are not owned by the same agency to send messages between each other.
    
    There are two current versions of IP: IPv4 assigns each computer a 32-bit number^[between 0 and 4,294,967,295 (about 4 billion)] and IPv6 assigns them a 128-bit number^[between 0 and 340,282,366,920,938,463,463,374,607,431,768,211,455 (about 300 duodecillion, a number so large that many dictionaries do not even recognize it as a word)].
    These numbers, called IP addresses, are generally not used directly: humans prefer to use *hostnames* with *DNS* providing the translation between them.
    
    IP does not guarantee delivery of messages, leading to reliably protocols like *TCP*.

ISP
:   Short for "internet service provider", a company that allows subscribers to connect to their network
    and through their *gateway* to reach the *Internet*.

Kernel
:   A key piece of an *operating system*, responsible for managing programs' access to disks, networks, and other hardware resources.
    
    What kernels can do is defined by the computer hardware, which requires that some operations
    (those that would talk to hardware directly) only be run in kernel mode
    and stops any program that is not the kernel which tries to do these operations,
    switching to the kernel and having the kernel decide what to do with the program's attempt.

Key exchange
:   A way of having two parties agree on the key they will use for a *symmetric cipher*
    without anyone else knowing what key they picked.
    
    The *Diffie-Hellman key exchange* is by far the most common key exchange protocol.

LAN
:   Short for Local Area Network, a collection of computers connected to and communicating with one another
    with some level of trust or central management.
    The computers connected to the same home network typically form a LAN,
    as do the computers owned by many companies.
    
    Despite the name, there is not firm requirement that computers on a LAN be in the same physical location.
    However, they do connect to one another without the interposition of computers that are not part of the LAN;
    if external computers are needed to route traffic, the result is some form of internet.

Library
:   A set of code that is designed to be used by other programs.
    Libraries generally implement components that are common to many applications,
    ranging from under-the-hood data structures and simple algorithms
    to broad frameworks that provide visual elements used in many apps.
    
    Many libraries are *maintained* by a small team of developers as a side project and released for free.
    This makes them vulnerable to *supply chain attacks*.

Machine instructions
:   A set of simple actions a processor can take,
    encoded in a compact binary format.
    Common machine instruction types include:

    - Arithmetic operations, like $x + y → z$.
    - Operations that copy data between locations.
    - Jumps that continue *execution* at a new location in the set of machine instructions, often only if certain conditions are met.

    Machine instructions can be directly converted to and from *assembly*.
    *Compilers* generate machine instructions from source code, but that operation generally cannot be reversed.

Machine learning (<abrr>ML</abbr>)
:   A form of programming that works by
    
    1. Defining a *general* family of functions or algorithms, where a specific function from the family can be selected by setting one or more *parameters*.
    2. Searching though the function family for one that comes closest to matching some *training data*.
    3. Using that function to solve problems.

Maintenance
:   Changes made to a software product after it is "complete" and shipped.
    There are three main reasons to change delivered code:
    
    - Removing bugs that were missed during *testing* and were identified after the code was released.
    - Adding new features that became part of the *requirements* after the original version was released.
    - Updating code that uses *libraries* or other *upstream* resources when those resources have changed.

Metadata
:   Data about the (main) data.

    For example, in an image file the color of each pixel is the main data;
    information about the camera that took the image is metadata.
    
    Many file formats store metadata along with the data, and many applications ignore most of the metadata.

Network
:   A group of computers connected to one another and sending information back and forth.
    
    Networks range from very small *LAN*s that might have only two computers (a router and a user's computer)
    through multi-LAN networks owned by *ISP*s
    through to the entire Internet.
    
    Sometimes people use "network" only to refer to centrally-managed networks
    and thus omit the Internet from its definition.

Offline learning
:   A type of *machine learning* where the *training* happens separately from and before the function selected during training is used.
    
    Offline learning is easier to design than *online learning* and thus is the default for many machine learning applications.

Onion routing
:   Sending an *IP* packet though multiple *proxies* to prevent identification of who is communicating with whom.
    
    *Tor* is the largest and best-known onion routing network.

Online learning
:   A type of *machine learning* where new *training data* is collected and used to change the function being used
    after some use of the function.
    
    Online learning is harder to design than *offline learning* and thus is generally limited to cases where the application needs to start acting before it has all the training data, such as when it needs to learn from the outcomes of earlier decisions it has made.

Operating system
:   A collection of programs including a *kernel* and supporting software designed to make other programs easier to build and more consistent in how they behave.
    
    Four of the most popular operating systems (Windows, MacOS, Android, iOS) are very large systems
    with hundreds of programs and *libraries* that impose specific designs on how programs should look.
    Almost all other operating systems (Linux, FreeBSD, Unix, OpenBSD, Irix, Firefly, BeOS, Dos, OS/2, and so on)
    include a kernel and basic programming libraries
    but allow windowing environments that support different looks and operational modalities to be run as separate programs.
    Having a separate windowing environment makes these particularly well suited to web servers
    and other computers that are not primarily used to run graphical programs for a single user
    and thus don't need a windowing environment to be installed at all.

Overfitting
:   A common way that *machine learning* might fail,
    caused by the function family having so many *parameters*
    that the function selected matches the details of the specific *training data* used
    rather than the underlying patterns the training data was supposed to exemplify.
    
    The most common safeguard against overfitting is to ensure there are many fewer parameters
    than there are training data.
    Other techniques pick function families that are not flexible enough to conform to the training data's details
    or add mathematical criteria to the training process that detects and avoids parameters that appear to be overfitting.

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

    An algorithm to compute $\sqrt{2}$ has no parameters: each time it is used it creates the same result.
    An algorithm to compute $\sqrt{x}$ has one parameter, $x$: to use the algorithm we have to provide an *argument*,
    a value to use in place of $x$ for this run of the algorithm;
    and for each $x$ we provide the algorithm will create a different result.

Plaintext
:   A message that has not been encrypted, or has been decrypted.
    
    "Plaintext" is often used with "*ciphertext*" to discuss encryption processes,
    such as the contents of webpages.
    It is also used to refer to messages that are never encrypted,
    such as most email.

Pretraining and Fine-tuning
:   A method of *training* an *AI* system in several steps.
    
    The pretraining step typically uses as much *training data* as possible to *learn* broad patterns without *overfitting*.
    
    The fine-tuning step moves the function selected during pretraining closer to a smaller, more desirable subset of the training data.
    
    Fine-tuning can be repeated to further adjust the learned function.

Principle of least privilege
:   A guideline for setting an *authorization* system
    that says each person should have access to everything for which they have a legitimate defensible need
    and nothing else.
    Typically, this suggests a fine-grained authorization system
    and often also not allowing individuals to pick who has access to their content,
    instead using a set of roles and purposes to control access.

Problem
:   Often used as it is in English, to refer to anything that's not going well or needs to be addressed.

    Also used as a desired the relationship between inputs and outputs
    defining the goal of an *algorithm*.
    "Find if a number is odd" is a problem;
    "write it in binary and see if its low-order bit is 1" is one of many algorithms for solving that problem.

    An algorithm solving a problem
    needs to pick what *data* to use to represent the input and output *information*.
    An implementation of the algorithm as a *function* will have the input data as its *parameters*.

Programmable
:   One of the key qualifiers of a computer,
    indicating that the specific computations it performs
    is not fixed when it is created
    but rather can be specified as inputs to the computer.
    
    Usually, "programmable" is also assumed to mean that the program it follows
    is stored inside the computer's memory and can be an entire *algorithm*,
    not just one of a machine-defined set of operations selected by simple switches and buttons.

Proof of stake
:   One way of preventing a single bad actor from impersonating a million users and overwhelming a *blockchain* with bad blocks.
    In its most common form, adding a block requires entering a raffle, investing some existing digital wealth for the opportunity to add the block.

Proof of work
:   One way of preventing a single bad actor from impersonating a million users and overwhelming a *blockchain* with bad blocks.
    In its most common form, only blocks with specific patterns in their hash (often many leading zeros) are accepted to be added to the blockchain.
    This requires people to try adding many random values to their block to get the right hash pattern,
    a process called "mining" because successful blocks are rewarded with additional digital currency.

Proxy
:   A computer that acts on behalf of another computer,
    most often to send *IP* packets as a *VPN*.

Refactoring
:   Changing how code operates without changing what it does.
    
    There are two common reasons to refactor code.
    
    When adding a new feature, refactoring can be used to first update the design and implementation to make the new feature simpler to add.
    
    When dealing with code that has accumulated *technical debt*, refactoring can be used to try to simplify the code and make it less *brittle*.
    
    
Regression
:   A family of *AI* tasks that predict one or more values based on other values.
    This is *continuous* (the *categorical* version is called "classification") and *supervised* (because the training data has the value that should be predicted.
    
    Regression is an older topic than AI and is widely studied in statistics.

Repetition
:   A component of programs that indicates that some set of actions should be performed repeatedly.
    Also called iteration or looping.

    The most common programming language vocabulary for repetition are `for` and `while`.

Requirements
:   What the client or user of software wants from the software. This can be divided into two broad types:
    
    - *Functional requirements* describe what the software does.
    - *Nonfuntional requirements* describe how it does that and how it is developed: what platforms it runs on, how many resources it needs, how much it costs, when it will be ready, and so on.

Requirements elicitation
:   The process of defining the *requirements* of a project.
    
    Requirements are often ambiguous and poorly defined initially,
    and often conflict, and often conflict in non-obvious ways
    (for example, the nonfunctional requirements that the code be high quality, inexpensive, and delivered cannot all be satisfied).
    Requirements elicitation is generally an interactive process
    with the developer asking questions and posing possible solutions
    and the clients commenting on them and adding priorities to resolve conflicts.

Run
:   A colloquialism meaning to *execute* a program or invoke a *function*.

Selection
:   There are two types of selection.

    One, also called conditionals, jumps, or branches,
    is a component of a program that indicates that some set of actions should only be performed under certain conditions
    and skipped if those conditions do not hold.
    The most common programming language vocabulary for this type of selection are `if` and `else`.

    The other, also called indexing,
    is a component of a program that indicates which one out of several candidate pieces of data should be used.
    The most common programming language vocabulary for this type of selection are the name of the set of candidates, followed by which candidate in the set to chose in brackets, like `some_list[3]` to pick item 3 out of a list.

Serverless
:   A common phrase for an application that is hosted in the *cloud* rather than on devices owned by the app developers.

Signature
:   A way of attesting approval of a document, using a special type of encryption that has two keys: one to encrypt, another to decrypt.
    The encryption key is kept private, while the decryption key is shaded publicly.
    
    To create a signature, the signer hashes the document they wish to sign and encrypts the hash.
    
    To check a signature, the checker both hashes the document and decrypts the signature; if those two operations result in the same hash, the signature is valid.
    
    Signatures are widely used as part of *authentication*, for example in the creation of *certificates*,
    as well as to ensure message *integrity*.

Spiral model
:   A set of related repeated or iterative organizations of software development.
    Spiral models are usually group development work into four main pieces:
    
    1. Plan a set of objectives or *requirements* to be added to the software.
    2. Identify likely risks in adding these and try to mitigate them.
    3. Develop code that meets the new requirements.
    4. Evaluate how well the software meets its goals.
    5. Return to step 1 and repeat.
    
    The spiral model is sometimes offered as an alternative to the *waterfall model*,
    sometimes posed as having the entire waterfall model in step 3 above,
    and sometimes posed with one pass around the loop for each step of the waterfall model.

Subdomain
:   A more specific *domain*.
    For example, `a.b.c` is a subdomain of `b.c`.
    
    Because *DNS* is hierarchical, the owner of a domain can create as many subdomains as they wish
    by ensuring the computer identified by their *IP* address responds to DNS requests.
    No special rights or permissions are needed beyond owning the domain.

Supervised learning
:   A category of *machine learning* where the *training data* includes the desired output for each input.

Supply chain attack
:   One form of cyber crime, based on inserting malicious code into the *upstream* *libraries* used by the software that is being attacked.
    
    The common approach to these attacks runs as follows:
    
    1. Find a library that is upstream from the target and has limited developers and funding.
    2. Offer some helpful *maintenance* to those libraries to buld trust.
    3. Once trust is gained, add malicious code to the libraries, often by hiding it in places that other developers looking at the code don't see.

Symmetric cipher
:   A tool for converting *plaintext* to *ciphertext* using a secret key,
    and for converting back using the same key,
    which is very hard to break without knowing the key.
    Symmetric ciphers often use *Diffie-Hellman key exchange* to pick the key
    and are widely used to achieve *confidentiality* and *integrity* of communications.

TB
:   The [SI abbreviation for "tera" meaning one trillion](https://en.wikipedia.org/wiki/Metric_prefix#List_of_SI_prefixes) (T)
    followed by the abbreviation for Byte (B).
    Commonly used to measure the disk space of computers,
    indicating they can store a trillion bytes of data.
    
    Some of that space is typically used to store an index of sorts to help find the rest of the data,
    so the usable space is generally lower than the advertised, theoretically-provided space.

Technical debt
:   The accumulated poor *design* created by modifying code after it is designed,
    often as a result of *maintenance* but sometimes as a result of the initial design being inadequate.
    
    Technical debt makes code *brittle*.
    
    *Refactoring* is often used to paying down technical debt.
    If too much technical debt accumulates, it becomes cheaper to start over than to continue maintaining the existing software.
    
    Technical debt often accumulates because developers are pressured to get the next thing out now,
    even if that means cutting corners and not keeping the code clean and well-designed.
    Like financial debt, technical debt gives us things we want now,
    but with increased cost later on.

Testing
:   The part of software development that attempts to check if the software works.

    Most tests are code that run other code to see if it does the right thing.
    Some tests are done by humans using the software,
    and are called *alpha* tests if those humans are internal to the development process
    or *beta* tests if they are external.
    
    Tests do not prove that software works; they just offer some confidence that it seems to work.
    It is possible to prove that software works, but doing so typically takes at least 10× as much time and money as creating the software itself, and thus is rarely seen as worth the investment.
    As a consequence, most software ships with bugs, which is one of the reasons that *maintenance* is necessary.

TCP
:   Short for "transmission control protocol", a tool for adding reliability on top of an unreliable communication medium like *IP*.
    There are several key ideas used by TCP:
    
    1. Split messages into packets small enough to be delivered intact.
    2. Add a packet number to each message so that if they arrive out of order they can be reordered.
    3. Send an acknowledgment of each packet received; if receipt is not acknowledged within a reasonable time, resend it.
    
    Because the acknowledgments roughly double the number of messages sent, some protocols that depend on low latency chose not to use TCP, instead having their own way of handling dropped packets.

Tor
:   A large volunteer-run group of computers participating in *onion routing*.
    
    The computers that make up Tor are called relays.
    Each relay accepts incoming *encrypted* messages
    that when decrypted contain a destination computer and a message to send them
    and forwards the message to that computer.
    
    To send a message via Tor, a client picks three relays and sends
    
    To
    :   relay 1
    
    Message encrypted using relay 1's *symmetric cipher*
    :   To
        :   relay 2
    
        Message encrypted using relay 2's *symmetric cipher*
        :   To
            :   relay 3

            Message encrypted using relay 3's *symmetric cipher*
            :   To
                :   web server
                
                Message encrypted using server's *symmetric cipher*
                :   whatever the client wanted to send.

    Tor is used for many purposes, including hosting the *dark web*.

Train
:   The step in *machine learning* where a function is selected that matches the *training data*.
    In some cases training can be done exactly using some mathematical properties of the function family,
    but more often some type of guess-and-check or *hill climbing* is employed.

Training data
:   Example data that an algorithm solving a problem should be able to process.

    For *supervised* learning, training data pairs each input with an expected output and the quality of the function is determined by how close the function's output is to that input.
    
    For *unsupervised* learning, training data is just input and some other property of output (typically how the outputs on different inputs compare) determined the quality of the function.
    

Type
:   How the bits inside some piece of data are converted into meaning.

    For example, the bits 01100110 could have many meanings.
    If they are interpreted with the data type "integer" they mean 102.
    If they are interpreted with the data type "UTF-8 character" they mean lower-case F (`f`).
    The bits (the information we actually store in the computer) have not changed, only how we interpret it.

Upstream
:   Often used to mean the *libraries* and other resources used by a piece of software.

    Sometimes used as a direction: software uses libraries that are upstream from it and is used by those that are downstream from it.

Unsupervised learning
:   A category of *machine learning* where the *training data* does not include desired outputs, only a set of example inputs.

URL
:   Short for "universal resource locator," a human-readable way of identifying a computer and the resource on the computer to access.
    URLs generally have five components:
    
    1. A scheme, like `https`, which indicates what data format will be sent.
        
        The scheme is followed by `://`
    
    2. A *hostname*, like `illinois.edu`, which is turned into the *IP* address of a specific computer by *DNS*.
    
        It is possible, but quite unusual, for the hostname to be preceded by a username and password separated by a color `:` and followed by an at sign `@`.
        
        It is possible, but uncommon, for the hostname to be followed by a colon `:` and a port number, which identifies which program on the host computer should handle the request.
    
    3. A path, which starts with a slash `/` and is intended to name a resource on that computer.
    
    4. Optionally, a query, which starts with a question mark `/` and is intended to store the *arguments* to be sent to the resource, assuming it is a program and not a file.
    
        Not all computers use queries for arguments they way they were designed, but most do.
    
    5. Optionally, a fragment or hash, which starts with an number sign/hash/ocotothorp `#`.
        The fragment is not sent to the computer identified by the hostname at all;
        instead, it is used by browsers to pick a part of the page to scroll into view.

Variable
:   The name of a location where data can be stored.

    Unlike in mathematics, variables in computing are expected to change their meaning as a program progresses.
    It is perfectly OK for a program to say `x = 3` on one line and `x = 4` on another.

    Most programming languages use `=` not to mean "is the same as"
    but rather "gets the value of", in a directional way.
    `x = 3 + 4` means the memory named by variable `x` should have the number `7` stored inside it.
    Conversely, `3 + 4 = x` is a nonsensical an erroneous request that the number `7` have the contents of the memory named by variable `x` put inside it.

Container
:   A heavier-weight way of isolating programs and providing the illusion of each running on its own computer than a *container*.

    In a virtual, each *system call* is routed not to the usual *kernel*
    but to a second virtual kernel that only exists within the virtual machine.
    When that guest kernel tries to talk to hardware,
    that effort is interrupted by the real kernel and adjusted to prevent the guest kernel from interacting with anything else the computer is running.
    
    Virtual machines are sometimes used in *cloud*-based computing, but containers are more popular.
VPN
:   Short for "virtual private network", a computer that agrees to forward messages for other computers
    in a more private way than is provided by *IP*.
    
    Using IP, even *encrypted* messages have the sending and receiving IP address visible to other computers making up the *Internet*.
    VPNs accept messages over IP from their clients
    which are encrypted versions of messages to send to others,
    send them to those recipients,
    receive the replies,
    and send the encrypted replies back to the the clients.
    
    Even more private communication is provided by *onion routing*,
    which can be provided by paying for multiple VPNs
    or through volunteer networks like *Tor*.

Vulnerability
:   Some aspect of a computer system -- usually software, but sometimes hardware -- that has the potential to be used in ways that the designers did not intend and the legitimate users do not desire.

    Vulnerabilities can arise from many sources:
    programmer error,
    software designer oversight,
    unexpected interplay between individually-correct components,
    failure to remove development aids like bypass codes,
    malicious insertion by software developers with secret agendas,
    and so on.

    It is generally assumed that nearly all computer systems contain many vulnerabilities,
    and new vulnerabilities are discovered every day.
    It is essential that software be regularly updated to close vulnerabilities as they are discovered
    to prevent them being targeted by *exploits*.

Waterfall model
:   Any of several ways of breaking software development into a sequence of steps, one undertaken after another.
    One common breakdown is:
    
    1. *Requirements*
    2. *Design*
    3. Implementation
    4. *Testing*
    5. *Maintenance*
