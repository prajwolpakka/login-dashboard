import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Props {
	isAuthenticated: boolean;
	accessToken: string | null;
	userName: string;
	loading: boolean; // Include loading state
	error: string | null; // Include error state
}

const initialState: Props = {
	isAuthenticated: false,
	accessToken: null,
	loading: false,
	error: null,
	userName: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginStart(state) {
			state.loading = true;
			state.error = null;
		},
		loginSuccess(state, action: PayloadAction<{ jwt_token: string; full_name: string }>) {
			state.isAuthenticated = true;
			state.accessToken = action.payload.jwt_token;
			state.userName = action.payload.full_name;
			state.loading = false;
			state.error = null;
		},
		loginFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
		logoutSuccess(state) {
			state.isAuthenticated = false;
			state.accessToken = null;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
