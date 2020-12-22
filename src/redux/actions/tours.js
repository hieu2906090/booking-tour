import * as actionTypes from "./actionTypes";
import axios from "axios";

// -------------------------- GET ALL TOURS ----------------------------
export const getAllToursRaw = () => {
  console.log("Call get All Tours Raw");
  return (dispatch) => {
    axios
      .get("scrape_ivivu_new.json")
      .then((data) => {
        // STEP 1: Convert data from json to list
        dispatch(getAllToursRawSuccess(data.data));
      })
      .catch((err) => {
        dispatch(getAllToursRawFail(err));
      });
  };
};

export const getAllToursRawSuccess = (tours) => {
  console.log("Get All Tour Success Called");
  return {
    type: actionTypes.GET_TOURS_RAW_SUCCESS,
    payload: tours,
  };
};

export const getAllToursRawFail = (err) => {
  console.log(err);
  return {
    type: actionTypes.GET_TOURS_RAW_FAIL,
    payload: err,
  };
};
