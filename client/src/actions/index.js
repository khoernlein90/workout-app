import axios from "axios";
import { FETCH_USER, FETCH_WORKOUTS, FETCH_WORKOUT, DELETE_WORKOUT, EDIT_WORKOUT } from "./types";

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

export const fetchWorkout = id => async dispatch => {
  const res = await axios.get(`/api/workouts/${id}`);
  dispatch({ type: FETCH_WORKOUT, payload: res.data });
};

export const updateWorkout = (id, values) => async dispatch => {
  const res = await axios.put(`/api/workouts/${id}`, values);
  dispatch({ type: EDIT_WORKOUT, payload: res.data });
  console.log(res);
};

export const removeWorkout = id => async dispatch => {
  const res = await axios.delete(`/api/workouts/${id}`);
  dispatch({ type: DELETE_WORKOUT, payload: res.data });
};
