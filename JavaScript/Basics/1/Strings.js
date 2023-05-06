// Strings in JS

str = 'i till like this'

par = str.lastIndexOf('i', 5); // whe index is given it means search till this index

// console.log(par);

arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// console.log(arr.slice(0, 3)); // slice method return copy data from same array [n-1]
// console.log(arr.splice(0, 3)); // splice method return new array by removing or replacing given index

// console.log(arr);

spr = 'hello, water, gate, red, blue,';

rkl = spr.slice(14, -1);  // -n index means search till last index and minus given index
// console.log(rkl);

prl = spr.slice(7); // means give index from 7 index till last
// console.log(prl);

orl = spr.substring(5, -3); // passing -ve index cause search to beign from 0th index and stop at index of 1st arg.
// console.log(orl);

olr = spr.substr(-5); // substr does not accept -ve index it simply take 1 arg which can be -ve for reverse search
// console.log(olr);

rplc = spr.replace('blue,', 'yellow'); // replace takes two argument 1st is old 
// and second is new element...it replace only first elemen found
// console.log(rplc);


// string character methods

str = 'hello world welcome to JS';

chr = str.charAt(4); // returns character at given index
// console.log(chr);


chrcde = str.charCodeAt(6); // returns UTF-16 code for character at given index
// console.log(chrcde);

// charCodeAt method accepts index value not length

lgth = str.length - 1; // length of string is -1 of index
chrlgt = str.charCodeAt(lgth); // UTF code for last character of string
// console.log(chrlgt);

jrk = 'this is Javascript';
prg = 'Programming Language';

prpty = jrk[5]; // propoerty access is same as charAt method but uses array 
// console.log(prpty);


upr = jrk.toUpperCase(); // convert all text into uppercase and takes no arguments
// console.log(upr);

lwr = jrk.toLowerCase(); // convert all text into lowercase and takes no arguments
// console.log(lwr);

cnct = jrk.concat(prg); //  concatenate elements
// console.log(cnct);

spce = jrk.concat(' ', prg); //  space can be give by passing a space string
// console.log(spce);


whtespce = '     this is whitespace....    ';

trm = whtespce.trim(); // removes white space from string
// console.log(whtespce);
// console.log(trm);

txt = 'a,d,e,g,h, # y,j';
splt = txt.split(','); // split method convert string into array with forming index
// console.log(splt);

spt = txt.split('#'); // index are created according to value passed..only takes 1 arg
// console.log(spt);

math = 4 + 3 + -6 - 2
// console.log(math);
