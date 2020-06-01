// Button Clicks
buttons = document.querySelectorAll(".drum");
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var button = this.innerHTML;
        mySound(button);
    });
}

// KeyPresses
document.addEventListener("keypress", function(event){
    mySound(event.key);
});

// Matching our sounds and keys
function mySound(key){
    switch (key) {
        case 'a':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'n':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'i':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case 't':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'z':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case '7':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    
        default: console.log();
    }

}