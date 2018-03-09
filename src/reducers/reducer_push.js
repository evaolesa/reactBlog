import { BACK_TO_INDEX } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case BACK_TO_INDEX:
      return "/";
    default:
      return state;
  }
}
