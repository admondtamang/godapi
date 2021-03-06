import { configureStore, combineReducers, getDefaultMiddleware, createStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import historySlice from "./history/historySlice";
import requestSlice from "./request/requestSlice";
import userSlice from "./user/userSlice";
import folderSlice from "./Folder/folderSlice";

let store;

const persistConfig = {
    key: "godApi",
    version: 1,
    storage,
    blacklist: ["request"],
};

const rootReducer = combineReducers({
    user: userSlice,
    request: requestSlice,
    history: historySlice,
    folders: folderSlice,
});

const isClient = typeof window !== "undefined";

if (isClient) {
    const { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } = require("redux-persist");
    const persistedReducer = persistReducer(persistConfig, rootReducer);

    store = configureStore({
        reducer: persistedReducer,
        middleware: getDefaultMiddleware({
            // serializableCheck: {
            //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
            serializableCheck: false,
        }),
        devTools: true,
    });
} else {
    console.log("no ssr");
    store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware({
            serializableCheck: false,
        }),
        devTools: true,
    });
}

export default store;
