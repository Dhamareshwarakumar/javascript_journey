/****************************
            Numbers
****************************/


/*-----------------------
      Type conversion
------------------------*/

//  number to string

var x = (100 + 42).toString();
console.log(typeof (x));

// String to Numbers

console.log(Number("143"));
console.log(Number(true));



/*-------------------------
      Rounding of digits
-------------------------*/

var wow = 0.143785498;
console.log(wow.toFixed(3));
console.log(wow.toFixed(0));


console.log(Number.MAX_VALUE);


/**********CONCLUSIONS**********

1. number2string   - number.toString()
2. String2number   - Number(string)
3. rounding off    - number.toFixed(no of digits)

*********************************/