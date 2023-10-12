// Selects necessary elements 
const bigLilyPad = document.querySelector('#goal');
const smallLilyPad = document.querySelector('#small-lily');

let counter = 1;
// Function to handle change of large lily pad 
function leapFrogger() {
    if(counter == 0) {
        bigLilyPad.style.backgroundImage = "url('assets/images/lilypads/lilypad G1.png')";
        counter++;
    } else if ( counter == 1) {
        bigLilyPad.style.backgroundImage = "url('assets/images/lilypads/lilypad G2.png')";;
        counter++;
    } else if (counter == 2) {
        bigLilyPad.style.backgroundImage = "url('assets/images/lilypads/lilypad G3.png')";
        counter = 0;
    };
};

const happyFace = () => {
    //smiley face button click event
    leapFrogger();
};

const sadFace = () => {
    //sad face button click event
    leapFrogger();
};

// Event listeners 
$(document).on('click', '#happy-face',function(event){
    event.preventDefault();
    leapFrogger();
});

$(document).on('click', '#sad-face',function(event){
    event.preventDefault();
    leapFrogger();
});