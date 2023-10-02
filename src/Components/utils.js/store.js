import { configureStore } from "@reduxjs/toolkit";

import appslice from "./appslice";
import Cartslice from "./Cartslice";


const store=configureStore({
    reducer:{
        app:appslice,
        cart:Cartslice,
    },

});
export default store;