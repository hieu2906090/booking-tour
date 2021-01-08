import * as actionTypes from "./actionTypes";
import * as toursApi from "../../apis/tours";

// ----------------------------------- GET TOURS ----------------------------------
export const getAllTours = () => {
  return (dispatch) => {
    toursApi
      .getAllTours()
      .then((res) => {
        dispatch(getAllToursSuccess(res));
      })
      .catch((err) => {
        dispatch(getAllToursFail(err));
      });
  };
};

export const getAllToursSuccess = (tours) => {
  return {
    type: actionTypes.TOURS_GET_ALL_SUCCESS,
    payload: tours,
  };
};

export const getAllToursFail = (err) => {
  return {
    type: actionTypes.TOURS_GET_ALL_FAIL,
    payload: err,
  };
};

// ----------------------------------- EDIT TOURS ----------------------------------
export const editTour = (newTour) => {
  console.log("Call Dispatch Edit");
  return (dispatch) => {
    toursApi
      .editTour(newTour)
      .then((res) => {
        dispatch(editTourSuccesss(newTour));
      })
      .catch((err) => {
        dispatch(editTourFail(err));
      });
  };
};

export const editTourSuccesss = (newTour) => {
  console.log(newTour);
  return {
    type: actionTypes.TOUR_EDIT_SUCCESS,
    payload: newTour,
  };
};

export const editTourFail = (err) => {
  return {
    type: actionTypes.TOUR_EDIT_FAIL,
    payload: err,
  };
};

// ----------------------------------- DELETE TOUR ----------------------------------
export const deleteTour = (tourId) => {
  console.log("Call Dispatch Edit");
  return (dispatch) => {
    toursApi
      .deleteTour(tourId)
      .then((res) => {
        dispatch(deleteTourSuccesss(tourId));
      })
      .catch((err) => {
        dispatch(deleteTourFail(err));
      });
  };
};

export const deleteTourSuccesss = (tourCatId) => {
  return {
    type: actionTypes.TOUR_DELETE_SUCCESS,
    payload: { tourCatId },
  };
};

export const deleteTourFail = (err) => {
  return {
    type: actionTypes.TOUR_DELETE_FAIL,
    payload: err,
  };
};
