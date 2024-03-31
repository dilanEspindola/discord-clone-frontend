import React from "react";
import { ServerList } from "./components/servers";

interface Props {
  children: React.ReactNode;
}

const ChannelsLayout = ({ children }: Props) => {
  return (
    <div className="bg-black-2 h-screen max-h-screen grid grid-cols-[4%_96%]">
      <ServerList />
      <main className=" text-white">{children}</main>
    </div>
  );
};

export default ChannelsLayout;
