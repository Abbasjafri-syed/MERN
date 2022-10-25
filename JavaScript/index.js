alert('World') // create a popup 
prompt('Hello please enter your name....') // create a pop-up for input values

var Name = 'asd'; // initialising or constructing a variable needed type to be defined 
alert(Name) // showing variable into alert


var Level = 1;
Level = prompt('Please enter your level....');



// function to switch values;
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


// concatenate strings
var named = 'Ali';
alert('Hello ' + named);



//calculating number of words written
var a = prompt('write your message');

alert('You have written ' + a.length +' characters...' + (140 - a.length) + ' remaining characters in your message');
             

// greeting users from input values
var b = prompt('Your Name');
alert('Hello ' + b +'...');


var c = prompt('Input Value');
alert(typeof(c));


//limiting number of words using slice function

var a = prompt('write your message');
alert(a.slice(0, 14));

// alert(prompt('write your message').slice(0, 4)); //same functionality as above

//changing name into required casing
var Game = 'My Game'
Game.toUpperCase();

var name = 'My name'
name.toLowerCase();



//Changing name to lower case

var a = prompt('What is your name...');

var name = a.slice(0, 1); // taking first char

Up = name.toUpperCase(); //converting to uppercase

restname = a.slice(1, a.length); //taking rest char

down = restname.toLowerCase(); //converting to lowercase

merge = Up + down; //merge the convert value


alert('Hello ' + merge);
