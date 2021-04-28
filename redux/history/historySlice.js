import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const history = createSlice({
    name: "histories",
    initialState: {
        data: [],
        status: null,
    },

    reducers: {
        addHistory: (state, action) => {
            state.status = "success";
            state.data = [...state.data, action.payload];
            // state.data = state.data.shift();
        },
        clearHistory: (state, action) => {
            state.status = "success";
            state.data = [];
        },
    },
});

export const { addHistory, clearHistory } = history.actions;
export default history.reducer;
