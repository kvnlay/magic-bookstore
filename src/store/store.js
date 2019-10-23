import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
