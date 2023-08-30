import Head from "next/head";
import React from "react";
import { BiSolidShow } from "react-icons/bi";

export default function profile() {
  return (
    <div className="w-[80vw] float-right">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="w-[55vw] mx-auto pt-[5vw] text-black">
        <div className="fontPopSemibold text-[3vw]">
          Zetsu | The Shaman King
        </div>
        <div className="flex justify-between mt-[1vw] items-center">
          <div className="flex gap-x-[3vw] text-[1.9vw] font-semibold">
            <div className="text-[#00ff47]">BOOST PROFILE</div>
            <div>Share</div>
            <div>Export PDF</div>
          </div>
          <div className="text-[3vw]">
            <BiSolidShow />
          </div>
        </div>
      </div>
    </div>
  );
}
