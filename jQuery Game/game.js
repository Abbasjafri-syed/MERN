

var buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];



$('.btn').click(function(){
  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function nextSequence(){
  // level++;
  //
  // $("#level-title").text("Level " + level);

var randomNumber =  Math.floor(Math.random() * 3) + 1;

randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColour);

};

function playSound(name){
  var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
};

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
     $("#" + currentColor).removeClass("pressed");
   }, 100);
 });
