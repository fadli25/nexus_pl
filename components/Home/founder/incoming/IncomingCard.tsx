import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IncomingCard({ name = "Bone Shamans" }: any) {
  const data = [1, 2, 3];
  const router = useRouter();
  return (
    <div>
      <div className="w-[90vw] md:w-[64vw]  mx-auto bg-black rounded-[1vw] px-[2vw] py-[1vw] flex justify-between">
        <div>
          <div className="text-[5vw] md:text-[3vw] fontPopSemibold">{name}</div>
          <div className="text-[3vw] md:text-[1vw] font-semibold text-[#00ff47]">
            50 Incoming Application
          </div>

          <div className="text-[4vw] md:text-[1.5vw] font-semibold text-[#00ff47] mt-[3vw]">
            Collab Manager{" "}
            <span className="text-white  text-[3vw] md:text-[1.4vw] px-[0.7vw] border border-white rounded-md font-sans">
              8
            </span>
          </div>
        </div>
        <div className="text-[4vw] md:text-[2vw] text-[#00ff47] pb-[2vw]">
          <div className="text-white fontPopSemibold">Roles Needed</div>
          <div className="mt-[0.6vw] text-[2vw] md:text-[1.4vw] flex flex-col items-start gap-y-[2vw] md:gap-y-[0.5vw]">
            <ButtonMotion>
              <Link href="/founder/incoming/other">Community Mod</Link>
            </ButtonMotion>
            <ButtonMotion>Collab Manager</ButtonMotion>
            <ButtonMotion>Project Manger</ButtonMotion>
          </div>
        </div>
      </div>
      {data.map((el, i) => (
        <div
          key={i}
          className="w-[80vw] md:w-[54vw] mx-auto mt-[3vw] md:mt-[2vw] text-black border border-black rounded-[1vw] px-[2vw] py-[1.4vw] flex justify-between items-center"
        >
          <div className="flex items-center gap-x-[1vw]">
            <div className="w-[15vw] md:w-[7vw] h-[15vw] md:h-[7vw] bg-black/80 rounded-full"></div>
            <div>
              <div
                onClick={() => router.push("/founder/haire/profile")}
                className="cursor-pointer font-semibold text-[4vw] md:text-[2vw] underline"
              >
                Manay
              </div>
              <div className=" text-[2.4vw] md:text-[1.4vw]">
                Community Manager
              </div>
            </div>
          </div>
          <div>
            <Button1>Read Cover Letter</Button1>
          </div>
        </div>
      ))}
    </div>
  );
}

interface IconProps {
  children: ReactNode;
  onClick?: () => void;
}

export function ButtonMotion({ children }: IconProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className="border border-[#00ff47] rounded-[0.4vw] text-[3vw] md:text-[1vw] w-full text-center px-[1vw] py-[0.2vw]"
    >
      {children}
    </motion.button>
  );
}

export function Button1({ children, onClick }: IconProps) {
  return (
    <Button
      sx={{
        padding: "0.7vw 1.5vw",
        borderRadius: "0.6vw",
        fontSize: "0.8vw",
        color: "#000",
        background: "#00ff47",
        textTransform: "none",
        fontWeight: "500",
        ":hover": {
          background: "#00ff47",
        },
        "@media (max-width:767px)": {
          fontSize: "2.7vw",
          padding: "0.7vw 2.5vw",
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
