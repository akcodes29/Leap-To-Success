// const Goals = require("../../models/Goals");
let teacherVar = '';
let studentVar = '';
const dailyGoal = document.getElementById('goals');
const goalContainer = document.getElementById('goalContainer');

const goalsArray = []

function savingGoals() {
//     const ourGoals = document.querySelectorAll('.goal');
//   for (let i = 0; i < goalContainer.length; i++) {
//     const goal = document.getElementById(`goal${i + 1}`).value.trim();
//     goalsArray.push(goal);
//   }
    document.querySelectorAll('.allgoals').forEach(item => {
    const object = { name: item.value.trim(), teacher_id: teacherVar, student_id: studentVar }
    goalsArray.push(object);
});
}

dailyGoal.addEventListener('change', (event) => {
    goalContainer.innerHTML = '';
    for (let i = 0; i < event.target.value; i++) {
        const div = document.createElement('div');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'allgoals');
        label.textContent = `Goal ${i + 1}`;
        input.setAttribute('id', `goal${i + 1}`);
        div.append(label, input);

        goalContainer.append(div);

    }
})
const createStudent = async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const userName = document.getElementById('userName').value.trim();
    const password = document.getElementById('password').value.trim();
    const dailyGoal = document.getElementById('goals').value.trim();

  savingGoals();
    
        if(firstName && lastName && userName && password && dailyGoal) {
    // const endpoint = isStudent? '/api/student' : '/api/teacher/createStudent';
            const response = await fetch('/api/student', {
                method: 'POST',
                body: JSON.stringify({ firstName, lastName, userName, password, dailyGoal}),
                headers: { 'Content-Type': 'application/json' },
            })
            console.log(response.id)

           
  }
// const createGoal = await fetch()
//             if(response.ok) {
//                 document.location.replace('/profile');
//             } else {
//                 alert('Failed to create new student'); //TODO: need to replace alert with a modal
//             }
//         }
};

document
    .querySelector('.studentForm')
    .addEventListener('submit', createStudent);
