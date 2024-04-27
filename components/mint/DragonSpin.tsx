import React from "react";
import DragonImg from "./dragon.png";
import Image from "next/image";

export default function DragonSpin({ Name, Total_Mint, Minted, Width }: any) {
  return (
    <div className="w-full flex items-center">
      <div>
        <Image
          src={DragonImg}
          width={2000}
          height={200}
          className="w-[30vw] md:w-[14vw]"
          alt=""
        />
      </div>
      <div className="w-full -mb-[0.4vw] -ml-[2vw] flex-col gap-y-[0.6vw] text-[4vw] md:text-[1.5vw]">
        <div className="flex justify-end font-semibold">
          {Minted}/{Total_Mint}
        </div>
        <div className="w-full rounded-[0.4vw] rounded-l-none border border-[#BFE6FF] overflow-hidden">
          <div
            className={`p-[2vw] md:p-[0.9vw] bg-gradient-to-r from-[#BFE6FF] to-[#225472]`}
            style={{ width: `${Width}%` }}
          ></div>
        </div>
        <div className="text-[4.4vw] md:text-[2vw]">{Name}</div>
      </div>
    </div>
  );
}
