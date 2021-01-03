//--------> DOM MANIULATION<--------------//

// console.log(document.getElementById('idone'));

document.title = "JavaScript";          //changes the title tag innerHTML

let hone = document.querySelector('h1')
hone.textContent = "Hello JavaScript";

// Selecting particular tag/s
let ptag = document.querySelectorAll('p');
console.log(ptag);
console.log(ptag[3]);

// Selecting elements by id /class
console.log(document.querySelector('#idone'));
console.log(document.querySelector('.classone'));



// Creating new element
let newElement = document.createElement('p');
newElement.textContent = "This line is added using JS";
document.querySelector('body').appendChild(newElement);


let anotherElement = document.createElement('p');
anotherElement.setAttribute('id','js');
anotherElement.textContent = "Another line is added using JS";
document.querySelector('body').appendChild(anotherElement);


//Modifying Attributes
document.querySelector('a').setAttribute('href','https://google.com');



// Removing elements
document.querySelector('#js').remove();




/***********************************
1. document.getElementBYId('IdName')
2. document.getElementsByClassName('className')
3. document.title returns title of the document


4. document.querySelector('tag|id|class')
5. document.querySelectorAll('tag|id|class')[number]
6.document.querySelector('body').appendChild(document.createElement('tagname'))


****************************************/
