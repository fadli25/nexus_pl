import BurnCard from "@/components/mint/BurnCard";
import Card from "@/components/mint/Card";
import CardMintBox from "@/components/mint/CardMintBox";
import DragonSpin from "@/components/mint/DragonSpin";
import FloorBox from "@/components/mint/FloorBox";
import Head from "next/head";
import React from "react";

const data = [1, 2, 3, 4, 5, 6, 7];

export default function Floor() {
  return (
    <div className="w-full float-right md:w-[84%] p-[5vw] md:p-[3vw] bg-black">
      <Head>
        <title>Mint</title>
      </Head>
      <Card>
        <FloorBox FloorName={"Floor 1"} Name={"Public Floor"} />
        <div className="my-[8vw] md:my-[4vw] flex flex-col md:flex-row gap-y-[4vw] md:gap-y-0 justify-between items-center w-[90%] mx-auto">
          <div className="w-full md:w-[44%]">
            <DragonSpin
              Minted={50}
              Total_Mint={100}
              Width={50}
              Name={"Old Onces Won"}
            />
          </div>
          <div className="w-full md:w-[54%]">
            <DragonSpin
              Minted={200}
              Total_Mint={400}
              Width={50}
              Name={"WL Keys won"}
            />
          </div>
        </div>
        <CardMintBox>
          <div className="mt-[5vw] md:mt-[3vw] grid grid-cols-1 gap-y-[10vw] md:gap-y-[4vw] md:grid-cols-3">
            {data.map(() => (
              <BurnCard />
            ))}
          </div>
        </CardMintBox>
      </Card>
    </div>
  );
}
