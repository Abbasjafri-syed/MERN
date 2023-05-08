// Date and time in JS


tme = new Date(); //shows time in GMT timezone
// console.log(tme);


str = tme.toString(); // returns only time and date
// console.log(str);

mscnd = Date.now(); // returns time in millisecond passed from 1jan1970
// console.log(mscnd);

dy = tme.getDay(); // returns day as per index value
// console.log(dy);

full = tme.setFullYear(2023, 0, 10); // returns hardcoded time in epoch
// console.log(full);

prep = new Date(2021, 4, 3, 8);  // returns time that is hardcoded
// console.log(prep);


lcl = tme.toLocaleString(); // returns only time and date
// console.log(lcl);

time = tme.toLocaleTimeString(); // returns only time
// console.log(time); 

dte = tme.toLocaleDateString(); // returns only date 
// console.log(dte);


// Math Object in JS

pie = Math.PI; // returns value of pi
// console.log(pie);

// makes number round to nearest integer ...till .4 it goes to lower bound
// from .5 goes upper bound
rnd = Math.round(-12.5999992);
// console.log(rnd);


expnt = Math.pow(12, 2); // takes 2 argument 1st is number 2nd is exponent
// console.log(expnt);

sqrt = Math.sqrt(81);  // method for square root
// console.log(sqrt);

absl = Math.abs(-89); // method for absolute value
// console.log(absl);

upr = Math.ceil(11.01); // method for returning value +1 if decimal is present
// console.log(upr);

lwr = Math.floor(11.43); // method for returning same value before decimal ..-ve valu give -1
// console.log(lwr);

min = Math.min(1, 0, 3, 5, -5, -11); // method for minimum value
// console.log(min);

max = Math.max(1, 0, 3, 5, -5, -11); //method for maximum value
// console.log(max);

trn = Math.trunc(-231.66); // truncate method for removing decimal
// console.log(trn);

rndom = Math.floor(Math.random() * 8999) + 1000; // always generate 4 digit valu
// console.log(rndom);

oddOrEven = (value) => { // knowing either number is odd or even
    if (value % 2 == 0) {
        console.log(`${value} is an Even number`);
    } else {
        console.log(`${value} is a Odd number`);
        // return `${value} is a Odd number`; // need resolution
    }
};
// oddOrEven(rndom);

