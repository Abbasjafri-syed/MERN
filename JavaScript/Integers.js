
var Dage= prompt('Your Dog age');

var calc= (Dage - 2) * 4 + 21;

// alert('Your Dog age is... '+ calc );

//incrementing or decrementing values
var x = 5;
x = x + 1; // incrementing by 1
x += 1; // incrementing
x += 2; // increment by 2 or given value, rule also applied in other operators like dive and multiply
x++; //same as above

var z = 5;
z = z - 1; // decrementing
z -= 1; // decrementing
z--; //same as above


// // function to switch values;
function main() {
    var a = 3;
    var b = 8;

    // switching values
    var c = b;
    b = a;
    a = c;
    console.log(a);
    console.log(b);
}
main() //calling function to show result


// // concatenate strings
var named = 'Ali';
alert('Hello ' + named);



//calculating days in life with days, weeks and months

function lifeAgeWeeksmain(age) {

    var lifeage = 90 - age;

    let lifedays = lifeage * 365;
    let lifeweeks = lifeage * 52;
    let lifeMonths = lifeage * 12;

    console.log('You have ' + lifedays + ' days, ' + lifeweeks + ' weeks and ' + lifeMonths + ' months ' + 'left...');
}
lifeAgeWeeksmain(32);


// //passing params in function to give expected result
function getMilk(money) {
    console.log('buy ' + Math.floor(money / 1.5) + ' bottles'); // floor give nearest low value
    return money % 1.5; //using modulo to calculate remaining value
}
getMilk(13);


// Making a output func
function useMoney(money, units) {
    var unitsPurchased = Math.floor(money / units); //giving 2 params
    return unitsPurchased;
}

// Making a second output func
function changeRemaining(money, units) {
    var change = money % units; // giving params
    return change; //returning the output
}


//Using a output function
function calculateMoney(amount, cost) {
    console.log('Total ' + useMoney(amount, cost) + ' Unit purchased ');
    return changeRemaining(amount, cost); //return stops the code
}
console.log('Remaining amount is ' + calculateMoney(2000, 180)) // console output function with params

//BMI calculator
function calculateBMI(weight, height) {
    var BMI = weight / (height ** 2); //using multiply 2 times is mkaing square
    return  Math.round(BMI); // better than floor or ceil method
}

var BMI = calculateBMI(73, 1.77) 
console.log('Your BMI Index is ' + BMI);


//methods for generating expotential value

var squareo = 4 * 3 //simple multiplication of squared
console.log('Your BMI Index is ' + squareo);

var square = 4 ** 3 // after multiply sign exponent value is define
console.log('Your BMI Index is ' + square);

//formula for exponent
var square1 = Math.pow(4, 2) // first input is value 2nd input is exponent
console.log('Your BMI Index is ' + square1);
