// Find the sum of the elements of given array
// Avoid using for and while loops (Try Array methods)

const arraySum = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
}

console.log(arraySum([3, 2, 1, 4, 5, 6]));


// Reference about Array reduce method :: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce