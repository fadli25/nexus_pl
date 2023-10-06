import { Button } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function incoming() {
  const data = [
    {
      status: "running",
    },
    {
      status: "ended",
    },
  ];

  const router = useRouter();

  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Incoming Payment Streams</title>
      </Head>
      <div className="w-[90vw] md:w-[60vw] mx-auto flex flex-col gap-y-[4vw] md:gap-y-[2vw]">
        {data.map((el, i) => (
          <CardIformation status={el.status} key={i} />
        ))}
      </div>
    </div>
  );
}

type CardIformationTypes = {
  key: number;
  status: string;
  onClick?: () => void;
};

export function CardIformation({ key, status, onClick }: CardIformationTypes) {
  const [showInformation, setShowInformation] = useState(false);
  return (
    <div key={key}>
      <motion.div
        whileTap={{ scale: 0.96 }}
        onClick={() => setShowInformation(!showInformation)}
        className="w-full cursor-pointer bg-black rounded-[1vw] md:rounded-[0.6vw] text-white px-[3vw] md:px-[2vw] py-[1.2vw] md:py-[0.9vw] flex justify-between items-center"
      >
        <div className="leading-[7vw] md:leading-[3.3vw]">
          <div className="text-[3.3vw] md:text-[1.2vw] font-semibold">
            Bone Shamans
          </div>
          <div className="text-[6vw] md:text-[3.2vw] font-semibold">
            Salary Pay
          </div>
          <div className="text-[5vw] md:text-[2vw] text-[#00ff47]">
            $10 USDT / Day
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            className={`!text-[3vw] md:!text-[1vw] !normal-case !text-black !w-[22.5vw] md:!w-[10vw] !py-[0.8vw] md:!py-[0.4vw] ${
              status === "running"
                ? "!bg-[#00ff47]"
                : "!bg-[#FF2D2D] !text-white"
            }`}
          >
            {status === "running" ? "Runnig" : "Ended"}
          </Button>
        </div>
      </motion.div>
      {showInformation && (
        <div className="w-[90%] mx-auto border-black border-[0.16vw] rounded-b-[0.4vw] border-t-0 pt-[1vw] px-[2vw] text-black text-[3vw] md:text-[1.4vw]">
          <div>Funds available to withdraw now</div>
          <div className="flex items-center gap-x-[1vw]">
            <div className="text-[5vw] md:text-[2.5vw] font-semibold">
              120.5 USDT
            </div>
            <div>
              <Button
                variant="contained"
                className={`!text-[3vw] md:!text-[1vw] !normal-case !text-black !w-[22.5vw] md:!w-[10vw] !py-[0.8vw] md:!py-[0.4vw] !bg-[#00ff47]`}
              >
                Withdraws funds
              </Button>
            </div>
          </div>
          <div className="text-[5vw] md:text-[2.5vw] font-semibold mt-[1vw]">
            Details Activity
          </div>
          <table className="table-fixed text-[2.6vw] md:text-[1vw] leading-[5vw] md:leading-[2.6vw] mt-[0.7vw] md:mt-[0.3vw]">
            <thead>
              <tr>
                <th></th>
                <th className="px-[1vw]"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Started on:</td>
                <td className="px-[3vw] font-semibold">
                  Man, Jan 10 2022, 09:38
                </td>
              </tr>
              <tr>
                <td>Receiving from</td>
                <td className="px-[3vw] font-semibold">9KYCrkB4...Wp74uhC5</td>
              </tr>
              <tr>
                <td>Payment rate:</td>
                <td className="px-[3vw] font-semibold">$10 USDT per day</td>
              </tr>
              <tr>
                <td>Reserved allocation:</td>
                <td className="px-[3vw] font-semibold">$1500 USDT</td>
              </tr>
              <tr>
                <td>Funds left in account:</td>
                <td className="px-[3vw] font-semibold">$1100 USDT</td>
              </tr>
              <tr>
                <td>Stream id:</td>
                <td className="px-[3vw] font-semibold">Ej6QX8HE...2aQ40JNd</td>
              </tr>
            </tbody>
          </table>
          ​
        </div>
      )}
    </div>
  );
}
