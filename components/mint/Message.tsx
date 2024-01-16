import { Button } from "@mui/material";
import React, { useState } from "react";

export default function Message() {
  const [showMessage, setShowMessage] = useState(true);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/10 grid place-items-center backdrop-blur-sm z-[20000] text-white ${
        !showMessage && "hidden"
      }`}
    >
      <div
        className="absolute w-full h-full top-0 left-0"
        onClick={() => setShowMessage(false)}
      ></div>
      <div className="w-full md:w-[40vw] rounded-[0.5vw] px-[3vw] md:px-[1vw] flex flex-col items-center gap-y-[4vw] md:gap-y-[1vw] py-[10vw] md:py-[3vw] bg-black">
        <div className="w-[70vw] md:w-[20vw] h-[70vw]  md:h-[20vw] bg-white/60 rounded-[1vw] md:rounded-[0.2vw]"></div>
        <div className="text-[3vw] md:text-[1vw]">
          Congratulations, you minted an NFT
        </div>
        <div className="text-[6vw] md:text-[2vw]">
          Bon Shamans (The Old Ones){" "}
          <span className="text-[#00ff47]">#3124</span>
        </div>
        <br />
        <div>
          <Button
            className="!text-black !bg-white/90 !py-[2vw] md:!py-[0.6vw] !text-[4vw] md:!text-[1vw] !font-semibold !w-[70vw] md:!w-[20vw]"
            style={{ textTransform: "none" }}
            onClick={() => setShowMessage(false)}
          >
            Trade on Tensor
          </Button>
        </div>
        <div>
          <Button
            onClick={() => setShowMessage(false)}
            className="!text-black !bg-[#00ff47] !py-[2vw] md:!py-[0.6vw] !text-[4vw] md:!text-[1vw] !font-semibold !w-[70vw] md:!w-[20vw]"
            style={{ textTransform: "none" }}
          >
            Find Web3 Jobs hiring now!!!
          </Button>
        </div>
      </div>
    </div>
  );
}
