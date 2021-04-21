import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const request = createSlice({
    name: "request",
    initialState: {
        data: {},
        status: null,
    },
});

export const {} = request.actions;
export default request.reducer;
