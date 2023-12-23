/* eslint-disable @typescript-eslint/consistent-type-assertions */
"use client";

import Select, {
  type StylesConfig,
  type CSSObjectWithLabel,
} from "react-select";

interface Props {
  opts: any[];
  instanceId: number;
  onChange: any;
  value: any;
  placeholder: string;
}

const customStyles: StylesConfig = {
  control: (styles) => {
    return {
      ...styles,
      background: "black",
      border: "none",
      outline: "none",
      color: "white",
    } as CSSObjectWithLabel;
  },
  menuList: () => ({
    background: "#23272a",
    padding: "10px",
    maxHeight: "200px",
    overflow: "auto",
  }),
  option: (base, state) => {
    return {
      ...base,
      color: "white",
      ":hover": { background: "#2c2f33" },
    } as CSSObjectWithLabel;
  },
  singleValue: (base) => {
    return {
      ...base,
      background: "black",
      border: "none",
      outline: "none",
      color: "white",
    } as CSSObjectWithLabel;
  },
  menu: (base) => {
    return {
      ...base,
      display: "flex",
      flexDirection: "column",
    } as CSSObjectWithLabel;
  },
};

export const SelectComponent = ({
  opts,
  instanceId,
  onChange,
  value,
  placeholder,
}: Props) => {
  return (
    <Select
      options={opts}
      instanceId={instanceId}
      styles={customStyles}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
