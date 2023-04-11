// Data Types

let _var = 10 - 'b'; // substract sign is for integers only
let _1__pek = 10 + 'pade'; //add sign makes integer to string
let beak = true + true // true has default value of 1
let peak = true - false // false has default value of 0

// console.log(_var); // return NaN
// console.log(typeof (_var)); // var convert to integer after substraction
// console.log(_1__pek);
// console.log(typeof (_1__pek)); // var convert to string after concatenation
// console.log(beak);
// console.log(peak);
// console.log(typeof (peak)); //bool converted  to integer


a = 10 - 9.1;
// console.log(a.toFixed(1)); // method to have specific decimals

let pica; // undefined variable
let dica = null // null variable like non-existent

if (pica === null) { // three '===' compare values as well as data type
    rate = 10;
    pica = rate;
};
// console.log(pica);
// console.log(typeof (pica)); //checking data type
// console.log(typeof (dica));


// NaN values

// let brick = 'kill bill';
let brick = 55

// console.log(isNaN(brick));

if (isNaN(brick) == true) { // isNaN returns true if variable value is not a numeric value and viceversa.
    // console.log('Please enter numeric values only'); //true is returned
} else {
    // console.log('Number saved successfully'); // false is returned
}

// // return false as it check for not a numeric value
// console.log(NaN == NaN);

// // return false as NaN is not number itself and checking other variable is not a numeric 
// console.log(Number.NaN == NaN);

// return true  as NaN is not number 
// console.log(isNaN(NaN));

// //NaN dat type is number
// console.log(typeof (NaN));


// code can be written in multpile lines also
var tf = 1
    +
    9;

// console.log(tf);


// operators types

let x = 5;
let y = 5;
// two operators cannot be used at the same time
// console.log('are both x and y equal; ' , x == y);


// modulo operator
let omud = 23.5 % 2; // large value is always written in first

// console.log(omud); //...returns the remainder value


// increment

//post increment
let krd = 5;

// increment always require a variable
let ikrd = krd++; // post increment returns value before increment

// console.log('this is krd ', krd); //increment value will be returned here
// console.log('this is ikrd ', ikrd);

// pre increment
chg = 5;
ichg = ++chg;  // pre increment returns value after increment

// console.log('this is chg ', chg); 
// console.log('this is ichg ', ichg); //increment value will be returned here



// post decrement

let dce = 9 // (dce - 1) 
let idce = dce-- + 2;  // (dce + 2) post decrement returns value before decrement

// console.log('this is dce ', dce); //decrement value will be returned here
// console.log('this is idce ', idce);


// pre decrement

let cde = 9 // (cde - 1)
let icde = --cde + 2; // (cde - 1  + 2) pre decrement returns value after decrement

// console.log('this is cde ', cde);
// console.log('this is icde ', icde); //decrement value will be returned here


let pk = 2 ** 3 // 3 is exponent value i.e. power that will be multiplied
// console.log(pk);

dk = 3 ** -5 // same as  1 / 3 * 3 * 3 * 3 * 3
tk = 1 / 243 // above equation simplified

// console.log('this is dk ', dk);
// console.log('this is tk ', tk);

// Swap values

let lk = 9;
let jk = 13;

// swapping values are carried out through artithmetic operation

jk = lk + 4;
lk = jk - 4;

// console.log('this is jk ', jk);
// console.log('this is lk ', lk);


// value and data types

txt = '14';
str = 14;

// console.log(txt == str); // returns true as compare only value
// console.log(txt === str); // return false by comparing value as well as data type





// Iteration in loop

// data types NaN, null, undefined, 0, ''... are by default false; 
// commonly known as false values

if (work = NaN) {
    // console.log('This is true condition');
} else {
    // console.log('This is false condition');
}

// switch loop
let area = 'circle';

switch (area) { // checking condition for loop to run

    case 'circle': // case should be within  quotes
    // console.log('this area is circle');
    // break;

    case 'triangle':
        // console.log('this area is triangle');
        break; // break keyword stop the whole code

    case 'PI':
    // console.log('this area is pi');
    // break;

    default: // default case is when no conditin is matched
    // console.log('this area is Unexplored');
}

// while loop

let xarr = 10;

while (xarr <= 10) { // while loop checks the condition first then execute the logic
    // console.log(xarr);
    xarr++; // incrementing value till condition is not met
}



// do while loop

arr = 11;
// do {
//     console.log(arr); // logic  run here first then evaluates the condition
//     arr++;
// } while (arr <= 10); // condition is checked here




// for loop

j = 10 // variable value

if (j <= 10) { // condition for variable value either less than or equal to
    for (let i = 0; i < j; i++) {
        // console.log(i); // printing index of variable
        // console.log('this is 1st loop', i);
    }
} else { // if above condition is not met then this condition is met
    for (let i = 0; i <= j; i++) {
        // console.log(i);
        // console.log('this is 2nd loop', i);
    }
}


j = [1, 2, 3, 4, 5, 'a', true,] // array value

if (j.length <= 10) { //checking condition for array value
    for (let i = 0; i < j.length; i++) {
        // console.log(j[i]); // printing value for every array element according to index
        // console.log('this is 1st loop', i);
    }
} else {
    for (let i = 0; i <= j.length; i++) {
        // console.log(i);
        // console.log('this is 2nd loop', i);
    }
}


// printing table using for loop

tble = 8
for (let i = 1; i <= 10; i++) {

    // console.log(tble, 'x', i, '=', tble * i);

}

// printing table using while loop
jfx = 5;
let i = 1; // intialising variable

while (i <= 10) { //defining condition
    console.log(jfx, 'x', i, '=', jfx * i);
    i++; //iterating variable
}


