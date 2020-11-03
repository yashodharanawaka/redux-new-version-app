import { combineReducers } from "@reduxjs/toolkit";

import dramasReducer from "./dramas";

const rootReducer = combineReducers({
  dramas: dramasReducer,
});

export default rootReducer;
