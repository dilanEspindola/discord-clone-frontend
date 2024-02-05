import type { Register } from "@/interfaces";

export type IDataRegister = {
  email: string;
  password: string;
  visible_name: string;
  username: string;
  birthdayDate: string;
};

export const registerDataParsed = (data: Register) => {
  const birthdayDateParsed = `${data.year.value}-${data.month.value}-${data.day.value}`;

  const registerData: IDataRegister = {
    email: data.email,
    password: data.password,
    visible_name: data.nameShowing,
    username: data.username,
    birthdayDate: birthdayDateParsed,
  };

  return registerData;
};
