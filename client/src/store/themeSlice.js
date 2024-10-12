import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    theme:"light"
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        light: (state, action)=>{
            state.theme = "light"
        },
        dark: (state, action)=>{
            state.theme = "dark"
        },
        // system: (state, action)=>{
        //     state.theme =  // system theme
        // }
    }
})


export const {light, dark} = themeSlice.actions;
export default themeSlice.reducer;