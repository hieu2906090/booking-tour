import { combineReducers } from "redux";

import authReducer from "./reducers/auth";
import tourRawReducer from "./reducers/tourRaw";
import tourCatsReducer from "./reducers/tourCats";
import tourCatConfigReducer from "./reducers/tourCatsConfig";
import tourBooksReducer from "./reducers/tourBooks";
import toursReducer from "./reducers/tours";
import tourConfigReducer from "./reducers/toursConfig";

export default combineReducers({
  auth: authReducer,
  tourRaw: tourRawReducer,
  tourCats: tourCatsReducer,
  tourCatConfig: tourCatConfigReducer,
  tourBooks: tourBooksReducer,
  tours: toursReducer,
  tourConfig: tourConfigReducer,
});
