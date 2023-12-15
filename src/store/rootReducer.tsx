import { combineReducers } from "@reduxjs/toolkit";
import * as reducers from "./reducers";

const { auth, counter } = reducers;

export const rootReducer = combineReducers({
  auth,
  counter,
});
