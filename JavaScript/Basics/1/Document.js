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
belm.innerText = 'This is a inserted paragraph.';

// replacing an element with a new element
elm[0].replaceChild(belm, celm); // 1st arg is new element...2nd arg is old element

//query selection ..return first index of element
q1 = document.querySelector('p'); // id  are selected with alphabetical and numeric value
console.log(q1);

q2 = document.querySelectorAll('.btn'); // id  are selected with alphabetical and numeric value
console.log(q2);
