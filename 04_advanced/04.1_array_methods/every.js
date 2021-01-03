// checking the even numbers array


let is_even = (number) => {
    return number%2 === 0
}

const arr = [2,4,6,8,10];

op = arr.every(is_even)
console.log(op)



//-------->CONCLUSION<-------//
// Checks each and every value against the given condition provided by a function 
// return true if all the elements pass the condition else false