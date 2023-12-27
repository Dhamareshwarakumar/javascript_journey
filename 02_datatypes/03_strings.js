                                    /****************************
                                                Strings
                                    ****************************/


//  Strings declaration
let firstname = "Dhamareshwarakumar";
let lastname = 'Gandikota';
let motto = `Keep calm and hack the planet`;


/*****************************
     String Methods
****************************/


// String Length
console.log("length of firstname is " + firstname.length);


/*-----------------
    Searching
-----------------*/

// indexof()
console.log(firstname.indexOf('a'));
console.log(motto.indexOf("and"));

// lastIndexOf()
console.log(firstname.lastIndexOf('a'));
console.log(motto.lastIndexOf("hcak"));

// search()
console.log(firstname.search('a'));
console.log(motto.search("and"));
console.log(firstname.search(/k/));     // using regular Expression

//charAt()
console.log(firstname.charAt(2))


/*-------------------
    STRING SLICING
-------------------*/

// slice()
console.log(firstname.slice(13,18));

//substring()
console.log(firstname.substring(13,18));

// substr()
console.log(firstname.substr(13,5));


/*--------------------
    Replacing
--------------------*/

// replace (only the first match is replaced)
let middlename = firstname.replace("Dhamareshwara","");
console.log(middlename);

// using regular expressions on replace
// replace() case-sensitive to case-insensitive
let middlename_i = firstname.replace(/DHAMARESHWARA/i,"G ");
console.log(middlename_i);

// replacing all the available matches not only first match
let motto_g = motto.replace(/k/g, "h");
console.log(motto_g);


/*------------------------
    Coverting to upper
    and lower cases
------------------------*/

console.log(firstname.toUpperCase());
console.log(firstname.toLowerCase());


/*----------------------
    String to array
------------------------*/

//split()
console.log(lastname.split(""));


/*****************************
    Character escaping
****************************/

console.log("I am \"king\" here");
console.log("I am first line\nI am second line");
console.log("I am the new line character: \\n");

/*****************************
    Template literal
****************************/

// When something is written inside ${} in a template literal, its result will be computed, converted to a string, and included at that position
console.log(`half of 100 is ${100 / 2}`);

/*****************************
    Arithmetic Operations
****************************/

// Subtraction, Multiplication, Division, Modulo Division will return NaN for non-numeric strings
console.log('a'/2);

// Addition of two strings results in concatenation
console.log('1' + '2');

// Addition of one numeric string and number results concatenation
console.log(1 + '1')
console.log(1 + 1 + '1');
console.log(1 + 1 + + '1');

console.log(10+20+"hahah");
console.log("hahah"+10+20);
console.log("10"/"20");
console.log("10"/20);

// Unary operators
console.log(+'2');
console.log(+'b')
console.log(('b' + 'a' + + 'a' + 'a').toString().toUpperCase());

/*****************************
    String Object
****************************/
var name1 = "Dhamareshwar"                  // String literal
var name2 = new String("Dhamareshwar");     // String object
var name3 = new String("Dhamareshwar");

// name1 == name2   -> true
// name1 === name2  -> false
// name2 == name3   -> false    Comparing two JavaScript objects will always return false
// name2 === name3  -> false


/*****************************
    Points to be noted
****************************/
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// Javascript uses 16 bits to represent a character and follows unicode format, some unicode characters require more than 16 bits (like some emojis), in that case 2 characters are used to represent that character.





/********************CONCLUSIONS**********************

1. Length     - string.length
2. position   - string.indexOf('string')
              - string.lastIndexOf('string')
3. Searching  - string.search('string')
4. slicing    - string.slice(start,end)
5. substring  - string.substring(start,end)
6. substr     - string.substr(start,length)
7. replace    - string.replace(oldstr,newstr)
              - use regural expressions for better replacing
8. lowercase  - string.toLowerCase()
9. uppsercase - string.toUpperCase()
10.string2array- string.split('split character')

************************************************************/
