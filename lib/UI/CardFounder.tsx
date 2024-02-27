import AptosIcon from "@/public/Aptos.svg";
import PolygonIcon from "@/public/Polygon.svg";
import SolanaIcon from "@/public/Solana.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { RiStarSLine } from "react-icons/ri";
import { TbCurrencySolana } from "react-icons/tb";

const featuredImage =
  "https://media.discordapp.net/attachments/1085293900706627595/1162191996614619186/Ellipse_1_1.png?ex=653b0aa4&is=652895a4&hm=d67c4517c86bd5ca0b09850880dde46eff4dd8980e31df291d047a5f66196faa&=&width=358&height=342";
const imgg =
  "https://media.discordapp.net/attachments/1085293900706627595/1162204983048032307/Ellipse_4_2.png?ex=653b16bc&is=6528a1bc&hm=9753dfa8469a9eb95a4e795bea1cc5907edea6cd86eccf6baaea94f94514857e&=&width=225&height=216";
const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";

// type RouterFunc = {
//   onClick: () => void;
//   key: number;
// };

export default function CardFounder({ onClick, info, key }: any) {
  return (
    <motion.div
      whileTap={{ y: 3 }}
      onClick={onClick}
      className="flex font-semibold cursor-pointer text-black gap-x-[2vw] md:gap-x-[1vw] pt-[2vw] w-full px-[2.8vw] md:px-[1vw] py-[2vw] md:py-[1vw] rounded-[0.6vw] border border-black md:!w-[100px] overflow-hidden CardFounder"
    >
      <div className="flex items-center flex-col">
        <div className="w-[30vw] img rounded-full border border-black">
          <Image src={imgg} width={1000} height={1000} alt="" />
        </div>
        <div
          style={{ padding: "0.2vw 0.5vw" }}
          className="mt-[1vw] border-[0.1vw] border-black rounded-[0.4vw] md:mt-[0.5vw] text-black text-[8vw] md:text-[2vw] flex items-center justify-center gap-x-[0.2vw]"
        >
          <Image src={SolanaIcon} className="w-[5vw] md:w-[2.4vw]" alt="" />
          <Image src={PolygonIcon} className="w-[5vw] md:w-[2.3vw]" alt="" />
          <Image src={AptosIcon} className="w-[4vw] md:w-[1.9vw]" alt="" />
        </div>
      </div>
      <div className="w-full">
        <div className="text-[6vw] md:text-[2vw]">{info.name}</div>
        <div className="text-[3.5vw] md:text-[1.2vw]">{info.roles}</div>
        <div className="flex justify-between w-full items-end">
          <div>
            <div className="flex items-center gap-x-[0.4vw] mt-[2vw] md:mt-[0.3vw]">
              <div className="bg-black font-normal text-white text-[2vw] md:text-[0.7vw] px-[2vw] md:px-[1vw] py-[0.2vw] rounded-full">
                {info.levelOfExpertise}
              </div>
              <div className="text-[3vw] md:text-[1.2vw]">4.2</div>
              <div>
                <CiStar className="star" />
              </div>
            </div>
          </div>
          <div className="text-[3vw] py-[1vw] px-[2vw] CardFounderPrice rounded border border-black md:text-[0.9vw]">
            {Number(info.paymentRatePerHour)}$/wk
          </div>
        </div>
        <div className="w-full font-normal text-[2.8vw] md:text-[0.8vw] px-[2vw] py-[1vw] mt-[1vw] border border-black rounded-[1.5vw] md:rounded-[0.5vw] md:px-[1vw] h-[18vw] CardFounderDescription">
          {info.profileOverview}
        </div>
      </div>
    </motion.div>
  );
}
