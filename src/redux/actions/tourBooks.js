import * as actionTypes from "./actionTypes";
import * as toursBookApi from "../../apis/toursBook";

// ----------------------------------- SET TOUR CAT CONFIG ----------------------------------
export const createTourBook = (newTourBook) => {
  return (dispatch) => {
    toursBookApi
      .createTourBook(newTourBook)
      .then((fid) => {
        dispatch(createTourBookSuccess({ fid: fid, ...newTourBook }));
      })
      .catch((err) => {
        dispatch(createTourCatConfigFail(err));
      });
  };
};

export const createTourBookSuccess = (newTourBook) => {
  return {
    type: actionTypes.TOUR_BOOK_CREATE_SUCCESS,
    payload: newTourBook,
  };
};

export const createTourCatConfigFail = (err) => {
  return {
    type: actionTypes.TOUR_BOOK_CREATE_FAIL,
    payload: err,
  };
};
