// DOM Manipulation

///give detail of whole page
document

// give detail related to ip address
document.location

// getting class element using dom
let elm = document.getElementsByClassName('btn');
console.log(elm);

// changing attributes by selecting particular class index
elm[0].style.backgroundColor = 'red';

// class adding method...same for removing
elm[1].classList.add('pager'); // add class

elm[1].classList.remove('pager'); // remove class

//getting only inner text of an element at a particular index
elm[0].innerText;

// get all html elements
console.log(elm[0].innerHtml);
