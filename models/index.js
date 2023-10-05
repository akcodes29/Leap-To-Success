const Parent = require('./Parent');
const Student = require('./Student');
const Teacher = require('./Teacher');

//Relationships
Teacher.hasMany(Student, {
    //More code..
})