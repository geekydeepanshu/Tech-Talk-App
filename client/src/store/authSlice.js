import {createSlice} from "@reduxjs/toolkit"


const initialState = {
        isLoggedIn:false,
        userData:null,
        token:null
    
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state,action)=>{
            state.isLoggedIn = true
            state.userData = action.payload.user
            state.token = action.payload.token
        },
        logout: (state,action)=>{
            state.isLoggedIn = false
            state.userData = null
            state.token = null
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;