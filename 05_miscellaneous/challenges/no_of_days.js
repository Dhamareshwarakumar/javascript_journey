// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates


const noOfDays = (a, b) => {
    return Math.abs((a - b) / (1000 * 60 * 60 * 24))
}


console.log(noOfDays(new Date('2000-01-01'), new Date('2020-06-01')));