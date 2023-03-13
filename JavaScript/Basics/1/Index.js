
value = 3
// simple printing used for debugging purposes.
console.log('Hello World!', '%o', value);

// method to print warning messages
console.warn('unauthorized');

//method using to log error
console.error('This transaction is not supported');

// method used to evaluate two expressions
console.assert(5 == 5);

// method to print messages permanently
console.info('This is JS learning course');
/*
Multi
line
comment
*/


// Assignment operators
a = 2;
b = a;

// b += 1; //  same as b = b + 1;
// b -= 1;
// b *= 3; // result will be six as it is simple multiply
// b **= 3; // result will be 8 as it will be exponent
// b /= 2; 

console.log('This is the value of b ', b);

//Comparison Operators returns true or false

a = 1;
b = 2;

// checking for equality 
console.log(a == b);

// checking for non-equality;
console.log(a != b);

// checking for less than;
console.log(a < b);

// checking for greater than;
console.log(a > b);

// checking for less than or equality; returns true
console.log(a <= b);

// checking for greater than or equality;
console.log(a >= b);


// Logical operators returns bools

// Logical and '&&' both condition must be true

// returns true
console.log(true && true);

// returns false as both are not true
console.log(true && false);

// returns false
console.log(false && true);

// returns false as both are false
console.log(false && false);

// Logial or '||' operator where either one condition has to be true

// returns true
console.log(true || true);

// returns true as more preference is towards true
console.log(true || false);

// same as above
console.log(false || true);

// returns false as both are false
console.log(false || false);


// Logical not '!' operators which reverse the condition;

// making condition false
console.log(!true);

// making condition true
console.log(!false);

//calculating avg of two values
function avg(a, b) {
    var c = (a + b) / 2;
    return c
}
c1 = avg(15, 5.9) // passing values in arguments of function
console.log(c1);

//  conditionals check if-else

function checkAge(age) {
    if (age > 18) {  // checking if parameter is gt
        console.log('You can drive');
    }
    else if (age == 18) { // checking if parameter is exactly equal
        console.log('You need license to drive');
    }
    else { // execute if above both conditions are not met
        console.log('You cannot drive any vehicle');
    }
}
console.log(checkAge(18)); // passing value in arg of function

// arrays

var arr = [1, 2, 3, 'banana', 'apple']

// printing whole array
console.log(arr);

// printing length of array
console.log(arr.length);

//printing particular index of array
console.log(arr[1]);

// adding element at last index into array
arr.push(1);
console.log(arr);

// removing last element from array
arr.pop(); // no argument needed
console.log(arr);

// adding element at 1st index
arr.unshift(0);
console.log(arr);

// removing element from 1st index
arr.shift(); // no argument needed
console.log(arr);

// converting array into string
console.log(arr.toString()); // whole array converted to string
console.log(arr[2].toString()); //  particular index of array converted to string

// sorting array according to alphabetical order
console.log(arr.sort());

// selecting array using slice method // slice method does not change original values
// first argument is starting index of array; 2nd arg is previous index[n-1]
console.log(arr.slice(1, 4));
console.log('new');

// selecting array using splice method // splice removes and add array
// first argument is starting index of array; 2nd arg is last index
// removing two elements from 1st index and adding three values
console.log(arr.splice(1, 2, 56, 224, 345));

// returing elements from zero index till 5th index total 6 element [n-1]
console.log(arr.splice(0, 6));

// using multiple conditions to create logic

a = 2;
b = 3;

c = a < b;  // a is less than b
d = b <= a; // b is less than or equal to a
e = b >= a; // b is greater than or equal to a

// console.log(c && d);
// console.log(c && e);
// console.log(c || d);
// console.log(c != d);
// console.log(c != e); // c and e are equal

// loops  
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
addarr = [];

for (i = 0; i < arr.length; i++) {
    addarr.push(arr[i]); //loop first comes to push method...
    arr.shift(i); // then loop removes first index detected...
}
console.log('addarr array', addarr);

/* print how many times loop runs and gives last respective values
still have confusion and needs clarification [clue is in pop method]*/
console.log('arr array', arr);


let arrted = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// forEach loop executes with a function
arrted.forEach(function (i) { // paramter same as for loop
    console.log(i);
});

let kj = 10; // will throw error as there is no 10th index in arrted

// //do-while loop runs one tine before checking the condition
do { // here loops runs
    console.log('do loop', arrted[kj]);
    kj++;
} while (kj < arrted.length); // here condition is checked


// while loop run while condition is true
while (kj < arrted.length) { //here condition is checked and then run
    console.log('while loop', arrted[kj]);
    kj++;
}


// break and continue

arr1 = ['a1', 'a2', 'a3', 'a4', 'a5', 1, 2, 4, 323, 11]

for (let i = 0; i < arr1.length; i++) {
    if (i == 2) {
        break; // break means stop at given index
    }
    console.log(arr1[i]);
}

for (let i = 0; i < arr1.length; i++) {
    if (i == 2) {
        continue; // continue means skip given index
    }
    console.log(arr1[i]);
}

let str = 'i am a string';

console.log('string length: ',str.length);
console.log('string index: ',str.indexOf('string'));
console.log('string last index: ',str.lastIndexOf('am'));
console.log('replace string method: ',str.replace('string', 'text'));

