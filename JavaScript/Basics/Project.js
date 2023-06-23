
// Game to catch Number

let num = 0;
rndm = Math.floor(Math.random() * 899) + 100; // always generate 3 digit value between 100 till 500
rndom = document.getElementById('Rndm');
cnt = document.getElementById('count');

gnt = document.getElementById('gnt');
btn = document.getElementById('btn');
stp = document.getElementById('stp');


gnt.addEventListener('click', () => {
    rndom.innerText = rndm;
});

btn.addEventListener('click', () => { // event triggers when begin button clicked
    if (num == 0) { // no start if number is not generated
        cnt.innerText = `Please generate number first....`;
    }
    strt = setInterval(() => { // still needs improvement
        if (rndom.innerText == rndm) { // start when random number is  generated
            cnt.innerText = `${num}`;
            num++;
        }
        if (num > rndm) {// breaks when num exceed rndom number
            cnt.innerText = `The number is now ${num}.....
            \n\n Sorry You Loose....`;
            clearInterval(strt);
        }; 
    }, 50); // num increment every 50 msec;
});

stp.addEventListener('click', () => { // event when stop button is clicked 
    clearInterval(strt);
    if (num == rndm) {
        cnt.innerText = `You clicked exactly at ${num}.....
        \n Congrats You WiNnnnn....`;;
    }
    else {
        cnt.innerText = `You clicked at ${num}...
        \n Sorry You Loose...`;
    };
});

// Random Name generator

arrk = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];

ranName = Math.floor(Math.random() * arrk.length);

// console.log(ranName);

arrk.forEach((element, index) => {
    if (index == ranName) {
        console.log(`The winner of today lottery is ${element} with id ${ranName}`);
    }
});
