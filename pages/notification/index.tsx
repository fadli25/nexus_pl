import Head from "next/head";
import React from "react";

export default function index() {
  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Notifications</title>
      </Head>
      <div className="w-[60vw] mx-auto h-[8vw] mb-[3vw] rounded-[1.5vw] border-[0.2vw] border-black"></div>
      <div className="w-[60vw] mx-auto h-[8vw] mb-[3vw] rounded-[1.5vw] border-[0.2vw] border-black"></div>
      <div className="w-[60vw] mx-auto h-[8vw] mb-[3vw] rounded-[1.5vw] border-[0.2vw] border-black"></div>
    </div>
  );
}
