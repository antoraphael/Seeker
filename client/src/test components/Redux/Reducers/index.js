import counter from "./counter";
import IsLogged from "./isLogged";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  counter: counter,
  auth: IsLogged,
});
