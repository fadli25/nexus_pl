import { approve_apply } from "@/lib/NexusProgram/project/approve_apply";
import { reject_apply } from "@/lib/NexusProgram/project/reject_apply";
import { getApplyForProject } from "@/lib/NexusProgram/project/utils/get_apply_for_project";
import { getProjectForFounder } from "@/lib/NexusProgram/project/utils/get_projects";
import { getAllRoles } from "@/lib/NexusProgram/project/utils/get_roles";
import { MuiButtonAprove, MuiButtonReject } from "@/pages/freelance/outgoing";
import { Button } from "@mui/material";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

export default function incoming() {
  const router = useRouter();
  const data = [1, 2, 3];

  const [projects, setProjects] = useState<any[]>();
  const [role_filter, setRoleFilter] = useState<string>("null");

  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();

  const get_projects = async () => {
    try {
      const projects = await getProjectForFounder(
        connection,
        anchorWallet!,
        "confirmed"
      );

      await Promise.all(
        projects.map(async (project, i) => {
          const applays = await getApplyForProject(
            connection,
            project.pubkey,
            "confirmed"
          );
          console.log("applays");
          console.log(applays);
          projects[i].role = [];
          projects[i].applys = applays;
          await new Promise((resolve) => setTimeout(resolve, 1000)); // 3 sec
        })
      );
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

  const approve = async (i: number, j: number) => {
    try {
      if (!anchorWallet) return;
      await approve_apply(
        anchorWallet,
        connection,
        projects![i].pubkey,
        projects![i].applys[j].rolePubkey,
        projects![i].applys[j].user,
        projects![i].applys[j].pubkey
      );
    } catch (e) {
      console.log(e);
    }
  };

  const reject = async (i: number, j: number) => {
    try {
      if (!anchorWallet) return;
      await reject_apply(
        anchorWallet,
        connection,
        projects![i].pubkey,
        projects![i].applys[j].rolePubkey,
        projects![i].applys[j].pubkey
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="py-[4vw]">
      {projects &&
        projects.map((project: any, i: number) => (
          <div>
            <div className="w-[90vw] md:w-[64vw]  mx-auto bg-black rounded-[1vw] px-[2vw] py-[1vw] flex justify-between">
              <div>
                <div className="text-[5vw] md:text-[3vw] fontPopSemibold">
                  {project.name}
                </div>
                <div className="text-[3vw] md:text-[1vw] font-semibold text-[#00ff47]">
                  50 Incoming Application
                </div>

                {/* <div className="text-[4vw] md:text-[1.5vw] font-semibold text-[#00ff47] mt-[3vw]">
              Collab Manager{" "}
              <span className="text-white  text-[3vw] md:text-[1.4vw] px-[0.7vw] border border-white rounded-md font-sans">
                8
              </span>
            </div> */}
              </div>

              <div className="text-[4vw] md:text-[2vw] text-[#00ff47] pb-[2vw]">
                <div className="text-white fontPopSemibold">Roles Needed</div>
                <div className="mt-[0.6vw] text-[2vw] md:text-[1.4vw] flex flex-col items-start gap-y-[0.5vw]">
                  {project.role.map((rl: any) => (
                    <div
                      onClick={() => {
                        console.log(rl.role);
                        if (role_filter && rl.role == role_filter) {
                          console.log("");
                          setRoleFilter("null");
                        } else {
                          setRoleFilter(rl.role);
                        }
                      }}
                    >
                      <ButtonMotion>{rl.role}</ButtonMotion>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {(role_filter !== "null"
              ? project.applys.filter((rol: any) => rol.role == role_filter)
              : project.applys
            ).map((el: any, j: number) => (
              <div
                key={j}
                className="w-[80vw] md:w-[54vw] mx-auto mt-[3vw] md:mt-[2vw] text-black border border-black rounded-[1vw] px-[2vw] py-[1.4vw] flex justify-between items-center"
              >
                <div className="flex items-center gap-x-[1vw]">
                  <div className="w-[15vw] md:w-[7vw] h-[15vw] md:h-[7vw] bg-black/80 rounded-full"></div>
                  <div>
                    <div className=" font-semibold text-[4vw] md:text-[2vw] underline">
                      {el.name}
                    </div>
                    <div className="text-[2.4vw] md:text-[1.4vw]">
                      {el.role}
                    </div>
                  </div>
                </div>
                <div>
                  <MuiButtonAprove
                    onClick={() => {
                      approve(i, j);
                    }}
                  >
                    Approve
                  </MuiButtonAprove>
                  <MuiButtonReject
                    onClick={() => {
                      reject(i, j);
                    }}
                  >
                    Reject
                  </MuiButtonReject>

                  {/* <Button1 onClick={() => router.push("/founder/haire/profile")}>
                Read Cover Letter
              </Button1> */}
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

interface IconProps {
  children: ReactNode;
  onClick?: () => void;
}

export function ButtonMotion({ children }: IconProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className="border border-[#00ff47] rounded-[0.4vw] text-[3vw] md:text-[1vw] w-full text-center px-[1vw] py-[0.2vw]"
    >
      {children}
    </motion.button>
  );
}

export function Button1({ children, onClick }: IconProps) {
  return (
    <Button
      sx={{
        padding: "0.7vw 1.5vw",
        borderRadius: "0.6vw",
        fontSize: "0.8vw",
        color: "#000",
        background: "#00ff47",
        textTransform: "none",
        fontWeight: "500",
        ":hover": {
          background: "#00ff47",
        },
        "@media (max-width:767px)": {
          fontSize: "2.7vw",
          padding: "0.7vw 2.5vw",
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
