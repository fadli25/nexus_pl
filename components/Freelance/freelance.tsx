import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

export default function freelance() {
  const featuredImage =
    "https://s3-alpha-sig.figma.com/img/edb6/755a/b8b17264ac7349601e96ee909cd501c8?Expires=1693785600&Signature=MITYjHyzskQGKQsgw~l5JFMP~Eoy4NsDZHivONy2EAdahx0H7Jg949W-DZjWrDVeXN-QIi6ClxiEbP0uTkqNSnjSTaUUVkHm3YMv~7XpSRM2mj8lRR4PnozqdlP5lF0erhRhrv3ERJr-O8ZhDY9Og156VKcauzTS9Uq5hdxeymQsyoMjv3mOE5lJK5odAc-mKth9CF2AYOCicGDh2fJ7F2jsBLJQYgMunbG8SmL1dGsuDskuJV9lHkodswxWn3IMFjxMAacPBfahGshPJz0dmyU7d~-KD31TMrXSTWIlnYIueB1AecfAv9hl~UXauU3Si9-9JnnckAXQw~WpsAagag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const img =
    "https://s3-alpha-sig.figma.com/img/4b3d/6a1b/97bf154c24e49f711a4d2dd8db19b0d2?Expires=1693785600&Signature=DUFjmo4t43utXdvjMN6PFgsTsrj06NvDV6hvta4T5NLoDojSJySfziQzE1zTTG7-F-J9TGW2GGpef6qes7S-uxNUQL9SSVkPcmWZpHbV3GzA~StJJsLkW4ZPRL3ECCs~SRIjgMpLXtzBLrOXqx3YB6fyoik68Nmr-~UdfS4Eo5qoLjaBf99z-eGtMT4MVsrQkJmkmBxJVNezSMXZGJ9KZ~GUZVGl0a69K0AUlIyQ3wwuXpJRWHGfFZLIQRGzvLSYmkRKCFSBD-Xu6yrJgc3N4qmeVqDGX3yufWbw8-fByVF-Tl8wavqG4Zv6o4VMoCiQ4HNj-0srgxJvpCnZZ~Y7zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <div className="w-[13vw] bg-black min-h-[100vw]">
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
      <div className="w-[68vw] px-[1vw] pt-[3vw]">
        {/* search */}
        <div>
          <input
            type="text"
            className="w-full rounded-full border-[0.13vw] outline-none border-black py-[1vw] px-[2vw] text-[1vw] text-black/80 focus:scale-[102%] transition-all focus:border-red-400"
            placeholder="Search"
          />
        </div>
        <div className="mt-[3vw]">
          <div className="bg-black w-full py-[1vw] px-[2vw] rounded-[0.6vw]">
            <div className="text-white/80 text-[1vw]">Featured</div>
            <div className="flex justify-between items-center">
              <div>
                <div className="fontPopSemibold text-[3.4vw]">John Stewart</div>
                <div className="flex justify-between items-center w-[25vw] text-[#00ff47] text-[1.7vw]">
                  <div>Content Writer</div>
                  <div className="flex items-center gap-x-[1vw]">
                    <div className="text-[0.8vw] text-black rounded-full px-[1vw] py-[0.5vw] bg-[#1DA1F2]">
                      Expert
                    </div>
                    <div>4.6</div>
                  </div>
                </div>
              </div>
              <div className="w-[15vw] border-[0.15vw] border-[#00ff47] rounded-full">
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
        <div className="mt-[3vw] flex flex-wrap justify-between gap-y-[2vw] pb-[4vw]">
          {data.map((el, i) => (
            <motion.div
              onClick={() => router.push("/freelance/project")}
              whileHover={{ scale: 1.04 }}
              key={i}
              className="w-[32vw] rounded-[0.6vw] overflow-hidden  flex justify-between bg-black"
            >
              <div className="flex flex-col items-center pl-[1vw] py-[1vw]">
                <div className="w-[8vw] rounded-full border-[0.14vw] border-white">
                  <Image
                    src={img}
                    width={9000}
                    height={2000}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="mt-[0.6vw] flex justify-center gap-x-[0.4vw] px-[0.4vw] py-[0.1vw] border-[0.1vw] border-white rounded-[0.5vw]">
                  <div className="w-[2vw]">
                    <Image src={solanaIcon} width={2000} height={2000} alt="" />
                  </div>
                  <div className="w-[2vw]">
                    <Image src={solanaIcon} width={2000} height={2000} alt="" />
                  </div>
                  <div className="w-[2vw]">
                    <Image src={solanaIcon} width={2000} height={2000} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-[36%] py-[1vw]">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="fontPopSemibold text-white text-[1.8vw]">
                      John Sew
                    </div>
                    <div className="text-[#00ff47] text[1.2vw]">
                      Digital Artist
                    </div>
                  </div>
                </div>
                <div className="mt-[0.5vw] text-[0.7vw] w-full bg-[#282828] h-[5.9vw] rounded-[0.6vw] p-[0.5vw]">
                  Experienced writer, SEO Expert, worked for over 50 projects
                </div>
              </div>
              <div className="w-[30%] bg-[#1f1f1f] h-full">
                <div className="px-[1vw] text-[1vw] pt-[1vw]">
                  <div className=" fontPopSemibold text-[#00ff47] mb-[1vw]">
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
      className="my-[0.4vw] text-[0.7vw]"
    >
      {children}
    </motion.button>
  );
}
