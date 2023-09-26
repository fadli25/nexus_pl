import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function pay() {
  const router = useRouter();
  return (
    <div className="w-full md:w-[80vw] py-[5vw] float-right">
      <Head>
        <title>Pay Staffs</title>
      </Head>
      <div className="w-[90vw] md:w-[60vw] mx-auto">
        <div className="text-black text-[4vw] md:text-[2.4vw]">My Projects</div>
        <div
          onClick={() => router.push("/payment/pay/info")}
          className="my-[3vw] md:my-[2vw] rounded-[0.5vw] bg-black flex justify-between items-center p-[3vw] text-[5vw] md:text-[3vw] font-semibold"
        >
          <div>Bone shamans</div>
          <div>
            <div className="text-[#00ff47]">20</div>
            <div className="text-[3vw] md:text-[1.5vw]">Staffs</div>
          </div>
        </div>
        <div
          onClick={() => router.push("/payment/pay/info")}
          className="my-[3vw] md:my-[2vw] rounded-[0.5vw] bg-black flex justify-between items-center p-[3vw] text-[5vw] md:text-[3vw] font-semibold"
        >
          <div>Aptos Monkey</div>
          <div>
            <div className="text-[#00ff47]">15</div>
            <div className="text-[3vw] md:text-[1.5vw]">Staffs</div>
          </div>
        </div>
      </div>
    </div>
  );
}
