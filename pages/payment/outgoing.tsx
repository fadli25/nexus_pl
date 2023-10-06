import { Button } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function outgoing() {
  const data = [
    {
      status: "running",
    },
    {
      status: "running",
    },
    {
      status: "running",
    },
    {
      status: "running",
    },
  ];
  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Outgoing Payment Streams</title>
      </Head>
      <div className="w-[90vw] md:w-[70vw] mx-auto flex flex-col gap-y-[4vw] md:gap-y-[2vw]">
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
  return (
    <div key={key}>
      <motion.div
        whileTap={{ scale: 0.96 }}
        className="w-full cursor-pointer bg-black rounded-[1vw] md:rounded-[0.6vw] text-white px-[3vw] md:px-[2vw] py-[1.2vw] md:py-[0.9vw] flex justify-between items-center"
      >
        <div className="flex items-center gap-x-[2vw] md:gap-x-[1vw]">
          <div className="w-[15vw] md:w-[8vw] h-[15vw] md:h-[8vw] bg-white/60 rounded-full"></div>
          <div className="leading-[6vw] md:leading-[3.3vw]">
            <div className="text-[2.3vw] md:text-[1.2vw] font-semibold">
              Bone Shamans
            </div>
            <div className="text-[5vw] md:text-[3.2vw] font-semibold">
              Salary Pay
            </div>
            <div className="text-[4vw] md:text-[2vw] text-[#00ff47]">
              $10 USDT / Day
            </div>
          </div>
        </div>
        <div>
          <Button
            variant="contained"
            className={`!text-[2vw] md:!text-[1vw] !normal-case !text-black !w-[20vw] md:!w-[10vw] !py-[0.8vw] md:!py-[0.4vw] ${
              status === "running"
                ? "!bg-[#00ff47]"
                : "!bg-[#FF2D2D] !text-white"
            }`}
          >
            {status === "running" ? "Runnig" : "Ended"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
