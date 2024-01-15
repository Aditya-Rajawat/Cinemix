import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:'config',
    initialState:{
        lang:'en',
        movie:null,
        moreInfo:false
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang=action.payload;
        },
        addMovie:(state,action)=>{
            state.movie=action.payload;
        },
        setMoreInfo:(state,action)=>{
            state.moreInfo=action.payload;
        }
    }
});

export const {changeLanguage,addMovie,setMoreInfo} = configSlice.actions;

export default configSlice.reducer;