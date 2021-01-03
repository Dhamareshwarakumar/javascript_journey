// developers may forgot to convert the input into text sometimes

const bill = (amount = 0) => {
    //amount = parseInt(amount);
    console.log(`please pay ${amount + 0.05*amount}`);
}

bill(10);
bill('10');

// output changes based on datatype