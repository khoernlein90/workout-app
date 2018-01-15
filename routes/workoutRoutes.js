const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Workout = mongoose.model("workouts");

module.exports = app => {
  app.get("/api/workouts/:id", requireLogin, async (req, res) => {
    const workout = await Workout.findById(req.params.id);
    res.send(workout);
  });

  app.put("/api/workouts/:id", async (req, res) => {
    const { exercise, reps, sets, weight } = req.body;
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body.workout);
    res.json(workout);
  });

  app.delete("/api/workouts/:id", async (req, res) => {
    const workout = await Workout.findByIdAndRemove(req.params.id);
    res.json(workout);
  });

  app.get("/api/workouts", requireLogin, async (req, res) => {
    const workouts = await Workout.find({ _user: req.user.id });
    res.send(workouts);
  });

  app.post("/api/workouts", requireLogin, async (req, res) => {
    const { exercise, reps, sets, weight } = req.body;

    const workout = new Workout({
      exercise,
      reps,
      sets,
      weight,
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
