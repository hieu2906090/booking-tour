import * as actionTypes from "./actionTypes";
import * as tourCatsApi from "../../apis/toursCat";

// ----------------------------------- GET TOUR CAT CONFIG ----------------------------------
export const getTourCatConfig = () => {
  return (dispatch) => {
    tourCatsApi
      .getTourCatConfig()
      .then((res) => {
        dispatch(getTourCatConfigSuccesss(res));
      })
      .catch((err) => {
        dispatch(getTourCatConfigFail(err));
      });
  };
};

export const getTourCatConfigSuccesss = (tourCats) => {
  return {
    type: actionTypes.TOUR_CATS_CONFIG_GET_SUCCESS,
    payload: tourCats,
  };
};

export const getTourCatConfigFail = (err) => {
  return {
    type: actionTypes.TOUR_CATS_CONFIG_GET_FAIL,
    payload: err,
  };
};

// ----------------------------------- SET TOUR CAT CONFIG ----------------------------------
export const createTourCatConfig = (tourCatCongfig) => {
  console.log("Call in action of tour config: ", tourCatCongfig);
  return (dispatch) => {
    tourCatsApi
      .createTourCatConfig(tourCatCongfig)
      .then((res) => {
        dispatch(createTourCatConfigSuccesss(tourCatCongfig));
      })
      .catch((err) => {
        dispatch(createTourCatConfigFail(err));
      });
  };
};

export const createTourCatConfigSuccesss = (tourCatConfig) => {
  return {
    type: actionTypes.TOUR_CATS_CONFIG_CREATE_SUCCESS,
    payload: tourCatConfig,
  };
};

export const createTourCatConfigFail = (err) => {
  return {
    type: actionTypes.TOUR_CATS_CONFIG_CREATE_FAIL,
    payload: err,
  };
};
