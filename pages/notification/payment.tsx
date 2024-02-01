import Head from "next/head";
import React from "react";

export default function payment() {
  return (
    <div className="w-full md:w-[84vw] float-right py-[5vw]">
      <Head>
        <title>Payment Notifications</title>
      </Head>
      <div className="w-[70vw] mx-auto flex flex-col gap-y-[2vw]">
        {/*  */}
        <div className="w-full rounded-[1.4vw] bg-black h-[7vw] px-[2vw] text-[1.4vw] text-white flex justify-between items-center">
          <div>
            You have an icoming payment stream from{" "}
            <span className="font-semibold">Bone Shamans</span>
          </div>
          <div className="text-white/50 font-semibold text-[1.1vw]">
            -22 hours ago
          </div>
        </div>
        {/*  */}
        <div className="w-full rounded-[1.4vw] border-[0.15vw] border-black h-[7vw] px-[2vw] text-[1.4vw] text-black flex justify-between items-center">
          <div>
            You have an outgoing payment steam to{" "}
            <span className="font-semibold">Manay</span>
          </div>
          <div className="text-black/50 font-semibold text-[1.1vw]">
            -22 hours ago
          </div>
        </div>
      </div>
    </div>
  );
}
