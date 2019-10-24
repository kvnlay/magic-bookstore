import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/actionTypes";
const initialState = {
  authError: null
};
export default (state = initialState, { type, payload }) => {
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
    default:
      return state;
  }
};
