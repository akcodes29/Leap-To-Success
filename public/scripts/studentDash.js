// Selects necessary elements 
const bigLilyPad = document.querySelector('#big-lily');
const smallLilyPad = document.querySelector('#small-lily');

// Arrays of image src codes to cycle through
const plainLilyPads = [
    "../public/assets/images/lilypad G1.png",
    "../public/assets/images/lilypad G2.png",
    "../public/assets/images/lilypad G3.png"
];

const redLilyPads = [
    "../public/assets/images/lilypad R1.png",
    "../public/assets/images/lilypad R2.png",
    "../public/assets/images/lilypad R3.png"
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
document.querySelector('#happy-face').addEventListener('submit', happyFace);
document.querySelector('#sad-face').addEventListener('submit', sadFace);