import { configureStore } from "@reduxjs/toolkit";

import home from "../redux/slicers/HomeSlicer"

const Store = configureStore({
    reducer:{
        home : home
    }
})

export default Store;

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch


