# Theory part


**What is the run time error?**

Ans: Runtime error is a type of error that occurs during the runtime/execution and not compilation.
It includes reference error,type error etc. 

**Describe the concept of immutability and how it applies to array manipulation.**

Ans: Immutability is a concept in JavaScript, which states that once an object has been created it cannot be changed.
It modifies the array by returning a new one. It can be applied in array manipulation by using functions like
filter,map and reduce.

**Explain the difference between map and forEach in the context of functional
programming.**

Ans: Foreach iterates through each element in an array and performs operation on each element.Foreach does not create a new array.
Map iterates through the elements and transforms each element.Map creates a new array.

**What are IIFEs with examples?**

Ans: IIFE stands for Immediately Invoked Function Expressions.These are the functions that run as soon as it is defined.
It is invoked by using () at the end.

Ex:

`function myFunction(){
	console.log("This is unique.")
}();`


**Is Javascript single threaded or multiple threaded, explain with examples.**

Ans: Javascript is single threaded.It can execute only one piece of code at one time.
example:

`console.log("Start");
setTimeout(() => {
  console.log("Timeout finished");
}, 1000);
console.log("End");`

**What is an event loop in Javascript?**

Ans:Event loop is responsible for handling asynchronous operations and managing program executions.
It checks call stack and callback queue.







