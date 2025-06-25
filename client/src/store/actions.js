import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateUserBio = createAsyncThunk(
    'auth/updateBio',
    async ({ userId, bio, token }, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/users/${userId}/bio`, { bio },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error))
                return rejectWithValue(error.message)
            // console.log("Action.js::error:", error)
            return rejectWithValue(error.response.data);
        }
    }
);
