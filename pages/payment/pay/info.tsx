import Head from "next/head";
import React from "react";
import { Button } from "@mui/material";

export default function info() {
  const data = [1, 2, 3];
  const data1 = [1];
  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Payemnt</title>
      </Head>
      <div className="w-[90vw] md:w-[70vw] mx-auto">
        <div className="text-[4vw] font-semibold md:text-[2vw] underline text-black">
          Core Team
        </div>
        <div className="flex flex-col gapy-y-[3vw] md:gap-y-[1.4vw]">
          {data1.map((el, i) => (
            <CardInforamtion key={i} />
          ))}
        </div>

        <div className="text-[4vw] font-semibold md:text-[2vw] mt-[6vw] underline text-black">
          Community moderators
        </div>
        <div className="flex flex-col gapy-y-[3vw] md:gap-y-[1.4vw]">
          {data.map((el, i) => (
            <CardInforamtion key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

type CardInforamtionTypes = {
  key: number;
};

export function CardInforamtion({ key }: CardInforamtionTypes) {
  return (
    <div key={key}>
      <div className="w-full mt-[2vw] bg-black rounded-[0.6vw] py-[2vw] px-[2.8vw] flex items-center justify-between">
        <div className="flex items-center gap-x-[3vw] md:gap-x-[2vw]">
          <div className=" w-[15vw] md:w-[8vw] h-[15vw] md:h-[8vw] bg-white/50 rounded-full"></div>
          <div>
            <div className="text-[5vw] md:text-[2.5vw] font-semibold">
              Manay
            </div>
            <div className="text-[3vw] md:text-[1.5vw]">Community Manager</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-[2vw] gap-x-[1vw] items-center">
          <Button
            className="!px-[2vw] md:!px-[3.4vw] !py-[0.6vw] !w-[28vw] md:!w-auto !bg-white !text-black !text-[2vw] md:!text-[1vw] !normal-case"
            variant="contained"
          >
            Onetime Payment
          </Button>
          <Button
            className="!px-[2vw] md:!px-[3.4vw] !py-[0.6vw] !w-[28vw] md:!w-auto !bg-white !text-black !text-[2vw] md:!text-[1vw] !normal-case"
            variant="contained"
          >
            Reccuring Payment
          </Button>
        </div>
      </div>
      <div className="w-[90%] text-black border-black border-[0.2vw] border-t-0 px-[3vw] py-[2vw] mx-auto flex justify-between items-center">
        <div>
          <div className="text-[2.5vw] md:text-[1.5vw]">Ongoing Stream</div>
          <div className="text-[3.5vw] md:text-[2.5vw] font-semibold">
            Wallet Address
          </div>
        </div>
        <div className="flex items-center gap-x-[2vw] md:gap-x-[1.4vw]">
          <div className="text-[3.5vw] md:text-[2.5vw] font-semibold">
            $100 / Month
          </div>
          <div className="flex flex-col gap-y-[2vw] md:gap-y-[0.8vw]">
            <Button
              variant="contained"
              className="!text-[1.8vw] md:!text-[0.8vw] !text-black !w-[18vw] md:!w-[9.4vw] !py-[0.6vw] !bg-[#00ff47]"
            >
              Edit pay rate
            </Button>
            <Button
              variant="contained"
              className="!text-[1.8vw] md:!text-[0.8vw] !font-semibold !text-white !w-[18vw] md:!w-[9.4vw] !py-[0.6vw] !bg-[#FF2D2D]"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
