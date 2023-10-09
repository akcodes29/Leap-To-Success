
const teacherAccount = {
students: [],
addStudent: function (student) {
    this.students.push(student);
}
};

document.getElementById('generateCredentials').addEventListener('click', function () {
const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const parentEmail = document.getElementById('parentEmail').value;
const goals = document.getElementById('goals').value;

// Generate a unique username (e.g., first letter of first name + last name)
const userName = firstName.charAt(0).toLowerCase() + lastName.toLowerCase();

// Generate a random 6-character password
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let password = '';
for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
}

 // Create a student object with credentials
 const student = {
    username: userName,
    password: password,
    parentEmail: parentEmail,
    goals: goals
 };

   // Save the student to the teacher's account
teacherAccount.addStudent(student);

// Display the generated credentials
const credentialsDiv = document.getElementById('credentials');
credentialsDiv.innerHTML = `
    <h2>Student Credentials</h2>
    <p><strong>Username:</strong> ${userName}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Parent Email:</strong> ${parentEmail}</p>
    <p><strong>Number of Goals:</strong> ${goals}</p>
`;
});

const saveNewStudent = (credentialsDiv) => {
    fetch('/api/student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentialsDiv),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success in saving student:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};