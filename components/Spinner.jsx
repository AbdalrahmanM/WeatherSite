import React from "react";
import spinner from "@/public/spinner.gif";
import Image from "next/image";

export const Spinner = () => {
  return (
    <>
      <Image
        alt="loading data"
        src={spinner}
        className="w-[200px] m-auto block"
      />
    </>
  );
};
