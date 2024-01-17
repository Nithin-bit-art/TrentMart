import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:'wishList',
    initialState:[],
    reducers:{
        // actions
        // updating state,action=parameter used to define argument of addToCart fn
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
         
        removeWishlist:(state,action)=>{
            // retrn new filtered array
            return state.filter(i=>i.id!=action.payload)
        }
    }
})

export  default wishlistSlice.reducer


export const{addToWishlist,removeWishlist}=wishlistSlice.actions