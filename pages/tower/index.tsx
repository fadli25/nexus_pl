import Head from "next/head";
import React, { ReactNode, useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function index() {
  const data = [
    {
      img: "https://media.discordapp.net/attachments/1085293900706627595/1162194804067794964/Rectangle_120.png?ex=653b0d41&is=65289841&hm=8b7b4494720afade04362e0a9e375d3b99d4d95f150a58b8439cb5038d782eb2&=&width=407&height=391",
    },
    {
      img: "https://media.discordapp.net/attachments/1085293900706627595/1162194804067794964/Rectangle_120.png?ex=653b0d41&is=65289841&hm=8b7b4494720afade04362e0a9e375d3b99d4d95f150a58b8439cb5038d782eb2&=&width=407&height=391",
    },
    {
      img: "https://media.discordapp.net/attachments/1085293900706627595/1162194804067794964/Rectangle_120.png?ex=653b0d41&is=65289841&hm=8b7b4494720afade04362e0a9e375d3b99d4d95f150a58b8439cb5038d782eb2&=&width=407&height=391",
    },
    {
      img: "https://media.discordapp.net/attachments/1085293900706627595/1162194804067794964/Rectangle_120.png?ex=653b0d41&is=65289841&hm=8b7b4494720afade04362e0a9e375d3b99d4d95f150a58b8439cb5038d782eb2&=&width=407&height=391",
    },
    {
      img: "https://media.discordapp.net/attachments/1085293900706627595/1162194804067794964/Rectangle_120.png?ex=653b0d41&is=65289841&hm=8b7b4494720afade04362e0a9e375d3b99d4d95f150a58b8439cb5038d782eb2&=&width=407&height=391",
    },
    {
      img: "https://media.discordapp.net/attachments/1085293900706627595/1162194804067794964/Rectangle_120.png?ex=653b0d41&is=65289841&hm=8b7b4494720afade04362e0a9e375d3b99d4d95f150a58b8439cb5038d782eb2&=&width=407&height=391",
    },
    {
      img: "https://media.discordapp.net/attachments/1085293900706627595/1162194804067794964/Rectangle_120.png?ex=653b0d41&is=65289841&hm=8b7b4494720afade04362e0a9e375d3b99d4d95f150a58b8439cb5038d782eb2&=&width=407&height=391",
    },
  ];
  const [show, setShow] = useState<boolean>();
  const [procced, setProcced] = useState<boolean>();
  const win =
    "https://media.discordapp.net/attachments/1085293900706627595/1162203481017438298/Untitled670_20230803112855_1.png?ex=653b1556&is=6528a056&hm=ccf35f1f18f4c8a14e74b0b24f7df8014e366586081955d90dabd72d4d798a11&=&width=267&height=273";

  return (
    <div className="w-[95vw] md:w-[84vw] py-[5vw] md:float-right text-black">
      <Head>
        <title>Rebirth Tower</title>
      </Head>
      <div className="w-[70vw] md:w-[50vw] mx-auto">
        <div className="text-center fontPopSemibold text-[5vw] md:text-[2vw] underline">
          Reward Box
        </div>
        <div className="w-full border-[0.4vw] md:border-[0.12vw] h-[34vw] md:h-[20vw] p-[2vw] border-black rounded-[1vw] mt-[0.8vw]">
          {procced && (
            <div className="w-full h-full rounded-[1vw] bg-black flex justify-between px-[4vw] py-[2vw]">
              <div>
                <Image
                  src={win}
                  width={9000}
                  height={2000}
                  alt=""
                  className="w-[25vw] md:w-[12vw] h-[25vw] md:h-[12vw] rounded-[1.6vw] bg-white/60 object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-between w-[55%] h-full py-[2vw] md:py-0">
                <div>
                  <div className="text-[3.1vw] md:text-[2vw] text-[#00ff47] fontPopSemibold">
                    Congratulations !!!
                  </div>
                </div>
                <div className="w-[90%] text-[2.2vw] md:text-[1.4vw] text-white">
                  <div>You have just won an NFT</div>
                  <div className="text-[#00ff47] ">The Old Ones #354 </div>
                </div>
                <div className="text-[1.6vw] md:text-[0.8vw] text-white">
                  Click the button below to claim your prize
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-[4vw] fontPopSemibold text-[3vw] md:text-[1vw]">
        <div className="text-[5vw] md:text-[2vw] underline ">
          Rewards available on floor 1
        </div>
        <div className="mt-[2vw]">SMB Gen3</div>
        <div className="mt-[0.8vw]">10 Sol</div>
        <div className="mt-[0.8vw]">1 Sol</div>
        <div className="mt-[0.8vw]">Mrble Tokens</div>
      </div>
      <div className="mt-[4vw]">
        <div className="text-[5vw] md:text-[2vw] underline text-center fontPopSemibold">
          NFTs in this wallet
        </div>
        <div className="flex flex-wrap gap-y-[6vw] md:gap-y-[4vw] gap-x-[6vw] md:gap-x-[3.5vw] mt-[6vw] md:mt-[2vw] w-[86vw] md:w-[64vw] mx-auto">
          {data.map((el, i) => (
            <motion.div className="w-[40vw] md:w-[19vw] rounded-[2vw] md:rounded-[1vw] overflow-hidden">
              <div className="pb-[8vw] md:pb-[4vw] bg-black rounded-[2vw] md:rounded-[1vw]">
                <img
                  src={el.img}
                  width={9000}
                  height={2000}
                  alt=""
                  className="w-[40vw] md:w-[19vw] h-[40vw] md:h-[19vw] object-cover object-center"
                />
              </div>
              <div className="flex justify-center mt-[2.4vw] md:mt-[1vw]">
                <MuiButton onClick={() => setShow(true)}>Burn</MuiButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {show && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/60 z-[900000] grid place-items-center">
          <div
            className="absolute top-0 left-0 w-full h-full"
            onClick={() => setShow(false)}
          ></div>
          <div className="w-[96vw] md:w-[43vw] rounded-[2vw] h-[40vw] md:h-[26vw] bg-black text-center pt-[3vw] z-10">
            <div className="text-[#00ff47] text-[5vw] md:text-[2vw] fontPopSemibold">
              You are about to burn this Token
            </div>
            <div className="w-[80%] md:w-[60%] mx-auto mt-[3vw] text-[3vw] md:text-[1.2vw] text-white">
              Burnt Tokens are lost forever and cannot be recovered
            </div>
            <div className="flex justify-center gap-x-[1vw] mt-[6.4vw]">
              <MuiButtonProcced
                onClick={() => {
                  setShow(false);
                  setProcced(true);
                }}
              >
                Procced
              </MuiButtonProcced>
              <MuiButtonCancel onClick={() => setShow(false)}>
                Cancel
              </MuiButtonCancel>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface Icon {
  children: ReactNode;
  onClick?: () => void;
}

export function MuiButton({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "1vw",
        textTransform: "none",
        padding: "0.7vw 2.5vw",
        color: "#000",
        bgcolor: "#00ff47",
        borderRadius: "0.1vw",
        ":hover": {
          bgcolor: "#00ff47",
        },
        "@media (max-width:767px)": {
          fontSize: "3.5vw",
          padding: "0.7vw 4vw",
          borderRadius: "0.8vw",
        },
      }}
      variant="contained"
      onClick={onClick}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
    >
      {children}
    </Button>
  );
}
export function MuiButtonProcced({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "1vw",
        textTransform: "none",
        padding: "0.7vw 2.5vw",
        color: "#000",
        bgcolor: "#00ff47",
        borderRadius: "0.6vw",
        fontFamily: "popSemibold",
        ":hover": {
          bgcolor: "#00ff47",
        },
        "@media (max-width:767px)": {
          fontSize: "2.5vw",
          padding: "0.7vw 3.5vw",
        },
      }}
      variant="contained"
      onClick={onClick}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
    >
      {children}
    </Button>
  );
}
export function MuiButtonCancel({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "1vw",
        textTransform: "none",
        padding: "0.7vw 2.5vw",
        color: "#000",
        bgcolor: "#D9D9D9",
        borderRadius: "0.6vw",
        fontFamily: "popSemibold",
        ":hover": {
          bgcolor: "#D9D9D9",
        },
        "@media (max-width:767px)": {
          fontSize: "2.5vw",
          padding: "0.7vw 3.5vw",
        },
      }}
      variant="contained"
      onClick={onClick}
      className="bg-[#D9D9D9] hover:bg-[#D9D9D9]"
    >
      {children}
    </Button>
  );
}
