import { combineReducers } from "redux";

import tourRawReducer from "./reducers/tourRaw";
import tourCatsReducer from "./reducers/tourCats";
import tourCatConfigReducer from "./reducers/tourCatsConfig";
import tourBooksReducer from "./reducers/tourBooks";

export default combineReducers({
  tourRaw: tourRawReducer,
  tourCats: tourCatsReducer,
  tourCatConfig: tourCatConfigReducer,
  tourBooks: tourBooksReducer,
});
