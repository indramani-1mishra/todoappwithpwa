import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";
import inputreducer from "./inputslice";
export const todostore = configureStore({
    reducer:{
        todo:todoReducer,
        input:inputreducer,
    }
})