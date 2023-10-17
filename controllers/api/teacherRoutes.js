const router = require('express').Router();
const { Teacher } = require('../../models');
const Student = require('../../models/Student');


//CREATE - Route to sign up teacher acct from the sign-up page
router.post('/', async (req, res) => {
    // create a new teacher
    try {
      const teacherData = await Teacher.create(req.body);

      req.session.save(() => {
        req.session.user_id = teacherData.id;
        req.session.logged_in = true;

        res.status(200).json(teacherData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

//POST - login route v3.0 logs in teacher acct. from the log-in page
router.post('/login', async (req, res) => {
  try {
    const teacherData = await Teacher.findOne({ where: { email: req.body.email } });
 console.log('login', teacherData)
    if (!teacherData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const teacherPassword = await teacherData.checkPassword(req.body.password);

    if (!teacherPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = teacherData.id;
      req.session.logged_in = true;
      
      res.json({ user: teacherData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
  
  //READ
  // Route to get all teachers (mostly used for dev. purposes)
  router.get('/', (req, res) => {
      // Get all teachers from the teacher table
      Teacher.findAll().then((teacherData) => {
        res.json(teacherData);
      });
   });
  
  // Route to get teachers by id 
  router.get('/:id', async (req, res) => {
    try {
      const myTeacher = await Teacher.findOne({
        where: {
          id: req.params.id,
        },
      });
  
      if (!myTeacher){
        res.status(404).json({message: "No teacher with that ID was found :-("});
        return;
      }
  
      res.status(200).json(myTeacher);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  //DELETE
  //Route to delete teacher by id
  router.delete('/:id', async(req, res) => {
    try {
      const teacherData = await Teacher.destroy({
        where: {
          id: req.params.id 
        },
      });
  
      if(!teacherData) {
        res.status(404).json({ message: 'No teacher found with this id!' });
        return;
      }
      
      res.status(200).json(teacherData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

    
module.exports = router;