                            /*******************
                                    ARRAYS
                            ******************/



//      Syntax:
//          var array_name = [item1,item2,item3,item4.....];
//      Example:
            var mobile = ["Apple","1+","Samsung","Realme","Xiaomi"];

//      Accessing
            console.log(mobile[1]);

//      Overriting
            mobile[1] = "1+6"
            console.log(mobile[1]);

//      Printing array
            console.log(mobile);

//      Object Array
//            Syntax:
//                  var array_name = {name1:value1,name2:value2,name3:value3.....};
//            Example:
                    var gmrit = {cse:"ACM", it:"csi", ece:"iete", civil:"ie"};
                    console.log(gmrit.cse);


            /*---------------------------------
                Properties and Methods
            ----------------------------------*/

//  length
        console.log(mobile.length);

//  sort
        console.log(mobile.sort());
        //sorting Numbers
        let marks=[20,2,45,99,23,1,0,78,100,56,44]
        console.log(marks.sort(function(a, b){ return a-b }));      // Ascending
        console.log(marks.sort(function(a, b){ return b-a }));      // Descending


//  reverse
        console.log(mobile.reverse());

            /*----------------------------------
            Adding and Removing Array Elements
            -----------------------------------*/

    //Push and pop
        console.log(mobile.pop()+" is deleted");
        console.log(mobile);

        mobile.push("Huewai");
        mobile[mobile.length] = "HTC"
        console.log(mobile);

    //shift and unshift
        console.log(mobile.shift());
        console.log(mobile);

        console.log(mobile.unshift('Apple'));
        console.log(mobile);



    // Arrays to Strings
        console.log(mobile.toString());
        // Comma Seperated String

        console.log(mobile.join(' * '));
        // Character Seperated String



    // Splicing adding elements to an array
        mobile.splice(2,0,"micromax", "HTC");
        // -> Insertion at required position
        // 2 represents starting index
        // 0 represents delete count
        console.log(mobile);





/********************CONCLUSIONS**********************

1. Syntax : var array_name=[item1,item2,item3,item4.....];
2. Accessing: array_name[index];
3. Overriting: array_name[index]=new_element;
4. Array Object: var array_name = {name1:value1,name2:value2,name3:value3.....};

5. length     - array_name.length;
6. each elem  - array_name.forEach();
7. Arr2Str    - array_name.toString();
8. Push       - array_name.push();
9. pop        - array_name.pop();
10.splice - array_name.splice(start,delete_count,elements);

************************************************************/


/*************Task************
* Debug the below code to print sum

var txt = ;
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
txt = txt + value ;
}
console.log(txt)

****************************************/
