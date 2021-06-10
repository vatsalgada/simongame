
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;



$(document).keypress(function(){
    if (started === false){
        nextSequence();
        started = true;
        console.log("j");
    };

    
    
});

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    $("#" + randomChosenColor).fadeOut(150).fadeIn(150);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
    $("h1").text("level " + level);
    level = level + 1;
}

$(".btn").click(function(){
     var userChoosenColor = this.id;
     userClickedPattern.push(userChoosenColor);
     playSound(userChoosenColor);
     animatePress(userChoosenColor);
});

function playSound(name){
    var audio = new Audio(  "sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(cureentColor){
    var theButton = $("." + cureentColor);
    theButton.addClass('pressed');
    setTimeout(function(){
        theButton.removeClass('pressed');
    }, 70);
}