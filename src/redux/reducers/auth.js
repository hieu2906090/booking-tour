import * as actionTypes from "../actions/actionTypes";

const initialState = {
  userId: localStorage.getItem("uid"),
  error: null,
  loading: false,
};

const authStart = (state, action) => {
  return { ...state, error: null, loading: true };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    userId: action.payload.userId,
    error: null,
    loading: false,
  };
};

const authFail = (state, action) => {
  return { ...state, error: action.payload.error, loading: false };
};

const logOut = (state, action) => {
  localStorage.removeItem("uid");
  return {
    ...state,
    userId: "",
    error: null,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.LOG_OUT:
      return logOut(state, action);
    default:
      return state;
  }
};

export default reducer;
