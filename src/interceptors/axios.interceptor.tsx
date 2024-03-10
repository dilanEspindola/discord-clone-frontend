import axios, { type AxiosError, type AxiosResponse } from "axios";
import { errorValidation } from "@/utils/validation-errors";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      errorValidation(error.message, Number(error.status));
      return await Promise.reject(error);
    }
  );
};
