import React from "react";
import logo from "@/public/landingpage/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function navbar() {
  const router = useRouter();
  return (
    <div className="border-none bg-[#0f0f0f] h-[16vh] md:h-auto flex items-center w-full">
      <div
        className="w-[57vw] px-[1vw] md:w-[25vw] py-[1.3vw]"
        onClick={() => router.push("/")}
      >
        <Image src={logo} width={9000} height={200} alt="" />
      </div>
    </div>
  );
}
