import { getProjectUsers } from "@/lib/NexusProgram/project/utils/get_project_users";
import { get_project_info } from "@/lib/NexusProgram/project/utils/project_info";
import { Button, FormControlLabel, Stack } from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdAddCircle, MdOutlineArrowDropDownCircle } from "react-icons/md";

import { fire } from "@/lib/NexusProgram/invite/fire";
import AptosIcon from "@/public/AptosWhite.svg";
import solanaIcon from "@/public/Solana.svg";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

type Project = {
  project: string;
};

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

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
    "@media (max-width:767px)": {
      fontSize: "4vw",
      width: "44vw",
      borderRadius: "1.2vw",
    },
  };

  const buttonStyleClass = "bg-[#00ff47] hover:bg-[#00ff47]";

  const imageProject =
    "https://media.discordapp.net/attachments/1085293900706627595/1216090924862406678/Frame_52351_1.png?ex=65ff1fee&is=65ecaaee&hm=7be1ea6efe7966eb223dea2bccd63a6302b1bc6bace1ab9c4af691f26ee5c9ec&=&format=webp&quality=lossless&width=781&height=642";

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
  const wallet = useWallet()
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

  const firing = async (i: number) => {
    try {
      await fire(anchorWallet, connection, users[i].pubkey, users[i].project, wallet);
    } catch (e) {
      console.log(e);
    }
  };

  const router = useRouter();
  console.log(users);
  users.map((el, index) => console.log(el.name));
  return (
    <div className="px-[5vw] pt-[3vw] text-black">
      <div className="w-[97vw] md:w-[61vw] mx-auto">
        <div className="w-[92.4vw] md:w-[54vw] relative">
          <div className="absolute top-[-2vw] right-0 md:right-[-9vw] w-fit rounded-full border-white border-[1vw] md:border-[0.5vw]">
            <Image
              className="w-[40vw] h-[40vw] md:w-[15vw] md:h-[15vw] object-cover object-center rounded-full "
              src={imageProject}
              width={9000}
              height={2000}
              alt=""
            />
          </div>
          <div className="flex flex-col md:flex-row gap-y-[4vw] md:gap-y-0 justify-start gap-x-[0.7vw]">
            <Stack className="flex-col md:!flex-row gap-[3vw] md:gap-[1vw]">
              <Link href={`/founder/project/settings?project=${project}`}>
                <Button
                  variant="contained"
                  sx={buttonStyle}
                  className={`${buttonStyleClass}`}
                >
                  Project Settings
                </Button>
              </Link>

              <Button
                variant="contained"
                sx={buttonStyle}
                className={`${buttonStyleClass}`}
              >
                Feature Project
              </Button>

              <Button
                variant="contained"
                sx={buttonStyle}
                className={`${buttonStyleClass}`}
              >
                Use Rebirth Tower
              </Button>
            </Stack>
            {/* <div>
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
            </div> */}
          </div>
          {projecte && (
            <div className="mt-[4vw] md:mt-[1vw] text-white bg-black rounded-[1vw] min-h-[20vw] w-full p-[4vw] md:p-[1vw]">
              <div className="text-[9vw] md:text-[3vw] fontPopSemibold mt-[1vw]">
                {projecte.name}
              </div>
              <div className="text-[6vw] md:text-[1vw] text-[#00ff47]">
                Project Description
              </div>
              <div className="flex justify-start gap-x-[2vw] items-end">
                <div className="rounded-[0.7vw] w-[70vw] md:w-[40vw] mt-[3vw] md:mt-[0.8vw] h-[25vw] md:h-[10vw] p-[3vw] md:p-[1vw] bg-white text-black text-[2.4vw] md:text-[1vw] font-semibold">
                  {/* {projecte.projectOverview} */}
                  {projecte.projectOverview}
                </div>
                <div className="flex items-center gap-x-[0.9vw] border-[0.19vw] border-white rounded-[0.5vw] py-[0.7vw] px-[1vw]">
                  {/* <div className="w-[2vw]">
                  <Image src={solanaIcon} width={8999} height={2000} alt="" />
                </div> */}
                  <div className="w-[6vw] md:w-[3vw]">
                    <Image src={solanaIcon} width={8999} height={2000} alt="" />
                  </div>
                  <div className="w-[5vw] md:w-[2.5vw]">
                    <Image src={AptosIcon} width={8999} height={2000} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {projecte && (
        <div className="w-full mt-[5vw] border-black border-[0.2vw] px-[3vw] py-[1.8vw] fontPopSemibold gap-y-[4vw] md:gap-y-0 rounded-[0.8vw] flex flex-col md:flex-row gap-x-[2vw] items-center">
          <div className="w-fit flex items-end gap-x-[2vw] mr-auto flex-row md:flex-col">
            <div className="w-full">
              <div className="text-[4vw] md:text-[0.8vw]">Team Members</div>
              <div className="flex items-end px-[1vw] border-[0.1vw] justify-between w-full border-black rounded-[0.4vw]">
                <div className=" text-[16vw] md:text-[9vw]">
                  {projecte.members}
                </div>
                <div className="mb-[1vw]">
                  <div className="text-[3vw] md:text-[0.8vw]">Turn Over</div>
                  <div className="px-[1vw] border text-center border-black rounded-[0.4vw] text-[5vw] md:text-[2vw]">
                    --
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-[1vw] mt-[1vw]">
              <div className="flex gap-x-[1vw] text-[2.3vw] md:text-[0.8vw] border w-[30vw] md:w-[9vw] rounded-[0.4vw] px-[1vw] py-[0.5vw] border-black items-center">
                <div>
                  <FaDiscord className="text-black text-[5.5vw] md:text-[2vw]" />
                </div>
                <div>
                  <div>-- Online</div>
                  <div>-- Offline</div>
                </div>
              </div>
              <div className="text-[4.5vw] md:text-[1.5vw] border border-black px-[1vw] py-[0.5vw] rounded-[0.4vw]">
                Notion
              </div>
            </div>
          </div>
          <div className="w-full border border-black rounded-[0.4vw] p-[3vw] md:p-[1vw]">
            <div className="flex items-center justify-between">
              <div className="text-[5vw] md:text-[1.5vw]">
                Recruiting: <span className="font-sans">Yes </span>{" "}
                <span>
                  <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    label=""
                  />
                </span>
              </div>
              <motion.button
                onClick={() =>
                  router.push("/founder/project/addRole/" + project)
                }
                whileTap={{ scale: 0.98 }}
                className="text-[2.4vw] md:text-[0.9vw] font-semibold"
              >
                + Add new job roles
              </motion.button>
            </div>
            <div className="flex flex-col md:flex-row gap-y-[3vw] items-center gap-x-[1vw] mt-[4vw] md:mt-[1.3vw] text-[15vw] md:text-[5vw] text-center">
              <div className="border border-black rounded-[0.4vw] px-[1vw] py-[2vw] md:py-[0.4vw] w-full h-full">
                <div>--</div>
                <div className="text-[5vw] md:text-[1.2vw]">
                  Incomming <br /> Application
                </div>
              </div>
              <div className="border border-black rounded-[0.4vw] px-[1vw] py-[2vw] md:py-[0.4vw] w-full h-full">
                <div>--</div>
                <div className="text-[5vw] md:text-[1.2vw] text-red-600">
                  Rejected <br /> Application
                </div>
              </div>
              <div className="border border-black rounded-[0.4vw] px-[1vw] py-[2vw] md:py-[0.4vw] w-full h-full">
                <div>--</div>
                <div className="text-[5vw] md:text-[1.2vw]">
                  Invitions <br /> Sent
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mt-[5vw] border-[0.16vw] border-black rounded-[1vw] p-[2vw]">
        <div className="flex justify-between items-center">
          <div className="text-[4vw] md:text-[1.7vw] fontPopSemibold">
            Team Management
          </div>
          <motion.button
            onClick={() => router.push("/founder/project/invite/" + project)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="text-[5vw] md:text-[2.5vw] text-black"
          >
            <MdAddCircle />
          </motion.button>
        </div>

        <div className="mt-[3vw] flex flex-col items-center">
          {users &&
            users.map((user, index) => (
              <div
                key={index}
                className="relative h-fit my-[3vw] md:my-[1vw] w-full"
              >
                <div className="items-center z-10 text-black border-[0.1vw] py-[1.5vw] border-black rounded-[0.5vw] min-h-[8vw] flex justify-between px-[2vw]">
                  <div className="flex itmes-center gap-x-[2vw] md:gap-x-[1vw]">
                    <div className="grid grid-cols-2 gap-[0.5vw] place-content-center">
                      <div className="bg-black rounded-full p-[1vw] md:p-[0.35vw] h-fit"></div>
                      <div className="bg-black rounded-full p-[1vw] md:p-[0.35vw] h-fit"></div>
                      <div className="bg-black rounded-full p-[1vw] md:p-[0.35vw] h-fit"></div>
                      <div className="bg-black rounded-full p-[1vw] md:p-[0.35vw] h-fit"></div>
                      <div className="bg-black rounded-full p-[1vw] md:p-[0.35vw] h-fit"></div>
                      <div className="bg-black rounded-full p-[1vw] md:p-[0.35vw] h-fit"></div>
                    </div>
                    <div className="bg-white/60 rounded-full w-[16vw] md:w-[6vw] h-[16vw] md:h-[6vw]">
                      <Image
                        src={imageProject}
                        width={1000}
                        height={200}
                        className="object-cover object-center"
                        alt=""
                      />
                    </div>
                    <div>
                      <div
                        onClick={() => router.push("/founder/haire/" + user.user.toBase58())}
                        className="text-[5vw] md:text-[2vw] fontPopSemibold underline cursor-pointer">
                        {user.name}
                      </div>
                      <div className="text-[3vw] md:text-[1.4vw]">
                        {user.projectRole}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center flex-col md:flex-row gap-x-[3vw] gap-y-[2vw] md:gap-y-0">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="font-semibold text-[3vw] md:text-[1.4vw]"
                    >
                      Click to view more
                    </motion.button>
                    <div>
                      <Button
                        onClick={() => firing(index)}
                        variant="contained"
                        sx={fireButtonStyle}
                        className="!text-[3vw] md:!text-[0.8vw] !bg-[#FF2D2D] !px-[4vw] md:!px-[2vw] hover:!bg-[#FF2D2D] !rounded-[0.5vw] !text-white"
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
    </div>
  );
}
