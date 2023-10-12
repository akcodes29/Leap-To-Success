const createStudent = async (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const userName = document.getElementById('userName').value.trim();
    const password = document.getElementById('password').value.trim();
    // const isStudent = false;
    if(firstName && lastName && userName && password) {
// const endpoint = isStudent? '/api/student' : '/api/teacher/createStudent';
        const response = await fetch('/api/student', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, userName, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create new student'); //TODO: need to replace alert with a modal
        }
    }
};

document
  .querySelector('.studentForm')
  .addEventListener('submit', createStudent);
