// CRUD

const { Goals } = require("../../models");

// Create

// Read
 // Try this for getting all goals by student id
 router.get('/', (req, res) => { 
    Goals.findAll({
      where: {
        student_id: req.session.user_id,
      },
    }).then((goalData) => {
      res.json(goalDataData);
    });
  
   });

// Update

// Delete