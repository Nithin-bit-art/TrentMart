import {createSlice} from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        // actions
        // updating state,action= parameters used to define argument of AddToCart fn 
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        //        id
        removeCart:(state,action)=>{
        return state.filter(i=>i.id!=action.payload)      
        },
        clearCart:(state)=>{
            return[]
        }
    }
})

// export reducers
export default cartSlice.reducer

//action
export const {addToCart,removeCart,clearCart}=cartSlice.actions