"use strict";
// Create StringProcessor as a base class for all string processors.
// StringProcessor implements Processor interface
// Leave process method as abstract.
class StringProcessor {
    get name() {
        return this.constructor.name;
    }
}
// Create UpCase (class, a kind of Processor), Which gets input as
// a string and returns the string in upper case.
class UpCase extends StringProcessor {
    process(str) {
        return str.toUpperCase();
    }
}
// Create DownCase (a kind of Processor), Which gets input as
// a string and returns the string in lower case
class DownCase extends StringProcessor {
    process(str) {
        return str.toLowerCase();
    }
}
// Create SplitterMark (a kind of Processor), Which gets input as
// a string and returns the string with ! in between the words
class SplitterMark extends StringProcessor {
    process(str) {
        return str.replaceAll(" ", "!");
    }
}
// Create a Tester class with static method
class Tester {
    static process(p, s) {
        console.log(`Using Processor ${p.name}`);
        console.log(p.process(s));
    }
}
// Create a new class named String Swapper that has a method named swap,
// taking a string and returns a string.This method swaps each 2 characters,
// starting from both sides of the string, in that input ('Ahalan' -> 'nalahA')
class StringSwapper {
    swap(str) {
        const arr = [];
        for (let i = str.length - 1; i > 0; i--) {
            arr.push(str[i - 1]);
            arr.push(str[i]);
        }
        return arr.join("");
    }
}
// Assume you can't change existing code, How can we use our new string
// swapper class with our Tester process method?
class Adapter {
    constructor(swapper) {
        this.swapper = swapper;
    }
    get name() {
        return this.swapper.constructor.name;
    }
    process(str) {
        return this.swapper.swap(str);
    }
}
// Create processors objects and test them via Tester.process
const swap = new StringSwapper();
const adapter = new Adapter(swap);
Tester.process(adapter, "hello");
