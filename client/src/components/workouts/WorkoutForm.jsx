import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import WorkoutField from "./WorkoutField";
import formFields from "./formFields";

class WorkoutForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return <Field key={name} component={WorkoutField} type="text" label={label} name={name} />;
    });
  }

  render() {
    return (
      <div style={{ marginTop: "20px" }} id="form" className="container">
        <form onSubmit={this.props.handleSubmit(this.props.onWorkoutSubmit)}>
          {this.renderFields()}
          <Link to="/workouts" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value.";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "workoutForm",
  destroyOnUnmount: false
})(WorkoutForm);
