hello();


function hello() {
    console.log("Hello all");
}

try {
    console.log(name);
}
catch(err){
    console.log("ERROR: not defined (name)");
}

try {
    console.log(no_name);
}
catch(err){
    console.log("ERROR: not defined (no_name)");
}

try {
    console.log(another_name);
}
catch(err) {
    console.log("ERROR: not defined (another_name)");
}

try {
    console.log(no_another_name);
}
catch(err) {
    console.log("ERROR: not defined (no_another_name)");
}


var name = "Dhamareshwarakumar";
let another_name = "Gandikota";



// There will be a global context in javascript which scans functions and variables
// Function declarations are scanned and made avaialable
// Variable declarations are scanned and made undefined
// var wiil be scanned and let will not be
// HOISTING: moving up all the declarations