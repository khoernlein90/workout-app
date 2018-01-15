import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/";

class WorkoutEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: "",
      reps: "",
      sets: "",
      weight: ""
    };
  }

  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.id);
    console.log(this.props);
  }

  renderWorkoutEdit() {
    if (!this.props.workout) {
      return <div>Loading..</div>;
    }
    return (
      <form onSubmit={() => this.props.updateWorkout(this.props.workout._id)}>
        <label>Exercise</label>
        <input
          type="text"
          name="workout[exercise]"
          value={this.state.exercise}
          defaultValue={this.props.workout.exercise}
        />
        <label>Reps</label>
        <input type="text" name="workout[reps]" defaultValue={this.props.workout.reps} />
        <label>Sets</label>
        <input type="text" name="workout[sets]" defaultValue={this.props.workout.sets} />
        <label>Weight</label>
        <input type="text" name="workout[weight]" defaultValue={this.props.workout.weight} />
        <button>Submit</button>
      </form>
    );
  }

  render() {
    return <div>{this.renderWorkoutEdit()}</div>;
  }
}

function mapStateToProps({ workout }) {
  return { workout };
}

export default connect(mapStateToProps, actions)(WorkoutEdit);
