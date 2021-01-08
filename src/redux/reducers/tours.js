import * as actionTypes from "../actions/actionTypes";

let defaultToursState = {
  data: [],
  loading: true,
  err: "",
};

export default function toursReducer(state = defaultToursState, action) {
  switch (action.type) {
    case actionTypes.TOURS_GET_ALL_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        err: "",
      };

    case actionTypes.TOURS_GET_ALL_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    case actionTypes.TOUR_EDIT_SUCCESS:
      const newTour = action.payload;
      let newData = [...state.data];
      const tourIdx = newData.findIndex(
        (el) => el.tourId === action.payload.tourId
      );
      console.log(tourIdx);
      newData.splice(tourIdx, 1, newTour);

      return {
        data: newData,
        loading: false,
        err: "",
      };

    case actionTypes.TOUR_EDIT_FAIL:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    default:
      return state;
  }
}
