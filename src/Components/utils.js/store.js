
import {configureStore } from "@reduxjs/toolkit";
import appReducer from "./appslice";
import cartReducer from "./cartslice";


const store=configureStore({
    reducer:{
        app:appReducer,
        cart:cartReducer,
        
    }
}

);
export default store;
