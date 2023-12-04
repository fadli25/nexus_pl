import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiStarSLine } from "react-icons/ri";
import { TbCurrencySolana } from "react-icons/tb";
import { CiStar } from "react-icons/ci";

const featuredImage =
  "https://media.discordapp.net/attachments/1085293900706627595/1162191996614619186/Ellipse_1_1.png?ex=653b0aa4&is=652895a4&hm=d67c4517c86bd5ca0b09850880dde46eff4dd8980e31df291d047a5f66196faa&=&width=358&height=342";
const imgg =
  "https://media.discordapp.net/attachments/1085293900706627595/1162204983048032307/Ellipse_4_2.png?ex=653b16bc&is=6528a1bc&hm=9753dfa8469a9eb95a4e795bea1cc5907edea6cd86eccf6baaea94f94514857e&=&width=225&height=216";
const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";

type RouterFunc = {
  onClick: () => void;
  key: number;
};

export default function CardFounder({ onClick, key }: RouterFunc) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      className="flex font-semibold cursor-pointer text-black gap-x-[2vw] md:gap-x-[1vw] pt-[2vw] w-full px-[2.8vw] md:px-[1vw] py-[2vw] md:py-[1vw] rounded-[1.4vw] border border-black md:!w-[100px] overflow-hidden CardFounder"
    >
      <div className="flex items-center flex-col">
        <div className="w-[30vw] img rounded-full border border-black">
          <Image src={imgg} width={1000} height={1000} alt="" />
        </div>
        <div className="mt-[1vw] md:mt-[0.5vw] text-black text-[8vw] md:text-[2.5vw] flex items-center justify-center">
          <TbCurrencySolana />
          <TbCurrencySolana />
          <TbCurrencySolana />
        </div>
      </div>
      <div className="w-full">
        <div className="text-[6vw] md:text-[2vw]">Black Zetsu</div>
        <div className="text-[3.5vw] md:text-[1.4vw]">Product Designer</div>
        <div className="flex justify-between w-full items-end">
          <div>
            <div className="flex items-center gap-x-[0.4vw] mt-[2vw] md:mt-[0.3vw]">
              <div className="bg-black font-normal text-white text-[2vw] md:text-[0.7vw] px-[2vw] md:px-[1vw] py-[0.5vw] md:py-[0.3vw] rounded-full">
                Intemidiate
              </div>
              <div className="text-[3vw] md:text-[1.4vw]">4.2</div>
              <div>
                <CiStar className="star" />
              </div>
            </div>
          </div>
          <div className="text-[3vw] py-[1vw] px-[2vw] CardFounderPrice rounded-[1.6vw] border border-black md:text-[0.9vw]">
            200$/wk
          </div>
        </div>
        <div className="w-full font-normal text-[2.8vw] md:text-[0.9vw] px-[2vw] py-[1vw] mt-[1vw] border border-black rounded-[1.5vw] md:rounded-[1vw] md:px-[1vw] h-[18vw] CardFounderDescription">
          Experienced writer, SEO Expert, worked for over 50 projects.
        </div>
      </div>
    </motion.div>
  );
}
