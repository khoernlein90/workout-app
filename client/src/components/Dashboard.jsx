import React from "react";
import { Link } from "react-router-dom";
import WorkoutList from "./workouts/workoutList";

const Dashboard = () => {
  return (
    <div className="container">
      <WorkoutList />
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/workouts/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
