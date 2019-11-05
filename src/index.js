import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./store/store";
import * as serviceWorker from "./serviceWorker";
require("dotenv").config();

const store = configureStore();

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
  serviceWorker.unregister();
});
