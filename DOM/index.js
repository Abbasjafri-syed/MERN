var r1 = Math.floor(Math.random() * 6) + 1; //selecting random numbers b/w 1 n 6

var dice1 = './images/dice' + r1 + '.png'; //generating random images inside image folder using random formula

document.querySelectorAll('img')[0].setAttribute('src', dice1); //changing attribute accoridng to random number


var r2 = Math.floor(Math.random() * 6) + 1;

var dice2 = './images/dice' + r2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', dice2);

//dom manipulation
if (r1 > r2) {
    document.querySelector('h1').innerHTML = '🗽 Player 1 wins...'; //showing result for r1 by chnaging inner HTML contain within h1 tag
}
else if (r1 < r2) {
    document.querySelector('h1').innerHTML = '🗽 Player 2 wins...';
}

else {
    document.querySelector('h1').innerHTML = 'Match Draw...';
}
