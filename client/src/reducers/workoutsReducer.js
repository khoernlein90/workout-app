import { FETCH_WORKOUTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WORKOUTS:
      return action.payload;
    default:
      return state;
  }
}
