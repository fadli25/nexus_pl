import Image from "next/image";
import React from "react";
import imageTower from "@/public/tower.png";

export default function Tower() {
  return (
    <div className="relative pt-[6vw] overflow-hidden">
      <div className="w-[90vw] md:w-[58vw] mx-auto tower h-[38vw] md:h-[22vw] flex justify-between items-center">
        <div>
          <Image
            src={imageTower}
            width={9000}
            height={2000}
            alt=""
            className="w-[40vw] md:w-[22vw] -mb-[4vw]"
          />
        </div>
        <div className="text-[4vw] md:text-[2.4vw] font-semibold text-[#0FA] w-[50vw] md:w-[30vw] text-center mr-[2vw]">
          Burn your Rug NFTs for a reward here
        </div>
      </div>
    </div>
  );
}
