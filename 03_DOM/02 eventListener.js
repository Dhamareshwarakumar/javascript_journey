document.querySelector('button').addEventListener('click', (event) => {
    console.log("Button was pressed");
    event.target.textContent = "I was Clicked";
});
document.querySelectorAll('button')[1].addEventListener('click', (event) => {
    console.log("Button was pressed");
    event.target.textContent = "I was Clicked";
});


document.querySelector('h1').onclick = () => {
    document.querySelector('h1').textContent = "Welcome Folks We are in DOM Session";
};


document.querySelector('h1').onmouseover = () => {
    document.querySelector('h1').style.color = "red";
};

document.querySelector('h1').onmouseout = () => {
    document.querySelector('h1').style.color = "red";
};