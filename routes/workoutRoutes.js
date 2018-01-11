const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Workout = mongoose.model("workouts");

module.exports = app => {
  app.post("/api/workouts", requireLogin, async (req, res) => {
    const { exercise, reps } = req.body;

    const workout = new Workout({
      exercise,
      reps,
      _user: req.user.id,
      date: Date.now()
    });
    try {
      await workout.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
