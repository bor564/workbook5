'use strict'
// let cars = ["saab","volvo", "bmw"]
// console.log(cars);
// cars.sort();
// console.log(cars);

let products = [
    { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
    { prodId: 12, item: "Black Pens (12 pk)", price: 5.70 },
    { prodId: 22, item: "Stapler", price: 12.79 }
];

products.sort((productA, productB) => {
    if (productA.item < productB.item) return -1;
    else if (productA.item === productB.item) return 0;
    else return 1;
});




// let numbers = [100,20,55,666,3,4]

// function compare(a,b){
//     if (a < b) return -1; // right order
//     else if (a == b) return 0;
//     else return 1; // swap, wrong order
// }
// numbers.sort()
// console.log(numbers);
// version 1
//define the compare function and then passing to sort
//the logic is longer but easier to read and understand regarding sorting two items
// function compare(a, b) {
//   if (a < b) return -1; // right order
//   else if (a == b) return 0;
//   else return 1; // swap, wrong order
// }

// numbers.sort(compare);

//version 2
//define the compare function and then passing it to sort
//the logic is the same but shorter (a shortccut is used)
// function compare(a, b) {
//   return a - b;
// }

// numbers.sort(compare);

//version 3
//define the sort function and pass as a parameter at the same time
//because the function is passed when it is created it doesn't need a name...it can be an anonymous function
// numbers.sort(function (a, b) {
//   return a - b;
// });

//version 4
//change function over to an arrow function
//by replacing the function keyword on the left side of the parameter list () 
//with the arrow symbol => on the right side of the parameter list ()
// numbers.sort((a, b) => {
//   return a - b;
// });

//version 5
//if an arrow function has only one line of code inside it
//you can shorten it by:
// removing the curly brances { } that define the function body 
// removing the return statement because that is now implicit (done automatically)
//and you will also need to remove the semicolon ; at the end of the one line of code
numbers.sort((a, b) => a - b);

console.log(numbers);