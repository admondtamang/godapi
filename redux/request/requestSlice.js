import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addHistory } from "../history/historySlice";
import { addRequest } from "../Folder/folderSlice";
/**
 * Request
 */
export const fetchRequestApi = createAsyncThunk("user/fetchRequestApiData", async (_, { getState, dispatch, rejectWithValue }) => {
    const state = getState();
    const {
        request: {
            request: { json, token, basic_token, url, method },
        },
    } = state;

    try {
        const res = await axios(
            {
                method,
                url,
            },
            { json }
        );
        dispatch(addHistory(res));
        return res;
    } catch (err) {
        return rejectWithValue(err.response);
    }
});

export const fetchToFolder = createAsyncThunk("user/fetchToFolder", async (selectedOption, { getState, dispatch, rejectWithValue }) => {
    const state = getState();
    console.log(state, selectedOption);
    return await dispatch(addRequest({ folder: "ramesh", data: state.request.request }));
});

const request = createSlice({
    name: "request",
    initialState: {
        data: {},
        request: {
            url: "https://jsonplaceholder.typicode.com/todos/1",
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
        [fetchToFolder.fulfilled]: (state, action) => {
            state.status = "success";
            console.log(action);
        },
    },
});

export const { handleJson, handleMethod, handleAuth, handleToken, handleBasicAuth, handleChangeRequestProps } = request.actions;
export default request.reducer;
