import { useMetaplex } from "@/components/MetaplexProvider/useMetaplex";
import BurnCard from "@/components/mint/BurnCard";
import Card from "@/components/mint/Card";
import CardMintBox from "@/components/mint/CardMintBox";
import DragonSpin from "@/components/mint/DragonSpin";
import FloorBox from "@/components/mint/FloorBox";
import { getIdentifier } from "@/lib/mint/fetch/getIdentifier";
import { getTracker } from "@/lib/mint/fetch/getTracker";
import { PnftGate } from "@/lib/mint/instruction/PnftGate";
import { mint } from "@/lib/mint/instruction/mint";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const data = [1, 2, 3, 4, 5, 6, 7];

export default function Floor() {
  const [tracker, setTracker] = useState<any>(null);
  const [identifier, setIdentifier] = useState<any>(null);
  const [tokens, setTokens] = useState<any[]>();
  const [holder, setHolder] = useState<boolean>(false);

  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();
  const wallet = useWallet();

  const { metaplex } = useMetaplex();

  const minting = async (id: number) => {
    try {
      if (tracker) {
        return console.log("Claim first!");
      }

      console.log(tokens![id]);
      console.log(tokens![id].collection.address.toBase58());
      console.log(tokens![id].collection.key.toBase58());

      const tx1 = await PnftGate(
        anchorWallet!,
        connection,
        wallet,
        tokens![id].mintAddress,
        tokens![id].collection.key,
        tokens![id].programmableConfig
      );

      // const tx2 = await mint(anchorWallet!, connection)
      // const tx2 = await init_identifier(anchorWallet!, connection)

      // tx1.add(tx2);


      wallet.sendTransaction(tx1, connection, {
        preflightCommitment: "confirmed",
      });
      console.log("mint");
      setTracker(true)
    } catch (e) {
      console.log(e);
    }
  };

  const claim = async () => {
    try {
      const tx1 = await mint(anchorWallet!, wallet, connection);

      await wallet.sendTransaction(tx1, connection, { "preflightCommitment": "confirmed" });
      setTracker(null)

    } catch (e) {
      console.log(e);
    }
  };

  const fetchNfts = async () => {
    try {
      // if (!anchorWallet) return;
      const token = await (metaplex as any)
        .nfts()
        .findAllByOwner({ owner: (metaplex as any).identity().publicKey });

      if (token.length > 0) {
        await Promise.all(
          token.map(async (nft: any, i: any) => {
            try {
              const response = await fetch(nft.uri, { method: "GET" });
              const data = await response.json();
              nft.image = data["image"];
              token[i].id = i;
              token[i].image = data["image"];
            } catch (e) {
              token[i].image =
                "https://st2.depositphotos.com/2586633/46477/v/600/depositphotos_464771766-stock-illustration-no-photo-or-blank-image.jpg";
            }
          })
        );
      }
      console.log(token);
      setTokens(token);
    } catch (e) {
      console.log(e);
    }
  };

  const get_tracker = async () => {
    try {
      const tracker = await getTracker(anchorWallet, connection);
      const ident = await getIdentifier(anchorWallet, connection);
      console.log(ident);
      console.log(tracker);
      setTracker(tracker);
      setIdentifier(ident);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;
    get_tracker();
    fetchNfts();
  }, [anchorWallet]);

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
              Minted={identifier ? identifier.nft : 0}
              Total_Mint={100}
              Width={60}
              Name={"Old Onces Won"}
            />
          </div>
          <div className="w-full md:w-[54%]">
            <DragonSpin
              Minted={identifier ? identifier.token : 0}
              Total_Mint={400}
              Width={80}
              Name={"WL Keys won"}
            />
          </div>
        </div>
        {tracker && (
          <div
            onClick={() => {
              claim();
            }}
            className="!text-black !bg-[#00ff47] !rounded-[0.6vw] !text-[4vw] md:!text-[1.2vw] !px-[6vw] md:!px-[3vw] !font-semibold "
            style={{ textTransform: "none" }}
          >
            claim
          </div>
        )}
        <CardMintBox>
          <div className="mt-[5vw] md:mt-[3vw] grid grid-cols-1 gap-y-[10vw] md:gap-y-[4vw] md:grid-cols-3">
            {tokens &&
              tokens.map((token, i) => (
                <BurnCard token={token} minting={minting} />
              ))}
          </div>
        </CardMintBox>
      </Card>
    </div>
  );
}
