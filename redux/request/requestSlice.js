import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { addHistory } from "../history/historySlice";
import { addRequest } from "../Folder/folderSlice";
import { toast } from "react-toastify";
import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
/**
 * Request
 */
export const fetchRequestApi = createAsyncThunk(
    "request/fetchRequestApiData",
    async (_, { signal, getState, dispatch, rejectWithValue }) => {
        const state = getState();
        const source = axios.CancelToken.source();
        signal.addEventListener("abort", () => {
            source.cancel();
        });
        const {
            request: {
                request: { json, token, basic_token, url, method },
            },
        } = state;

        try {
            const res = await axios({
                method,
                url,
                data: json,
                cancelToken: source.token,
                validateStatus: function (status) {
                    return status < 500; // Resolve only if the status code is less than 500
                },
            });

            dispatch(addHistory(res));
            return res;
        } catch (err) {
            if (axios.isCancel(thrown)) {
                console.log("Request canceled", thrown.message);
            }
            let error = err; // cast the error for access
            if (!error.response) {
                throw err;
            }

            return rejectWithValue(err);
        }
    }
);

export const fetchToFolder = createAsyncThunk("request/fetchToFolder", (selectedOption, { getState, dispatch, rejectWithValue }) => {
    const state = getState();
    if (!selectedOption) {
        toast.error("Invalid");
        return null;
    }
    try {
        const obj = { folder: selectedOption, data: state.request.request };
        console.log(obj);
        return dispatch(addRequest(obj));
    } catch (error) {
        alert(error);
    }
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
        handleClickRequest(state, { payload }) {
            return { ...state, request: payload };
        },

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
            state.data = {};
        },
        [fetchToFolder.fulfilled]: (state, action) => {
            state.status = "success";
        },
    },
});

export const { handleJson, handleMethod, handleAuth, handleToken, handleBasicAuth, handleChangeRequestProps, handleClickRequest } =
    request.actions;
export default request.reducer;
