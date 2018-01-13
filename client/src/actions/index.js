import axios from "axios";
import { FETCH_USER, FETCH_WORKOUTS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitWorkout = (values, history) => async dispatch => {
  const res = await axios.post("/api/workouts", values);
  history.push("/workouts");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchWorkouts = () => async dispatch => {
  const res = await axios.get("/api/workouts");
  dispatch({ type: FETCH_WORKOUTS, payload: res.data });
};
