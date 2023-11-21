// Add or remove elements from an array and display the modified array.

const num = [1, 2, 3];
console.log("The original array is:", num)

const count = num.push(4);//add elemant at last
console.log("The modified array after push operation is:", num);

const pop_count = num.pop();//removes element from last index
console.log("The modified array after pop operation is:", num);

const shift_count = num.shift();//removes first element
console.log("The modified array after shift operation is:", num);

const unshift_count = num.unshift(1);//adds element at the beginning
console.log("The modified array after unshift operation is:", num);

const splice_count = num.splice(1, 1, 5);
console.log("The modified array after splice operation is:", num);








