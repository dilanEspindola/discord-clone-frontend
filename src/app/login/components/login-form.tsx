"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ButtonForm, Input, Label } from "@/components/form";
import type { ILogin } from "@/interfaces";
import { useForm } from "react-hook-form";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";
import { loginUser } from "@/services";

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogin>();

  const router = useRouter();

  const onSubmit = async (data: ILogin) => {
    try {
      const { accesToken, user } = await loginUser(data);
      router.push(PRIVATE_ROUTES.CHANNELS + "/@me");
      localStorage.setItem("accesToken", accesToken);
      console.log({ accesToken, user });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="self-start w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 text-gray-300">
          <Label
            error={errors.email ? errors.email.message : ""}
            labelName="Email"
          />
          <Input
            register={{ ...register("email", { required: "required" }) }}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 text-gray-300">
          <Label
            error={errors.password ? errors.password.message : ""}
            labelName="Password"
          />
          <Input
            register={{ ...register("password", { required: "required" }) }}
            type="password"
          />
        </div>
        <ButtonForm text="Login" />
      </form>
      <Link
        className="text-blue-400 mt-6 inline-flex"
        href={PUBLIC_ROUTES.REGISTER}
      >
        I do not have an account
      </Link>
    </div>
  );
};
