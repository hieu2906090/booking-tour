import * as actionTypes from "./actionTypes";
import * as toursApi from "../../apis/tours";

// ----------------------------------- GET TOUR CAT CONFIG ----------------------------------
export const getTourConfig = () => {
  return (dispatch) => {
    toursApi
      .getTourConfig()
      .then((res) => {
        dispatch(getTourConfigSuccesss(res));
      })
      .catch((err) => {
        dispatch(getTourConfigFail(err));
      });
  };
};

export const getTourConfigSuccesss = (tourCats) => {
  return {
    type: actionTypes.TOUR_CONFIG_GET_SUCCESS,
    payload: tourCats,
  };
};

export const getTourConfigFail = (err) => {
  return {
    type: actionTypes.TOUR_CONFIG_GET_FAIL,
    payload: err,
  };
};

// ----------------------------------- SET TOUR CAT CONFIG ----------------------------------
export const createTourConfig = (tourConfig) => {
  return (dispatch) => {
    toursApi
      .createTourConfig(tourConfig)
      .then((res) => {
        dispatch(createTourConfigSuccesss(tourConfig));
      })
      .catch((err) => {
        dispatch(createTourConfigFail(err));
      });
  };
};

export const createTourConfigSuccesss = (tourCatConfig) => {
  return {
    type: actionTypes.TOUR_CONFIG_CREATE_SUCCESS,
    payload: tourCatConfig,
  };
};

export const createTourConfigFail = (err) => {
  return {
    type: actionTypes.TOUR_CONFIG_CREATE_FAIL,
    payload: err,
  };
};
