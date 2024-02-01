import { getProjectForFounder } from "@/lib/NexusProgram/project/utils/get_projects";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function pay() {
  const anchorWallet = useAnchorWallet();
  const wallet = useWallet();
  const { connection } = useConnection();
  const [projects, setProjects] = useState<any[]>([]);

  const get_project = async () => {
    try {
      console.log("_projects");
      const _projects = await getProjectForFounder(
        connection,
        anchorWallet!,
        "confirmed"
      );
      console.log("_projects");
      console.log(_projects);
      setProjects(_projects);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;
    get_project();
  }, [anchorWallet]);

  const router = useRouter();
  return (
    <div className="w-full md:w-[84vw] py-[5vw] float-right">
      <Head>
        <title>Pay Staffs</title>
      </Head>
      <div className="w-[90vw] md:w-[60vw] mx-auto">
        <div className="text-black text-[4vw] md:text-[2.4vw]">My Projects</div>
        {projects.map((project) => (
          <div
            onClick={() =>
              router.push("/payment/pay/" + project.pubkey.toBase58())
            }
            className="my-[3vw] md:my-[2vw] rounded-[0.5vw] bg-black flex justify-between items-center p-[3vw] text-[5vw] md:text-[3vw] font-semibold"
          >
            <div>{project.name}</div>
            <div>
              <div className="text-[#00ff47]">{project.members}</div>
              <div className="text-[3vw] md:text-[1.5vw]">Staffs</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
