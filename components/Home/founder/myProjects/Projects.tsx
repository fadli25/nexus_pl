import { Button } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AddProject from "./AddProject";
import { useRouter } from "next/router";

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
  };
  const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";
  function hairing() {
    return (
      <div
        onClick={() => router.push("/founder/project")}
        className="w-full py-[1.4vw] px-[2.4vw] mt-[2vw] bg-[#000] text-white flex justify-between items-center"
      >
        <div>
          <div className="text-[3vw] fontPopSemibold flex flex-col items-start w-[24vw]">
            <div>Bone Shamans</div>
            <div className="flex items-center gap-x-[0.4vw] ">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="w-[3vw]"
              >
                <Image src={solanaIcon} width={9000} height={900} alt="" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="w-[3vw]"
              >
                <Image src={solanaIcon} width={9000} height={900} alt="" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="text-[1vw] text-center w-[8vw]">
          <div className="text-[#00ff47]">5000</div>
          <div>Twitter</div>
        </div>
        <div className="text-[1vw] text-center w-[8vw]">
          <div className="text-[#00ff47]">5000</div>
          <div>Discord</div>
        </div>
        <div className="text-[1vw] text-center w-[8vw]">
          <div className="text-[#00ff47] text-[1.8vw]">10</div>
          <div>Staffs</div>
        </div>
        <div className="w-[9vw] flex justify-end">
          <Button
            variant="contained"
            sx={styleButtonHiring}
            className="bg-[#00ff47] hover:bg-[#00ff47]"
          >
            Hiring
          </Button>
        </div>
      </div>
    );
  }
  function notHairing() {
    return (
      <div className="w-full mb-[10vw] py-[1.4vw] px-[2.4vw] mt-[2vw] bg-[#000] text-white flex justify-between items-center">
        <div>
          <div className="text-[3vw] fontPopSemibold flex flex-col items-start w-[24vw]">
            <div>The Old Ones</div>
            <div className="flex items-center gap-x-[0.4vw] ">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="w-[3vw]"
              >
                <Image src={solanaIcon} width={9000} height={900} alt="" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="w-[3vw]"
              >
                <Image src={solanaIcon} width={9000} height={900} alt="" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="text-[1vw] text-center w-[8vw]">
          <div className="text-[#00ff47]">50000</div>
          <div>Twitter</div>
        </div>
        <div className="text-[1vw] text-center w-[8vw]">
          <div className="text-[#00ff47]">50000</div>
          <div>Discord</div>
        </div>
        <div className="text-[1vw] text-center w-[8vw]">
          <div className="text-[#00ff47] text-[1.8vw]">20</div>
          <div>Staffs</div>
        </div>
        <div className="w-[9vw] flex justify-end">
          <Button
            variant="contained"
            sx={styleButtonHiring}
            className="bg-[#FF2D2D] hover:bg-[#FF2D2D] text-white"
          >
            Note Hiring
          </Button>
        </div>
      </div>
    );
  }
  const [addProject, setAddProject] = useState(true);
  const router = useRouter();
  return (
    <div className="px-[3vw] pt-[3vw] relative">
      <div className="flex items-center gap-x-[1vw]">
        <div>
          <Button
            variant="contained"
            sx={styleButton1}
            className="bg-[#00ff47] hover:bg-[#00ff47]"
            onClick={() => router.push("/founder/addproject")}
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
      <div>{hairing()}</div>
      <div>{notHairing()}</div>
    </div>
  );
}
