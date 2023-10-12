const router = require('express').Router();
const Goal = require('../../models/Goals');


  //route to get goal by student id 
  router.get('/:id', async (req, res) => {
    try {
      const myGoals = await Goal.findAll({
        where: {
          student_id: req.params.id,
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