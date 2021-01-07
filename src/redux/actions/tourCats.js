import * as actionTypes from "./actionTypes";
import * as tourCatsApi from "../../apis/toursCat";

// ----------------------------------- GET TOUR CATS ----------------------------------
export const getAllTourCats = () => {
  return (dispatch) => {
    tourCatsApi
      .getAllTourCats()
      .then((res) => {
        dispatch(getAllTourCatsSuccess(res));
      })
      .catch((err) => {
        dispatch(getAllTourCatsFail(err));
      });
  };
};

export const getAllTourCatsSuccess = (tourCats) => {
  return {
    type: actionTypes.TOUR_CATS_GET_ALL_SUCCESS,
    payload: tourCats,
  };
};

export const getAllTourCatsFail = (err) => {
  return {
    type: actionTypes.TOUR_CATS_GET_ALL_FAIL,
    payload: err,
  };
};

// ----------------------------------- EDIT TOUR CATS ----------------------------------
export const editTourCat = (newTourCat) => {
  console.log("Call Dispatch Edit");
  return (dispatch) => {
    tourCatsApi
      .editTourCat(newTourCat)
      .then((res) => {
        dispatch(editTourCatSuccesss(newTourCat));
      })
      .catch((err) => {
        dispatch(editTourCatFail(err));
      });
  };
};

export const editTourCatSuccesss = (newTourCat) => {
  return {
    type: actionTypes.TOUR_CAT_EDIT_SUCCESS,
    payload: newTourCat,
  };
};

export const editTourCatFail = (err) => {
  return {
    type: actionTypes.TOUR_CAT_EDIT_FAIL,
    payload: err,
  };
};

// ----------------------------------- DELETE TOUR CATS ----------------------------------
export const deleteTourCat = (tourCatId) => {
  console.log("Call Dispatch Edit");
  return (dispatch) => {
    tourCatsApi
      .deleteTourCat(tourCatId)
      .then((res) => {
        dispatch(deleteTourCatSuccesss(tourCatId));
      })
      .catch((err) => {
        dispatch(deleteTourCatFail(err));
      });
  };
};

export const deleteTourCatSuccesss = (tourCatId) => {
  return {
    type: actionTypes.TOUR_CAT_DELETE_SUCCESS,
    payload: { tourCatId },
  };
};

export const deleteTourCatFail = (err) => {
  return {
    type: actionTypes.TOUR_CAT_DELETE_FAIL,
    payload: err,
  };
};
