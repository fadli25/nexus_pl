import { getAllProjects } from "@/lib/NexusProgram/project/utils/get_all_projects";
import { getAllRoles } from "@/lib/NexusProgram/project/utils/get_roles";
import AptosIcon from "@/public/Aptos.svg";
import PolygonIcon from "@/public/Polygon.svg";
import SolanaIcon from "@/public/Solana.svg";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

export default function freelance() {
  const [projects, setProjects] = useState<any[]>();

  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();

  const get_projects = async () => {
    try {
      const projects = await getAllProjects(connection, "confirmed");
      projects.map((project, i) => {
        projects[i].role = [];
      });
      // console.log(projects);
      const roles = await getAllRoles(connection, "confirmed");
      console.log(roles);

      roles.map((role) => {
        projects.map((project, i) => {
          if (role.project.toBase58() == project.pubkey.toBase58()) {
            console.log("Done");
            projects[i].role.push(role);
          }
        });
      });

      console.log(projects);
      setProjects(projects);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;

    get_projects();
  }, [anchorWallet]);

  const featuredImage =
    "https://media.discordapp.net/attachments/1085293900706627595/1216090924862406678/Frame_52351_1.png?ex=65ff1fee&is=65ecaaee&hm=7be1ea6efe7966eb223dea2bccd63a6302b1bc6bace1ab9c4af691f26ee5c9ec&=&format=webp&quality=lossless&width=781&height=642";

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
          <div className="border-[0.12vw] border-black w-full text-black py-[1vw] font-semibold px-[2vw] rounded-[1vw] md:rounded-[1vw]">
            <div className="text-white/80 text-[2vw] md:text-[1vw]">
              Featured
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="fontPopSemibold text-[5.4vw] md:text-[3.4vw]">
                  John Stewart
                </div>
                <div className="flex justify-between items-center w-[40vw] md:w-[25vw text-[3vw] md:text-[1.7vw]">
                  <div>Content Writer</div>
                  <div className="flex items-center gap-x-[1vw]">
                    <div className="text-[1.8vw] md:text-[0.8vw] text-white rounded-full px-[2vw] md:px-[1vw] py-[0.5vw] bg-[#1DA1F2]">
                      Expert
                    </div>
                    <div>4.6</div>
                  </div>
                </div>
              </div>
              <div className="w-fit border-[0.15vw] border-[#00ff47] rounded-full">
                <Image
                  src={featuredImage}
                  width={9000}
                  height={2000}
                  className="rounded-full w-[24vw] h-[24vw] md:w-[12vw] md:h-[12vw] object-cover object-center"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[3vw] flex flex-wrap justify-center md:justify-between gap-y-[2vw] pb-[4vw]">
          {projects &&
            projects.map((el, i) => (
              <motion.div
                onClick={() =>
                  router.push("/freelance/project/" + el.pubkey.toBase58())
                }
                whileHover={{ scale: 0.98 }}
                key={i}
                className="w-[70vw] md:w-[32vw] cursor-pointer rounded-[1.4vw] md:rounded-[0.6vw] overflow-hidden  flex justify-between border-[0.11vw] border-black"
              >
                <div className="flex flex-col items-center pl-[1vw] py-[2vw] md:py-[1vw]">
                  <div className=" rounded-full border-[0.14vw] border-black">
                    <Image
                      src={featuredImage}
                      width={9000}
                      height={2000}
                      alt=""
                      className="rounded-full w-[20vw] h-[20vw] md:w-[8vw] md:h-[8vw] object-cover object-center"
                    />
                  </div>
                  <div className="mt-[0.6vw] flex justify-center gap-x-[0.2vw] px-[1vw] md:px-[0.4vw] py-[0.1vw]">
                    <Image
                      src={SolanaIcon}
                      className="w-[5vw] md:w-[2vw]"
                      alt=""
                    />
                    <Image
                      src={PolygonIcon}
                      className="w-[5vw] md:w-[2vw]"
                      alt=""
                    />
                    <Image
                      src={AptosIcon}
                      className="w-[4vw] md:w-[1.5vw]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[36%] py-[1vw]">
                  <div className="flex justify-between items-center text-black">
                    <div>
                      <div className="fontPopSemibold  text-[2.6vw] md:text-[1.8vw]">
                        {el.name}
                      </div>
                      <div className="text-[4vw] md:text-[1.2vw]">
                        {el.category}
                      </div>
                    </div>
                  </div>
                  <div className="mt-[0.5vw] text-[1.8vw] md:text-[0.7vw] w-full border-[#282828] border-[0.11vw] text-black h-[13vw] md:h-[5.9vw] rounded-[0.6vw] p-[1vw] md:p-[0.5vw]">
                    {el.projectOverview}
                  </div>
                </div>
                <div className="w-[30%] bg-[#1f1f1f] h-full">
                  <div className="px-[1vw] text-[2.5vw] md:text-[1vw] pt-[1vw]">
                    <div className=" fontPopSemibold text-[#00ff47] mb-[1.7vw] md:mb-[1vw]">
                      Roles Needed
                    </div>
                    {el.role.map((rl: any) => (
                      <>
                        <MotionButton>{rl.role}</MotionButton>
                      </>
                    ))}
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
