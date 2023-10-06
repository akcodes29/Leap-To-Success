const router = require('express').Router();
const Student = require('../../models/Student');


//CREATE
router.post('/', async (req, res) => {
  // create a new student
  try {
    const studentData = await Student.create(req.body);
    res.status(200).json(studentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//READ
// Try this for getting all students
router.get('/', (req, res) => {
    // Get all students from the student table
    Student.findAll().then((studentData) => {
      res.json(studentData);
    });
 });

//route to get students by id 
router.get('/:id', async (req, res) => {
  try {
    const myStudent = await Student.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!myStudent){
      res.status(404).json({message: "No student with that ID was found :-("});
      return;
    }

    res.status(200).json(myStudent);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//DELETE
//Delete student by id
router.delete('/:id', async(req, res) => {
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
  
module.exports = router;