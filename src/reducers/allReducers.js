import { combineReducers } from "redux";
import counter from "./counter";
import allUser from "./user";

const myReducers = combineReducers({counter, allUser})

export default myReducers