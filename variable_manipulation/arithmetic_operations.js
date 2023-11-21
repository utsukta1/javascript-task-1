// Perform arithmetic operations (addition, subtraction, multiplication) on
// numbers.
// Use comparison operators (>, <, ===) with boolean variables.


var a = 5;//number declaration and initialization
var b = 10;



sum = a + b;//addition
console.log("The sum of a and b is", sum);

product = a * b;//multiplication
console.log("The product of a and b is", product);

quo = b / a;//division
console.log("b/a:", quo);

rem = a % b;//remainder
console.log("rem:", rem);

sub = a - b;//subtraction
console.log("The difference of two numbers is:", sub);

console.log("Is a greater than b?", Boolean(a < b));//checks if a is greater than b and displays true/false
console.log("Is b greater than a?", Boolean(b > a));


let c = 8;//increment
c++;
console.log(c);

let d = 6;//decrement
d--;
console.log(d);

var e = 79;
var f = 79;

console.log("Are the numbers equal e and f?", Boolean(e === f));

var e = 79;
var f = "79";

console.log("Do the variables have same datatype?", Boolean(e === f));//checks datatype and value

console.log(Boolean(e == f));//checks only value


