const Parent = require('./Parent');
const Student = require('./Student');
const Teacher = require('./Teacher');
const Goals = require('./Goals');

//Relationships
// Teacher.hasMany(Student, {
//     foreignKey: 'teacher_id',
//     onDelete: 'CASCADE'
// });

Student.belongsTo(Teacher, {
    foreignKey: 'teacher_id'
});


//Goals table relationships -- work in progress 
Student.hasMany(Goals, {
    foreignKey: 'student_id',
    onDelete: 'CASCADE', 
});

Goals.belongsTo(Teacher , {
    foreignKey: 'teacher_id'
});

Goals.belongsTo(Student, {
    foreignKey: 'student_id'
})

module.exports = { Parent, Student, Teacher, Goals};