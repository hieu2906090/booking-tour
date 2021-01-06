import { combineReducers } from "redux";

import tourRawReducer from "./reducers/tourRaw";
import tourCatsReducer from "./reducers/tourCats";
import tourCatConfigReducer from "./reducers/tourCatsConfig";

export default combineReducers({
  tourRaw: tourRawReducer,
  tourCats: tourCatsReducer,
  tourCatConfig: tourCatConfigReducer,
});
