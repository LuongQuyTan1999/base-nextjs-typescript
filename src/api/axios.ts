import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";

import { LocalStorage } from "@/services/localStorage";
import { PROJECT_AUTH_TOKEN } from "@/constants";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30 * 1000,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "brackets" }),
  withCredentials: true,
});

// request interceptor
request.interceptors.request.use((axiosConfig: AxiosRequestConfig) => {
  const auth = LocalStorage.get(PROJECT_AUTH_TOKEN);

  axiosConfig.headers = {
    ...axiosConfig.headers,
    Authorization: ``,
  };

  if (auth) {
    axiosConfig.headers.Authorization = `Bearer ${auth?.token}`;
  }

  return axiosConfig;
});

request.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    const { status } = error.response;
    const originalRequest = error.config;

    if (status === 400) {
      const {
        data: { message },
      } = error.response;

      alert(message);
    }

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // LocalStorage.remove(PROJECT_AUTH_TOKEN);
      // const auth = getAuth();
      // if (auth.currentUser) {
      //   const token = await getIdToken(auth.currentUser, true);
      //   originalRequest.headers.Authorization = `Bearer ${token}`;
      //   return authRequest(originalRequest);
      // }
      LocalStorage.remove(PROJECT_AUTH_TOKEN);
      if (typeof window !== "undefined") {
        window.open("/auth/login", "_self");
      }
    }

    return Promise.reject(error);
  }
);

export default request;
