var userClickedPattern=[];
var buttonColor=["red","blue","green","yellow"];
var gamePattern=[];
var level=0;
function checkAnswer() {
    if(userClickedPattern[userClickedPattern.length-1]===gamePattern[userClickedPattern.length-1]){
            console.log("success");
            if(userClickedPattern.length==gamePattern.length){
                setTimeout(() => {
                   newSequence(); 
                 }, 1000);
            }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over");
        },200);
        $("h2").text("Game Over, Press Any Key to Restart!");
       startOver();
        console.log("wrong");
    }
  }
  function startOver(){
level=0;
gamePattern=[];
start=false;
  }
function animatePress(currentColor){
    console.log(currentColor);
    $("."+currentColor).addClass("pressed");
    setTimeout(() => {
       $("."+currentColor).removeClass("pressed"); 
    }, 100);
}
function playSound(randomChoosenColor){
    var audio = new Audio('sounds\\'+randomChoosenColor+'.mp3');
    audio.play();
}
function newSequence() {
    userClickedPattern = []; 
var randomNumber=Math.floor(Math.random()*4);
 
 var randomChoosenColor=buttonColor[randomNumber];
 gamePattern.push(randomChoosenColor);
 console.log(randomChoosenColor);
 $("#"+randomChoosenColor).toggle();
 setTimeout(()=>{ $("#"+randomChoosenColor).toggle();},100);

playSound(randomChoosenColor);
$("h2").text("Level "+level);
level++;
checkAnswer(level);
}

$(".btn").click(function(event){
    var userChoosenColor=$(this).attr("id");
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    animatePress(userChoosenColor);
   checkAnswer();
});
var start=false;
$(".circle").click(function (e) {
    $(".circle").toggle();
 setTimeout(()=>{ $(".circle").toggle();},50);
        if(start==false){
            start=true;
            setTimeout(() => {
                newSequence(); 
              }, 300);
        
        }
    
});