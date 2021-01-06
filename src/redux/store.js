import { combineReducers } from "redux";

import toursReducer from "./reducers/tours";
import tourCatsReducer from "./reducers/tourCats";
import tourCatConfigReducer from "./reducers/tourCatsConfig";

export default combineReducers({
  toursRaw: toursReducer,
  tourCats: tourCatsReducer,
  tourCatConfig: tourCatConfigReducer,
});
