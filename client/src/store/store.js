import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice.js";
import themeReducer from "./themeSlice.js";

const persistConfig = {
    key:"root",
    storage,
};


const persistedReducer = persistReducer(persistConfig,authReducer);

const store = configureStore(
    {
        reducer:persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
              serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
              },
            })
    });
const persistor = persistStore(store);

export {store, persistor};