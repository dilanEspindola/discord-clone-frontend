import axios, { type AxiosError, type AxiosResponse } from "axios";
import { errorValidation } from "@/utils/validation-errors";

export const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      errorValidation(error.message, Number(error.status));
      return Promise.reject(error);
    }
  );
};
