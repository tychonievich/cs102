---
title: Basic AI-assisted programming
...

AI is changing every aspect of software development.
This page explores a tiny sliver of that space.
In particular, it assumes

- You have no prior programming experience of any kind
- You do not have a paid AI tool
- You do not want to install software to facilitate programming

This page was written in March 2026.
Given the speed of AI development, it will likely become at least partially obsolete by the end of the year.

# Intellectual property

Intellectual property law as it relates to AI-developed code is not yet fully resolved.

There is one view (famously exemplified by [the copyright office's response to a monkie's selfie](https://en.wikipedia.org/wiki/Monkey_selfie_copyright_dispute#Expert_opinions))
that only works created by a human can be copyrighted.^[See <https://www.copyright.gov/comp3/docs/compendium-12-22-14.pdf#page=465> section 802.5(B).]

There is another view that using tools does not remove authorship.

How these two views will finally be resolved by the courts or legislature
is not yet determined.
If having full rights and ownership over your software product is important to you,
there is some risk that the development processes described here will fail to provide that.

# Logistics

You'll need two tools for the programming described on this page:

1. Access to a general-purpose or programming-specific LLM.

    Of those freely available, I found <https://gemini.google.com> worked with fewer rounds of interaction with the LLM than the others,
    but many different LLMs will work.

2. A way of saving plain-text files with custom file extensions.
    Applications that do this are called <dfn>text editors</dfn>.

    You almost certainly have programs on your computer that can do this
    (most computers ship with either notepad or textedit installed)
    but sometimes getting them set up to do this without changing anything can be nuanced for a novice.
    
    We provide a [simple in-browser text editor](../editor.html) you can use.
    It was made that using the techniques on this page; there's a link at the top of the editor page that shows the steps we used.

You basic operation will go as follows

1. You'll ask an LLM to create a program

2. You'll copy the code it provides and paste it into your text editor

3. You'll save the text with a `.html` file extension

4. You'll open the .html file in your browser

5. You'll ask the LLM for changes and return to step 2


# Brief prompts

Don't include multiple unrelated ideas in a single prompt.
The LLM's reply to your prompt becomes part of its input when handling your next prompt,
and if you put too much in one prompt it might not give much reply to each part.

For example, if I start with the prompt

> I want to create an offline web app that I can run from a file:// URL

then the LLM will say a bunch of things about that non-functional requirement that will be part of its input for everything that follows.
If instead I write a paragraph describing all the things I want my app to do, including that same line in the paragraph somewhere, the LLM might only devote a few sentences to the requirement and fail to comply with it because it makes up so little of its input.

# Iterative development

Don't try to get the entire app done all in one go.
Instead, describe the simplest baseline, try that, then ask for one change after another.

Also, don't take the AI's suggestions of optimizations or final polish before you have all the features you want.
If it says "Would you like me to add *X*" or "I can change this to do *X*", what it's often *not* saying is "and make the code much more complicated and harder for me to change in the future?"

Focus on the key parts first.
What's the most important thing for the app to do?
Get it doing that well, then ask to add the next most important thing,
and so on.

# Getting working code

There are many ways to get code to run,
but the only way that I know you can all do
(by virtue of being able to read this webpage)
is a single-page offline web app.

## Running on your computer

Start your prompts with

> I want to create an offline web app that I can run from a file:// URL

The "from a `file://` URL" bit is important.
The dominant web standard (HTML5, which includes CSS and JavaScript)
has a variety of security features that mean some code that would work
if served from a fully-featured server with proper security certificates installed
will not work without that.
Most of the LLM's training data comes from fully-featured servers,
so it might sometimes make code that won't work from a file on your computer.
If it gives you code that doesn't run, you might prompt it with

> That code doesn't work for me. Could that be because I'm using a file:// URL?

It might also try to tell you to download and run some local server tool.
You can do that if you want, but it will add a lot of overhead to the development process;
we recommend instead saying

> no, I want it to run from a file:// URL


## Not downloading things

There is much you can do if you download <dfn>libraries</dfn>? (code written by others) an <dfn>assets</dfn> (non-code content like images),
but managing those and knowing which ones to trust can be tricky.
This page recommends refusing all of those.

If the AI suggests you have an image file, "import" or "include" a "module" or "library", or the like
we recommend you respond with something like

> I want this to be stand-alone and self-contained, no external assets or third-party libraries. Can we do it with just the app's code alone?

Some things the AI will tell you are hard to do without a library
or will work less well the no-library way.
If that's the case, you can ask 

> Can we use a CDN to include the library?

Usually the answer will be yes, and that will prevent you from needing to manage a bunch of folders and files yourself.
However, it will mean that your program goes online^[to a Content Delivery Network (<abbr>CDN</abbr>), which will usually pull a copy from a server physically close to you to minimize network traffic] to download library code written by someone else
each time you load the page, which is usually fine but worth knowing is happening.


## Making changes

Much of the LLM's training data consists of <dfn>patches</dfn>,
which have the form "replace lines 305--317 of this file with this other code instead: *(code)*".
Because of that, the AI will often respond to a new suggestion with only a few lines of new code,
assuming you can figure out what code to replace.

There are two techniques for handling this:

1. When it gives you an entire file, replace the file with that.

    When if gives you a little new code, search for code that it describes being replaced or code that looks like part of what it gave you and replace it in the file.

2. When it gives you a little new code, ask it to show the entire file with that new code integrated.

    Because this can take time (especially once the file gets large),
    you might want to try several prompts between such a request.


## Fixing bugs

The AI will make mistakes.

Usually, you can simply describe what the app is doing wrong to the AI and it will fix it.

Sometimes that won't work. In those cases, you might try prompts that make it rethink the entire app's code, like

> Can you re-write this to be shorter?

> Can you add comments and descriptive variable names?

> Are there refactors that would make the code easier to maintain?

For the kind of code we're creating, we can sometimes get additional diagnostic information that might help the AI.
There's a tool in browsers called the "JavaScript console" which can be opened as follows:

| | Linux/Windows | Mac |
|-|:-:|:-:|
| Chrome/Edge/Brave | Ctrl+Shift+J | Cmd+Option+J |
| Firefox | Ctrl+Shift+K | Cmd+Option+K |
| Safari^[Only works if you enabled the Develop menu through Preferences → Advanced] | | Cmd+Option+C |

Some (but not all) errors will create messages in the JavaScript console which sometimes (but not always) will help the AI if you copy them over to the AI.
