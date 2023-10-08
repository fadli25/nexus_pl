import { getProjectForFounder } from "@/lib/NexusProgram/project/utils/get_projects";
import { Button } from "@mui/material";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AddProject from "./AddProject";

export default function Projects() {
  const styleButton1 = {
    fontSize: "1vw",
    padding: "0.7vw 2vw",
    borderRadius: "0.6vw",
    background: "#00ff47",
    textTransform: "none",
    color: "#000",
    ":hover": {
      background: "#00ff47",
    },
    "@media (max-width:767px)": {
      fontSize: "2.4vw",
      padding: "0.7vw 5vw",
      borderRadius: "1vw",
    },
  };
  const styleButton2 = {
    fontSize: "1vw",
    padding: "0.7vw 2vw",
    borderRadius: "0.6vw",
    background: "#FF2D2D",
    textTransform: "none",
    color: "#fff",
    ":hover": {
      background: "#FF2D2D",
    },
    "@media (max-width:767px)": {
      fontSize: "2.4vw",
      padding: "0.7vw 5vw",
      borderRadius: "1vw",
    },
  };
  const styleButtonHiring = {
    fontSize: "0.9vw",
    padding: "0.7vw 2vw",
    borderRadius: "0.6vw",
    background: "#00ff47",
    textTransform: "none",
    color: "#000",
    ":hover": {
      background: "#00ff47",
    },
    "@media (max-width:767px)": {
      fontSize: "2vw",
      padding: "0.7vw 5vw",
      borderRadius: "1vw",
    },
  };
  const styleButtonNotHiring = {
    fontSize: "0.9vw",
    padding: "0.7vw 2vw",
    borderRadius: "0.6vw",
    background: "#FF2D2D",
    textTransform: "none",
    color: "#fff",
    ":hover": {
      background: "#FF2D2D",
    },
    "@media (max-width:767px)": {
      fontSize: "2vw",
    },
  };
  const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";
  const anchorWallet = useAnchorWallet()
  const wallet = useWallet()
  const connection = new Connection(clusterApiUrl("devnet"));
  const [projects, setProjects] = useState<any[]>([])


  const get_project = async () => {
    try {

      console.log("_projects")
      const _projects = await getProjectForFounder(
        connection,
        anchorWallet!,
        "confirmed"
      )


      console.log("_projects")
      console.log(_projects)
      setProjects(_projects)

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!anchorWallet) return;
    get_project();
  }, [anchorWallet])


  function notHairing() {
    return (
      <div
        onClick={() => router.push("/founder/project")}
        className="w-full rounded-[1vw] md:rounded-none py-[2vw] px-[2.4vw] mt-[2vw] bg-[#000] text-white flex justify-between items-center"
      >
        <div>
          <div className="text-[5vw] md:text-[3vw] fontPopSemibold flex flex-col items-start w-[39vw] md:w-[24vw]">
            <div>Old </div>
            <div className="flex items-center gap-x-[0.4vw] ">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="w-[5vw] md:w-[3vw]"
              >
                <Image src={solanaIcon} width={9000} height={900} alt="" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="w-[5vw] md:w-[3vw]"
              >
                <Image src={solanaIcon} width={9000} height={900} alt="" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="text-[2vw] md:text-[1vw] text-center w-[8vw]">
          <div className="text-[#00ff47]">5000</div>
          <div>Twitter</div>
        </div>
        <div className="text-[2vw] md:text-[1vw] text-center w-[8vw]">
          <div className="text-[#00ff47]">5000</div>
          <div>Discord</div>
        </div>
        <div className="text-[2vw] md:text-[1vw] text-center w-[8vw]">
          <div className="text-[#00ff47] text-[1.8vw]">10</div>
          <div>Staffs</div>
        </div>
        <div className="w-[16vw] flex justify-end">
          <Button
            variant="contained"
            sx={styleButtonNotHiring}
            className="bg-[#FF2D2D] hover:bg-[#FF2D2D]"
          >
            Not Hiring
          </Button>
        </div>
      </div>
    );
  }
  const [addProject, setAddProject] = useState(true);
  const router = useRouter();
  return (
    <div className="px-[3vw] py-[3vw] relative">
      <div className="flex items-center gap-x-[2vw] md:gap-x-[1vw]">
        <div>
          <Button
            variant="contained"
            sx={styleButton1}
            className="bg-[#00ff47] hover:bg-[#00ff47]"
            onClick={() => router.push("/founder/project/addproject")}
          >
            Add new project
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            sx={styleButton2}
            className="bg-[#FF2D2D] hover:bg-[#FF2D2D]"
          >
            Delete Project
          </Button>
        </div>
      </div>
      {/* Projects */}
      {projects && projects.map((project, i) => <div>
        <div
          key={i + 1}
          onClick={() => router.push("/founder/project/" + project.pubkey.toBase58())}
          className="w-full rounded-[1vw] md:rounded-none py-[2vw] px-[2.4vw] mt-[2vw] bg-[#000] text-white flex justify-between items-center"
        >
          <div>
            <div className="text-[5vw] md:text-[3vw] fontPopSemibold flex flex-col items-start w-[39vw] md:w-[24vw]">
              <div>{project.name}</div>
              <div className="flex items-center gap-x-[0.4vw] ">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-[5vw] md:w-[3vw]"
                >
                  <Image src={solanaIcon} width={9000} height={900} alt="" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-[5vw] md:w-[3vw]"
                >
                  <Image src={solanaIcon} width={9000} height={900} alt="" />
                </motion.button>
              </div>
            </div>
          </div>
          <div className="text-[2vw] md:text-[1vw] text-center w-[8vw]">
            <div className="text-[#00ff47]">5000</div>
            <div>Twitter</div>
          </div>
          <div className="text-[2vw] md:text-[1vw] text-center w-[8vw]">
            <div className="text-[#00ff47]">5000</div>
            <div>Discord</div>
          </div>
          <div className="text-[2vw] md:text-[1vw] text-center w-[8vw]">
            <div className="text-[#00ff47] text-[1.8vw]">{project.members}</div>
            <div>Staffs</div>
          </div>
          <div className="w-[16vw] flex justify-end">
            <Button
              variant="contained"
              sx={project.hiring ? styleButtonHiring : styleButtonNotHiring}
              className="bg-[#00ff47] hover:bg-[#00ff47]"
            >
              {project.hiring ? "Hiring" : "Not Hiring"}
            </Button>
          </div>
        </div>
      </div>)}
    </div>
  );
}
