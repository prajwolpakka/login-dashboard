/* eslint-disable @typescript-eslint/no-explicit-any */
import { store } from "store";

import axios from "axios";
import { Store } from "redux";

axios.defaults.baseURL = "https://jp-dev.cityremit.global/web-api";

class AxiosHelper {
	private store: Store;

	constructor(store: Store) {
		this.store = store;

		axios.interceptors.request.use(
			(config: any) => {
				const accessToken = this.store.getState().Auth.accessToken;
				if (accessToken) {
					config.headers = {
						...config.headers,
						Authorization: `Bearer ${accessToken}`,
					};
				}
				return config;
			},
			(error) => {
				return Promise.reject(error);
			}
		);
	}

	get = (url: string, params?: any) => axios.get(url, { params });
	post = (url: string, data: any) => axios.post(url, data);
	put = (url: string, data: any) => axios.put(url, data);
	patch = (url: string, data: any) => axios.patch(url, data);
	delete = (url: string, params: any) => axios.delete(url, { params });
}

export const api = new AxiosHelper(store);
