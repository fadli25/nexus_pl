import Head from "next/head";
import React from "react";
import { Button } from "@mui/material";

export default function settings() {
  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Settings</title>
      </Head>
      <div className="w-[95vw] md:w-[65vw] mx-auto text-[2vw] text-black md:text-[1vw]">
        <div className="text-[4vw] md:text-[2vw] font-semibold">Soicals</div>
        <div className="rounded-[0.6vw] text-[3vw] md:text-[1.4vw] gap-[2vw] flex flex-wrap items-center border-[0.1vw] border-black p-[2vw]">
          <div>
            <div className="font-semibold">Lindedin</div>
            <input
              type="text"
              className="px-[1vw] outline-none md:w-[18.8vw] py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
            />
          </div>
          <div>
            <div className="font-semibold">Twitter</div>
            <input
              type="text"
              className="px-[1vw] outline-none md:w-[18.8vw] py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
            />
          </div>
          <div>
            <div className="font-semibold">Website</div>
            <input
              type="text"
              className="px-[1vw] outline-none md:w-[18.8vw] py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
            />
          </div>
          <div>
            <div className="font-semibold">Discord ID</div>
            <input
              type="text"
              className="px-[1vw] outline-none py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
            />
          </div>
          <div>
            <div className="font-semibold">Telegram ID</div>
            <input
              type="text"
              className="px-[1vw] outline-none py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
            />
          </div>
        </div>
      </div>
      <div className="mt-[6vw] md:mt-[2vw] w-[85vw] md:w-[60vw] mx-auto text-black">
        <div className="text-[4.5vw] md:text-[2vw] font-semibold">Wallets</div>
        <div className="px-[2vw] mt-[3vw] md:mt-[1vw] grid grid-cols-3 gap-[2vw]">
          <WalletButton>Add Aptos</WalletButton>
          <WalletButton>Add Solana</WalletButton>
          <WalletButton>Add Ethereum</WalletButton>
          <WalletButton>Add Polygon</WalletButton>
          <WalletButton>Add Sui</WalletButton>
          <WalletButton>Add Cardano</WalletButton>
          <WalletButton>Add BNB</WalletButton>
        </div>
        {/* Connected Wallets */}
        <div className="text-[2.9vw] md:text-[1.4vw] mt-[8vw] md:mt-[5vw]">
          <div className="font-semibold">Your Solana Wallet</div>
          <div className="mt-[1vw] flex gap-x-[2vw] items-center">
            <div>SJWVROW4658G2U9HG47839FH</div>
            <WalletButtonUnlink>Unlink Wallet</WalletButtonUnlink>
          </div>
        </div>
        <div className="text-[2.9vw] md:text-[1.4vw] mt-[2vw]">
          <div className="font-semibold">Your Solana Aptos</div>
          <div className="mt-[1vw] flex gap-x-[2vw] items-center">
            <div>0xewubf348f373429gh842984y2</div>
            <WalletButtonUnlink>Unlink Wallet</WalletButtonUnlink>
          </div>
        </div>
      </div>
    </div>
  );
}

interface WalletButtonType {
  children: string;
}

export function WalletButton({ children }: WalletButtonType) {
  return (
    <Button
      sx={{
        fontSize: "1.4vw",
        background: "#000",
        color: "#fff",
        borderRadius: "0.7vw",
        textTransform: "none",
        padding: "1.2vw 3vw",
        fontWeight: 600,
        ":hover": {
          background: "#000",
        },
        "@media (max-width:767px)": {
          fontSize: "2.6vw",
        },
      }}
      className="bg-[#000] hover:bg-[#000]"
    >
      {children}
    </Button>
  );
}
export function WalletButtonUnlink({ children }: WalletButtonType) {
  return (
    <Button
      sx={{
        fontSize: "0.8vw",
        background: "#FF2D2D",
        color: "#fff",
        borderRadius: "0.5vw",
        textTransform: "none",
        padding: "1vw 2.4vw",
        fontWeight: 400,
        ":hover": {
          background: "#FF2D2D",
        },
        "@media (max-width:767px)": {
          fontSize: "2.4vw",
        },
      }}
      className="bg-[#FF2D2D] hover:bg-[#FF2D2D]"
    >
      {children}
    </Button>
  );
}
