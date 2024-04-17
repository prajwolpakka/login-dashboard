/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "config/api";
import { AppDispatch } from "store";
import { loginFailure, loginStart, loginSuccess, logoutSuccess } from "./reducer";

export interface LoginProps {
	login_id: string;
	login_password: string;
}

type LoginResponse = {
	data: {
		data: [{ jwt_token: string; full_name: string }];
	};
};

export const login = (props: LoginProps) => async (dispatch: AppDispatch) => {
	try {
		dispatch(loginStart());

		const params = { ...props, ip_address: "182.93.95.159" };
		const response: LoginResponse = await api.post("/config/v1/auths/login", params);

		const { data } = response.data;
		const { jwt_token, full_name } = data[0];

		dispatch(loginSuccess({ jwt_token, full_name }));
	} catch (error: any) {
		console.log(error.response.data.code);
		if (error.response.data.code === 400) {
			console.log("here?");
			dispatch(loginFailure(error.response.data.details[0].message));
		} else if (error.response.data.code === 403) {
			dispatch(loginFailure(error.response.data.message));
		} else {
			dispatch(loginFailure(error.message));
		}
	}
};

export const logout = () => async (dispatch: AppDispatch) => {
	dispatch(logoutSuccess());
};
