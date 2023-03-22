// DOM Manipulation

///give detail of whole page
document

// give detail related to ip address
document.location

//gives domain name of the page
document.domain

// getting class element using dom
let elm = document.getElementsByClassName('btn');
console.log(elm[0]);

// changing attributes by selecting particular class index
elm[0].style.backgroundColor = 'red';

// class adding method...same for removing
elm[1].classList.add('pager'); // add class

elm[1].classList.remove('pager'); // remove class

//getting only inner text of an element at a particular index
let dc = elm[0].innerText;
console.log(dc);


// get all html elements
let dce = elm[0].innerHtml; // facing issue
console.log(dce);

//getting element by tag name
tg = document.getElementsByTagName('meta');
// defining particular index of tag
console.log(tg[1]);

// create an element
let celm = document.createElement('p');

// setting inner text for an element
celm.innerText = 'This is a created paragraph.';

//appending or inserting an element into an existing element
elm[0].appendChild(celm);


let belm = document.createElement('p');
belm.innerText = 'This is an inserted paragraph.';

// replacing an element with a new element
elm[0].replaceChild(belm, celm); // 1st arg is new element...2nd arg is old element

//query selection ..return first index of element
q1 = document.querySelector('#v14'); // id  are selected with compound sign and alphabetical and numeric value
console.log(q1);

q2 = document.querySelectorAll('.btn'); // classes are selected with . sign
console.log(q2);

//events in JS
//event for click
function clicked() {
    console.log('This button was clicked');
}

// event when window is load
window.load = loader()

function loader() {
    console.log('This page has been loaded');

}

// event listener does not work on classes, rather choose id
v14.addEventListener('click', function () {
    console.log('This event is listened');
});


// saving html condition into a variable
let prevhtml = document.querySelector('#v14').innerText;


//adding event to the whole page
document.addEventListener('mouseover', function () {

    // in query selection it is better to select whole document
    // and then choosing the element
    document.querySelector('#v14').innerText = 'This script has been changed.'
    console.log('This document is listened');
});

//changing event according to requirement to record activity
document.addEventListener('mouseout', function () {

    document.querySelector('#v14').innerText = prevhtml;
    console.log('This document is restored');
});


// arrow function..mainly used for inserting a function within a function

sum = (b, c) => {
    return b - c;
};

relog = () => {
    document.querySelector('#v14').innerText = 'Your event is now recorded';
    console.log('This is set Time out event');
}

// setTimeout method is used for delaying any code execution..changes only take place once
setTimeout(relog, 2000);

relog2 = () => {
    document.querySelector('#v14').innerText = 'Your event is now recorded';
    console.log('This is set Interval event');
}

// setInterval method is used for repeating a logic after a particular time
intervl = setInterval(relog2, 3000);

// clear method is used to stop the time interval method
clearTimeout(intervl);


// Local storage

//checking data of local storage
localStorage;

// setting local storage
localStorage.setItem('Browser', 'Brave');

// getting local storage
localStorage.getItem('Browser');

//method to know data type of any element
let lcl = typeof localStorage
console.log(lcl);

console.log(localStorage);

// making object into a string

let strng = JSON.stringify(localStorage);
console.log('This is the string of localstorage object', strng);

// making string into object
let parsed = JSON.parse(strng);
console.log('This is the object of string', parsed);

// parser = JSON.parse(`{"Browser": "Brave"}`); //  confusion still exist
// console.log(parser);

//method for removing a particular object from local storage
localStorage.removeItem('Browser');

//method for clearing the whole local storage
localStorage.clear();
