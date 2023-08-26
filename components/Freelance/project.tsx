import Image from "next/image";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function project() {
  const img =
    "https://s3-alpha-sig.figma.com/img/d140/fc3b/b8c33afb32618666e5c141edc13bbc0c?Expires=1693785600&Signature=IDQu3TiQtMIE-usGR0i-st9egt2VnZY0yTRc~V8ESwdLAkhfPwaMGZtwD15LZHMiVEe~qpQXCi4XIdj8fGmq5Tc-4Bl6ZsayB9OTG7a47oq1OBGwB89KLGDdiGmJZJvYRdTABH0PuR-4gaduqerStTvuW3rq1HUkY2tk2uCEFHZ7BsqELpNpeDzmdqAoETwKQmsLCtwtkrpYmfVCdPas-Qyc6jmLbxbEEWcrQGDMKVzFo8ZuyjMUuus6M9XIzXYLdJlxVGMI0153f4EZNCwQCletEt5f~3lwm8TtmrxoSEl-gVrZitQPZsgEyryZuAcLFQz8LRwy1W7onehYD1pKqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const solanaIcon =
    "https://img.icons8.com/external-black-fill-lafs/64/external-Solana-cryptocurrency-black-fill-lafs.png";

  const router = useRouter();
  return (
    <div>
      <div className="w-[66vw] mx-auto py-[5vw]">
        <div className="w-full bg-black text-white fontPopSemibold rounded-[1vw] flex justify-between items-center py-[3vw] px-[4vw] text-[1.4vw]">
          <div>
            <div className="text-[3.4vw]">Bone Shamans</div>
            <div className="mt-[1vw]">
              <span className="text-[#00ff47]">Project Categories: </span>
              <span>NFT, DeFI, DAO, Social FI</span>
            </div>
          </div>
          <div className="rounded-full border-[0.14vw] border-white">
            <Image
              src={img}
              width={9000}
              height={900}
              alt=""
              className="w-[16vw] rounded-full"
            />
          </div>
        </div>
        <div className="mt-[3vw] flex justify-between w-full">
          <div className="flex items-center gap-x-[0.4vw]">
            <div className="w-[4vw]">
              <Image src={solanaIcon} width={2000} height={200} alt="" />
            </div>
            <div className="w-[4vw]">
              <Image src={solanaIcon} width={2000} height={200} alt="" />
            </div>
            <div className="w-[4vw]">
              <Image src={solanaIcon} width={2000} height={200} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-x-[1.4vw]">
            <Icon>
              <FaLinkedin />
            </Icon>
            <Icon>
              <FaTwitter />
            </Icon>
            <Icon>
              <MdLanguage />
            </Icon>
          </div>
        </div>
        <div className="mt-[5vw] flex justify-between items-center text-black">
          <div className="w-[60%]">
            <div className="text-[1.6vw] fontPopSemibold">
              Project Description
            </div>
            <textarea
              className="w-full border-[0.12vw] focus:scale-[101%] focus:border-red-500 transition-all p-[2vw] border-black rounded-[1vw] mt-[0.8vw]"
              rows={10}
            ></textarea>
          </div>
          <div className="w-[36%] leading-[3.2vw]">
            <div className="text-[2.4vw] fontPopSemibold">Roles Needed</div>
            <div className="text-[1.8vw]">Collab Manager</div>
            <div className="text-[1.8vw]">Project Manager</div>
            <div className="mt-[3vw] flex items-center gap-x-[1.2vw]">
              <MuiButton>Contact</MuiButton>
              <MuiButton>Review</MuiButton>
              <MuiButton
                onClick={() => router.push("/freelance/project/apply")}
              >
                Apply
              </MuiButton>
            </div>
          </div>
        </div>
        <div className="mt-[5vw]">
          <div className="text-[1.6vw] fontPopSemibold text-center text-black">
            Review
          </div>
          <textarea
            className="w-full border-[0.12vw] focus:scale-[101%] focus:border-red-500 transition-all p-[2vw] border-black rounded-[1vw] mt-[0.8vw]"
            rows={14}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

interface Icon {
  children: ReactNode;
  onClick?: () => void;
}

export function Icon({ children, onClick }: Icon) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.06 }}
      onClick={onClick}
      className="text-black text-[2.8vw]"
    >
      {children}
    </motion.button>
  );
}

export function MuiButton({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "1.2vw",
        textTransform: "none",
        padding: "0.7vw 2vw",
        color: "#000",
        bgcolor: "#00ff47",
        borderRadius: "0.6vw",
        ":hover": {
          bgcolor: "#00ff47",
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
