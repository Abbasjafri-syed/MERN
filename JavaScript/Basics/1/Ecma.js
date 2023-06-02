// Ecma features

// String Padding

str = 'String';
prl = str.padStart(8); // padding in start...also count string length
endStr = str.padEnd(8); // padding in end

// console.log(str);
// console.log(prl);
// console.log(endStr, '<--this is space in end....');

obj = {
    name: 'String',
    value: 12
}

val = Object.values(obj); // returns values of key in object
entry = Object.entries(obj); // returns whole key and pair as different values within a single nested array

mixer = entry.reduce((accm, elem) => { // reduce method to collect all data in a single array
    return accm.concat(elem); // concatenate all elements into a single array
});

// console.log(val);
// console.log(entry);
// console.log(mixer);


nstdarr = [['arr1'], 'arr2', 'arr3', ['arr4', ['arr5', ['arr6', ['arr7']]], 'arr8']]; // nested array with difflevel

flt = nstdarr.flat(2); // flatten array based on level defined
infflt = nstdarr.flat(Infinity); // flatten array irrespective of level present

// console.log(flt);
// console.log(infflt);


arr = [['arr1', 'arr2'], ['arr11', 'arr12'], ['arr21', 'arr22'], ['arr31', 'arr32']];

prr = Object.fromEntries(arr); // covert array into object as key value pairs 

// console.log(prr);

// BigInt

// maxmum limit of integers value in js without bigint
intgr = Math.pow(2, 53) - 1; // same as 2 ** 53 - 1
numLmt = Number.MAX_SAFE_INTEGER;

// clc = 115792089237316195423570985008687907853269984665640564039457584007913129639936 - 115792089237316195423570985008687907853269984665640564039457584007913129639936;
Bintger = Math.pow(2, 256);
bInt = BigInt(Bintger); //  method to handle large integer values

// bigInt = 115792089237316195423570985008687907853269984665640564039457584007913129639936n // n is symbol of Big integer to handle large
// // console.log(clc);
// console.log(intgr);
// console.log(numLmt);
// console.log(bInt);

// null operator

crl = null ?? 'this is null';
fl = false ?? 'not a null or undefined value';

// console.log(crl);
// console.log(fl);

// "use strict"; strict mode in which all data type need declaration

function drct() {
    "use strict";
   let  prnt = 50 - 5; // strict mode restrict use of code without proper syntax
    // console.log(prnt);
}
drct()
