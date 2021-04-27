import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * Request
 */
export const fetchRequestApi = createAsyncThunk("user/fetchRequestApiData", async ({ method, url }, { getState }) => {
    const {
        request: { json, token, basic_token },
    } = getState();

    const req = await axios(
        {
            method,
            url,
        },
        { json }
    );

    return req;
});

const request = createSlice({
    name: "request",
    initialState: {
        data: {},
        request: {
            url: null,
            method: null,
            json: null,
            auth: {
                selected: "token",
                token: null,
                basic_token: {
                    username: null,
                    password: null,
                },
            },
        },
        status: null,
    },
    reducers: {
        handleJson(state, { payload }) {
            return { ...state, request: { ...state.request, json: payload } };
        },
        handleAuth(state, { payload }) {
            return { ...state, request: { ...state.request, auth: { ...state.request.auth, selected: payload } } };
        },
        handleToken(state, { payload }) {
            return { ...state, request: { ...state.request, auth: { ...state.request.auth, token: payload } } };
        },
        handleBasicTokenUserName(state, { payload }) {
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: { ...state.request.auth, basic_token: { ...state.request.auth.basic_token, username: payload } },
                },
            };
        },
        handleBasicTokenPassword(state, { payload }) {
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: { ...state.request.auth, basic_token: { ...state.request.auth.basic_token, password: payload } },
                },
            };
        },
    },
    extraReducers: {
        [fetchRequestApi.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchRequestApi.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.data = payload;
        },
        [fetchRequestApi.rejected]: (state, action) => {
            state.status = "failed";
        },
    },
});

export const { handleJson, handleAuth, handleToken, handleBasicTokenUserName, handleBasicTokenPassword } = request.actions;
export default request.reducer;
