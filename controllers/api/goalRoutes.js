const router = require('express').Router();
const Goal = require('../../models/Goals');


//route to create a new goal
router.post('/', async (req, res) => {
    try {
      const newGoal = await Goal.create({
        ...req.body,
        teacher_id: req.session.user_id,
      });
  
      res.status(200).json(newGoal);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //route to get goal by student id 
  router.get('/', async (req, res) => {
    try {
      const myGoals = await Goal.findAll({
        where: {
          student_id: req.session.user_id,
        },
      });
  
      if (!myGoals){
        res.status(404).json({message: "No goals were found for that student :-("});
        return;
      }
  
      res.status(200).json(myGoals);
  
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;