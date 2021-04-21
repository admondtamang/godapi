import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: {
        data: {
            accessToken: undefined,
            refreshToken: undefined,
        },
        status: null,
    },

    reducers: {
        login: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        logout: (state) => {
            return {
                ...state,
                data: {},
            };
        },
    },
});

export const { login, logout } = user.actions;
export default user.reducer;
