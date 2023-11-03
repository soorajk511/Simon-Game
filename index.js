$(".container1").hide();
$(".Ins_button").click(function(){ $(".container1").toggle();
});
var flag=0;
var gamePattern=[];
var userClickedPattren=[];
var buttonColors=["red","blue","green","yellow"];


$(document).keydown(function() { 
    while (flag===0)
    {
         flag++;
         setTimeout(nextSequence, 1500);
   }
});


$(".btn").click( userClick );
 
function userClick(){
   
    var userChosenColour= $(this).attr("id");
    userClickedPattren.push(userChosenColour);
    playsound(userChosenColour);
    addPressed(userChosenColour);
    console.log("this is user clicked pattern : "+userClickedPattren);
    
    check(userClickedPattren.length-1);
  } 
  

  
function nextSequence(){
    $("h1").text("Level "+flag);
    flag++;
let randomNumber= Math.round(Math.random()*3);
var randomChosenColor= buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
userClickedPattren=[];
addPressed(randomChosenColor);
 playsound(randomChosenColor);
 console.log("this is game pattern : "+gamePattern);
}

function playsound(name){
    var audio = new Audio("./sounds/"+ name +".mp3");
    audio.play();
}

function addPressed(colour){
    $("#"+colour).addClass("pressed");
    setTimeout( function (){ $("#"+colour).removeClass("pressed"); } ,100);}


function check(currentLevel){
if (gamePattern[currentLevel] === userClickedPattren[currentLevel]) {

 if(userClickedPattren.toString() === gamePattern.toString()){
       setTimeout(nextSequence, 1000);}
   }
else {
    flag=0; 
    var wrong= new Audio("./sounds/wrong.mp3");
    wrong.play();
    $("h1").text("gameover, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout( function(){  $("body").removeClass("game-over"); },100 );
    gamePattern=[];
}
}