// developers may forgot to convert the input into text sometimes

const bill = (amount = 0) => {
    //amount = parseInt(amount);
    console.log(`please pay ${amount + 0.05 * amount}`);
}

bill(10);
bill('10');

// output changes based on datatype



// If name is not mentioned in form components then they wont be submitted on Onsubmit action (rather empty values will be sent)

// Dont mention method in the form (it takes GET as default method) and receive output as POST then there will be a mismatch

// Dont mention enctype headers while uploading a file so the file will not be received
