import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const history = createSlice({
    name: "history",
    initialState: {
        data: [],
        status: null,
    },

    reducers: {
        addHistory: (state, action) => {
            state.status = "success";
            state.data = [...state.data, action.payload];
        },
        removeHistory: (state, action) => {
            state.status = "success";
            state.data = [];
        },
    },
});

export const { addHistory, removeHistory } = history.actions;
export default history.reducer;
