//SHOWS USER FORM INPUT FOR REVIEW
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const WorkoutFormReview = ({ onCanel, formValues, submitWorkout, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h3>Please confirm your entries</h3>
      <div>{reviewFields}</div>
      <button className="yellow darken-3 white-text btn-flat " onClick={onCanel}>
        Back
      </button>
      <button
        onClick={() => submitWorkout(formValues, history)}
        className="green white-text btn-flat right"
      >
        Submit <i className="material-icons white-text right">done</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.workoutForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(WorkoutFormReview));
