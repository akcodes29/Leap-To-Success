const router = require('express').Router();
const Student = require('../../models/Student');


//CREATE new student

// NEW POST ROUTE
// router.post('/', async (req, res) => {
//   //Create a new student
//   try {
//     const newStudent = await Student.create({
//       ...req.body,
//       teacher_id: req.session.user_id,
//     });

//     res.status(200).json(newStudent);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/', async (req, res) => {
  try {
    const newStudent = await Student.create({
      ...req.body,
      teacher_id: req.session.user_id,
    });

    req.session.save(() => {
      
      req.session.logged_in = true;

      res.status(200).json(newStudent);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const studentData = await Student.findOne({ where: { userName: req.body.email } });
 console.log('login', studentData)
    if (!studentData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const studentPassword = await studentData.checkPassword(req.body.password);

    if (!studentPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = studentData.id;
      req.session.logged_in = true;
      
      res.json({ user: studentData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


//READ
// Try this for getting all students
// router.get('/', (req, res) => {
//     // Get all students from the student table
//     Student.findAll().then((studentData) => {
//       res.json(studentData);
//     });
//  });

 // Try this for getting all students by teacher id
 router.get('/', (req, res) => { 
  Student.findAll({
    where: {
      teacher_id: req.session.user_id,
    },
  }).then((studentData) => {
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