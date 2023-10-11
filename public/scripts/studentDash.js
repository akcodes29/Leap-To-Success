// Selects necessary elements 
const bigLilyPad = document.querySelector('#big-lily');
const smallLilyPad = document.querySelector('#small-lily');

// Arrays of image src codes to cycle through
const plainLilyPads = [
    "assets/images/lilypads/lilypad G1.png",
    "assets/images/lilypads/lilypad G2.png",
    "assets/images/lilypads/lilypad G3.png"
];

const redLilyPads = [
    "assets/images/lilypads/lilypad R1.png",
    "assets/images/lilypads/lilypad R2.png",
    "assets/images/lilypads/lilypad R3.png"
];

// Function to handle change of large lily pad 
const leapFrogger = () => {
    
    let counter = 1;

    if(counter === 0) {
        bigLilyPad.src = `${plainLilyPads[0]}`;
        counter++;
    } else if ( counter === 1) {
        bigLilyPad.src = `${plainLilyPads[1]}`;
        counter++;
    } else if (counter === 2) {
        bigLilyPad.src = `${plainLilyPads[2]}`;
        counter = 0;
    }
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
document.getElementById('happy-face').addEventListener('click', happyFace);
document.getElementById('sad-face').addEventListener('click', sadFace);