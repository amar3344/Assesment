import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const HomeApiCall = createAsyncThunk(
    "HomeApiCall",
    async (_,{getState,fulfillWithValue,rejectWithValue}) =>{
        try{
            const response = await fetch('https://dummyjson.com/posts/1');
            console.log(response)
            Alert.alert(JSON.stringify(response))
            const responseData = await response.json()
            console.log(responseData,"RESPONSE")
            return fulfillWithValue("Something went wrong!")
        }catch{
            return rejectWithValue("Something went wrong!")
        }
    }
)

interface IS{
    loading:boolean,
    posts:{
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
    }[],
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
            // console.log(action)
        })
        builder.addCase(HomeApiCall.rejected,(state,action)=>{
            state.loading = false
        })
    }
})

export default HomeSlicer.reducer