import type { IDataRegister } from "@/app/register/utils";

export const registerUser = async (user: IDataRegister) => {
  const res = await fetch("http://localhost:5000/api/auth/signup", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    method: "POST",
  });
  const data = await res.json();

  return data;
};
