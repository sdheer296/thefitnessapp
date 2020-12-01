const Workout = require('../models/workout');
const router = require('../routes');

module.exports = {
  index,
  newWorkout,
  create,
  show,
  deleteWorkout,
};
//function index(req, res, next) {
      //res.redirect('/workout');
  //};

  function index(req, res) {
    Workout.find({}, function(err, workout) {
      res.render('workout/index', { workout});
    });
};
//respond with a form for entering a new workout
function newWorkout(req, res) {
  var workout = new Workout(req.body);
    res.render('workout/new');
};

function create(req, res) {
  var workout = new Workout(req.body);
  workout.save(function(err) {
      // one way to handle errors
      if (err) return res.render('workout/new');
      // for now, redirect right back to new.ejs
      res.redirect('/workout');
  });
};

function show(req, res, next) {
  workout.findById(req.params.id, function (err, workout) {
    if (err) return res.redirect('/workout');
      res.render('workout/show', { workout});
  });
};

function deleteWorkout(req, res) {
  workout.findByIdAndDelete(req.params.id, function(err, workout){
    if (err) return res.redirect('/workout');
      console.log(workout);
    res.redirect('/workout');
  });
};

router.post('/' , (req,res) => {
  console.log('added render post in controller');
});






