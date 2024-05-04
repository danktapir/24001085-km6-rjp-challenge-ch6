import {configureStore} from "@reduxjs/toolkit";
import reducers from "./reducers/index.js";

export default configureStore({
    devTools: true,
    reducer: reducers,
});