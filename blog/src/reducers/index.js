import { combineReducers } from "redux";
import { postsReducers } from "./postsReducers";
import { usersReducers } from "./UsersReducers";

export default combineReducers({
  posts: postsReducers,
  users: usersReducers,
});
