import { FETCH_WORKOUT, DELETE_WORKOUT, EDIT_WORKOUT } from "../actions/types";

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_WORKOUT:
      return action.payload;
    case DELETE_WORKOUT:
      return action.payload;
    case EDIT_WORKOUT:
      return action.payload;
    default:
      return state;
  }
}
