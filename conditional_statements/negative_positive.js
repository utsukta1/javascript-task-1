// Check if a number is positive, negative, or zero and display an appropriate
// message


function negative_positive(num) {

    if (num < 0) {
        return "negative."
    }

    else if (num == 0) {
        return "Zero."
    }


    else
        return "positive.";

}

console.log("This number is", negative_positive(99));
console.log("This number is", negative_positive(0));
console.log("This number is", negative_positive(-99));