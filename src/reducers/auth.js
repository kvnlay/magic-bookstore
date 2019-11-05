import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  authError: null
};

export default (state = initialState, { type, err }) => {
  switch (type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: "Login failed!"
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGNOUT_SUCCESS:
      console.log("signout success");
      return state;

    case SIGNUP_SUCCESS:
      console.log("signup success");
      return {
        ...state,
        authError: null
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        authError: err.message
      };

    default:
      return state;
  }
};
