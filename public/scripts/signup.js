require("dotenv").config();
// Packages needed for this application
const mysql = require('mysql2');
const connection = require("../../config/connection");
const button = document.getElementById("btn");

// function runner() {
//     console.log(`I am running`)
//     fetch('/api/teacher', {
//         method: 'POST',
//         body: new FormData(document.querySelector('form'))
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
// };

// runner()

button.addEventListener("click", function () {
    console.log('I was clicked')
})

button.addEventListener('click', function (event) {
    event.preventDefault();
    fetch('/api/teacher', {
        method: 'POST',
        body: new FormData(document.querySelector('form'))
    })
    .then(response => response.json())
    .then(data => console.log(data))
})