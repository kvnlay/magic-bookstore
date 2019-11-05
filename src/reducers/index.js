import { combineReducers } from "redux";
import books from "./books";
import filter from "./filter";
import auth from "./auth";
import { firestoreReducer } from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase"

export default combineReducers({
  books,
  filter,
  auth,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
