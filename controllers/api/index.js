const router = require('express').Router();
const studentRoutes = require('./studentRoutes');
const teacherRoutes = require('./teacherRoutes');

router.use('/student', studentRoutes);
router.use('/teacher', teacherRoutes);

module.exports = router;