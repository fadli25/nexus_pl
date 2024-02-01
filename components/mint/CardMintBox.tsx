import React from "react";

export default function CardMintBox({ children }: any) {
  return (
    <div className="w-full border-[0.12vw] border-white rounded-[0.4vw] p-[5vw] md:p-[2vw]">
      <div className="flex justify-end">
        <div className="text-[3vw] md:text-[1.4vw]">
          <span>24 hr | </span>
          <span>14 min | </span>
          <span>13sec</span>
        </div>
      </div>
      {children}
    </div>
  );
}
