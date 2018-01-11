// SHOWS FORM AND FORM REVIEW
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import WorkoutForm from "./WorkoutForm";
import WorkoutFormReview from "./WorkoutFormReview";

class WorkoutNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <WorkoutFormReview onCanel={() => this.setState({ showFormReview: false })} />;
    }
    return <WorkoutForm onWorkoutSubmit={() => this.setState({ showFormReview: true })} />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default reduxForm({
  form: "workoutForm"
})(WorkoutNew);
