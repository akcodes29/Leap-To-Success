// Selects necessary elements 
const bigLilyPad = document.querySelector('#goal');
const smallLilyPad = document.querySelector('.sImg');

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
//Functions for small lily pad movement
function happyFace () {
    if(counter == 0) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad G2.png'
    } else if ( counter == 1) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad G3.png'
    } else if (counter == 2) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad G1.png'  
    };
};

function sadFace() {
    if(counter == 0) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad R2.png'
    } else if ( counter == 1) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad R3.png'
    } else if (counter == 2) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad R1.png'  
    };
};

// Event listeners 
$(document).on('click', '#happy-face',function(event){
    event.preventDefault();
    leapFrogger();
    happyFace();
});

$(document).on('click', '#sad-face',function(event){
    event.preventDefault();
    leapFrogger();
    sadFace();
});