import { api } from "config/api";
import { GetAllTransactionResponse } from "./type";

export const getAllTransaction = (): Promise<GetAllTransactionResponse> => {
	return api.post("/transaction-manager/v1/admin/dashboard/search", {});
};
