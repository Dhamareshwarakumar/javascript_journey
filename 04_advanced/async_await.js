const uno = () => {
    return "I am one";
};

// const dos = () => {
//     setTimeout(() => {
//         return "I am two";
//     }, 2000);
// };

const dos = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            // resolve("I am two");
            reject("I am two");
        }, 3000);
    });
};

const tres = () => {
    return "I am three";
};

const call_me = async () => {
    let val1 = uno();
    console.log(val1)
    let val2 = await dos();
    console.log(val2)
    let val3 = tres();
    console.log(val3)
}

call_me()