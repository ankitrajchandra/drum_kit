/*
document.querySelector("button").addEventListener("click",handleClick);
*/
//Only for first button.
//.addEventListener("click",handleClick) will call handleClick() function after clicking on button.
// .addEventListener(input1,input2);
// input1 --> "operation", input2 --> defined function   

// For all buttons:

                /* ----- by clicking from mouse ----- */


var drumLength = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumLength; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

// document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

function handleClick() {

    // var sound = new Audio("sounds/tom-1.mp3");
    // sound.play();

    //console.log(this); // will display the clicked button
    // console.log(this);
    var word = this.innerHTML;
    // "this" is element of "click" and gives the selected item.
    makeSounds(word);
    buttonAnimation(word);
    // var s="sounds/"+word+".mp3"; ex - w.mp3, a.mp3

    // if the sound file name is not the same as word witten to the button then 'if-else/switch-case' can be used.

    /*
    if (word==="w") {
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();   
    }
    */
}


                /* ----- by clicking from mouse ----- */


document.addEventListener("keypress",handlePress);

function handlePress() {

    // alert(event.key); 
    // "event" is element of "keypress" and gives the event perform and "event.key" gives the letter pressed.
    makeSounds(event.key);
    buttonAnimation(event.key);
    
}

                /* ----- Sounding ----- */

function makeSounds(word) {
    switch (word) {
        case "f":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;

        default:
            alert("No Audio!");
            break;
    }
}


                /* ----- Animation ----- */

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    },100);
}

// Anonymous function
/*
document.querySelector("button").addEventListener("click",function() {
    alert("Welcome!");
});
*/

// var sound = new Audio("sounds/tom-1.mp3");
// sound.play();
