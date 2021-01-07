import * as actionTypes from "../actions/actionTypes";

let defaultTourConfigState = {
  data: [],
  loading: true,
  err: "",
};

export default function tourConfigReducer(
  state = defaultTourConfigState,
  action
) {
  switch (action.type) {
    case actionTypes.TOUR_CONFIG_GET_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        err: "",
      };

    case actionTypes.TOUR_CONFIG_GET_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    case actionTypes.TOUR_CONFIG_CREATE_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        err: "",
      };

    case actionTypes.TOUR_CONFIG_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
}
