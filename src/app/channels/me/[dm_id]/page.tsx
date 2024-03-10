"use client";
import { useParams } from "next/navigation";

const page = () => {
  const { dm_id } = useParams();

  // console.log(dm_id);

  return <h1>{dm_id}</h1>;
};

export default page;
