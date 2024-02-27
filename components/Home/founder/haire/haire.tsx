import { getUsers } from "@/lib/NexusProgram/user/utils/get_users";
import CardFounder from "@/lib/UI/CardFounder";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function haire() {
  const featuredImage =
    "https://media.discordapp.net/attachments/1085293900706627595/1162191996614619186/Ellipse_1_1.png?ex=653b0aa4&is=652895a4&hm=d67c4517c86bd5ca0b09850880dde46eff4dd8980e31df291d047a5f66196faa&=&width=358&height=342";
  const imgg =
    "https://media.discordapp.net/attachments/1085293900706627595/1162204983048032307/Ellipse_4_2.png?ex=653b16bc&is=6528a1bc&hm=9753dfa8469a9eb95a4e795bea1cc5907edea6cd86eccf6baaea94f94514857e&=&width=225&height=216";
  const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";

  const [users, setUsers] = useState<any[]>();

  const anchorWallet = useAnchorWallet()
  const { connection } = useConnection()

  const get_users = async () => {
    try {
      const _users = await getUsers(connection, "confirmed");
      console.log(_users);
      setUsers(_users);

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!anchorWallet) return;

    get_users();

  }, [anchorWallet])

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
      <div className="w-[95vw] mx-auto md:mx-0 md:w-[67vw] px-[3vw] pt-[3vw]">
        {/* search */}
        <div>
          <input
            type="text"
            className="w-full rounded-full border-[0.13vw] outline-none border-black py-[1vw] px-[3vw] md:px-[2vw] text-[3vw] md:text-[1vw] text-black/80 focus:scale-[102%] transition-all focus:border-red-400"
            placeholder="Search"
          />
        </div>
        <div className="mt-[3vw]">
          <div className="border-[0.12vw] border-black w-full py-[1vw] px-[2vw] rounded-[1.4vw] md:rounded-[1vw]">
            <div className="text-black/80 text-[2.5vw] md:text-[1vw]">
              Featured
            </div>
            <div className="flex font-semibold justify-between items-center">
              <div>
                <div className="text-[6vw] md:text-[3.4vw] text-black">
                  John Stewart
                </div>
                <div className="flex justify-between items-center w-[45vw] md:w-[25vw] text-black text-[4vw] md:text-[1.7vw]">
                  <div>Content Writer</div>
                  <div className="flex items-center gap-x-[1vw]">
                    <div className="text-[1.7vw] md:text-[0.8vw]  rounded-full px-[1vw] py-[0.5vw] bg-[#1DA1F2] text-white">
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
        <div className="mt-[3vw] flex flex-wrap justify-start gap-[3vw] md:gap-[2vw] pb-[4vw]">
          {users && users.map((el, i) => (
            <CardFounder
              key={i}
              info={el}
              onClick={() => router.push("/founder/haire/" + el.pubkey.toBase58())}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
