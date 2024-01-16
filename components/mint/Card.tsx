import React, { ReactNode } from "react";
import logo from "@/public/logof.png";
import Image from "next/image";

export default function Card({ children }: any) {
  return (
    <div className="w-full border-white border-[0.16vw] rounded-[0.6vw] p-[5vw] md:p-[2vw]">
      {children}
      <Image
        src={logo}
        width={9000}
        height={200}
        className="w-[38vw] md:w-[18vw] mt-[8vw] md:mt-[5vw]"
        alt=""
      />
    </div>
  );
}
