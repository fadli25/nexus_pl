import Head from "next/head";
import React from "react";

export default function mynotification() {
  return (
    <div className="w-full md:w-[80vw] float-right py-[4vw]">
      <Head>
        <title>My Notification</title>
      </Head>
      <div className="w-[65vw] mx-auto flex flex-col gap-y-[2vw]">
        {/*  */}
        <div className="w-full rounded-[1.4vw] bg-black h-[7vw] px-[2vw] text-[1.4vw] text-white flex justify-between items-center">
          <div>
            <span className="font-semibold text-[1.6vw] text-[#00ff47]">
              Congratulations
            </span>{" "}
            you have been hired to{" "}
            <span className="font-semibold">Bone Shamans</span>
            <span className="text-[1vw]"> - click to view</span>
          </div>
          <div className="text-white/50 font-semibold text-[1.1vw]">
            -22 hours ago
          </div>
        </div>
        {/*  */}
        <div className="w-full rounded-[1.4vw] bg-black h-[7vw] px-[2vw] text-[1.4vw] text-white flex justify-between items-center">
          <div>
            <span className="font-semibold text-[1.6vw] text-[#FF2D2D]">
              Unfortunately
            </span>{" "}
            you have been hired to{" "}
            <span className="font-semibold">Bone Shamans</span>
            <span className="text-[1vw]"> - click to view</span>
          </div>
          <div className="text-white/50 font-semibold text-[1.1vw]">
            -22 hours ago
          </div>
        </div>
        {/*  */}
        <div className="w-full rounded-[1.4vw] bg-black h-[7vw] px-[2vw] text-[1.4vw] text-white flex justify-between items-center">
          <div>
            Your application to{" "}
            <span className="font-semibold">Bone Shamans</span>
            <span> has been rejected</span>
            <span className="text-[1vw]"> - click to view</span>
          </div>
          <div className="text-white/50 font-semibold text-[1.1vw]">
            -22 hours ago
          </div>
        </div>
        {/*  */}
        <div className="w-full rounded-[1.4vw] border-[0.15vw] border-black h-[7vw] px-[2vw] text-[1.4vw] text-black flex justify-between items-center">
          <div>
            Your application to{" "}
            <span className="font-semibold">Bone Shamans</span>
            <span> has been rejected</span>
            <span className="text-[1vw]"> - click to view</span>
          </div>
          <div className="text-black/50 font-semibold text-[1.1vw]">
            -22 hours ago
          </div>
        </div>
        {/*  */}
        <div className="w-full rounded-[1.4vw] border-[0.15vw] border-black h-[7vw] px-[2vw] text-[1.4vw] text-black flex justify-between items-center">
          <div>
            Your application to{" "}
            <span className="font-semibold">Bone Shamans</span>
            <span> has been rejected</span>
            <span className="text-[1vw]"> - click to view</span>
          </div>
          <div className="text-black/50 font-semibold text-[1.1vw]">
            -22 hours ago
          </div>
        </div>
      </div>
    </div>
  );
}
