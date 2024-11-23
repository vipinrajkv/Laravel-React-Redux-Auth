import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../axiosInstance';

export const loginUser = createAsyncThunk('user/loginUser',async (userLoginData) => {
        const request = await axiosInstance.post('/login', userLoginData);
        const response = await request.data;
        localStorage.setItem('token', response.token);
        return response;
    }
);

const token = localStorage.getItem('token') ?? null;
// const userToken = JSON.parse(localStorage.getItem('token'));
const authSlice = createSlice({
    name:'auth',
    initialState:{
         isLoggedIn : null ,
         user_name : null ,
         token : token
        
        },
    extraReducers:(builder)=> {
        builder.addCase(loginUser.pending,(state)=>{
            state.isLoggedIn = null
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoggedIn = action.payload;
            state.user_name = action.payload.user_name;
            state.token = action.payload.token;
        }).addCase(loginUser.rejected,(state,action)=>{
            state.isLoggedIn = null;
        })
    }
});


export const authActions =  authSlice.actions;

export default authSlice;