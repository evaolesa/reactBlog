import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";
import PushReducer from "./reducer_push";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  pushTo: PushReducer
});

export default rootReducer;
