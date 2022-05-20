import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  userReducer,
});
export default rootReducer;
