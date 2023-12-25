"use client";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { ButtonForm, Input, SelectComponent, Label } from "@/components/form";

import { MONTHS } from "@/utils";
import { PUBLIC_ROUTES } from "@/routes";

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

interface State {
  value: number;
  label: string;
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Register>({});
  const [years, setYears] = useState<State[]>();
  const [days, setDays] = useState<State[]>();

  const getYears = useMemo(
    () => () => {
      const currYear = new Date().getFullYear();
      const years = Array.from({ length: currYear - 1929 }, (_, index) => {
        const yearValue = currYear - index;
        return {
          value: yearValue,
          label: yearValue.toString(),
        };
      });

      return years;
    },
    []
  );

  const getDays = useMemo(
    () => () => {
      const startDay = 1;
      const days = Array.from({ length: 31 }, (_, index) => {
        const dayValue = startDay + index;
        return {
          value: dayValue,
          label: dayValue.toLocaleString(),
        };
      });
      return days;
    },
    []
  );

  useEffect(() => {
    setYears(getYears());
    setDays(getDays());
  }, []);

  const onSubmit = (data: Register) => {
    console.log(data.year);
  };

  // console.log(errors);

  return (
    <div className="self-start w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 text-gray-300">
          <Label
            error={errors.email ? errors.email.message : ""}
            labelName="Email"
          />
          <Input
            register={{
              ...register("email", { required: "required" }),
            }}
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-300">
          <Label
            error={errors.nameShowing ? errors.nameShowing.message : ""}
            labelName="Name to display"
          />
          <Input
            type="text"
            register={{
              ...register("nameShowing", {
                required: "required",
              }),
            }}
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-300">
          <Label
            error={errors.username ? errors.username.message : ""}
            labelName="Username"
          />
          <Input
            register={{
              ...register("username", { required: "required" }),
            }}
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-300">
          <Label
            error={errors.password ? errors.password.message : ""}
            labelName="Password"
          />
          <Input
            register={{
              ...register("password", {
                required: "required",
                minLength: {
                  value: 6,
                  message: "must be 6 characters of length",
                },
              }),
            }}
            type="password"
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-300">
          <Label
            error={
              errors.day?.message ??
              errors.month?.message ??
              errors.year?.message
            }
            labelName="Date of birthday"
          />
          <div className="grid grid-cols-3 space-x-3">
            <Controller
              control={control}
              name="month"
              rules={{ required: "required" }}
              render={({ field: { onChange, value } }) => (
                <SelectComponent
                  opts={MONTHS}
                  instanceId={1}
                  onChange={onChange}
                  value={value}
                  placeholder="month"
                />
              )}
            />
            <Controller
              control={control}
              name="day"
              rules={{ required: "required" }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => {
                console.log(errors);
                return (
                  <SelectComponent
                    opts={days ?? []}
                    instanceId={2}
                    onChange={onChange}
                    value={value}
                    placeholder="day"
                  />
                );
              }}
            />
            <Controller
              control={control}
              name="year"
              rules={{ required: "required" }}
              render={({ field: { onChange, value } }) => (
                <SelectComponent
                  opts={years ?? []}
                  instanceId={3}
                  onChange={onChange}
                  value={value}
                  placeholder="year"
                />
              )}
            />
          </div>
        </div>

        <ButtonForm text="Continue" />
      </form>

      <Link
        className="text-blue-400 mt-6 inline-flex"
        href={PUBLIC_ROUTES.lOGIN}
      >
        Already have an account?
      </Link>
    </div>
  );
};
