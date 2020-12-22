import { combineReducers } from "redux";

import toursReducer from "./reducers/tours";

export default combineReducers({
  toursRaw: toursReducer,
});
