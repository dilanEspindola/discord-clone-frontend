"use client";
import { useForm, Controller } from "react-hook-form";
import { ButtonForm, Input, SelectComponent } from "@/components/form";
import { useEffect, useState, useMemo } from "react";

export interface Register {
  email: string;
  fullname: string;
  username: string;
  password: string;
  month: string;
  day: string;
  year: string;
}

export const MONTHS = [
  {
    value: "January",
    label: "January",
  },
  {
    value: "February",
    label: "February",
  },
  {
    value: "March",
    label: "March",
  },
  {
    value: "April",
    label: "April",
  },
  {
    value: "May",
    label: "May",
  },
  {
    value: "June",
    label: "June",
  },
  {
    value: "July",
    label: "July",
  },
  {
    value: "August",
    label: "August",
  },
  {
    value: "September",
    label: "September",
  },
  {
    value: "October",
    label: "October",
  },
  {
    value: "November",
    label: "November",
  },
  {
    value: "December",
    label: "December",
  },
];

interface State {
  value: number;
  label: string;
}

export const RegisterForm = () => {
  const { register, handleSubmit, control } = useForm<Register>({});
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

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="self-start w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 text-gray-300">
          <label htmlFor="">Email address *</label>
          <Input
            register={{
              ...register("email", { required: "Email is required" }),
            }}
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-300">
          <label htmlFor="">Fullname *</label>
          <Input
            type="text"
            register={{
              ...register("fullname", { required: "Fullname is required" }),
            }}
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-300">
          <label htmlFor="">Username *</label>
          <Input
            register={{
              ...register("username", { required: "Username is required" }),
            }}
            type="text"
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-300">
          <label htmlFor="">Password *</label>
          <Input
            register={{
              ...register("password", { required: "Password is required" }),
            }}
            type="password"
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-300">
          <label htmlFor="">date of birth *</label>
          <div className="grid grid-cols-3 space-x-3">
            <Controller
              control={control}
              name="month"
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
              render={({ field: { onChange, value } }) => (
                <SelectComponent
                  opts={days ?? []}
                  instanceId={2}
                  onChange={onChange}
                  value={value}
                  placeholder="day"
                />
              )}
            />
            <Controller
              control={control}
              name="year"
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

      <p className="text-blue-400 mt-6">Already have an account?</p>
    </div>
  );
};
