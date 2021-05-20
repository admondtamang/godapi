import { createSlice } from "@reduxjs/toolkit";
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
            const { folder, data } = action.payload;

            // push data in array
            state.data = {
                ...state.data,
                [folder]: [...state.data[folder], { ...data, id: state.data[folder].length }],
            };
        },
        removefolder: (state, action) => {
            state.status = "success";
            state.data = [];
        },
        removeRequest(state, action) {
            const { folder, id } = action.payload;

            state.status = "success";
            state.data = {
                ...state.data,
                [folder]: state.data[folder].filter((data) => id !== data.id),
            };
        },
    },
});

export const { addfolder, removefolder, addRequest, removeRequest } = folder.actions;
export default folder.reducer;
