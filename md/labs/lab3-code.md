---
title: Code comparisons
...

These three programs all have exactly the same behavior when run,
but are written in three different programming languages.

The formatting (colors, bold, typeface, etc) of the code are not officially part of the languages themselves,
but are commonly applied when humans view code
as a guide to help them readily notice different parts of the language.
The process of applying this formatting is called them "syntax highlighting."

<figure style="border:thin solid black">
```c
#include <stdio.h>
#include <string.h>

int main(void) 
{
  // Prompt user for their name
  char name[10];
  printf("Hello. What's your name?\n");
  fgets(name,10,stdin);

  // Greet the user
  printf("Hi there, %s!\n", name);

  // Print the length of the name
  size_t length = strlen(name);
  printf("Your name has %s letters.\n", length);
  return 0;
}
```
<figcaption>Example program in C</figcaption>
</figure>


<figure style="border:thin solid black">
```java
import java.util.Scanner;

public class NameHelper {
  public static void main(String[] args) {      
    // Prompt user for their name
    Scanner scanner = new Scanner(System.in);
    System.out.print("Hello. What's your name? ");
    String name = scanner.nextLine();
    
    // Greet the user
    System.out.println("Hi there, " + name + "!\n");
    
    // Print the length of the name
    System.out.println("Your name has " + name.length() + " letters.");
    scanner.close();
  }
}
```
<figcaption>Example program in Java</figcaption>
</figure>


<figure style="border:thin solid black">
```py
# Prompt user for their name   
name = input("Hello. What's your name? ")

# Greet the user
print(f"Hi there, {name}!")

# Print the length of the name
print(f"Your name has {len(name)} letters.")
```
<figcaption>Example program in Python</figcaption>
</figure>


The following code example has slightly different behavior
in that it is designed to run from a web page instead of in a computer terminal.

<figure style="border:thin solid black">
```js
// Prompt user for their name   
var name = prompt("Hello. What's your name?")

// Greet the user
alert(`Hi there, ${name}!`)

// Print the length of the name
alert(`Your name has ${name.length} letters.`)
```
<figcaption>Example program in JavaScript; to run this code from this webpage,
```{=html}
<input type="button" value="click here" onclick='var name = prompt("Hello. What\'s your name?"); alert(`Hi there, ${name}!`); alert(`Your name has ${name.length} letters.`);'></input>.
```
</figcaption>
</figure>


