// object orient prograaming-OOP


// this...key gives the data of the context in which it is present
// console.log(this); // window context in lone form

// object is based on key pair data structure 

object = {
    key: 'pair',
    number: 1,
    objKey() { // function does not need key or declaration
        // console.log(this); // become context of all data present within object
    }
}
object.objKey(); // method to call function within a object

function thisKey() {
    fctor = 45;
    // console.log(this); // in function key has global scope if use alone
    // console.log(this.fctor); // in function any data present in global scope can be accessed
};

thisKey();


// Destructing

// object destructing

//  array destructuring

value = ['abc', 12, 14, 'five'];

// let [name , number, rollno, classno] = value; // array destructuring by saving index with named variable

let [name, number, rollno, classno, kill = 'cool'] = value; // passing value using destructor

// console.log(kill); // consoling is done using var name in which value is saved



// Object Destructuring

objName = {
    myName: "abc",
    myNum: 12,
    myRoll: 14
}

let { Mynam, myNum, myRoll, myCrill = 19 } = objName; // object desttructing name is saved with same name of object key

// console.log(myCrill);
// console.log(objName);


// Object Properties

named = 'Abxc';
roll = 124;
clasroom = '4ad';

objyn = {
    [named]: named, // dynamic data is passed by putting key into sqr brckt
    myRoll: roll, // dynamic data is passed for pair from name of variable..in key sqr brckt not needed
    12: 12, // key with numerical value will always come first
    clasroom // dynamic data without key 
}

// console.log(objyn);


// spread Operators

dring = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

bring = [10, 11, 12, 13, 14, 15, 16, 17];

sprd = [...dring, ...bring, 18, 19, 20]; // spread operator presented with ...varname

// console.log(sprd);

sprdloop = () => {
    for (let i = 0; i < sprd.length; i++) {
        console.log(sprd[i]);
    }
}
// console.log(sprdloop());
