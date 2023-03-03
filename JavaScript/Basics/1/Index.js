
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
    if (age > 19) {  // checking if parameter is gt
        console.log('You can drive');
    }
    else if (age == 18) { // checking if parameter is exactly equal
        console.log('You need license to drive');
    }
    else { // execute if above both conditions are not met
        console.log('You cannot drive any vehicle');
    }
}
console.log(checkAge(13)); // passing value in arg of function

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
