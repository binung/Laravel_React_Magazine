import { configureStore } from "@reduxjs/toolkit";
import jsonDataSlice from "./features/jsonData/jsonDataSlice";

const store = configureStore({
    reducer: {
        jsonData: jsonDataSlice
    }
});

export default store;
