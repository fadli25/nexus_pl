import Head from "next/head";
import React, { useState } from "react";

export default function myprojectnotification() {
  const [showN, setShowN] = useState(false);
  const [showN1, setShowN1] = useState(false);
  return (
    <div className="w-full md:w-[84vw] float-right py-[5vw]">
      <Head>
        <title>My Project Notifications</title>
      </Head>
      <div className="w-[70vw] mx-auto">
        <div
          onClick={() => setShowN(!showN)}
          className="w-full h-[7vw] cursor-pointer rounded-[1.5vw] border-[0.2vw] border-black flex items-center justify-between px-[3vw] text-[2.4vw] text-black fontPopSemibold"
        >
          <div>Bone Shamans</div>
          <div className="text-[1.5vw]">4 new notifications</div>
        </div>
        {showN && (
          <div className="w-[60vw] flex flex-col gap-y-[1vw] mx-auto rounded-[1.4vw] rounded-t-none border-l-[0.2vw] border-r-[0.2vw] border-b-[0.2vw] py-[1vw] px-[2vw] border-black">
            <div className="w-full h-[6vw]  flex py-[1vw] px-[2vw] items-center bg-black text-[1.4vw] fontPopSemibold rounded-[1.4vw]">
              <div className="text-white">Zeus has joined the team</div>
              <div className="ml-[1vw] text-[1vw] text-white/50">
                - 22 hours ago
              </div>
            </div>
            <div className="w-full h-[6vw] gap-y-[1vw] flex py-[1vw] px-[2vw] items-center border-[0.14vw] border-black text-[1.4vw] fontPopSemibold rounded-[1.4vw]">
              <div className="text-black">Ben has left the team</div>
              <div className="ml-[1vw] text-[1vw] text-black/50">
                - 22 hours ago
              </div>
            </div>
            <div className="w-full h-[6vw] gap-y-[1vw] flex py-[1vw] px-[2vw] items-center border-[0.14vw] border-black text-[1.4vw] fontPopSemibold rounded-[1.4vw]">
              <div className="text-black">You have a new application</div>
              <div className="ml-[1vw] text-[1vw] text-black/50">
                - 22 hours ago
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[70vw] mx-auto mt-[4vw]">
        <div
          onClick={() => setShowN1(!showN1)}
          className="w-full h-[7vw] cursor-pointer rounded-[1.5vw] border-[0.2vw] border-black flex items-center justify-between px-[3vw] text-[2.4vw] text-black fontPopSemibold"
        >
          <div>The Old ones</div>
          <div className="text-[1.5vw]">4 new notifications</div>
        </div>
        {showN1 && (
          <div className="w-[60vw] flex flex-col gap-y-[1vw] mx-auto rounded-[1.4vw] rounded-t-none border-l-[0.2vw] border-r-[0.2vw] border-b-[0.2vw] py-[1vw] px-[2vw] border-black">
            <div className="w-full h-[6vw]  flex py-[1vw] px-[2vw] items-center bg-black text-[1.4vw] fontPopSemibold rounded-[1.4vw]">
              <div className="text-white">Zeus has joined the team</div>
              <div className="ml-[1vw] text-[1vw] text-white/50">
                - 22 hours ago
              </div>
            </div>
            <div className="w-full h-[6vw] gap-y-[1vw] flex py-[1vw] px-[2vw] items-center border-[0.14vw] border-black text-[1.4vw] fontPopSemibold rounded-[1.4vw]">
              <div className="text-black">Ben has left the team</div>
              <div className="ml-[1vw] text-[1vw] text-black/50">
                - 22 hours ago
              </div>
            </div>
            <div className="w-full h-[6vw] gap-y-[1vw] flex py-[1vw] px-[2vw] items-center border-[0.14vw] border-black text-[1.4vw] fontPopSemibold rounded-[1.4vw]">
              <div className="text-black">You have a new application</div>
              <div className="ml-[1vw] text-[1vw] text-black/50">
                - 22 hours ago
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
