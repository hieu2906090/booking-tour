import * as actionTypes from "../actions/actionTypes";

let defaultToursState = {
  data: [],
  loading: true,
  err: "",
};

export default function tourRawReducer(state = defaultToursState, action) {
  switch (action.type) {
    case actionTypes.GET_TOURS_RAW_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        err: "",
      };

    case actionTypes.GET_TOURS_RAW_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
}
