import { Button } from "@mui/material";
// import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMetaplex } from "../MetaplexProvider/useMetaplex";
import CardMintBox from "./CardMintBox";

export default function MintBox({ mint, mintButton, keys }: any) {

  // const [tokens, setTokens] = useState<any[]>()

  // const anchorWallet = useAnchorWallet();
  // const { connection } = useConnection();
  // const wallet = useWallet()

  // const { metaplex } = useMetaplex();

  // const fetchNfts = async () => {
  //   try {
  //     const token = await (metaplex as any)
  //       .nfts()
  //       .fetchAllDigitalAssetWithTokenByOwner({ owner: (metaplex as any).identity().publicKey });

  //     console.log(token);

  //     setTokens([]);

  //   } catch (e) {
  //     console.log(e);
  //   }
  // };



  // useEffect(() => {
  //   if (!anchorWallet) return;

  //   // fetchNfts();
  // }, [anchorWallet])


  return (
    <CardMintBox >
      <div className="mt-[5vw] md:mt-[2vw] flex flex-col gap-y-[8vw] md:gap-y-0 md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-y-[3vw] md:gap-y-0 gap-x-[2vw] items-center">
          <div className="w-full flex justify-center">
            <Image
              className="w-[90vw] h-[70vw] md:h-[17vw] md:w-[17vw] object-cover object-center rounded-lg"
              src={"https://shdw-drive.genesysgo.net/Exm2RqgptPTAmLGdg8wVb3tyZtdXMQSUcNiEqxiCifUT/WhatsApp%20Image%202024-04-26%20at%2020.41.35.jpeg"}
              width={1000}
              height={200}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="text-[5vw] md:text-[3vw] font-semibold">
            WL KEY <div className="hidden md:block"></div>
            X {keys}
          </div>
        </div>
        <div>
          {mint ?
            <Button
              onClick={() => mintButton()}
              className="!text-black !bg-[#00ff47] !rounded-[0.6vw] !text-[6vw] md:!text-[2vw] !px-[8vw] md:!px-[4vw] !font-semibold "
              style={{ textTransform: "none" }}
            >
              Mint
            </Button>
            :
            <Button
              className="!text-black !bg-[#f73838] !rounded-[0.6vw] !text-[6vw] md:!text-[2vw] !px-[8vw] md:!px-[4vw] !font-semibold "
              style={{ textTransform: "none" }}
            >
              Not Eligible!
            </Button>
          }
        </div>
      </div>
    </CardMintBox>
  );
}
