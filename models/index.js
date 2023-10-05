const Parent = require('./Parent');
const Student = require('./Student');
const Teacher = require('./Teacher');

//Relationships
Teacher.hasMany(Student, {
    foreignKey: 'teacher_id',
    onDelete: 'CASCADE'
});

Student.belongsTo(Teacher, {
    foreignKey: 'teacher_id'
});

module.exports = { Parent, Student, Teacher};