# Processor - Adapter Design Pattern Exercise
> This exercise follows the Adapter design pattern in TypeScript.

*Adapter pattern works as a bridge between two incompatible interfaces. This pattern involves a single class which is responsible to join functionalities of independent or incompatible interfaces.*
<br/>
## Processor exercise instructions:
- Create Processor interface that has a name and a process method - gets an input as a string and returns a string.
- Create StringProcessor as a base class for all string processors.
  <br/>
  StringProcessor implements Processor interface.
  <br/>
  Leave process method as abstract.
  <br/>
- Create UpCase (class, a kind of Processor), Which gets input as a string and returns the string in upper case.
- Create DownCase (a kind of Processor), Which gets input as a string and returns the string in lower case.
- Create SplitterMark (a kind of Processor), Which gets input as a string and returns the string with ! in between the words.
- Create a Tester class with a static method like so:
  ```
  process(p:Processor, s:string):void {
  log("Using Processor " + p.name)
  log(p.process(s))
  }
  ```
- Create a new class named String Swapper that has a method named swap, taking a string and returns a string.
  <br/>
  This method swaps each 2 characters, starting from both sides of the string, in that input ('Ahalan' -> 'nalahA').
- Assume you can't change existing code, How can we use our new string swapper class with our Tester process method?
- Create processors objects and test them via Tester.process.
