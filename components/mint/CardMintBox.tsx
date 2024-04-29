import React from "react";
import CountdownTimer from "@/components/timer/CountdownTimer";

export default function CardMintBox({ children }: any) {
  return (
    <div className="w-full border-[0.12vw] border-white rounded-[0.4vw] p-[5vw] md:p-[2vw]">
      <div className="flex justify-end">
        <CountdownTimer />
      </div>
      {children}
    </div>
  );
}
