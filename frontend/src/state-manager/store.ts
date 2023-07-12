import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authslicer";

export const store = configureStore({
    reducer: {
        // Add reducers here
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;