document.querySelectorAll("button").
forEach(function(button) {
    button.addEventListener("click", function() {

        var btninnerhtml = this.innerHTML;
        
        makeSound(btninnerhtml);
        btnAnimation (btninnerhtml);
        
    });
});

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
});

function makeSound (key){
    switch (key) {
        case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();            
            break;
        case 'a':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'd':
            var t1 = new Audio('sounds/tom-1.mp3');
            t1.play();
            break;
        case 'j':
            var t2 = new Audio('sounds/tom-2.mp3');
            t2.play();
            break;
        case 'k':
            var t3 = new Audio('sounds/tom-3.mp3');
            t3.play();
            break;
        case 'l':
            var t3 = new Audio('sounds/tom-4.mp3');
            t3.play();
            break;
    
        default:
            break;
    }
};

function btnAnimation (currentKey){
    var activeBtn = document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },300);
}