const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const workoutSchema = new Schema({
  name: String,
  type: String,
  startTime: String,
  endTime: String,
  //Student: {type: Schema.Types.ObjectId, ref: "Student"}
  

});

module.exports = mongoose.model ('workout', workoutSchema);


