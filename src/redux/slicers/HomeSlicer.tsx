import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const HomeApiCall = createAsyncThunk(
    "HomeApiCall",
    async (_,{getState,fulfillWithValue,rejectWithValue}) =>{
        try{
            const response = await fetch('https://dummyjson.com/posts');
            const responseData = await response.json()
            return fulfillWithValue(responseData.posts)
        }catch{
            return rejectWithValue("Something went wrong!")
        }
    }
)

export interface IP{
     "id": number,
      "title": string,
      "body": string,
      "tags": string[],
      "reactions": {
        "likes": number,
        "dislikes": number
      },
      "views": number,
      "userId": number
}

interface IS{
    loading:boolean,
    posts:IP[],
}

const initialState:IS = {
    posts : [],
    loading:false,
}

const HomeSlicer = createSlice({
    name : 'HomeSlicer',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(HomeApiCall.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(HomeApiCall.fulfilled,(state,action)=>{
            state.loading = false
            state.posts = action.payload
        })
        builder.addCase(HomeApiCall.rejected,(state,action)=>{
            state.loading = false
        })
    }
})

export default HomeSlicer.reducer