import * as actionTypes from "../actions/actionTypes";

let defaultTourBookConfigState = {
  data: [],
  loading: true,
  err: "",
};

export default function tourBooksReducer(
  state = defaultTourBookConfigState,
  action
) {
  switch (action.type) {
    case actionTypes.TOUR_BOOK_CREATE_SUCCESS:
      return {
        data: [...state.data, action.payload],
        loading: false,
        err: "",
      };

    case actionTypes.TOUR_BOOK_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
}
