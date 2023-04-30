// Arrays in JS

// index starts at zero while length at one
// Arrays are class
let arr = new Array; // this is array class

// variable arrays are arrays prototype
let arry = [1, 2, 3, true, '4th index having length 5', 3, null, undefined]; // array can store all type of data in it...

// console.log('Total length of array is..', arry.length); // property to know array length
// console.log('Last index is', arry[arry.length - 1]); // property to print last element
// console.log('This is the',arry[4]); // property to print specific element

// for Loop

for (let i = 0; i < arry.length; i++) { //for loop display all element in array
    if (i == 4) {
        continue; // skip given index
        // break; // break loop and ends at given index
    }
    // console.log(arry[i]);
}

// for-in Loop

for (let elements in arry) { //for-in loop display indexes of elements in array
    // console.log(elements);
}

// for-of Loop

for (let datas of arry) { //for-of loop display values of elements in array
    // console.log(datas);
}

// forEach loop

arry.forEach((element, index) => { // forEach loop can display element , index and the whole array
    //         if (element == 3) { //condition to show only required element
    //         console.log('This is element', element);
    //         console.log('This is index', index);
    //         // console.log('This is array', array);
    //         console.log('x-----x');
    //     //  }
});


let dta = [1, 9, 0, 4, 3, 'str', 'wrd', 'text', 'str', 'apple'];

// indexOf method

// gives only first index if elememt is given...

idx = dta.indexOf('str'); //if index is given then it will start searching from given index
// console.log('This is first index', idx);

// lastIndexOf method backward search
lstind = dta.lastIndexOf('str'); // this method searches array from last index
// console.log('This is last index', lstind);

nodta = dta.lastIndexOf('STR');
// console.log(nodta); // wrong data return -1

// includes method look for element in array

incld = dta.includes('str'); // return boolean if element is present
// console.log('This is includes method returning', incld);

// find method returns element if found..only first one

fnd = dta.find((element) => element > 3); // returns
// console.log('This is find method returning first element found -->', fnd);

// findIndex method returns index of element of found..only first one

fndIndx = dta.findIndex((element) => element > 3); // returns
// console.log('This is findIndex method returning index -->', fndIndx);


// filter method returns all values with new array.. if no data match return empty array
fltr = dta.filter((element) => element == 'str' || element > 3);
// console.log('This is filter method returning data in arrays -->', fltr);


//sort method

srt = dta.sort(); // returns array as per alphabetical and numerical order
// console.log('this is sorted data', srt);


// CRUD in arrays

arr1 = ['asf', 45, true, 'string', 'maker'];


//push method

rke = arr1.push('added'); // add element at last index
// console.log('push Method', arr1.push('added')); // consoling array methods gives out new length of array
// console.log(arr1);


// unshift method
usht = arr1.unshift('oneth'); // add element at first index
// console.log('unshift Method', arr1.unshift(usht)); // using unshift on unshift pushed array length at first index
// console.log(arr1);


// pop method
arr1.pop(); // remove element from the last index no argument needed
// console.log('pop Method', arr1.pop()); // gives out the last element removed
// console.log(arr1);


// shift method

arr1.shift();
// console.log('shift method', arr1.shift()); // gives out the first element removed
// console.log(arr1);

// splice method 

// splice is most effective for CRUD operations

alpha = ['a', 'b', 'c', 'f', 'd', 'e', 'f', 'g', 'h']

// alpha.splice (index of array, element to be removed from index mentioned priorly, new data adding);

alpha.splice(alpha.length, 0, 'dem'); // method to insert new data at last index if index value is not known
// alpha.splice (2, 2, 123 , 'kile');
krill = alpha.splice(alpha.length - 3, 2, 123);// from last index subs 3 index,  delete 2 items and add 123

// console.log(alpha);
// console.log(krill); //  return value of splice is deleted elements of array

alpa = ['a', 'b', 'c', 'f', 'd', 'e', 'f', 'g', 'h'];

indexAlpha = alpa.indexOf('hg'); //  indexOf returns index of an element

if (indexAlpha != -1) { // -1 means if an element is not present
    alpa.splice(indexAlpha, 1, 'kile')
    // console.log(alpa);
} else {
    // console.log('no such data is present');
}

pkr = ['a', 'b', 'c', 'f', 'd', 'e', 'f', 'g', 'h'];

if (indexAlpha = pkr.indexOf('f')) {
    pkr.splice(indexAlpha, Infinity); // infinity means delete all other data from the given index included
}
// console.log(pkr);


// map method

arp = [1, 2, 3, 4, 5, 6, 7];

let darp = arp.map((elem) => {  // map method is like includes which checks for element present
    return elem > 5;
});
// console.log(darp);

ark = [1, 2, 3, 4, 5, 6, 7];
zark = ark.map((elem, index) => { // map method returns new array
    if (elem == '3')
        return `You are indexed at no:${index} for the element: ${elem}`;
});
// console.log('this is map', zark);

prk = ark.forEach((elem, index) => { // forEach  return undefined
    if (elem == '3')
        return `You are indexed at no:${index} for the element: ${elem}`;
});
// console.log('this is foreach', prk);


nmber = [75, 86, 4, 81, 64];

// finding square root
pckr = nmber.map((elem) => Math.sqrt(elem));

// console.log(pckr);

// multiplying with a number and return specific number
dckr = pckr.map((elem) => elem * 2) // chaining filter method
    .filter((elem) => {
        return elem > 10;
    });

// console.log(dckr);


// reduce method

rckr = nmber.reduce((accumulator, elem) => {
    return accumulator += elem; // accumulator collects all value inside it
}, 3); //  'initial value can be passed into reduce method'

// console.log(rckr);


// concatenate method to add 2 variables
ret = 'Hello';
fdf = 'World';

det = ret.concat(fdf);
// console.log(det);

d2arr = [[123,'abc'],['def'],['jkl'],['mno', 'pqr'],['stu', 'xyz']]

jkt = d2arr.reduce((accm, elem) => {
    return accm.concat(elem); // accm has all data inside it
});
// console.log(jkt);

