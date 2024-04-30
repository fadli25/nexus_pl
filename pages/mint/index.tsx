import { useMetaplex } from "@/components/MetaplexProvider/useMetaplex";
import Card from "@/components/mint/Card";
import DragonSpin from "@/components/mint/DragonSpin";
import FloorBox from "@/components/mint/FloorBox";
import MintBox from "@/components/mint/MintBox";
import { getIdentifier } from "@/lib/mint/fetch/getIdentifier";
import { init_identifier } from "@/lib/mint/instruction/init_identifier";
import { mint } from "@/lib/mint/instruction/mint";
import { tokenGate } from "@/lib/mint/instruction/tokenGate";
import { fetchAllDigitalAssetWithTokenByOwner } from "@metaplex-foundation/mpl-token-metadata";
import { publicKey } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { notify_delete, notify_error, notify_laoding, notify_success } from "../profile";

export default function index() {

  const [holder, setHolder] = useState<boolean>(false);
  const [identifier, setIdentifier] = useState<any>();
  const [keys, setKeys] = useState<number>(0)
  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();
  const wallet = useWallet()

  // const { metaplex } = useMetaplex();

  const minting = async () => {
    try {
      notify_laoding("Transaction Pending...")

      const tx1 = await tokenGate(anchorWallet, connection, wallet);
      // const tx1 = await init_identifier(anchorWallet, connection);

      const tx2 = await mint(anchorWallet!, wallet, connection)

      tx1.add(tx2);

      await wallet.sendTransaction(tx1, connection, { "preflightCommitment": "confirmed", "maxRetries": 10 });
      console.log("mint");
      notify_delete()
      notify_success("Mint Successful!")
    } catch (e) {
      notify_delete()
      notify_error("Transactions Failed!")
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
        if (tk.publicKey == "oDNaTFqKN3cuzToL6YCKDvE1t8DjbNjXr8dUy8Q9LfB") {
          setKeys(Number(tk.token.amount));
          setHolder(true);
        }
      })

    } catch (e) {
      console.log(e);
    }
  };

  const get_tracker = async () => {
    try {
      const ident = await getIdentifier(anchorWallet, connection);
      console.log(ident);
      setIdentifier(ident);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;
    get_tracker();
    fetchNfts();
  }, [anchorWallet])

  const percent = () => {
    const num = identifier.token / 1900
    return num * 100
  }

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
            Width={identifier ? percent() : 0}
            Minted={identifier ? Number(identifier.count) : 0}
            Total_Mint={1900}
          />
        </div>
        <MintBox mint={holder} mintButton={minting} keys={keys} />
      </Card>
    </div>
  );
}
