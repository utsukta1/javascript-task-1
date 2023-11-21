// Provide an example of using array destructuring to swap the values of two
// variables.

let myArray = ["Utsukta", "Parajuli", "2000"];

[[myArray[0]], [myArray[2]]] = [[myArray[2]], [myArray[0]]];

console.log(myArray);