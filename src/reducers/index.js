import { combineReducers } from "redux";
import books from "./books";
import filter from "./filter";
import auth from "./auth";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
  books,
  filter,
  auth,
  firestore: firestoreReducer
});
