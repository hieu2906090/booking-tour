import * as actionTypes from "./actionTypes";
import * as firebase from "../../apis/firebase/firebase.auth";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: { userId: userId },
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: { error: error.message },
  };
};

export const logOut = () => {
  return {
    type: actionTypes.LOG_OUT,
    payload: {},
  };
};

// Action holding async code during auth
export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    firebase
      .signInWithEmail(email, password)
      .then((data) => {
        console.log(data);
        localStorage.setItem("uid", data.user.uid);
        dispatch(
          authSuccess(data.user.uid)
          // authSuccess(data)
          // Save to local storage
        );
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};
