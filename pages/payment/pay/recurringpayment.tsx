import { Button } from "@mui/material";
import Head from "next/head";
import React from "react";

export default function recurringpayment() {
  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Payment | Recurring Payment</title>
      </Head>
      <div className="text-center underline text-[3vw] font-semibold text-black">
        Recurring Payment
      </div>
      <div className="mt-[3vw] w-[90vw] md:w-[60vw] mx-auto text-[2.5vw] md:text-[1.2vw] text-black font-semibold">
        <div className="my-[0.5vw] ">Asset to pay</div>
        <div className="w-full bg-black text-white font-semibold rounded-[1vw] flex justify-between items-center px-[3.4vw] md:px-[2.4vw] py-[3.8vw] md:py-[3.4vw] text-[5vw] md:text-[2.4vw]">
          <div className="flex items-center gap-x-[1vw]">
            <div className="w-[20vw] md:w-[10vw] h-[20vw] md:h-[10vw] rounded-full bg-white/50"></div>
            <div>
              <div>Marble</div>
              <div>200</div>
            </div>
          </div>
          <div>$3500</div>
        </div>
        <div className="mt-[3vw]">
          <div className="my-[0.5vw]">Stream Name</div>
          <input
            type="text"
            className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all"
          />
        </div>
        <div className="mt-[3vw]">
          <div className="my-[0.5vw]">Input recipient address</div>
          <input
            type="text"
            className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all"
          />
        </div>
        <div className="mt-[3vw]">
          <div className="my-[0.5vw]">Recipient Profile</div>
          <input
            type="text"
            className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all"
          />
        </div>
        <div className="mt-[5vw]">
          <div className="my-[0.5vw]">Payment Rate</div>
          <div
            // type="text"
            className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all my-[0.4vw]"
          >
            Token
          </div>
          <div
            // type="text"
            className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all my-[0.4vw]"
          >
            Per month
          </div>
          <div
            // type="text"
            className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all my-[0.4vw]"
          >
            Amount to Stream
          </div>
        </div>
        <div className="mt-[6vw]">
          <div className="my-[0.5vw]">Send on</div>
          <input
            type="text"
            className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all"
          />
        </div>
      </div>
      <div className="mt-[4vw] flex justify-center">
        <Button
          variant="contained"
          className="!text-[3vw] md:!text-[1.2vw] !rounded-full !normal-case !text-black !px-[4vw] md:!px-[3vw] !py-[1vw] md:!py-[0.6vw] !bg-[#00ff47] hover:!bg-[#00ff48ed]"
        >
          Apporve in wallet
        </Button>
      </div>
    </div>
  );
}
