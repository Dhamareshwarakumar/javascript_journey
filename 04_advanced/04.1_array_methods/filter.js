// returning even numbers from given array

let array=[1,2,3,4,5,6,7,8,9];

let output = array.filter((num) => {
  return num%2 === 0;
})

console.log(`even numbers in given array are: ${output}`);



// let mobile = ["Apple","1+",'Hauwai','Samsung',"Realme","Oppo",'Vivo',"Xiaomi"];
//
// var count=0;
// let mobile_selected = mobile.filter((mobile,count) => {
//   console.log(mobile);
//   count=count+1;
//   return count>3 === true;
// })
//
// console.log(mobile_selected);

let mobile_price =[{
  name: "Apple",
  price: 93000,
},{
  name: "1+",
  price: 45000,
},{
  name: 'samsung',
  price: 63000,
},{
  name: "Realme",
  price: 12000,
},{
  name: "Oppo",
  price: 21000,
},{
  name: 'Vivo',
  price: 17000,
},{
  name:"Xiaomi",
  price: 9000,
}];

//Selecting mobiles under 25000

let mobile_filtered = mobile_price.filter((mobile) => mobile.price <25000)


console.log("Mobiles under 25000 are...");
console.log(mobile_filtered);

mobile_filtered.filter((mobile) => {
console.log(mobile.name);
});




//-------->CONCLUSION<-------//

// 1. The filter() method creates a new array
//    with all elements that pass the test
//    implemented by the provided function.
