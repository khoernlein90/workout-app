import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";
import DeleteButton from "../DeleteButton";
// import EditButton from "../EditButton";

class WorkoutList extends Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }
  renderWorkouts() {
    return this.props.workouts.reverse().map(workout => {
      return (
        <div id="card-list" className="card" key={workout._id}>
          <div className="card-content white-text">
            <Link to={`/workouts/${workout._id}`} className="card-title">
              {workout.exercise}
            </Link>
            <DeleteButton
              onClick={() => this.props.removeWorkout(workout._id).then(this.props.fetchWorkouts())}
            />

            <p>Reps: {workout.reps}</p>
            <p>Sets: {workout.sets}</p>
            <p>Weight: {workout.weight}</p>
            <p className="right">Date: {new Date(workout.date).toLocaleDateString()}</p>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderWorkouts()}</div>;
  }
}
function mapStateToProps({ workouts }) {
  return { workouts };
}
export default connect(mapStateToProps, actions)(WorkoutList);
