import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import workoutsReducer from "./workoutsReducer";
import workoutReducer from "./workoutReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  workouts: workoutsReducer,
  workout: workoutReducer
});
