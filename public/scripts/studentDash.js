// Selects necessary elements 
const bigLilyPad = document.querySelector('#goal-2');
const smallLilyPad = document.querySelector('.sImg');
const currentGoalDiv = document.getElementById('goal-2');

let goals;
let index = 0;

let counter = 1;
// Function to handle change of large lily pad 
function leapFrogger() {
    if(counter == 0) {
        bigLilyPad.style.backgroundImage = "url('assets/images/lilypads/lilypad G1.png')";
        goalDiv.style.backgroundImage = "url('assets/images/lilypads/lilypad G2.png')";
        counter++;
    } else if ( counter == 1) {
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
    changeGoal();
});

$(document).on('click', '#sad-face',function(event){
    event.preventDefault();
    leapFrogger();
    sadFace();
    changeGoal();
});



//Show # goal on student page 
const goalDiv = document.getElementById('goal');
  function start(){
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
        <p>Daily Goal: ${student.dailyGoal}</p>
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
        // data.forEach((goal) => {
        //     const currentGoalDiv = document.getElementById('#goal-2');
        //     currentGoalDiv.innerHTML = `
        //     <p>This is our goal</p>
        //     `
        // })
        
        currentGoalDiv.innerHTML = `<br><br>${goals[index].name}`;
        
    })

}

function changeGoal() {
    index++;
    currentGoalDiv.innerHTML = `<br><br>${goals[index].name}`;
}


start()
renderGoal()