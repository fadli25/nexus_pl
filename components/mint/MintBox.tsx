import { Button } from "@mui/material";
import React from "react";
import CardMintBox from "./CardMintBox";

export default function MintBox() {
  return (
    <CardMintBox>
      <div className="mt-[5vw] md:mt-[2vw] flex flex-col gap-y-[8vw] md:gap-y-0 md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-y-[3vw] md:gap-y-0 gap-x-[2vw] items-center">
          <div className="w-[60vw] md:w-[18vw] h-[60vw] md:h-[18vw] bg-white/50 rounded-[0.6vw]"></div>
          <div className="text-[5vw] md:text-[3vw] font-semibold">
            WL KEY <div className="hidden md:block"></div>
            x2
          </div>
        </div>
        <div>
          <Button
            className="!text-black !bg-[#00ff47] !rounded-[0.6vw] !text-[6vw] md:!text-[2vw] !px-[8vw] md:!px-[4vw] !font-semibold "
            style={{ textTransform: "none" }}
          >
            Mint
          </Button>
        </div>
      </div>
    </CardMintBox>
  );
}
