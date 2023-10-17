// Selects necessary elements 
const bigLilyPad = document.querySelector('#goal-2');
const smallLilyPad = document.querySelector('.sImg');
const currentGoalDiv = document.getElementById('goal-2');

let scoreVar= 0;
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
    addScore();

});

$(document).on('click', '#sad-face', function (event) {
    event.preventDefault();
    leapFrogger();
    sadFace();
    changeGoal();
    subtractScore();

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

// Function to change goal
function changeGoal() {
    index++;
    if(index >= goals.length) {
        currentGoalDiv.innerHTML = `<br><br>You have no more goals for the day!`;
        updateScore();
    }  
    currentGoalDiv.innerHTML = `<br><br>${goals[index].name}`;
}

//Changes logout button to a sun
function sunnyDay() {
    document.querySelector('#logout').innerHTML = `<img width="150px" height="150px" src="assets/images/icons/son.png"<p>Logout</p>`
}

 //Tracks Student Score
 function addScore() {
    scoreVar++;
    console.log(scoreVar)
 } 

 function subtractScore () {
    scoreVar--;
    console.log(scoreVar)
 }

// Function to update Daily Score in database
const updateScore = async () => {
    await fetch('/api/student/:id', {
        method: 'PUT',
        body: `{"dailyScore": "${scoreVar}"}`,
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        console.log(response);
        response.json().then((data) => {
            console.log(data);
        });
    });
};


sunnyDay()
start()
renderGoal()