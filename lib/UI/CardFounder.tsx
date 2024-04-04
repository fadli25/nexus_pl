import AptosIcon from "@/public/Aptos.svg";
import PolygonIcon from "@/public/Polygon.svg";
import SolanaIcon from "@/public/Solana.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";
import { RiStarSLine } from "react-icons/ri";
import { TbCurrencySolana } from "react-icons/tb";

const imgg =
  "https://media.discordapp.net/attachments/1085293900706627595/1216090924862406678/Frame_52351_1.png?ex=65ff1fee&is=65ecaaee&hm=7be1ea6efe7966eb223dea2bccd63a6302b1bc6bace1ab9c4af691f26ee5c9ec&=&format=webp&quality=lossless&width=781&height=642";

// type RouterFunc = {
//   onClick: () => void;
//   key: number;
// };

export default function CardFounder({ onClick, info, key }: any) {
  return (
    <motion.div
      whileTap={{ y: 3 }}
      onClick={onClick}
      className="flex font-[500] md:font-semibold cursor-pointer text-black gap-x-[2vw] md:gap-x-[1vw] pt-[2vw] w-full px-[2.8vw] md:px-[1vw] py-[2vw] md:py-[1vw] rounded-[0.6vw] border border-black md:!w-[100px] overflow-hidden CardFounder"
    >
      <div className="flex w-[40vw] md:w-[16vw] items-center flex-col">
        <div className="rounded-full border-[0.14vw] border-black">
          <Image
            src={imgg}
            width={9000}
            height={2000}
            alt=""
            className="rounded-full w-[20vw] h-[20vw] md:w-[8vw] md:h-[8vw] object-cover object-center"
          />
        </div>
        <div
          style={{ padding: "0.2vw 0.5vw" }}
          className="mt-[1vw] border-[0.1vw] border-black rounded-[0.4vw] md:mt-[0.5vw] text-black text-[8vw] md:text-[2vw] flex items-center justify-center gap-x-[0.2vw]"
        >
          <Image src={SolanaIcon} className="w-[5vw] md:w-[2.4vw]" alt="" />
          <Image
            src={PolygonIcon}
            className="w-[5vw] md:w-[2.3vw] hidden"
            alt=""
          />
          <Image
            src={AptosIcon}
            className="w-[4vw] md:w-[1.9vw] hidden"
            alt=""
          />
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
              <div className="text-[3vw] md:text-[1.2vw] invisible">4.2</div>
              <div>
                <CiStar className="star invisible" />
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
