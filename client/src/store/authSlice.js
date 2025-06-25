import { createSlice } from "@reduxjs/toolkit"
import { updateUserBio } from './actions';


const initialState = {
    isLoggedIn: false,
    userData: null,
    loading: false,
    error: null,

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true
            state.userData = action.payload
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.userData = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateUserBio.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUserBio.fulfilled, (state, action) => {
                state.loading = false;
                state.userData.bio = action.payload.bio;
            })
            .addCase(updateUserBio.rejected, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.error = action.payload;
            });
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;