import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    mode:"light"
}


const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        light: (state, action)=>{
            state.mode = "light"
        },
        dark: (state, action)=>{
            state.mode = "dark"
        },
        // system: (state, action)=>{
        //     state.theme =  // system theme
        // }
    }
})


export const {light, dark} = themeSlice.actions;
export default themeSlice.reducer;