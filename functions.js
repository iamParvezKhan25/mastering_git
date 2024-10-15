/*

Higher-Order Functions:
    A higher-order function is a function that takes one or more functions as arguments or returns a function as a result.
    They are essential for functional programming and can be used to create more flexible and reusable code.

 */

function greet(name, greetingFunction) {
    greetingFunction(name);
}

function greetWithExclamation(name) {
    console.log("Hello, " + name + "!");
}

function greetWithQuestion(name) {
    console.log("How are you, " + name + "?");
}

greet("David", greetWithExclamation); // Output: Hello, David!
greet("Eve", greetWithQuestion); // Output: How are you, Eve?