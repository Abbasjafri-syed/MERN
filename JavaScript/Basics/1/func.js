// functions in JS

function sum(a, b) { // function paramters are values passed when function are defined
    c = a + b;
    console.log(c);
    return c;
}

// function arguments are values when they are passed on calling

// sum(); 
// sum(30, 20);
// sum(30, -10);

// function expression

function exp(a, b) {
    return c = a + b;// return keyword stops code execution
}

// function expression is saving function into a variable
funcExp = exp(10, 5); // function expression

// console.log(funcExp);


// anonymous function expression

anonym = function (a, b) {
    return a + b;
}

// console.log(anonym(10, 20)); // passsing arguments into anonymous function

passanon = anonym(10, 35); //passing argument and saving value in anonymous function expression

// console.log('This value is anonymous function expression', passanon);


// Template or strings Literals

// back ticks are known as template literals
var page = 50;

// string does not need inverted commas
// variables are passed in dollared code blocks

// console.log(`This is my number ${page}... your's is ${page - 10}.`);


// default argument is hard coding param value in declaration

function mul(a, b = 5) {
    return a * b
}
mul(8);


// Call back or fat arrow function

const sub = (a, b) => { // fat arrow function is represented by symbol '=>'
    return a - b;
}
// call back function cannot be called before initialisation...
// console.log(`This is a callback || arrow function ${sub(10, 5)}`);


const div = () => `Average value is ${(10 * 5) / 2} ` // fat arrow function does not need curly brackets
console.log(div());



