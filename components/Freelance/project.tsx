import { getRolesForProject } from "@/lib/NexusProgram/project/utils/get_role";
import { get_project_info } from "@/lib/NexusProgram/project/utils/project_info";
import aptosIcon from "@/public/Aptos.svg";
import polygonIcon from "@/public/Polygon.svg";
import solanaIcon from "@/public/Solana.svg";
import { Button } from "@mui/material";
import { web3 } from "@project-serum/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

// interface Role {
//   role: string;
// }

// // function renderRoles(roles:){}

export default function project({ project }: any) {
  const img =
    "https://media.discordapp.net/attachments/1085293900706627595/1216090924862406678/Frame_52351_1.png?ex=65ff1fee&is=65ecaaee&hm=7be1ea6efe7966eb223dea2bccd63a6302b1bc6bace1ab9c4af691f26ee5c9ec&=&format=webp&quality=lossless&width=781&height=642";
  const solanaIcon =
    "https://img.icons8.com/external-black-fill-lafs/64/external-Solana-cryptocurrency-black-fill-lafs.png";

  const [project_info, setProjectInfo] = useState<any>();
  const [roles, setRoles] = useState<any>();

  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();

  const get_infos = async () => {
    try {
      const info = await get_project_info(anchorWallet, connection, project);
      console.log(info);
      setProjectInfo(info);

      const roll = await getRolesForProject(
        connection,
        new web3.PublicKey(project),
        "confirmed"
      );
      console.log(roll);
      setRoles(roll);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;
    get_infos();
  }, [anchorWallet]);

  const router = useRouter();
  return (
    <div>
      <div className="w-[90vw] md:w-[66vw] mx-auto py-[5vw]">
        <div className="w-full bg-black text-white fontPopSemibold rounded-[1vw] flex justify-between items-center py-[3vw] px-[4vw] text-[2.4vw] md:text-[1.4vw]">
          <div>
            <div className="text-[5vw] md:text-[3.4vw]">
              {project_info && project_info.name}
            </div>
            <div className="mt-[1vw]">
              <span className="text-[#00ff47]">Project Categories: </span>
              <span>{project_info && project_info.category}</span>
            </div>
          </div>
          <div className="rounded-full border-[0.14vw] border-white">
            <Image
              src={img}
              width={9000}
              height={900}
              alt=""
              className="w-[20vw] h-[20vw] md:w-[16vw] md:h-[16vw] object-cover object-center rounded-full"
            />
          </div>
        </div>
        <div className="mt-[3vw] flex justify-between items-center w-full">
          <div className="flex items-center gap-x-[0.7vw]">
            <div className="w-[6vw] md:w-[3vw]">
              <Image src={solanaIcon} width={2000} height={200} alt="" />
            </div>
            <div className="w-[6vw] md:w-[2vw]">
              <Image src={aptosIcon} width={2000} height={200} alt="" />
            </div>
            <div className="w-[6vw] md:w-[3vw]">
              <Image src={polygonIcon} width={2000} height={200} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-x-[1.4vw]">
            <Icon>
              <FaLinkedin />
            </Icon>
            <Icon>
              <FaTwitter />
            </Icon>
            <Icon>
              <MdLanguage />
            </Icon>
          </div>
        </div>
        <div className="mt-[5vw] flex flex-col-reverse md:flex-row justify-between md:items-start text-black">
          <div className="w-full md:w-[60%]">
            <div className="text-[4vw] md:text-[1.6vw] mt-[2vw] md:mt-0 fontPopSemibold">
              Project Description
            </div>
            <textarea
              value={project_info && project_info.projectOverview}
              // className="w-full border-2 border-solid border-black text-black focus:scale-[101%] focus:border-red-500 transition-all p-[2vw] border-black rounded-[1vw] mt-[0.8vw]"
              className="w-full border-2 border-solid text-black focus:scale-[101%] focus:border-red-500 transition-all p-[2vw] border-black rounded-[1vw] mt-[0.8vw]"
              rows={10}
            ></textarea>
          </div>
          <div className="w-full md:w-[36%] leading-[5vw] md:leading-[3.2vw] ">
            <div className="text-[4vw] md:text-[1.6vw] fontPopSemibold">
              Roles Needed
            </div>
            <div className="w-full border-2 border-solid border-black rounded-xl p-4 flex flex-col gap-[.5rem] h-[13rem] max-h-screen overflow-y-auto no-scrollbar">
              {roles &&
                roles.map((role: any) => (
                  <div
                    onClick={() =>
                      router.push(
                        "/freelance/project/apply/" + role.pubkey.toBase58()
                      )
                    }
                    className="text-[3vw] md:text-[1.8vw] border border-solid border-black rounded-xl pl-4 cursor-pointer"
                  >
                    {role.role}
                  </div>
                ))}
            </div>
            <div className="mt-[3vw] flex justify-center items-center gap-x-[1.2vw]">
              <MuiButton>Contact</MuiButton>
              <MuiButton>Review</MuiButton>
              {/* <MuiButton
                onClick={() => router.push("/freelance/project/apply")}
              >
                Apply
              </MuiButton> */}
            </div>
          </div>
        </div>
        {/* <div className="mt-[5vw]">
          <div className="text-[4vw] md:text-[1.6vw] fontPopSemibold text-center text-black">
            Review
          </div>
          <textarea
            className="w-full border-2 border-solid  text-black focus:scale-[101%] focus:border-red-500 transition-all p-[2vw] border-black rounded-[1vw] mt-[0.8vw]"
            rows={14}
          ></textarea>
        </div> */}
      </div>
    </div>
  );
}

interface Icon {
  children: ReactNode;
  onClick?: () => void;
}

export function Icon({ children, onClick }: Icon) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.06 }}
      onClick={onClick}
      className="text-black text-[5vw] md:text-[2.8vw]"
    >
      {children}
    </motion.button>
  );
}

export function MuiButton({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "1.2vw",
        textTransform: "none",
        padding: "0.7vw 2vw",
        color: "#000",
        bgcolor: "transparent",
        border: "1px solid",
        borderRadius: "0.6vw",
        ":hover": {
          bgcolor: "transparent",
        },
        "@media (max-width:767px)": {
          fontSize: "2.8vw",
          padding: "0.7vw 5vw",
          borderRadius: "1vw",
        },
      }}
      variant="contained"
      onClick={onClick}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
    >
      {children}
    </Button>
  );
}
