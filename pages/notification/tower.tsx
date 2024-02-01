import Head from "next/head";
import React from "react";

export default function tower() {
  return (
    <div className="w-full md:w-[84vw] float-right py-[5vw]">
      <Head>
        <title>Rebirth Tower Notification</title>
      </Head>
      <div className="w-[60vw] mx-auto h-[8vw] mb-[3vw] rounded-[1.5vw] border-[0.2vw] border-black"></div>
      <div className="w-[60vw] mx-auto h-[8vw] mb-[3vw] rounded-[1.5vw] border-[0.2vw] border-black"></div>
      <div className="w-[60vw] mx-auto h-[8vw] mb-[3vw] rounded-[1.5vw] border-[0.2vw] border-black"></div>
    </div>
  );
}
