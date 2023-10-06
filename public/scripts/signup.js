require("dotenv").config();
// Packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require("./db/connection");

const button = document.getElementsByClassName("btn");

function runner() {
    console.log(`I am running`)
}

runner();