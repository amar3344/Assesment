import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const HomeApi = createAsyncThunk(
    "homeAPI",
    async () =>{
        const respop = await fetch('https://dummyjson.com/posts/1')
        console.log(respop,"<<<<<<")
    }
)