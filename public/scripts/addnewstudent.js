// Declarations
const dailyGoal = document.getElementById('goals');
const goalContainer = document.getElementById('goalContainer');

let teacherVar = '';
let studentVar = '';
const goalsArray = []

// Function to display error message 
function registerError() {
    document.querySelector('#error').innerHTML =
        '<div class="alert alert-danger text-center m-3 p-3" role="alert"> Failed to register new student. <br> Hint: Password must be at least 8 characters! </div>';
    return ('Failed to register new student.')
};

// Function to save goals into an array of objects
function savingGoals() {
    document.querySelectorAll('.allgoals').forEach(item => {
        const object = { name: item.value.trim(), teacher_id: teacherVar, student_id: studentVar }
        goalsArray.push(object);
    });
    createGoals();
}

// Function to save new goals to database
const createGoals = async () => {
    await fetch('/api/goal/many', {
        method: 'POST',
        body: JSON.stringify(goalsArray),
        headers: { 'Content-Type': 'application/json' },
    }).then(function (response) {
        return response.json();
    })
        .catch(err => console.log(err))
};


// Creates new input element for each new goal selected 
dailyGoal.addEventListener('change', (event) => {
    goalContainer.innerHTML = '';
    for (let i = 0; i < event.target.value; i++) {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'allgoals');
        label.textContent = `Goal ${i + 1}`;
        label.classList.add('text-start', 'fs-3', 'p-3');
        input.setAttribute('id', `goal${i + 1}`);
        div.append(label, input);

        goalContainer.append(div);

    }
})

// Function to create and save new student in database
const createStudent = async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const userName = document.getElementById('userName').value.trim();
    const password = document.getElementById('password').value.trim();
    const dailyGoal = document.getElementById('goals').value.trim();
    const dailyScore= 0;

    if (firstName && lastName && userName && password && dailyGoal) {
        const response = await fetch('/api/student', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, userName, password, dailyGoal, dailyScore }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                studentVar = data.id;
                teacherVar = data.teacher_id;
                console.log(data)
            })
            .catch(err => registerError())
        savingGoals();
        console.log(goalsArray)
        if (studentVar) {
            document.location.replace('/profile');
        } else {
            registerError();
        }

    }
};

//Event listener 
document
    .querySelector('.studentForm')
    .addEventListener('submit', createStudent);
