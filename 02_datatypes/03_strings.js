                                    /****************************
                                                Strings
                                    ****************************/


//  Strings declaration and definition
let firstname = "Dhamareshwarakumar";
let lastname = "Gandikota";
let motto = "Keep calm and hack the planet";


// USING ESCAPE CHARACTERS
console.log("I am \"king\" here");


// BREAKING INTO READABLE LINES (BAD PRACTISE)
console.log("Where is the Queen \
I wan to see her right now");

// BREAKING INTO READABLE LINES (BETTER PRACTISE)(Concatenation)
console.log("Declare war" +
"on Mahishmathy");



/*****************************
      String Methods
 ****************************/


// String Length
console.log("length of firstname is "+firstname.length);



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
    // using regular Expression
    console.log(firstname.search(/k/));

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
	middlename = firstname.replace("Dhamareshwara","");
	console.log(middlename);

    // using regular expressions on replace
    // replace() case-sensitive to case-insensitive
    middlename_i = firstname.replace(/DHAMARESHWARA/i,"G ");
    console.log(middlename_i);

    // replacing all the available matches not only first match
    motto_g = motto.replace(/k/g, "h");
    console.log(motto_g);

// We Will Discuss About Regular Later In this Tutorial

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


//miscellineas
var name1 = "Dhamareshwar"
var name2 = new String("Dhamareshwar");
var name3 = new String("Dhamareshwar");

// name1 == name2   -> true
// name1 === name2  -> false
// name2 == name3   -> false    Comparing two JavaScript objects will always return false
// name2 === name3  -> false

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).


console.log(10+20+"hahah");
console.log("hahah"+10+20);
console.log("10"/"20");
console.log("10"/20);




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
