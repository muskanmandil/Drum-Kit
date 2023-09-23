// Button Clicks
var size = document.querySelectorAll(".drum").length;
for (var i = 0; i < size; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// Keyboard Strokes
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// Make Sound Function
function makeSound(key){
    switch (key) {
        case "w":
          var audio = new Audio("assets/sounds/tom-1.mp3");
          audio.play();
          break;
  
        case "a":
          var audio = new Audio("assets/sounds/kick-bass.mp3");
          audio.play();
          break;
  
        case "s":
          var audio = new Audio("assets/sounds/tom-3.mp3");
          audio.play();
          break;
  
        case "d":
          var audio = new Audio("assets/sounds/snare.mp3");
          audio.play();
          break;
  
        case "j":
          var audio = new Audio("assets/sounds/tom-4.mp3");
          audio.play();
          break;
  
        case "k":
          var audio = new Audio("assets/sounds/crash.mp3");
          audio.play();
          break;
  
        case "l":
          var audio = new Audio("assets/sounds/tom-2.mp3");
          audio.play();
          break;
  
        default:
          console.log(buttonInnerHTML);
          break;
    }
}

//Animation Function
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100);
}