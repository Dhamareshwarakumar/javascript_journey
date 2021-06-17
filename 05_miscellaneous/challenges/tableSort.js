// Create a function that sorts array of objects based on given key and order 

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];



const tableSort = (items, orderBy, order) => {
    const generator = (a, b) => {
        if (order === 'asc') {
            if (typeof a[orderBy] === Number) {
                return a[orderBy] - b[orderBy]
            }
            var nameA = a[orderBy].toUpperCase(); // ignore upper and lowercase
            var nameB = b[orderBy].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        } else {
            if (typeof a[orderBy] === Number) {
                return b[orderBy] - a[orderBy]
            }
            var nameA = a[orderBy].toUpperCase(); // ignore upper and lowercase
            var nameB = b[orderBy].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
        }
    }
    items.sort(generator)
}


tableSort(items, 'name', 'asc')
console.log(items);