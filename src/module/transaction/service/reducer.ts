import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionProps } from "./type";

interface Props {
	loading: boolean;
	error: string | null;
	isFetched: boolean;
	transactions: Array<TransactionProps>;
}

const initialState: Props = {
	isFetched: false,
	transactions: [],
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		fetchStart(state) {
			state.loading = true;
			state.error = null; // Reset error state
		},
		fetchSuccess(state, action: PayloadAction<Array<TransactionProps>>) {
			state.isFetched = true;
			state.transactions = action.payload;
			state.loading = false;
			state.error = null; // Reset error state
		},
		fetchFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchStart, fetchSuccess, fetchFailure } = authSlice.actions;

export default authSlice.reducer;
