import { useMetaplex } from "@/components/MetaplexProvider/useMetaplex";
import Card from "@/components/mint/Card";
import DragonSpin from "@/components/mint/DragonSpin";
import FloorBox from "@/components/mint/FloorBox";
import MintBox from "@/components/mint/MintBox";
import { init_identifier } from "@/lib/mint/instruction/init_identifier";
import { mint } from "@/lib/mint/instruction/mint";
import { tokenGate } from "@/lib/mint/instruction/tokenGate";
import { fetchAllDigitalAssetWithTokenByOwner } from "@metaplex-foundation/mpl-token-metadata";
import { publicKey } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function index() {

  const [holder, setHolder] = useState<boolean>(false);


  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();
  const wallet = useWallet()

  // const { metaplex } = useMetaplex();

  const minting = async () => {
    try {

      const tx1 = await tokenGate(anchorWallet, connection, wallet);
      // const tx1 = await init_identifier(anchorWallet, connection);

      const tx2 = await mint(anchorWallet!, wallet, connection)

      tx1.add(tx2);

      wallet.sendTransaction(tx1, connection, { "preflightCommitment": "confirmed" });
      console.log("mint");
    } catch (e) {
      console.log(e);
    }
  }


  const fetchNfts = async () => {
    try {
      console.log("start")
      // if (!anchorWallet) return;
      // const token = await (metaplex as any)
      //   .nfts()
      //   .fetchAllDigitalAssetWithTokenByOwner({ owner: (metaplex as any).identity().publicKey });
      // .fetchAllDigitalAssetWithTokenByOwner({ owner: (metaplex as any).identity().publicKey });

      const umi = createUmi(connection)

      const pubkey = publicKey(anchorWallet!.publicKey.toBase58());

      const token = await fetchAllDigitalAssetWithTokenByOwner(umi, pubkey);

      console.log(token);

      token.map((tk) => {
        if (tk.publicKey == "NFWVPhAxDtZ9jdeZFzDr7AQAxepy2TThSYdAZcykaRg") {
          console.log(tk.mint.supply)
          setHolder(true);
        }
      })


    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;
    fetchNfts();
  }, [anchorWallet])



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
        <MintBox mint={holder} mintButton={minting} />
      </Card>
    </div>
  );
}
