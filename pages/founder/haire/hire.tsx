import { invites } from "@/lib/NexusProgram/invite/init_invite";
import { getProjectForFounder } from "@/lib/NexusProgram/project/utils/get_projects";
import { getRolesForProject } from "@/lib/NexusProgram/project/utils/get_role";
import { get_userr_info } from "@/lib/NexusProgram/user/utils/get_userr_info";
import { get_user_info } from "@/lib/NexusProgram/user/utils/user_info";
import { notify_delete, notify_error, notify_laoding, notify_success } from "@/pages/profile";
import aptosIcon from "@/public/AptosWhite.svg";
import polygonIcon from "@/public/Polygon.svg";
import solanaIcon from "@/public/Solana.svg";
import { Button } from "@mui/material";
import { web3 } from "@project-serum/anchor";
import { set } from "@project-serum/anchor/dist/cjs/utils/features";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import Head from "next/head";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";

export default function hire() {
  const searchParams = useSearchParams();
  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();

  const wallet = useWallet();

  const [user, setUser] = useState<string>();
  const [user_info, setUserInfo] = useState<any>();
  const [select1, setSelect1] = useState<number>();
  const [select2, setSelect2] = useState<number>();
  const [projects, setProjects] = useState<any[]>();
  const [roles, setRoles] = useState<any[]>();
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    if (!anchorWallet) return;
    const _user = searchParams.get("user");
    setUser(_user!);
    get_project(_user!);
    console.log(_user);
  }, [anchorWallet]);

  const get_project = async (_user: string) => {
    try {
      notify_laoding("Sending Job invitation...");
      console.log("_projects");
      const _projects = await getProjectForFounder(
        connection,
        anchorWallet!,
        "confirmed"
      );
      const role: any[] = [];
      await Promise.all(
        _projects.map(async (prj) => {
          const roll = await getRolesForProject(
            connection,
            prj.pubkey,
            "confirmed"
          );
          role.push(...roll);
        })
      );


      const infos = await get_userr_info(anchorWallet, connection, _user)
      console.log(infos)
      setUserInfo(infos)

      console.log(role);
      setRoles(role);
      console.log("_projects");
      console.log(_projects);
      setProjects(_projects);
      notify_delete()
      notify_success("Job invitation Sent!")
    } catch (e) {
      notify_delete()
      notify_error("Transaction Failed!")
      console.log(e);
    }
  };

  const invite = async () => {
    try {

      if (role.length == 0) return;

      console.log("start");
      console.log(select1);
      console.log(select2);
      // if (select1! >= 0 && select2! >= 0) {
      console.log("nice");
      await invites(
        anchorWallet,
        connection,
        projects![0].pubkey,
        new web3.PublicKey(user!),
        role
      );
      // }
    } catch (e) {
      console.log(e);
    }
  };

  const img =
    "https://media.discordapp.net/attachments/1085293900706627595/1216090924862406678/Frame_52351_1.png?ex=65ff1fee&is=65ecaaee&hm=7be1ea6efe7966eb223dea2bccd63a6302b1bc6bace1ab9c4af691f26ee5c9ec&=&format=webp&quality=lossless&width=781&height=642";

  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Founder | Hire</title>
      </Head>
      <div className="w-[98vw] md:w-[56vw] mx-auto bg-black rounded-[1.4vw] px-[5vw] md:px-[2vw] py-[3vw] md:py-[1vw] flex justify-between gap-x-[3vw] md:gap-x-0">
        <div className="flex flex-col items-center">
          <div className="rounded-full border-[0.12vw] border-[#00ff47]">
            <Image
              src={img}
              width={2000}
              height={2000}
              alt=""
              className="w-[26vw] md:w-[12vw] h-[26vw] md:h-[12vw] object-cover object-center rounded-full"
            />
          </div>
          <div className="mt-[3vw] md:mt-[1vw] flex justify-center items-center gap-x-[0.2vw]">
            <div>
              <Image
                src={solanaIcon}
                width={2000}
                height={2000}
                alt=""
                className="w-[6vw] md:w-[2.8vw]"
              />
            </div>
            <div>
              <Image
                src={aptosIcon}
                width={2000}
                height={2000}
                alt=""
                className="w-[5vw] md:w-[2vw]"
              />
            </div>
            <div>
              <Image
                src={polygonIcon}
                width={2000}
                height={2000}
                alt=""
                className="w-[6vw] md:w-[2.8vw]"
              />
            </div>
          </div>
        </div>
        <div className="w-[67%]">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[6vw] md:text-[2.5vw] fontPopSemibold">
                {user_info && user_info.name}
              </div>
              <div className="text-[#00ff47] text-[4vw] md:text-[1.5vw]">
                {user_info && user_info.roles}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-[#00ff47] text-[3vw] md:text-[1.5vw]">
                4.6
              </div>
              <div className="text-black text-[2vw] md:text-[0.8vw] px-[2vw] py-[0.7vw] bg-[#1DA1F2]">
                {user_info && user_info.levelOfExpertise}
              </div>
            </div>
          </div>
          <div className="mt-[3vw] md:mt-[1vw] w-full h-[12vw] rounded-[1.4vw] px-[2vw] py-[1vw] bg-[#282828] text-[3.4vw] md:text-[1vw] text-white/80">
            {user_info && user_info.profileOverview}
          </div>
        </div>
      </div>
      <div className="w-[70vw] md:w-[40vw] mx-auto md:h-[6vw] border-[0.12vw] border-black rounded-b-[1.4vw] bg-[#00ff47] text-black text-[2.6vw] md:text-[0.9vw] grid place-items-center p-[2vw] md:p-0">
        {user_info && <div>
          You are about to hire {user_info.name}, please confirm all details before
          approval
        </div>}
      </div>
      <div className="mt-[6vw] md:mt-[4vw] w-[80vw] md:w-[50vw] text-black text-[3.5vw] md:text-[1.8vw] mx-auto">
        <div>
          <div>Select Project</div>
          <select
            name="select project"
            className="px-[2vw] mt-[1vw] text-[3vw] md:text-[1vw] rounded-[1vw] py-[1.6vw] w-full border-[0.12vw] border-black"
            id=""
          >
            {projects &&
              projects.map((project, i) => (
                <option
                  key={i}
                  onClick={() => {
                    console.log(i);
                    setSelect1(i);
                  }}
                >
                  {project.name}
                </option>
              ))}
          </select>
        </div>
        <div className="mt-[5vw] md:mt-[2vw]">
          <div>Select Role</div>
          <input
            onChange={(e) => setRole(e.target.value)}
            type="text"
            className="px-[1vw] outline-none py-[0.4vw] border-[0.1vw] border-black rounded-[0.5vw]"
          />
        </div>
      </div>
      <div
        onClick={() => {
          invite();
        }}
        className="mt-[4vw] flex justify-center"
      >
        <Button2>Hire</Button2>
      </div>
    </div>
  );
}

interface IconProps {
  children: ReactNode;
  onClick?: () => void;
}

export function Button2({ children, onClick }: IconProps) {
  return (
    <Button
      sx={{
        padding: "0.7vw 2vw",
        borderRadius: "0.6vw",
        fontSize: "1.1vw",
        color: "#000",
        background: "#00ff47",
        textTransform: "none",
        ":hover": {
          background: "#00ff47",
        },
        "@media (max-width:767px)": {
          fontSize: "3vw",
        },
      }}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
