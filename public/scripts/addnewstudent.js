
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
const username = firstName.charAt(0).toLowerCase() + lastName.toLowerCase();

// Generate a random 6-character password
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let password = '';
for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
}

 // Create a student object with credentials
 const student = {
    username: username,
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
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Parent Email:</strong> ${parentEmail}</p>
    <p><strong>Number of Goals:</strong> ${goals}</p>
`;
});
