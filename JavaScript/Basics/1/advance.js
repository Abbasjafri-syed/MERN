// Advanced concept in JS

// Event bubble and capture


// false is event bubbling ... by default event is false
// sub.addEventListener('click', func1, false);

// true is event capturing....captured event are propogated outer to inner element
// add.addEventListener('click', func2, true);




// Higher Order and Callback Function

// callback functions are passed as param in other function

add = (param1, param2) => {
    return param1 + param2;
}

sub = (param1, param2) => {
    return param1 - param2;
}
mul = (param1, param2) => {
    return param1 * param2;
}
dvd = (param1, param2) => {
    return param1 / param2;
}

percent = (param1, param2) => {
    return (param1 / param2) * 100;  // divison before multiplication results in loss of precision
}
percent1 = (param1, param2) => {
    return (param1 * 100) / param2;
}

// HOF .. accpets other function as param

calculator = (param1, param2, operand) => {
    return operand(param1, param2);
}

equal = calculator(3087654324563454834567, 90252, percent); ///hof taking callback as param
equal1 = calculator(3087654324563454834567, 90252, percent1);
// console.log(equal);
// console.log(equal1);


// Hoisting in JS

// hoisting is moving func and variable  declaration to top order in chronology before code is executed

// console.log(num);
var num; // let keyword helps in avoiding hoisting as it need declaration before code is executed
let num1;
// console.log(num1);


// Lexical scoping

let global = 'I am global';

function parent() {
    let a = 'I am a parent';

    child = () => { //child function can access parent function and variable
        let b = 'I am a child';
        // console.log(a + b + global);
    }
    child();
    // console.log(a + global); // b is variable in child function cannot be accessed
}
parent();
// console.log(global); // a and b are variable in child function in relation to global variable

// Closure in JS

function out(lum) {
    let num1 = 9;

    let infunc = () => {
        let sum = lum + num1;
        console.log(sum);
    }
    return infunc;     // function is returned but not called..return no data but saved in parent func
}

closure = out(5);
// closure();  // closure return the code as value is contained in parent func
// console.dir(closure); // console same as log... to know child function in parent func..also contain other details


//  Synchronous JS ...process carried out in a chronological way

function sync() {
    console.log('This is synchronous JS');
}

function order() { // synchron code run in chronological order
    console.log('This is first order JS');
    sync();
    console.log('This is first order repeated JS');

}
// order();

// Asynchronous JS...all process are carried out without any chronological order
function async() {
    setTimeout(() => {
        console.log('This is Asynchronous after 5 sec');
    }, 5000);
}

function orderasync() { // async method process all method at same time
    console.log('This is first order JS');
    async();
    console.log('This is first order repeated after async');
}
// orderasync();

// Function currying
//based on concept where one func take one argument and return it in other function..
// same concept as lexical scoping and closures


function sum(num1) {
    return function (num2) {
        return function (num3) {
            console.log(num1 + num2 + num3);
        };
    };
}
// sum(22)(23)(5);

arr = ['abc', 'def', 'ghi', 'jkl', 'mno'];

function uint(num) {
    return function () {
        // indx = arr.includes(num) // returns bool
        // indx= arr.indexOf(num) + 1; // returns index value
        indx = arr[num]; // returns value at given index
        //   console.log(indx);
    };
};
uint(2)();


// same as mapping concept in solidity

const whiteList = (num) => () => {
    index = arr.includes(num); // returns bool
    console.log(index);
};
whiteList('def')();
