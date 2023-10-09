import { invites } from "@/lib/NexusProgram/invite/init_invite";
import { get_project_info } from "@/lib/NexusProgram/project/utils/project_info";
import { getUsers } from "@/lib/NexusProgram/user/utils/get_users";
import { Button } from "@mui/material";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
type Inv = {
  project: string;
}

export default function invite(
  { project }: Inv
) {

  const { connection } = useConnection()
  const anchorWallet = useAnchorWallet();

  const [users, setUsers] = useState<any[]>()
  const [projects, setProjects] = useState<(any | null)>()
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");

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
  const inputStyle =
    "bg-none border-[0.15vw] mt-[0.6vw] w-[20vw] px-[1vw] text-[0.9vw] py-[0.8vw] border-black rounded-[0.4vw] outline-none focus:border-red-600 focus:scale-[101%] transition-all";

  const buttonStyleClass = "bg-[#00ff47] hover:bg-[#00ff47]";

  const imageProject =
    "https://s3-alpha-sig.figma.com/img/d140/fc3b/b8c33afb32618666e5c141edc13bbc0c?Expires=1693785600&Signature=IDQu3TiQtMIE-usGR0i-st9egt2VnZY0yTRc~V8ESwdLAkhfPwaMGZtwD15LZHMiVEe~qpQXCi4XIdj8fGmq5Tc-4Bl6ZsayB9OTG7a47oq1OBGwB89KLGDdiGmJZJvYRdTABH0PuR-4gaduqerStTvuW3rq1HUkY2tk2uCEFHZ7BsqELpNpeDzmdqAoETwKQmsLCtwtkrpYmfVCdPas-Qyc6jmLbxbEEWcrQGDMKVzFo8ZuyjMUuus6M9XIzXYLdJlxVGMI0153f4EZNCwQCletEt5f~3lwm8TtmrxoSEl-gVrZitQPZsgEyryZuAcLFQz8LRwy1W7onehYD1pKqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const solanaIcon = "https://cryptologos.cc/logos/solana-sol-logo.png";


  const get_user = async () => {
    try {
      const _users = await getUsers(
        connection,
        "confirmed"
      );
      console.log(_users);
      setUsers(_users);
    } catch (e) {
      console.log(e)
    }
  }


  const get_project = async () => {
    try {
      const _projects = await get_project_info(
        anchorWallet,
        connection,
        project
      );
      setProjects(_projects);
    } catch (e) {
      console.log(e);
    }
  }


  const invitation = async () => {
    try {
      let User_pubkeu: any;

      users?.map((user) => {
        console.log(user.name);
        if (user.name == name) {
          console.log("exist");
          User_pubkeu = user.address
        }
      })
      console.log(User_pubkeu)
      if (!User_pubkeu) {
        return console.log("user not found")
      }

      await invites(
        anchorWallet,
        connection,
        project,
        User_pubkeu,
        role
      )

    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    if (!anchorWallet) return;
    console.log("strat")
    get_user();
    get_project()
  }, [anchorWallet])

  return (
    <div className="px-[10vw] pt-[3vw] text-black">
      <div className="text-center text-[2vw] fontPopSemibold">
        Invite new staff to your project
      </div>
      <div className="w-[61vw] mx-auto">
        <div className="w-[54vw] relative">
          <div className="absolute top-[-24%] right-[-9vw] border-[0.4vw] border-white rounded-full">
            <Image
              className="w-[17vw] rounded-full border-[0.5vw] "
              src={imageProject}
              width={9000}
              height={2000}
              alt=""
            />
          </div>

          <div className="mt-[3vw] text-white bg-black rounded-[1vw] min-h-[20vw] w-full p-[1vw]">
            <div className="text-[3vw] fontPopSemibold mt-[1vw]">
              {projects && projects.name}
            </div>
            <div className="text-[1vw] text-[#00ff47]">Project Description</div>
            <div className="flex justify-start gap-x-[2vw] items-end">
              <div className="bg-[#191919] rounded-[0.7vw] w-[40vw] mt-[0.8vw] h-[10vw]"></div>
              <div className="flex items-center gap-x-[0.9vw] border-[0.19vw] border-white rounded-[0.5vw] py-[0.7vw] px-[1vw]">
                <div className="w-[2vw]">
                  <Image src={solanaIcon} width={8999} height={2000} alt="" />
                </div>
                <div className="w-[2vw]">
                  <Image src={solanaIcon} width={8999} height={2000} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[5vw] fontPopSemibold">
        <div className="flex items-center gap-x-[1vw] text-[2vw]">
          <div className="w-[27vw]">User Name</div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
            className={`${inputStyle}`}
          />

        </div>
        <div className="flex mt-[2vw] items-center gap-x-[1vw] text-[2vw]">
          <div className="w-[27vw]">Role</div>
          <input
            onChange={(e) => setRole(e.target.value)}
            value={role}
            placeholder="Role"
            className={`${inputStyle}`}
          />
        </div>
      </div>
      <div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            invitation()
          }}
          variant="contained"
          sx={buttonStyle}
          className={`${buttonStyleClass}`}
        >
          Invite
        </Button>
      </div>
    </div>
  );
}
