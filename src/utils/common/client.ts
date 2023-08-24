import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

type Client = <T = any>(url: string, options?: AxiosRequestConfig) => Promise<AxiosResponse<T>>;

/**
 * Client to make API Requests
 *
 * @param {String} url API Endpoint
 * @param {AxiosRequestConfig} options Axios config options
 * @returns {Promise<AxiosResponse<T>>} Axios Response
 */
export const client: Client = (url, options = {}) => {
	return axios({ url: `${apiURL}${url}`, withCredentials: true, ...options });
};
