import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// api call-createAsyncThunk

export const fetchProducts=createAsyncThunk('(slice name)/fetchProducts',async()=>{
    const result=await axios.get('https://fakestoreapi.com/products')
    return result.data
})

// slice creation 
const productSlice=createSlice({
    name:'productList',
    initialState:{
        loading:false,
        allProducts:[],
        searchArray:[],
        error:''
    },
    reducers:{
      // actions without api
    searchProducts:(state,action)=>{
      state.allProducts=state.searchArray.filter(i=>i.title.toLowerCase().trim()
      .includes(action.payload.toLowerCase().trim()))
    }

    },

    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.allProducts=action.payload
            state.searchArray=action.payload
            state.error=""
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false
            state.allProducts=[]
            state.error=action.payload
        })

    }
})

export default productSlice.reducer

export const {searchProducts}=productSlice.actions