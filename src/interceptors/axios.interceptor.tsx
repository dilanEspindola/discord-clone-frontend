import axios, { type AxiosError, type AxiosResponse } from "axios";
import { errorValidation } from "@/utils/validation-errors";

export const axiosInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
});

export const AxiosInterceptor = () => {
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log("resp", response);
      return response;
    },
    async (error: AxiosError) => {
      console.log("oops", "error");
      errorValidation(error.message, Number(error.status));
      return await Promise.reject(error);
    }
  );
};
