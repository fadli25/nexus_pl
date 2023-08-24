import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function haire() {
  const featuredImage =
    "https://s3-alpha-sig.figma.com/img/edb6/755a/b8b17264ac7349601e96ee909cd501c8?Expires=1693785600&Signature=MITYjHyzskQGKQsgw~l5JFMP~Eoy4NsDZHivONy2EAdahx0H7Jg949W-DZjWrDVeXN-QIi6ClxiEbP0uTkqNSnjSTaUUVkHm3YMv~7XpSRM2mj8lRR4PnozqdlP5lF0erhRhrv3ERJr-O8ZhDY9Og156VKcauzTS9Uq5hdxeymQsyoMjv3mOE5lJK5odAc-mKth9CF2AYOCicGDh2fJ7F2jsBLJQYgMunbG8SmL1dGsuDskuJV9lHkodswxWn3IMFjxMAacPBfahGshPJz0dmyU7d~-KD31TMrXSTWIlnYIueB1AecfAv9hl~UXauU3Si9-9JnnckAXQw~WpsAagag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const img =
    "https://s3-alpha-sig.figma.com/img/4b3d/6a1b/97bf154c24e49f711a4d2dd8db19b0d2?Expires=1693785600&Signature=DUFjmo4t43utXdvjMN6PFgsTsrj06NvDV6hvta4T5NLoDojSJySfziQzE1zTTG7-F-J9TGW2GGpef6qes7S-uxNUQL9SSVkPcmWZpHbV3GzA~StJJsLkW4ZPRL3ECCs~SRIjgMpLXtzBLrOXqx3YB6fyoik68Nmr-~UdfS4Eo5qoLjaBf99z-eGtMT4MVsrQkJmkmBxJVNezSMXZGJ9KZ~GUZVGl0a69K0AUlIyQ3wwuXpJRWHGfFZLIQRGzvLSYmkRKCFSBD-Xu6yrJgc3N4qmeVqDGX3yufWbw8-fByVF-Tl8wavqG4Zv6o4VMoCiQ4HNj-0srgxJvpCnZZ~Y7zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";
  function card() {
    return (
      <motion.div className="w-[25vw] rounded-[0.6vw] py-[1vw] px-[1vw] flex justify-between">
        <div className="flex flex-col items-center">
          <div className="w-[8vw] rounded-full border-[0.14vw] border-white">
            <Image
              src={img}
              width={9000}
              height={2000}
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="mt-[0.6vw] flex justify-center gap-x-[0.8vw] p-[0.4vw] border-[0.12vw] border-white rounded-[0.5vw]">
            <div className="w-[3vw]">
              <Image src={solanaIcon} width={2000} height={2000} alt="" />
            </div>
            <div className="w-[3vw]">
              <Image src={solanaIcon} width={2000} height={2000} alt="" />
            </div>
            <div className="w-[3vw]">
              <Image src={solanaIcon} width={2000} height={2000} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[70%]">
          <div className="flex justify-between">
            <div>
              <div className="fontPopSemibold text-white text-[2vw]">
                John Sew
              </div>
              <div className="text-[#00ff47] text[1vw]">Digital Artist</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-[#00ff47] text-[1vw]">4.6</div>
              <div className="text-black bg-[#1DA1F2] rounded-full px-[1vw] py-[0.5vw]">
                Expert
              </div>
            </div>
          </div>
          <div className="mt-[0.5vw] w-full bg-[#282828] h-[10vw] rounded-[0.6vw] p-[0.5vw]">
            Experienced writer, SEO Expert, worked for over 50 projects
          </div>
        </div>
      </motion.div>
    );
  }
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex justify-between">
      <div className="w-[18vw] bg-black min-h-[100vw]">
        <div className="py-[1vw] px-[2vw] text-[2vw] fontPopSemibold text-[#00ff47] border-b-[0.3vw] border-white">
          Filter
        </div>
        {/* community develpment */}
        <div>
          <div className="py-[2vw] px-[2vw] flex justify-start text-[1vw] fontPopSemibold text-[#00ff47] border-b-[0.3vw] border-white">
            Community Develpment
          </div>
          <div className="py-[2vw] px-[3vw] gap-y-[1.4vw] flex flex-col items-start text-[0.9vw]  text-white/80 border-b-[0.3vw] border-white">
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Community Moderator
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Community Manager
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Collab manager
            </motion.button>
          </div>
        </div>
        {/* mentor and consultant */}
        <div>
          <div className="py-[2vw] px-[3vw] flex justify-start text-[1vw] fontPopSemibold text-[#00ff47] border-b-[0.3vw] border-white">
            Mentor and Consultant
          </div>
          <div className="py-[2vw] px-[3vw] gap-y-[1.4vw] flex flex-col items-start text-[0.9vw]  text-white/80 border-b-[0.3vw] border-white">
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Community Moderator
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Community Manager
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Collab manager
            </motion.button>
          </div>
        </div>
        {/* developers */}
        <div>
          <div className="py-[2vw] px-[3vw] flex justify-start text-[1vw] fontPopSemibold text-[#00ff47] border-b-[0.3vw] border-white">
            Developers
          </div>
          <div className="py-[2vw] px-[3vw] gap-y-[1.4vw] flex flex-col items-start text-[0.9vw]  text-white/80 border-b-[0.3vw] border-white">
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Blockchain
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Front End
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, color: "#fff" }}
              whileTap={{ scale: 0.96 }}
            >
              Back End
            </motion.button>
          </div>
        </div>
        {/* Artists and Designers */}
        <div className="py-[2vw] px-[3vw] flex justify-start text-[1vw] fontPopSemibold text-[#00ff47] border-b-[0.3vw] border-white">
          Artists and Designers
        </div>
      </div>
      <div className="w-[62vw] px-[3vw] pt-[3vw]">
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
        <div className="mt-[3vw] flex flex-wrap justify-between gap-[1vw] pb-[4vw]">
          {data.map((el, i) => (
            <motion.div
              whileHover={{ scale: 1.04 }}
              key={i}
              className="w-[27vw] rounded-[0.6vw] py-[1vw] px-[1vw] flex justify-between bg-black"
            >
              <div className="flex flex-col items-center">
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
              <div className="w-[65%]">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="fontPopSemibold text-white text-[2vw]">
                      John Sew
                    </div>
                    <div className="text-[#00ff47] text[1.4vw]">
                      Digital Artist
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-[#00ff47] text-[1.4vw]">4.6</div>
                    <div className="text-black bg-[#1DA1F2] rounded-full px-[1vw] py-[0.5vw] text-[0.7vw]">
                      Expert
                    </div>
                  </div>
                </div>
                <div className="mt-[0.5vw] text-[0.8vw] w-full bg-[#282828] h-[5.9vw] rounded-[0.6vw] p-[0.5vw]">
                  Experienced writer, SEO Expert, worked for over 50 projects
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
