import Card from "@/components/mint/Card";
import DragonSpin from "@/components/mint/DragonSpin";
import FloorBox from "@/components/mint/FloorBox";
import MintBox from "@/components/mint/MintBox";
import Head from "next/head";
import React from "react";

export default function index() {
  return (
    <div className="w-full float-right md:w-[84%] p-[5vw] md:p-[3vw] bg-black">
      <Head>
        <title>Mint</title>
      </Head>
      <Card>
        <FloorBox FloorName={"Floor 2"} Name={"Whitelist Floor"} />
        <div className="my-[8vw] md:my-[4vw] w-full md:w-[80%] mx-auto">
          <DragonSpin
            Name={"Old Onces Minted"}
            Width={80}
            Minted={1200}
            Total_Mint={1900}
          />
        </div>
        <MintBox />
      </Card>
    </div>
  );
}
