---
title: Blockchains
...

A <dfn>blockchain</dfn> is a data structure and protocol
that implements a distributed indelible ledger
using cryptographic hashes and signatures.

A <dfn>ledger</dfn>
is a record that can be added to at the end,
but not edited or added to in the middle.
Many ledgers have some kind of emergency edit or rollback mode
(for example, to remove compromising information that should not have been placed in it to begin with);
we call the ledger <dfn>indelible</dfn> if there is no such tool:
each addition is permanent and unchangeable.

We call the blockchain a ledger
in part because we use it to record the kinds of things
that financial ledgers record:
the movement of currency between different people's accounts.
This restriction on what the ledger contains
means that not everything we might try to add is permitted.
To be accepted, a new addition must

- move currency from one account to another (not create or destroy currency); and.
- not reduce any account to a negative value; and
- be signed by each account that is losing currency.

:::example
Consider an possible blockchain addition that says

> Remove $20 from Luther's account, add $10 to Ashish's account, and add $10 to Shivani's account.

This is a valid currency move (the total debits and credits are the same).
We would only accept it if both (a) Luther signed it and (b) Luther's account currently had at least $20 in it.
Ashish and Shivani don't need to sign it because their accounts are growing, not shrinking.
:::

Calling something <dfn>distributed</dfn> in computing
means that it is shared by a large number of computers
instead of being centrally controlled by just one.
Blockchains are distributed in several ways.

The data of the blockchain -- the entire list of actions that make up the ledger --
is stored in a distributed way,
with a complete copy of the blockchain on each user's computer.

The decision to accept or reject proposed new ledger entries
is also distributed,
with each user's computer checking each new entry as it arrives.
Because different computers might see actions in different orders,
it is common for them to disagree about the exact state of the ledger
and hence about which actions are permitted.

:::example
Suppose I start with $100 in my account
and generate three actions: one gives $40 to Abhinav,
one gives $40 to Harry,
and one gives $40 to Sherry.

If you see them in the order (Abhinav, Harry, Sherry)
you'd accept the first two and reject the third because I have insufficient funds,
leaving Sherry unpaid.
If someone else saw them in the order (Sherry, Abhinav, Harry)
they accept the first two they saw and leave Harry unpaid instead.
:::

There is also a <dfn>distributed consensus protocol</dfn>
that is used to resolve disagreements about the order in which actions happened
and which actions to accept.

# Merkle trees and longest paths

Blockchains are named after how they chain together values they call blocks.

A <dfn>block</dfn> is data encoding two pieces of information:

1. A change to make to the ledger (moving currency between accounts).

2. The hash of the last block in the ledger before this new block.

Each block is also matched with a signature from the owner of each account that is being reduced.

If blocks are added one after another, the hashes they contain link one to another
in a structure that is likened to a chain by the name "blockchain."

:::example
Let's try using the hash function we shared for [Lab 11](../labs/crypto.html) and build a simple blockchain.

