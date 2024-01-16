import { Button } from "@mui/material";
import React, { useState } from "react";
import Message from "./Message";

export default function BurnCard() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="w-[65vw] md:w-[18vw] h-[65vw] md:h-[18vw] bg-white/50 rounded-[1vw] md:rounded-[0.6vw]"></div>
      <div className="mt-[3vw] md:mt-[1vw] flex justify-center">
        <Button
          className="!text-black !bg-[#00ff47] !rounded-[0.6vw] !text-[4vw] md:!text-[1.2vw] !px-[6vw] md:!px-[3vw] !font-semibold "
          style={{ textTransform: "none" }}
          onClick={() => setShowMessage(true)}
        >
          Burn
        </Button>
      </div>
      {showMessage && <Message />}
    </div>
  );
}
