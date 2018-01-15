import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Workout Tracker</h1>
      Keep track of your workouts!
      <Link to="/workouts" className="btn waves-effect waves-light left">
        View Workouts
      </Link>
      <Link to="/workouts/new" className="btn waves-effect waves-light right">
        Add Workout
      </Link>
    </div>
  );
};

export default Landing;
