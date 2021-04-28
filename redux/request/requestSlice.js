import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addHistory } from "../history/historySlice";

/**
 * Request
 */
export const fetchRequestApi = createAsyncThunk("user/fetchRequestApiData", async (_, { getState, dispatch }) => {
    const state = getState();
    const {
        request: {
            request: { json, token, basic_token, url, method },
        },
    } = state;

    const req = await axios(
        {
            method,
            url,
        },
        { json }
    );
    // dispatch(addHistory(state.request.request));
    return req;
});

const request = createSlice({
    name: "request",
    initialState: {
        data: {},
        request: {
            url: "http://dummy.restapiexample.com/api/v1/employees",
            method: "get",
            json: null,
            auth: {
                selected: "token",
                token: null,
                basic_token: {},
            },
        },
        status: null,
    },
    reducers: {
        handleMethod(state, { payload }) {
            return { ...state, request: { ...state.request, method: payload } };
        },
        handleChangeRequestProps(state, { payload }) {
            return { ...state, request: { ...state.request, [payload.target.name]: payload.target.value } };
        },
        handleJson(state, { payload }) {
            return { ...state, request: { ...state.request, json: payload } };
        },
        handleAuth(state, { payload }) {
            // select which auth to use-- token or basic auth
            return { ...state, request: { ...state.request, auth: { ...state.request.auth, selected: payload } } };
        },
        handleToken(state, { payload }) {
            return { ...state, request: { ...state.request, auth: { ...state.request.auth, token: payload } } };
        },
        handleBasicAuth(state, { payload }) {
            return {
                ...state,
                request: {
                    ...state.request,
                    auth: {
                        ...state.request.auth,
                        basic_token: { ...state.request.auth.basic_token, [payload.target.name]: payload.target.value },
                    },
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

export const { handleJson, handleMethod, handleAuth, handleToken, handleBasicAuth, handleChangeRequestProps } = request.actions;
export default request.reducer;
