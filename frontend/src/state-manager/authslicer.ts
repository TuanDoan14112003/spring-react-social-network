import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    username: string | null;
    profilePicture: string | null;
    token: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    username: null,
    profilePicture: null,
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<AuthState>) {
            state.username = action.payload.username;
            state.profilePicture = action.payload.profilePicture;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.username = null;
            state.profilePicture = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
});

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;