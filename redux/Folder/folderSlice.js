import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { arrayData } from "./folderUtils";
// data:{bpa:[{url,method},{url,method}],dms:[]}
const folder = createSlice({
    name: "folder",
    initialState: {
        data: {},
        status: null,
    },

    reducers: {
        addfolder: (state, action) => {
            state.status = "success";
            state.data = { ...state.data, ...action.payload };
        },
        addRequest: (state, action) => {
            state.status = "success";
            console.log(action.payload);
            // push data in array
            state.data = { ...state.data, [action.payload.folder]: arrayData(state, action.payload) };
        },
        removefolder: (state, action) => {
            state.status = "success";
            state.data = [];
        },
    },
});

export const { addfolder, removefolder, addRequest } = folder.actions;
export default folder.reducer;
