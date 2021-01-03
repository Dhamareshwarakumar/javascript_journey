                /***********************
                 Conditional Statements
                 **********************/


    /*-------------------
    If-else Statements
    -------------------*/

        if(true) {
          console.log("Yaaaay we are learning conditional statements");
        }


        if(true) {
          console.log("Yaaaay we are learning conditional statements");
        } else {
			console.log("We are in else");
		}


        if(true) {
          console.log("Yaaaay we are learning conditional statements");
        } else if(false){
			console.log("We are in else if");
		} else {
			console.log("We are in else");
		}


// lets see an example here consider grading system
//	100 marks = outstanding
//	> 90 excellent
//	> 80 Good
//	> 70 average
//	> 60 poor
//	<= 60 better luck next time
let grading = function(marks){  
	if(marks==100) {
		console.log('Outstanding');
	} else if(marks > 90) {
		console.log('Excellent');
	} else if (marks > 80) {
		console.log('Good');
	} else if(marks > 70) {
		console.log('Average');
	} else if (marks > 60) {
		console.log('poor');
	} else {
		console.log("Better Luck next time");
	}

}



	// eqality operator
	// && || operator
	// ! opeartor

    /*--------------
      While loop
    --------------*/

        let num=1

        while (num<11) {
            console.log(num);
            num++;
        }



    /*--------------
      for loop
    --------------*/

        for (let i=10; i>0; i--) {
            console.log(i);
        }


    /*-------
    forEach()
    ---------*/

let arr=['mon','tue','wed','thu','fri','sat'];
console.log(arr);


arr.forEach((value,index,array) => {                        // Here index, array are optional but value is mandatory
  console.log(`${value} is at ${index+1} in [${array}]`);
});




let vowels=[];
let cons=[];
for(let i of 'javascript') {
    if(i == 'a' || i == 'u' || i == 'o' || i == 'i' || i == 'e') {
      vowels.push(i);
    } else {
          cons.push(i);
    }
}


// console.log(vowels);
// console.log(cons);


vowels.forEach((value) => {
  console.log(value);
});
cons.forEach((value) => {
  console.log(value);
});
