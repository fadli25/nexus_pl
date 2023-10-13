import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

export default function haire() {
  const featuredImage =
    "https://media.discordapp.net/attachments/1085293900706627595/1162191996614619186/Ellipse_1_1.png?ex=653b0aa4&is=652895a4&hm=d67c4517c86bd5ca0b09850880dde46eff4dd8980e31df291d047a5f66196faa&=&width=358&height=342";
  const imgg =
    "https://media.discordapp.net/attachments/1085293900706627595/1162204983048032307/Ellipse_4_2.png?ex=653b16bc&is=6528a1bc&hm=9753dfa8469a9eb95a4e795bea1cc5907edea6cd86eccf6baaea94f94514857e&=&width=225&height=216";
  const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";
  function card() {
    return (
      <motion.div className=" w-[25vw] rounded-[0.6vw] py-[1vw] px-[1vw] flex justify-between">
        <div className="flex flex-col items-center">
          <div className="w-[8vw] rounded-full border-[0.14vw] border-white">
            <Image
              src={imgg}
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
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <div className="fixed top-[45vw] left-[-40vw] md:top-0 md:left-0 h-full md:h-auto md:relative w-[40vw] md:w-[18vw] bg-black min-h-[100vw]">
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
      <div className="w-[95vw] mx-auto md:mx-0 md:w-[62vw] px-[3vw] pt-[3vw]">
        {/* search */}
        <div>
          <input
            type="text"
            className="w-full rounded-full border-[0.13vw] outline-none border-black py-[1vw] px-[3vw] md:px-[2vw] text-[3vw] md:text-[1vw] text-black/80 focus:scale-[102%] transition-all focus:border-red-400"
            placeholder="Search"
          />
        </div>
        <div className="mt-[3vw]">
          <div className="bg-black w-full py-[1vw] px-[2vw] rounded-[1.4vw] md:rounded-[0.6vw]">
            <div className="text-white/80 text-[2.5vw] md:text-[1vw]">
              Featured
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="fontPopSemibold text-[3.4vw]">John Stewart</div>
                <div className="flex justify-between items-center w-[45vw] md:w-[25vw] text-[#00ff47] text-[4vw] md:text-[1.7vw]">
                  <div>Content Writer</div>
                  <div className="flex items-center gap-x-[1vw]">
                    <div className="text-[1.7vw] md:text-[0.8vw] text-black rounded-full px-[1vw] py-[0.5vw] bg-[#1DA1F2]">
                      Expert
                    </div>
                    <div>4.6</div>
                  </div>
                </div>
              </div>
              <div className="w-[20vw] md:w-[15vw] border-[0.15vw] border-[#00ff47] rounded-full">
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
        <div className="mt-[3vw] flex flex-wrap justify-between gap-[3vw] md:gap-[1vw] pb-[4vw]">
          {data.map((el, i) => (
            <motion.div
              onClick={() => router.push("/founder/haire/profile")}
              whileHover={{ scale: 1.04 }}
              key={i}
              className="w-[43vw] md:w-[27vw] rounded-[1.4vw] md:rounded-[0.6vw] py-[1vw] px-[1vw] flex justify-between bg-black"
            >
              <div className="flex flex-col items-center">
                <div className="w-[16vw] md:w-[8vw] rounded-full border-[0.14vw] border-white">
                  <Image
                    src={imgg}
                    width={9000}
                    height={2000}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="mt-[1.2vw] md:mt-[0.6vw] flex justify-center gap-x-[0.4vw] px-[0.4vw] py-[0.1vw] border-[0.1vw] border-white rounded-[0.5vw]">
                  <div className="w-[3vw] md:w-[2vw]">
                    <Image src={solanaIcon} width={2000} height={2000} alt="" />
                  </div>
                  <div className="w-[3vw] md:w-[2vw]">
                    <Image src={solanaIcon} width={2000} height={2000} alt="" />
                  </div>
                  <div className="w-[3vw] md:w-[2vw]">
                    <Image src={solanaIcon} width={2000} height={2000} alt="" />
                  </div>
                </div>
              </div>
              <div className="w-[59%]">
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
                    <div className="text-[#00ff47] text-[2.8vw] md:text-[1.4vw]">
                      4.6
                    </div>
                    <div className="text-black bg-[#1DA1F2] rounded-full px-[1vw] py-[0.5vw] text-[1.2vw] md:text-[0.7vw]">
                      Expert
                    </div>
                  </div>
                </div>
                <div className="mt-[0.5vw] text-[1.2vw] md:text-[0.8vw] w-full bg-[#282828] h-[5.9vw] rounded-[0.6vw] p-[1vw] md:p-[0.5vw]">
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
