import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const folder = createSlice({
    name: "folder",
    initialState: {
        data: {},
        status: null,
    },

    reducers: {
        addfolder: (state, action) => {
            state.status = "success";
            state.data = [...state.data, action.payload];
        },
        removefolder: (state, action) => {
            state.status = "success";
            state.data = [];
        },
    },
});

export const { addfolder, removefolder } = folder.actions;
export default folder.reducer;
