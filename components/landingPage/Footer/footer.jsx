import React from "react";
import logos from "@/public/landingpage/logos.png";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineLanguage } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

export default function footer() {
  return (
    <div>
      <div className="w-full bg-black py-[0.4vw] px-[2.4vw] flex justify-between items-center">
        <div className="w-[32vw] md:w-[12.5vw]">
          <Image src={logos} width={9000} height={2999} alt="" />
        </div>
        <div className="flex gap-x-[4vw] md:gap-x-[2vw]">
          <div className="text-center">
            <div className="text-white font-semibold text-[3vw] md:text-[1.4vw] inter">
              LEGAL
            </div>
            <div className="text-[2.6vw] md:text-[1vw] mt-[0.7vw] text-white/60">
              <div>TERMS</div>
              <div>PRIVACY</div>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold text-center text-[3vw] md:text-[1.4vw]">
              SOCIALS
            </div>
            <div className="text-white text-[4vw] md:text-[1.8vw] flex justify-center items-center mt-[0.7vw] gap-x-[1.3vw]">
              <motion.button
                whileHover={{ scale: 1.1, y: "-0.1vw" }}
                whileTap={{ scale: 0.96 }}
              >
                <Link traget="_blanck" href="https://discord.gg/KDPe54dFUy">
                  <FaDiscord />
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: "-0.1vw" }}
                whileTap={{ scale: 0.96 }}
              >
                <Link href="https://twitter.com/Nexus_mls" target="_blank">
                  <BsTwitter />
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: "-0.1vw" }}
                whileTap={{ scale: 0.96 }}
              >
                <MdOutlineLanguage />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
