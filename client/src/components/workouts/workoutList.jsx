import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWorkouts } from "../../actions";

class WorkoutList extends Component {
  componentDidMount() {
    this.props.fetchWorkouts();
  }
  renderWorkouts() {
    return this.props.workouts.reverse().map(workout => {
      return (
        <div className="card blue-grey darken-1" key={workout._id}>
          <div className="card-content white-text">
            <span className="card-title">{workout.exercise}</span>
            <p>Target Reps: {workout.reps}</p>
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
export default connect(mapStateToProps, { fetchWorkouts })(WorkoutList);
