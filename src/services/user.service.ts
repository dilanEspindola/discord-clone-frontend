import type { IDataRegister } from "@/app/register/utils";
import { axiosInstance } from "@/interceptors";
import type { ILogin, ILoginResponse } from '@/interfaces'

export const registerUser = async (user: IDataRegister) => {
  const res = await axiosInstance.post("/auth/signup", user)
  const data = await res.data;

  return data;
};

export const loginUser = async (login: ILogin): Promise<ILoginResponse> => {
  const res = await axiosInstance.post("/auth/login", login)
  const data = await res.data;

  return data;
}
