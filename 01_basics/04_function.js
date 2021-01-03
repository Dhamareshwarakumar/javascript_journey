
// Function Definition type 1

function greeting()
{
    console.log("Thank you for being here.../\\...");
    return "by...byeee";
}

console.log(greeting());



// Function Definition type 2


let hello = function()
{
  console.log("hey there folks");

}

let hello = function(name="anonymos")
{
  console.log("hey there folks");
  console.log(`${name} here`);
}

hello(Dhamareshwar);

hello();


// Function definition type 3 (arrow functions)

let something = () => {
    console.log("We are Discussing arrow functions");
}


//    RETURNING MULTIPLE VALUES

function name(){
    return {
      one: 1,
      two: 2,
      three: 3
    };
}

console.log(name().one);




/**********CONCLUSIONS****************************

1. let name = function() { ... }
2. function name() { ... }
3. () => { ... }
4. predefined values can be given through function
    var name=function(variable=value) { ... }
5. We can also return an object data type           return { var1: val1, var2: val2, var3: val3, ...}

*************************************************/


/***************TASK************************

Create a function that take in a name
and says hello followed by your name
if name not given consider name as John

for Example

Name: Dhamareshwar
return "Hello Dhamareshwar"

Name:
return "Hello john"

******************************************/
