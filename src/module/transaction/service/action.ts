/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from "store";
import { getAllTransaction } from "./api";
import { fetchFailure, fetchStart, fetchSuccess } from "./reducer";

export const fetchAllTransaction = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(fetchStart());
		const response = await getAllTransaction();
		const { data } = response.data;
		dispatch(fetchSuccess(data));
	} catch (error: any) {
		dispatch(fetchFailure(error.message));
	}
};
