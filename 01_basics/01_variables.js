// var let and const used to declare variables


// var represents declaring variables
// Example
var greeting = "Welcome all";

var count = 200;

console.log('greeting');


// let vs var
// var is function scoped
console.log(x);
var x = 5;
console.log(x);

// let is block scoped
console.log(y);         // Generates Error
let y = 5;
console.log(y);



// const represents constant values
// we cannot modify the constatnts
const uid = "user_123";

//try to update the uid value and check the output
uid = "user_321"        // Generates Error



// ------ KINGS TERRITORY PROBLEM -------- //

let king = "Dhamareshwar";

if (true) {
    let king = "eshwar";
    if (true) {
        let king = "kumar";
        console.log(king);
    }
    if (true) {
        let king = "adarsh";
        console.log(king);
    }
}

if (true) {
    // let king = "Gandikota";
    console.log(king);
}




//------CONCLUSION----------//

// 1. when a variable is not declared in a territory it looks one level up


// var ->     (Global variable when declared outside block)
//            (GLOBAL VARIABLE when declared inside block)
//            (Local variable when declared inside function)
//            (----when declared outside the block----)
//            (where ever you decalre it moves to the top)
//            (But definition starts from the point where you define)

// let ->     (Global variable when declared outside block)
//            (LOCAL VARIABLE when declared inside block)
//            (----When declared outside the block----)
//            (declaration and definition activates from the point of definition or declartation only)
