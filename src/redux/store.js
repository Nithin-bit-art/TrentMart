import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import productsSlice from "./productsSlice";


const store=configureStore({
    reducer:{
        cart:cartSlice,
        wishList:wishlistSlice,
       productsSlice
    }
})

export default store