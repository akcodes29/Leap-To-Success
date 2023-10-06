const router = require('express').Router();
const Student = require('../../models/Student');



// Try this for getting all students
router.get('/', (req, res) => {
    // Get all students from the student table
    Student.findAll().then((studentData) => {
      res.json(studentData);
    });
 });


// Try this for getting all students
  router.get('/', async (req, res) => {
    try {
      // Get all students and JOIN with student data
      const studentData = await Student.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });

      const students = studentData.map((student) => student.get({ plain: true }));

      // Pass serialized data and session flag into template
      res.render('homepage', { 
        students, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  routerouter.post('/', withAuth, async (req, res) => {
    try {
      const newProject = await Project.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;