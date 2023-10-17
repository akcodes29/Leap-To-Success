// const studentListDiv = document.getElementById('studentList');

// function start(){
// fetch('/api/student/teach', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//     },

// }).then((response) => response.json()).then((data) => {
//     console.log(data)
//     data.forEach((student) => {
//         const studentDiv = document.createElement('div');
//         studentDiv.className = 'student';
//         studentDiv.innerHTML = `
//         <h3>${student.firstName} ${student.lastName}</h3>
//         <p>Username: ${student.userName}</p>
//         <p>Password: ${student.password}</p>
//         <p>Daily Goal: ${student.dailyGoal}</p>
//         <p>Daily Score: ${student.dailyScore}</p>
//         `
//         studentListDiv.appendChild(studentDiv);
//     })
// })

// }

// // start()


// const renderAddNewStudent = async () => {
//     const response = await fetch('/addnewstudent', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     if (response.ok) {
//         document.location.replace('/addnewstudent');
//     }
// };


// //  //Event listener v2 - removes console error
// // $(document).on('submit', '.addnewstudent', function () {
// //     renderAddNewStudent();
// // });

//This document is now obsolete as this script is being handled by handlebars.