| Block | Hash of block |
|-------|---------------|
| `Empty ledger` | `(7Q;'` |
| <code>change: Luther mined $100<br>last: (7Q;'</code> | `Vk9ON` |
| <code>change: $50 from Luther to Shivani<br>last: Vk9ON</code> | `f.IDl` |
| <code>change: $30 from Shivani to Sheryy<br>last: f.IDl</code> | `X(?.\` |

This blockchain has 4 blocks, and its final state (which has hash `X(?.\`)
represents Luther having $50 Shivani having $20, and Sherry having $30.
:::

It is possible that two blocks will appear that both claim the same last block.
When that happens we say the blockchain has forked,
and that it now resembles a tree rather than a chain.

A tree that is connected using hashes is called a <dfn>Merkle tree</dfn>
after Ralph Merkle^[Ralph Merkle is also mentioned on [another page](crypo.html) as the graduate student that Diffie-Hellman key exchange was not named after.] who invented and patented this structure in 1979.


:::example
Continuing the previous example, suppose we see one more block

| Block | Hash of block |
|-------|---------------|
| <code>change: $80 from Luther to Ashish<br>last: Vk9ON</code> | `}8[pu` |

This block doesn't come after the previous one we saw (`X(?.\`)
but instead after an older block (`Vk9ON`).
It represents a new possible final state of the ledger:
Luther has $20 Ashish has $80, with Shivani and Sherry having $0.

We say the blockchain has forked
into a tree with two leaves: `}8[pu` and `X(?.\`.
The two represent two different views on what might have happened.
:::

Forks prevent the blockchain from behaving like a ledger,
but they are also practically unavoidable in a distributed system:
messages take time to reach everyone and may reach different people in different order.

Each blockchain has some rules for resolving forks.
These rules have the property that if two users both know about all of the blocks the other has seen,
they will agree on which leaf is the "correct" end of the chain.
The most common such rule across many blockchains is
that the longest chain wins.
Because the path from `}8[pu` to the initial block goes through 1 other block
while the path from `X(?.\` to the initial block does through 2 other blocks,
`X(?.\` is the end of the longer chain and is the correct state of the ledger,
with `}8[pu` being rejected for being out of date.

# Limiting membership and actions

The longest-path rules used by blockchains
prevent some kinds of conflict,
but they still leave open the possibility that one user
might send a large number of blocks to the chain
with the express goal of becoming the new longest chain
and causing blocks on the old longest chain to become rejected.

:::example
Suppose I add to the blockchain a payment to a merchant.
They deliver the product I bought, and then I want my money back.
But 100 other blocks have been added after mine.

I could create a 200-block chain that starts with the block right before my payment
and send it to the blockchain.
As long as my new 200 blocks arrive before another 100 blocks are added to the old chain,
my new branch will become the longest
and I'll magically get the money I paid the merchant back.
:::

To prevent these kinds of attacks on the blockchain infrastructure,
most blockchains add some kind of penalty to creating blocks.
For example,

- Bitcoin has each block have an extra meaningless value inside it
    present only to change the block's hash.
    Only blocks with very rare hashes are accepted.
    Finding those hashes takes a huge amount of compute power,
    making attacks very expensive in electricity consumption.

- Etherium has a raffle to see whose block will be added next,
    where you have to pay to have a chance in the raffle.
    This also makes attacks very expensive etherium's internal currency.

- Ripple has a limited membership: you can't just create a new account by creating a new public key,
    you have to be accepted by the humans running the blockchain.
    This allows them to monitor for bad behavior and kick out people who try to hack the system.
    Other blockchains cannot do that because they can't tell if 100 accounts represent 100 people or just 1 person.


# Adding and backing currency 

The most popular use of blockchains is to create cryptocurrencies.
A currency generally needs three things:

1. A hard-to-forge, easy-to-use way of tracking who has how much currency.
    
    Blockchains provide this (assuming everyone is online and has a large enough computer).

2. A controlled supply of currency.

    Blockchains also find ways to provide this,
    often by awarding currency to people who do the work of maintaining the blockchain.

3. Backing from some power that forces meaning to the currency.

    The most powerful form of backing is a government
    which requires that the currency be used
    to pay taxes and court-ordered payments of various kinds.
    That form of backing has not yet seen much use in blockchains,
    but is widely used for most other currencies.

    Slightly less powerful is being backed by criminals
    who can threaten and extort people into providing the currency.
    This has become a principle backing for BitCoin and, to a lesser extend, some other cryptocurrencies
    because they are anonymous by construction and avid the need to launder money.

    Some currencies are backed by some agency that promises to exchange them
    for another currency or for goods valued in another currency.
    This is commonly done for things like checks, store credit, and casino tokens,
    and sometimes also by small countries' governments.

    Some currencies are backed almost entirely by speculation.
    Trading cards and other collectables are commonly in this group,
    having limited intrinsic value to some boosted by a large amount of speculation.
    Cryptocurrencies have experienced immense speculation.


