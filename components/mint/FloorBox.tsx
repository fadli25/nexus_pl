import React from "react";
import floorimg from "@/public/floorimg.png";
import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import Image from "next/image";

export default function FloorBox({ FloorName, Name }: any) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-[5vw] md:text-[2vw]">
          <span>{FloorName} (</span>
          <span className="text-[#00ff47]">{Name}</span>
          <span>)</span>
        </div>
        <div className="text-[3.5vw] md:text-[1.3vw] italic">live</div>
      </div>
      <div className="mt-[4vw] md:mt-[2vw] flex flex-col gap-y-[3vw] md:gap-y-0 md:flex-row justify-between">
        <div className="w-full md:w-[38%]">
          <Image
            src={floorimg}
            width={5000}
            height={200}
            className="rounded-[0.4vw]"
            alt=""
          />
        </div>
        <div className="w-full md:w-[61%] border-white border-[0.1vw] rounded-[0.4vw] p-[5vw] md:p-[1vw] text-white">
          <div className="text-[4vw] md:text-[1.5vw]">Traits</div>
          <div className="flex justify-between flex-col md:flex-row gap-y-[5vw] md:gap-y-0 items-center mt-[3vw] md:mt-[0.4vw] w-full gap-x-[0.7vw]">
            <div className="w-[50vw] md:w-auto">
              <Image src={img3} width={1000} height={100} alt="" />
            </div>
            <div className="w-[50vw] md:w-auto">
              <Image src={img1} width={1000} height={100} alt="" />
            </div>
            <div className="w-[50vw] md:w-auto">
              <Image src={img2} width={1000} height={100} alt="" />
            </div>
          </div>
          <div className="mt-[4vw] md:mt-[0.5vw] w-full border border-white rounded-[0.4vw] p-[5vw] md:p-[1vw] text-[3vw] md:text-[0.8vw]">
            Legends Tell Tales Of A Mythical Realm. One That Exists Between The
            Borders Of Life And The Transcendent Beyond.
            <br />
            <br />
            The Say The Creatures Of That REalm Are Not Bound By The Flow Of
            Time Nor The Touch Of Mortality.
            <br />
            <br />
            Creatures As Ancient As Age And Magic, And Unchanged By The
            Millennia. They Are Referred To Across The Living And Undying REalms
            As The Old Ones.
          </div>
        </div>
      </div>
    </div>
  );
}
