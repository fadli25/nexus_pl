import { update_user } from "@/lib/NexusProgram/user/update_user";
import { get_user_info } from "@/lib/NexusProgram/user/utils/user_info";
import { Button } from "@mui/material";
import { web3 } from "@project-serum/anchor";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function settings() {
  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();
  const wallet = useWallet();

  const [loading, setLoading] = useState<boolean>(false);
  const [info, setInfo] = useState<any>();
  const [linkedin, setL] = useState<string>();
  const [discord_id, setD] = useState<string>();
  const [telegram_id, setT] = useState<string>();
  const [twitter, setX] = useState<string>();
  const [website, setW] = useState<string>();

  const get_info = async () => {
    try {
      const user_info = await get_user_info(anchorWallet, connection);
      console.log(user_info);
      setInfo(user_info);

      if (user_info) {
        setL(user_info.linkedin);
        setD(user_info.discordId);
        setT(user_info.telegramId);
        setW(user_info.website);
        setX(user_info.twitter);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;
    get_info();
  }, [anchorWallet]);

  async function update_user_info() {
    try {
      notify_laoding("Updating Profile...");
      setLoading(true);
      await update_user(
        anchorWallet,
        connection,
        info.name,
        info.image,
        info.category,
        info.roles,
        info.levelOfExpertise,
        info.others,
        info.profileOverview,
        info.paymentRatePerHour,
        info.nogotion,
        discord_id!,
        telegram_id!,
        website!,
        linkedin!,
        twitter!,
        "",
        ""
      );
      notify_delete();
      notify_success("Profile Updated!");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      notify_delete();
      notify_error("Transaction Failed");
      console.log(e);
    }
  }

  const notify_success = (msg: string) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const notify_warning = (msg: string) => {
    toast.warning(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const notify_error = (msg: string) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const notify_laoding = (msg: string) => {
    toast.loading(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const notify_delete = () => {
    toast.dismiss();
  };

  return (
    <div className="w-full md:w-[84vw] float-right py-[5vw]">
      <Head>
        <title>Settings</title>
      </Head>
      <div className="w-[95vw] md:w-[65vw] mx-auto text-[2vw] text-black md:text-[1vw]">
        <div className="text-[4vw] md:text-[2vw] font-semibold">Soicals</div>
        <div className="rounded-[0.6vw] text-[3vw] md:text-[1.4vw] gap-[2vw] flex flex-wrap items-center border-[0.1vw] border-black p-[2vw]">
          {/* <div>
            <div className="font-semibold">Linkedin Handle</div>
            <input
              onChange={(e) => setL(e.target.value)}
              value={linkedin}
              type="text"
              className="px-[1vw] outline-none md:w-[18.8vw] py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
            />
          </div> */}
          <div>
            <div className="font-semibold">Twitter Handle</div>
            <input
              onChange={(e) => setX(e.target.value)}
              value={twitter}
              type="text"
              className="px-[1vw] outline-none md:w-[18.8vw] py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
            />
          </div>
          {/* <div>
            <div className="font-semibold">Website</div>
            <input
              onChange={(e) => setW(e.target.value)}
              value={website}
              type="text"
              className="px-[1vw] outline-none md:w-[18.8vw] py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
            />
          </div> */}
          {/* <div>
            <div className="font-semibold">Discord ID</div>
            <input
              onChange={(e) => setD(e.target.value)}
              value={discord_id}
              type="text"
              className="px-[1vw] outline-none py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
            />
          </div> */}
          {/* <div>
            <div className="font-semibold">Telegram ID</div>
            <input
              onChange={(e) => setT(e.target.value)}
              value={telegram_id}
              type="text"
              className="px-[1vw] outline-none py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
            />
          </div> */}
          <div onClick={() => update_user_info()}>DONE</div>
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
        <div className="text-[2.9vw] md:text-[1.4vw] mt-[8vw] md:mt-[5vw] invisible">
          <div className="font-semibold">Your Solana Wallet</div>
          <div className="mt-[1vw] flex gap-x-[2vw] items-center">
            <div>SJWVROW4658G2U9HG47839FH</div>
            <WalletButtonUnlink>Unlink Wallet</WalletButtonUnlink>
          </div>
        </div>
        <div className="text-[2.9vw] md:text-[1.4vw] mt-[2vw] invisible">
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
