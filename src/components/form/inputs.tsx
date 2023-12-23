"use client";

interface Props {
  register: any;
  type: "text" | "password" | "date" | "datetime-local";
}

export const Input = ({ register, type }: Props) => {
  return (
    <input
      type={type}
      {...register}
      className="text-white bg-[#000] p-2 outline-none rounded-sm inputAutoFill"
    />
  );
};
