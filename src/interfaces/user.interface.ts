interface ISelectOptions {
  value: string | number;
  label: string;
}

export interface Register {
  email: string;
  nameShowing: string;
  username: string;
  password: string;
  month: ISelectOptions;
  day: ISelectOptions;
  year: ISelectOptions;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  user: IUser;
  accesToken: string;
}

export interface IUser {
  birthdayDate: Date;
  createdAt: Date;
  email: string;
  id: string;
  password: string;
  username: string;
  verified: boolean;
  visible_name: string;
}
