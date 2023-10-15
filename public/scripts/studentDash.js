// Selects necessary elements 
const bigLilyPad = document.querySelector('#goal-2');
const smallLilyPad = document.querySelector('.sImg');
const currentGoalDiv = document.getElementById('goal-2');

let goals;
let index = 0;

let counter = 1;
// Function to handle change of large lily pad 
function leapFrogger() {
    if (counter == 0) {
        bigLilyPad.style.backgroundImage = "url('assets/images/lilypads/lilypad G1.png')";
        goalDiv.style.backgroundImage = "url('assets/images/lilypads/lilypad G2.png')";
        counter++;
    } else if (counter == 1) {
        bigLilyPad.style.backgroundImage = "url('assets/images/lilypads/lilypad G2.png')";
        goalDiv.style.backgroundImage = "url('assets/images/lilypads/lilypad G3.png')";
        counter++;
    } else if (counter == 2) {
        bigLilyPad.style.backgroundImage = "url('assets/images/lilypads/lilypad G3.png')";
        goalDiv.style.backgroundImage = "url('assets/images/lilypads/lilypad G1.png')";
        counter = 0;
    };
};
//Functions for small lily pad movement
function happyFace() {
    if (counter == 0) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad F2.png'
    } else if (counter == 1) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad F3.png'
    } else if (counter == 2) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad F1.png'
    };
};

function sadFace() {
    if (counter == 0) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad R2.png'
    } else if (counter == 1) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad R3.png'
    } else if (counter == 2) {
        smallLilyPad.src = 'assets/images/lilypads/lilypad R1.png'
    };
};

// Event listeners 
$(document).on('click', '#happy-face', function (event) {
    event.preventDefault();
    leapFrogger();
    happyFace();

    changeGoal();

});

$(document).on('click', '#sad-face', function (event) {
    event.preventDefault();
    leapFrogger();
    sadFace();

    changeGoal();

});


//Show # goal on student page 
const goalDiv = document.getElementById('goal');
function start() {
    fetch('/api/student', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json()).then((data) => {
        console.log(data)
        data.forEach((student) => {
            const studentGoalDiv = document.createElement('div');
            studentGoalDiv.className = 'student';
            studentGoalDiv.innerHTML = `
            <br><br>Daily Goal: ${student.dailyGoal}
        `
            goalDiv.appendChild(studentGoalDiv);
        })
    })
}

// Show Goal on large lily pad
function renderGoal() {
    fetch('/api/goal', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    }).then((response) => response.json()).then((res) => {
        goals = res;
        console.log(goals)

        currentGoalDiv.innerHTML = `<br><br>${goals[index].name}`;
    })
}

function changeGoal() {
    index++;
    if(index >= goals.length) {
        // console.log("You have no more goals for the day!");
        currentGoalDiv.innerHTML = `<br><br>You have no more goals for the day!`;
    }
    currentGoalDiv.innerHTML = `<br><br>${goals[index].name}`;
}
//Changes logout button to a sun
function sunnyDay() {
    document.querySelector('#logout').innerHTML = `<img width="150px" height="150px" src="assets/images/icons/son.png">`
}

function showModal() {
    if (index > goals.length) {
        document.querySelector('#happy-face').innerHTML = `<button id="happy-face" value="yes" data-bs-toggle="modal" data-bs-target="#Modal"><img class="mImg" src="assets/images/icons/happy frog.png" alt="smiley face"></button>`
        document.querySelector('#sad-face').innerHTML = `<button id="sad-face" value="no" data-bs-toggle="modal" data-bs-target="#Modal"><img class="mImg" src="assets/images/icons/sad frog.png"alt="frowny face"></button>`
    }
}

sunnyDay()
start()
renderGoal()