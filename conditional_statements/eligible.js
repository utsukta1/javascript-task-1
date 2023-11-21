
//determine if a user is eligible to vote

function Eligible(age) {
    if (age >= 18)
        return " eligible to vote!";

    else
        return "not eligible to vote!";


}

console.log("User is", Eligible(18));
console.log("User is", Eligible(2));
console.log("User is", Eligible(90));
