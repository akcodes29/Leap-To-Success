const studentListDiv = document.getElementById('studentList');

function start(){
fetch('/api/student', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },

}).then((response) => response.json()).then((data) => {
    console.log(data)
    data.forEach((student) => {
        const studentDiv = document.createElement('div');
        studentDiv.className = 'student';
        studentDiv.innerHTML = `
        <h3>${student.firstName} ${student.lastName}</h3>
        <p>${student.userName}</p>
        <p>${student.password}</p>
        `
        studentListDiv.appendChild(studentDiv);
    })
})

}

start()





