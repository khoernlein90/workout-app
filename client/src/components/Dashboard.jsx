import React from "react";
import { Link } from "react-router-dom";
import WorkoutList from "./workouts/workoutList";

const Dashboard = () => {
  return (
    <div id="card-list" style={{ marginTop: "20px" }} className="container">
      <div id="card-heading" className="card">
        <div className="card-content">
          <span style={{ textAlign: "center" }} className="card-title white-text">
            <h4>Your List of Workouts!</h4>
          </span>
          <div className="card-action">
            <Link id="add-workout-button" to="/workouts/new">
              <i className="material-icons">add</i>
            </Link>
          </div>
        </div>
      </div>
      <WorkoutList />
      <div className="fixed-action-btn" />
    </div>
  );
};

export default Dashboard;
