import Head from "next/head";
import React from "react";

export default function project() {
  return (
    <div className="w-full md:w-[84vw] float-right py-[5vw] text-black">
      <Head>
        <title>Ongoing</title>
      </Head>
      <div className="w-[90vw] md:w-[70vw] mx-auto">
        <div className="w-full bg-black text-white rounded-[1.4vw] md:rounded-[1vw] h-[20vw] md:h-[17vw] px-[3vw] flex justify-between items-center">
          <div className="text[5.4vw] md:text-[3.4vw] fontPopSemibold">
            Bone Shamans
          </div>
          <div className="w-[15vw] md:w-[10vw] h-[15vw] md:h-[10vw] rounded-full bg-white/60"></div>
        </div>
        <div className="mt-[5vw]">
          <div className="text-[4vw] md:text-[1.6vw] fontPopSemibold">
            Project Description
          </div>
          <textarea
            className="w-full border-[0.12vw] focus:scale-[101%] focus:border-red-500 transition-all p-[2vw] border-black rounded-[1vw] mt-[0.8vw]"
            rows={10}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
