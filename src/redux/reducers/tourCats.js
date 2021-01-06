import * as actionTypes from "../actions/actionTypes";

let defaultTourCatsState = {
  data: [],
  loading: true,
  err: "",
};

export default function tourCatsReducer(state = defaultTourCatsState, action) {
  switch (action.type) {
    case actionTypes.TOUR_CATS_GET_ALL_SUCCESS:
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

    case actionTypes.TOUR_CAT_EDIT_SUCCESS:
      const newTourCat = action.payload;
      let newData = [...state.data];
      const tourCatIdx = newData.findIndex(
        (el) => el.fid === action.payload.fid
      );
      newData.splice(tourCatIdx, 1, newTourCat);

      return {
        data: newData,
        loading: false,
        err: "",
      };

    case actionTypes.TOUR_CAT_EDIT_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
}
