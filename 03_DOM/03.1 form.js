
// Accessing Forms
let form = document.forms[0];
console.log(form);


// Accessing Form Elements

let element1 = form.elements[0];
let element2 = form.elements[1];
let element3 = form.elements[2];
console.log(element1);
console.log(element2);
console.log(element3);


// Accessing Form Attributes
form.onsubmit=fun;

function fun() {
    console.log("hello");
}

// form.action="http://127.0.0.1/test.php";

// Accessing Form Elements by Name
form.elements.name.addEventListener("input",()=>{
    console.log(`Username is ${form.name.value}`);
});
