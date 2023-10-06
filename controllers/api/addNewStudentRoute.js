const router = require('express').Router();
const Student = require('../../models/Student');



// Try this for getting all students
router.get('/', (req, res) => {
    // Get all students from the student table
    Student.findAll().then((studentData) => {
      res.json(studentData);
    });
 });

//route to get students by id 
router.get('/:id', (req, res) => {
  try {
    const myStudent = Student.findByPk(req.params.id);
    if (!myStudent){
      res.status(404).json({message: "No student with that ID was found :-("});
      return;
    }

    res.status(200).json(myStudent);

  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

//Delete student by id
router.delete('/id', async (req, res) => {
  try {
    const studentData = await Student.destroy({
      where: {
        id: req.params.id 
      },
    });

    if(!studentData) {
      res.status(404).json({ message: 'No student found with this id!' });
      return;
    }
    
    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login'); 
});

// Try this for getting all students
  // router.get('/', async (req, res) => {
  //   try {
  //     // Get all students and JOIN with student data
  //     const studentData = await Student.findAll({
  //       include: [
  //         {
  //           model: Student,
  //           attributes: ['name'],
  //         },
  //       ],
  //     });

  //     const students = studentData.map((student) => student.get({ plain: true }));

  //     // Pass serialized data and session flag into template
  //     res.render('homepage', { 
  //       students, 
  //       logged_in: req.session.logged_in 
  //     });
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  router.post('/', withAuth, async (req, res) => {
    try {
      const newStudent = await Student.create({
        ...req.body,
        student_id: req.session.student_id,
      });
  
      res.status(200).json(newStudent);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;