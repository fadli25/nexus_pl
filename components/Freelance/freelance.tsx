import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

export default function freelance() {
  const featuredImage =
    "https://media.discordapp.net/attachments/1085293900706627595/1162191996614619186/Ellipse_1_1.png?ex=653b0aa4&is=652895a4&hm=d67c4517c86bd5ca0b09850880dde46eff4dd8980e31df291d047a5f66196faa&=&width=358&height=342";
  const imgg =
    "https://media.discordapp.net/attachments/1085293900706627595/1162204983048032307/Ellipse_4_2.png?ex=653b16bc&is=6528a1bc&hm=9753dfa8469a9eb95a4e795bea1cc5907edea6cd86eccf6baaea94f94514857e&=&width=225&height=216";
  const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const router = useRouter();
  return (
    <div className="flex justify-center md:justify-between relative">
      <div className="absolute top-0 left-[-13vw] md:left-0 md:relative w-[13vw] bg-black min-h-[100vw]">
        <div className="py-[1vw] px-[2vw] text-[2vw] fontPopSemibold text-[#00ff47] border-b-[0.3vw] border-white">
          Filter
        </div>
        {/* community develpment */}
        <div>
          <div className="py-[2vw] px-[2vw] flex justify-start text-[1vw] fontPopSemibold text-[#00ff47] border-b-[0.3vw] border-white">
            Chains
          </div>
          <div className="py-[2vw] px-[3vw] gap-y-[1.4vw] flex flex-col items-start text-[0.9vw]  text-white/80 border-b-[0.3vw] border-white">
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Aptos
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Solana
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Sui
            </motion.button>
          </div>
        </div>
        {/* mentor and consultant */}
        <div>
          <div className="py-[2vw] px-[3vw] flex justify-start text-[1vw] fontPopSemibold text-[#00ff47] border-b-[0.3vw] border-white">
            Project Type
          </div>
          <div className="py-[2vw] px-[3vw] gap-y-[1.4vw] flex flex-col items-start text-[0.9vw]  text-white/80 border-b-[0.3vw] border-white">
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              NFTs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              DeFI
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Social-FI
            </motion.button>
          </div>
        </div>
      </div>
      <div className="w-[90vw] md:w-[68vw] px-[1vw] pt-[3vw]">
        {/* search */}
        <div>
          <input
            type="text"
            className="w-full rounded-full border-[0.13vw] outline-none border-black py-[1vw] px-[3vw] md:px-[2vw] text-[2.4vw] md:text-[1vw] text-black/80 focus:scale-[102%] transition-all focus:border-red-400"
            placeholder="Search"
          />
        </div>
        <div className="mt-[3vw]">
          <div className="bg-black w-full py-[1vw] px-[2vw] rounded-[1vw] md:rounded-[0.6vw]">
            <div className="text-white/80 text-[2vw] md:text-[1vw]">
              Featured
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="fontPopSemibold text-[5.4vw] md:text-[3.4vw]">
                  John Stewart
                </div>
                <div className="flex justify-between items-center w-[40vw] md:w-[25vw] text-[#00ff47] text-[3vw] md:text-[1.7vw]">
                  <div>Content Writer</div>
                  <div className="flex items-center gap-x-[1vw]">
                    <div className="text-[1.8vw] md:text-[0.8vw] text-black rounded-full px-[2vw] md:px-[1vw] py-[0.5vw] bg-[#1DA1F2]">
                      Expert
                    </div>
                    <div>4.6</div>
                  </div>
                </div>
              </div>
              <div className="w-[24vw] md:w-[15vw] border-[0.15vw] border-[#00ff47] rounded-full">
                <Image
                  src={featuredImage}
                  width={9000}
                  height={2000}
                  className="rounded-full object-cover object-center"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[3vw] flex flex-wrap justify-center md:justify-between gap-y-[2vw] pb-[4vw]">
          {data.map((el, i) => (
            <motion.div
              onClick={() => router.push("/freelance/project")}
              whileHover={{ scale: 1.04 }}
              key={i}
              className="w-[70vw] md:w-[32vw] rounded-[1.4vw] md:rounded-[0.6vw] overflow-hidden  flex justify-between bg-black"
            >
              <div className="flex flex-col items-center pl-[1vw] py-[2vw] md:py-[1vw]">
                <div className="w-[20vw] md:w-[8vw] rounded-full border-[0.14vw] border-white">
                  <Image
                    src={imgg}
                    width={9000}
                    height={2000}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="mt-[0.6vw] flex justify-center gap-x-[0.4vw] px-[1vw] md:px-[0.4vw] py-[0.1vw] border-[0.09vw] md:border-[0.1vw] border-white rounded-[0.5vw]">
                  <div className="w-[3.4vw] md:w-[2vw]">
                    <Image src={solanaIcon} width={2000} height={2000} alt="" />
                  </div>
                  <div className="w-[3.4vw] md:w-[2vw]">
                    <Image src={solanaIcon} width={2000} height={2000} alt="" />
                  </div>
                  <div className="w-[3.4vw] md:w-[2vw]">
                    <Image src={solanaIcon} width={2000} height={2000} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-[36%] py-[1vw]">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="fontPopSemibold text-white text-[2.6vw] md:text-[1.8vw]">
                      John Sew
                    </div>
                    <div className="text-[#00ff47] text-[4vw] md:text-[1.2vw]">
                      Digital Artist
                    </div>
                  </div>
                </div>
                <div className="mt-[0.5vw] text-[1.8vw] md:text-[0.7vw] w-full bg-[#282828] h-[13vw] md:h-[5.9vw] rounded-[0.6vw] p-[1vw] md:p-[0.5vw]">
                  Experienced writer, SEO Expert, worked for over 50 projects
                </div>
              </div>
              <div className="w-[30%] bg-[#1f1f1f] h-full">
                <div className="px-[1vw] text-[2.5vw] md:text-[1vw] pt-[1vw]">
                  <div className=" fontPopSemibold text-[#00ff47] mb-[1.7vw] md:mb-[1vw]">
                    Roles Needed
                  </div>
                  <MotionButton>Collab Manager</MotionButton>
                  <MotionButton>Project Manager</MotionButton>
                  <MotionButton>Community Moderator</MotionButton>
                  <MotionButton>Community Manager</MotionButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface MotionButton {
  children: ReactNode;
}

export function MotionButton({ children }: MotionButton) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      className="my-[0.4vw] text-[1.7vw] md:text-[0.7vw]"
    >
      {children}
    </motion.button>
  );
}
