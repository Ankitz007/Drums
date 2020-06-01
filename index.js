// Button Clicks
buttons = document.querySelectorAll(".drum");
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var button = this.innerHTML;
        mySound(button);
        buttonAnimation(button);
    });
}

// KeyPresses
document.addEventListener("keypress", function(event){
    mySound(event.key);
    buttonAnimation(event.key);
});

// Matching our sounds and keys
function mySound(key){
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    
        default: console.log();
    }

}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout( function(){
        activeButton.classList.remove("pressed");
    },200);
}