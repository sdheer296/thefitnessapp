
const express = require('express');
const router = express.Router();
const workoutCtrl = require('../controllers/workout');
/*GET /workout */
router.get('/', workoutCtrl.index);

/* GET /workout/new */
router.get('/new', workoutCtrl.newWorkout);
router.post('/', workoutCtrl.create);
router.get('/:id', workoutCtrl.show);
router.delete('/:id', workoutCtrl.deleteWorkout);
module.exports = router;
