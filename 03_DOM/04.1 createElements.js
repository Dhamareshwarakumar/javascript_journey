// Appending Child to the Body

let newElement = document.createElement("h2");
newElement.textContent="I am at the End";
document.body.appendChild(newElement);


//Appending new Element to a list

let newItem = document.createElement("li");
newItem.textContent ="last Element";
document.querySelector('ul').appendChild(newItem);


// Inserting Elements in middle(list)

let middleItem = document.createElement("li");
middleItem.textContent ="middle Element";

let element = document.querySelector('ul');
let child = document.querySelectorAll('li')[2];
element.insertBefore(middleItem,child);


// Inserting Elements in middle(para)

let middlePara = document.createElement("p");
middlePara.textContent ="middle Para";

element = document.querySelector('body');
child = document.querySelectorAll('p')[2];
element.insertBefore(middlePara,child);



// Deleting elements
let dele = function () {
    document.querySelectorAll('p')[4].remove();

    // document.body.removeChild(document.querySelectorAll('p')[4])
}

button=document.querySelector('button');
button.onclick=dele;
