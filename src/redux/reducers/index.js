import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "./authReducer.js";
import carReducer from "./carReducer.js";

export default combineReducers({
    auth: authReducer, car: carReducer,
});