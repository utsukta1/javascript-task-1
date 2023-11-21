/* Implement a custom sorting function for an array of objects based on a specific
property*/

let people = [
    { name: 'Utsukta', phone: "9810312106" },
    { name: 'Fereeca', phone: "9999999999" },
    { name: 'Roshni', phone: "8999999999" },
    { name: 'Ujjwal', phone: "8099999999" },

];

console.log("The unsorted array is :")
people.forEach((n) => {
    console.log(n);

});

// function sortByName(arr) {
//     arr.sort((a, b) => {

//         const nameA = a.name.toUpperCase();
//         const nameB = b.name.toUpperCase();
//         if (nameA < nameB) {
//             return -1;
//         }
//         if (nameA > nameB) {
//             return 1;
//         }
//         return 0;
//     });
// }


// sortByName(people);


// console.log("The sorted array is :")
// people.forEach((n) => {
//     console.log(n);

// });

function sortByName(arr) {
    arr.sort((a, b) => a.name.localeCompare(b.name));
}

sortByName(people);
console.log("The sorted array is :")
people.forEach((n) => {
    console.log(n);

});

function sortbyphone(c, d) {
    return c.phone - d.phone;
}

people.sort(sortbyphone);
console.log("The sorted array by phone is :")
people.forEach((n) => {
    console.log(n);

});





