var drumnum = document.querySelectorAll('.drum').length; // all is used when all elements are selected

for (var i = 0; i < drumnum; i++) { //running loop on all selected elements

  document.querySelectorAll('.drum')[i].addEventListener('click', function() { //click event will be trigggered for all selected element

  var blockClick = this.innerHTML; //saving element into var when click triggered

  Soundkey(blockClick); //calling function with param of selected element
  animateButton(blockClick);
});

}
  document.addEventListener('keypress', function(event) { //keypress event with link with function
  Soundkey(event.key); //calling function and passing param
  animateButton(event.key);
  });


  function Soundkey(key){ //passing param in function

  switch (key) { //switch statement using param
    case 'w': //selecting key as case
      var crash = new Audio('./sounds/crash.mp3'); //defining path of file to be included in quotes
      crash.play();
      break; //code ends here

    case 'a':
      var kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;

    case 's':
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case 'd':
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case 'j':
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case 'k':
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'l':
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    default: alert('Please press or click relevant Alphabets'); // undefined condition

  }
}

function animateButton(currentKey){
  var btnanimate = document.querySelector('.' + currentKey) // selecting class of key presses
  btnanimate.classList.add('pressed'); //adding class into a specific tag

  setTimeout(function () { //time interval function 1st param is code, 2nd is time in ms
    btnanimate.classList.remove('pressed');
  }, 100);

  }
