import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    auth:{
        isLoggedIn:false,
        userData:null,
        token:null
    }
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state,action)=>{
            state.auth.isLoggedIn = true
            state.auth.userData = action.payload.user
            state.auth.token = action.payload.token
        },
        logout: (state,action)=>{
            state.auth.isLoggedIn = false
            state.auth.userData = null
            state.auth.token = null
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;