require('dotenv').config();

const sequelize = require('../config/connection');
const { Student, Teacher, Goals } = require('../models');

const studentData = require('./studentData.json');
const teacherData = require('./teacherData.json');
const goalData = require('./goalsData.json')

const seedDatabase = async() => {
    await sequelize.sync({ force: true});
    
    const teachers = await Teacher.bulkCreate(teacherData, {
        individualHooks: true,
        returning: true,
    });
    const students = await Student.bulkCreate(studentData, {
        individualHooks: true,
        returning: true,
    });
    const goals = await Goals.bulkCreate(goalData, {
        // Do I need to put anything here?
    });


    process.exit(0);
};

seedDatabase();