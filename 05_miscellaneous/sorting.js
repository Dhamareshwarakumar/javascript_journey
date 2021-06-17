let numbers = [33, 22, 111, 2, 222, 1, 3, 11, 333, 22]

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];


// inbuilt sorting
console.log(numbers.sort());        // [1,  11, 111,  2,  22, 22, 222, 3, 33, 333]


// Descending Order generator
const descGenerator = (a, b) => b - a;


// Ascending Order generator
const ascGenerator = (a, b) => a - b;


// Sorting Array of objects
itemValueAscGenerator = (a, b) => a.name - b.name

console.log(items.sort(itemValueAscGenerator))