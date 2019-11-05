import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./actionTypes";

export const signInAction = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, err });
      });
  };
};

export const signOutAction = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      });
  };
};

export const signUpAction = newUser => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            username: newUser.username
          });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: SIGNUP_ERROR, err });
      });
  };
};
