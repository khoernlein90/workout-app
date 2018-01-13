const mongoose = require("mongoose");
const { Schema } = mongoose;

const workoutSchema = new Schema({
  exercise: String,
  reps: String,
  sets: String,
  weight: String,
  _user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  date: Date
});

mongoose.model("workouts", workoutSchema);
