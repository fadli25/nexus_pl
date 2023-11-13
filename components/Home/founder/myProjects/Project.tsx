import { getProjectUsers } from "@/lib/NexusProgram/project/utils/get_project_users";
import { get_project_info } from "@/lib/NexusProgram/project/utils/project_info";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdAddCircle, MdOutlineArrowDropDownCircle } from "react-icons/md";

import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";

type Project = {
  project: string;
};

export default function Project({ project }: Project) {
  const buttonStyle = {
    fontSize: "1vw",
    padding: "0.6vw 2vw",
    color: "#000",
    background: "#00ff47",
    textTransform: "none",
    borderRadius: "0.4vw",
    ":hover": {
      background: "#00ff47",
    },
  };

  const buttonStyleClass = "bg-[#00ff47] hover:bg-[#00ff47]";

  const imageProject =
    "https://s3-alpha-sig.figma.com/img/d140/fc3b/b8c33afb32618666e5c141edc13bbc0c?Expires=1693785600&Signature=IDQu3TiQtMIE-usGR0i-st9egt2VnZY0yTRc~V8ESwdLAkhfPwaMGZtwD15LZHMiVEe~qpQXCi4XIdj8fGmq5Tc-4Bl6ZsayB9OTG7a47oq1OBGwB89KLGDdiGmJZJvYRdTABH0PuR-4gaduqerStTvuW3rq1HUkY2tk2uCEFHZ7BsqELpNpeDzmdqAoETwKQmsLCtwtkrpYmfVCdPas-Qyc6jmLbxbEEWcrQGDMKVzFo8ZuyjMUuus6M9XIzXYLdJlxVGMI0153f4EZNCwQCletEt5f~3lwm8TtmrxoSEl-gVrZitQPZsgEyryZuAcLFQz8LRwy1W7onehYD1pKqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const solanaIcon = "https://cryptologos.cc/logos/solana-sol-logo.png";

  const [coreTeam, setCoreTeam] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [community, setCommuntiy] = useState(false);

  const messageButtonStyle = {
    fontSize: "0.8vw",
    backround: "#00ff47",
    borderRadius: "0.6vw",
    padding: "0.6vw 1.4vw",
    color: "#000",
    ":hover": {
      backround: "#00ff47",
    },
  };
  const messageButtonStyleClass = "bg-[#00ff47] hover:bg-[#00ff47]";

  const discordButtonStyle = {
    fontSize: "0.8vw",
    border: "0.1vw solid #fff",
    borderRadius: "0.6vw",
    padding: "0.6vw 1.4vw",
    color: "#fff",
    ":hover": {
      border: "0.1vw solid #fff",
    },
  };

  const fireButtonStyle = {
    fontSize: "0.8vw",
    backround: "#FF2D2D",
    borderRadius: "0.6vw",
    color: "#fff",
    ":hover": {
      backround: "#FF2D2D",
    },
    padding: "0.6vw 1.4vw",
  };
  const fireButtonStyleClass = "bg-[#FF2D2D] hover:bg-[#FF2D2D]";

  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();

  const [projecte, setProject] = useState<any | null>();

  const get_project = async () => {
    try {
      const _projects = await get_project_info(
        anchorWallet,
        connection,
        project
      );
      setProject(_projects);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;
    console.log("strat");
    get_project();
    get_users();
  }, [anchorWallet]);

  const get_users = async () => {
    try {
      console.log("_projects");
      const _projects = await getProjectUsers(connection, project, "confirmed");
      // const arr: any[] = [];

      // _projects.map((prj) => {
      //   const objct = {
      //     role: prj.role,
      //     objct: [prj]
      //   }
      //   if (arr.length == 0) {
      //     arr.push(objct)
      //   } else {
      //     let not_exist = true;
      //     arr.map((ar, i) => {
      //       if (ar.role == prj.role) {
      //         arr[i].objct.push(prj);
      //         not_exist = false;
      //       }
      //     })
      //     if (not_exist) {
      //       arr.push(objct)
      //     }
      //   }
      // })
      // console.log(arr)
      setUsers(_projects);
    } catch (e) {
      console.log(e);
    }
  };

  const router = useRouter();
  console.log(users)
  users.map((el,index) => console.log(el.name))
  return (
    <div className="px-[10vw] pt-[3vw] text-black">
      <div className="w-[61vw] mx-auto">
        <div className="w-[54vw] relative">
          <div className="absolute top-0 right-[-9vw] border-[0.4vw] border-white rounded-full">
            <Image
              className="w-[17vw] rounded-full border-[0.5vw] "
              src={imageProject}
              width={9000}
              height={2000}
              alt=""
            />
          </div>
          <div className="flex justify-start gap-x-[0.7vw]">
            <div>
              <Button
                variant="contained"
                sx={buttonStyle}
                className={`${buttonStyleClass}`}
              >
                Edit Project
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                sx={buttonStyle}
                className={`${buttonStyleClass}`}
              >
                Feature Project
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                sx={buttonStyle}
                className={`${buttonStyleClass}`}
              >
                Use Rebirth Tower
              </Button>
            </div>
          </div>
          {projecte && (
            <div className="mt-[1vw] text-white bg-black rounded-[1vw] min-h-[20vw] w-full p-[1vw]">
              <div className="text-[3vw] fontPopSemibold mt-[1vw]">
                {projecte.name}
              </div>
              <div className="text-[1vw] text-[#00ff47]">
                Project Description
              </div>
              <div className="flex justify-start gap-x-[2vw] items-end">
                <div className="bg-[#191919] rounded-[0.7vw] w-[40vw] mt-[0.8vw] h-[10vw]">
                  {projecte.projectOverview}
                </div>
                <div className="flex items-center gap-x-[0.9vw] border-[0.19vw] border-white rounded-[0.5vw] py-[0.7vw] px-[1vw]">
                  {/* <div className="w-[2vw]">
                  <Image src={solanaIcon} width={8999} height={2000} alt="" />
                </div> */}
                  <div className="w-[2vw]">
                    <Image src={solanaIcon} width={8999} height={2000} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {projecte && (
        <div className="w-full mt-[5vw] border-black border-[0.2vw] px-[3vw] py-[1vw] fontPopSemibold rounded-[0.8vw]">
          <div className="text-[2vw] mb-[-2vw] pt-[2vw]">Staffs</div>
          <div className=" text-[10vw] underline">{projecte.members}</div>
        </div>
      )}
      <div className="mt-[5vw]">
        <div className="flex justify-between">
          <div></div>
          <div className="text-[2.7vw] underline fontPopSemibold">
            Staff Management
          </div>
          <motion.button
            onClick={() => router.push("/founder/project/invite/" + project)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="text-[3.5vw] text-black"
          >
            <MdAddCircle />
          </motion.button>
        </div>
      </div>
      <div className="mt-[3vw]">
        {users &&
          users.map((user,index) => (
            <div key={index} className="relative h-fit my-[1vw]">
              <div className="items-center z-10 w-[92%] bg-black min-h-[8vw] flex justify-between px-[2vw]">
                <div className="flex itmes-center gap-x-[1vw]">
                  <div className="bg-white/60 rounded-full w-[6vw] h-[6vw]"></div>
                  <div>
                    <div className="text-[2vw] fontPopSemibold underline text-white">
                      {user.projectName}
                    </div>
                    <div className="text-[1.4vw] text-[#00ff47]">
                      {user.role}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-[0.7vw]">
                  <div>
                    <Button
                      variant="contained"
                      sx={messageButtonStyle}
                      className="!font-[0.8vw] !bg-[#00ff47] hover:!bg-[#00ff47] !rounded-[0.5vw] !text-black"
                    >
                      Message
                    </Button>
                  </div>
                  <div>
                    {/* 
                      const discordButtonStyle = {
                      fontSize: "0.8vw",
                      border: "0.1vw solid #fff",
                      borderRadius: "0.6vw",
                      padding: "0.6vw 1.4vw",
                      color: "#fff",
                      ":hover": {
                        border: "0.1vw solid #fff",
                      },
                    };
                
                */}
                    <Button
                      variant="outlined"
                      sx={discordButtonStyle}
                      className="!font-[0.8vw] !bg-[#00ff47] hover:!bg-[#00ff47] !rounded-[0.5vw] !text-black"
                    >
                      Discord Role
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      sx={fireButtonStyle}
                      className="!font-[0.8vw] !bg-[#FF2D2D] hover:!bg-[#FF2D2D] !rounded-[0.5vw] !text-white"
                    >
                      Fire
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
