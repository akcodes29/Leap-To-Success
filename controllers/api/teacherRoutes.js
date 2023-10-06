const router = require('express').Router();
const Teacher = require('../../models/Teacher');


//CREATE
router.post('/', async (req, res) => {
    // create a new teacher
    try {
      const teacherData = await Teacher.create(req.body);
      res.status(200).json(teacherData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  //READ
  // Try this for getting all teachers
  router.get('/', (req, res) => {
      // Get all teachers from the teacher table
      Teacher.findAll().then((teacherData) => {
        res.json(teacherData);
      });
   });
  
  //route to get teachers by id 
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
  //Delete teacher by id
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
  
  
  // Login route
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login'); 
  });
    
  module.exports = router;





