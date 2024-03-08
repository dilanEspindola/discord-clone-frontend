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
