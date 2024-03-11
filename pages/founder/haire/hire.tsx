import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { ReactNode } from "react";
import solanaIcon from "@/public/Solana.svg";
import aptosIcon from "@/public/AptosWhite.svg";
import polygonIcon from "@/public/Polygon.svg";

export default function hire() {
  const img =
    "https://media.discordapp.net/attachments/1085293900706627595/1216090924862406678/Frame_52351_1.png?ex=65ff1fee&is=65ecaaee&hm=7be1ea6efe7966eb223dea2bccd63a6302b1bc6bace1ab9c4af691f26ee5c9ec&=&format=webp&quality=lossless&width=781&height=642";

  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Founder | Hire</title>
      </Head>
      <div className="w-[98vw] md:w-[56vw] mx-auto bg-black rounded-[1.4vw] px-[5vw] md:px-[2vw] py-[3vw] md:py-[1vw] flex justify-between gap-x-[3vw] md:gap-x-0">
        <div className="flex flex-col items-center">
          <div className="rounded-full border-[0.12vw] border-[#00ff47]">
            <Image
              src={img}
              width={2000}
              height={2000}
              alt=""
              className="w-[26vw] md:w-[12vw] h-[26vw] md:h-[12vw] object-cover object-center rounded-full"
            />
          </div>
          <div className="mt-[3vw] md:mt-[1vw] flex justify-center items-center gap-x-[0.2vw]">
            <div>
              <Image
                src={solanaIcon}
                width={2000}
                height={2000}
                alt=""
                className="w-[6vw] md:w-[2.8vw]"
              />
            </div>
            <div>
              <Image
                src={aptosIcon}
                width={2000}
                height={2000}
                alt=""
                className="w-[5vw] md:w-[2vw]"
              />
            </div>
            <div>
              <Image
                src={polygonIcon}
                width={2000}
                height={2000}
                alt=""
                className="w-[6vw] md:w-[2.8vw]"
              />
            </div>
          </div>
        </div>
        <div className="w-[67%]">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[6vw] md:text-[2.5vw] fontPopSemibold">
                Stella Marris
              </div>
              <div className="text-[#00ff47] text-[4vw] md:text-[1.5vw]">
                Content Writer
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-[#00ff47] text-[3vw] md:text-[1.5vw]">
                4.6
              </div>
              <div className="text-black text-[2vw] md:text-[0.8vw] px-[2vw] py-[0.7vw] bg-[#1DA1F2]">
                Expert
              </div>
            </div>
          </div>
          <div className="mt-[3vw] md:mt-[1vw] w-full h-[12vw] rounded-[1.4vw] px-[2vw] py-[1vw] bg-[#282828] text-[3.4vw] md:text-[1vw] text-white/80">
            Experienced writer, SEO Expert, worked for over 50 projects
          </div>
        </div>
      </div>
      <div className="w-[70vw] md:w-[40vw] mx-auto md:h-[6vw] border-[0.12vw] border-black rounded-b-[1.4vw] bg-[#00ff47] text-black text-[2.6vw] md:text-[0.9vw] grid place-items-center p-[2vw] md:p-0">
        <div>
          You are about to hire STELLA MARRIS, please confirm all details before
          approval
        </div>
      </div>
      <div className="mt-[6vw] md:mt-[4vw] w-[80vw] md:w-[50vw] text-black text-[3.5vw] md:text-[1.8vw] mx-auto">
        <div>
          <div>Select Project</div>
          <select
            name="select project"
            className="px-[2vw] mt-[1vw] text-[3vw] md:text-[1vw] rounded-[1vw] py-[1.6vw] w-full border-[0.12vw] border-black"
            id=""
          >
            <option>Aptos Monkeys</option>
            <option>Aptos Monkeys</option>
            <option>Aptos Monkeys</option>
          </select>
        </div>
        <div className="mt-[5vw] md:mt-[2vw]">
          <div>Select Role</div>
          <select
            name="select project"
            className="px-[2vw] mt-[1vw] text-[3vw] md:text-[1vw] rounded-[1vw] py-[1.6vw] w-full border-[0.12vw] border-black"
            id=""
          >
            <option>Role 1</option>
            <option>Role 2</option>
            <option>Role 3</option>
          </select>
        </div>
      </div>
      <div className="mt-[4vw] flex justify-center">
        <Button2>Hire</Button2>
      </div>
    </div>
  );
}

interface IconProps {
  children: ReactNode;
  onClick?: () => void;
}

export function Button2({ children, onClick }: IconProps) {
  return (
    <Button
      sx={{
        padding: "0.7vw 2vw",
        borderRadius: "0.6vw",
        fontSize: "1.1vw",
        color: "#000",
        background: "#00ff47",
        textTransform: "none",
        ":hover": {
          background: "#00ff47",
        },
        "@media (max-width:767px)": {
          fontSize: "3vw",
        },
      }}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
