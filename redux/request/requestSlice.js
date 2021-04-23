import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * Request
 */
export const fetchRequestApi = createAsyncThunk("user/fetchRequestApiData", async ({ method, url }) => {
    const req = await axios({
        method,
        url,
    });

    return req;
});

const request = createSlice({
    name: "request",
    initialState: {
        data: {},
        status: null,
    },
    extraReducers: {
        [fetchRequestApi.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchRequestApi.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = "success";
        },
        [fetchRequestApi.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
});

export const {} = request.actions;
export default request.reducer;
