const router = require('express').Router();
const addNewStudentRoute = require('./addNewStudentRoute');

router.use('/newStudent', addNewStudentRoute);

module.exports = router;