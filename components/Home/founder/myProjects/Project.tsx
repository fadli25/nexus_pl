import { Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { MdAddCircle, MdOutlineArrowDropDownCircle } from "react-icons/md";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Project() {
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

  function team() {
    return (
      <div className="absolute top-[100%] items-center left-[50%] translate-x-[-50%] z-10 w-[92%] bg-black min-h-[8vw] flex justify-between px-[2vw]">
        <div className="flex itmes-center gap-x-[1vw]">
          <div className="bg-white/60 rounded-full w-[6vw] h-[6vw]"></div>
          <div>
            <div className="text-[2vw] fontPopSemibold underline text-white">
              Manay
            </div>
            <div className="text-[1.4vw] text-[#00ff47]">Community Manager</div>
          </div>
        </div>
        <div className="flex items-center gap-x-[0.7vw]">
          <div>
            <Button
              variant="contained"
              sx={messageButtonStyle}
              className={`${messageButtonStyleClass}`}
            >
              Message
            </Button>
          </div>
          <div>
            <Button variant="outlined" sx={discordButtonStyle} className={``}>
              Discord Role
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={fireButtonStyle}
              className={`${fireButtonStyleClass}`}
            >
              Fire
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const router = useRouter();
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
          <div className="mt-[1vw] text-white bg-black rounded-[1vw] min-h-[20vw] w-full p-[1vw]">
            <div className="text-[3vw] fontPopSemibold mt-[1vw]">
              Bone Shamans
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
      <div className="w-full mt-[5vw] border-black border-[0.2vw] px-[3vw] py-[1vw] fontPopSemibold rounded-[0.8vw]">
        <div className="text-[2vw] mb-[-2vw] pt-[2vw]">Staffs</div>
        <div className=" text-[10vw] underline">10</div>
      </div>
      <div className="mt-[5vw]">
        <div className="flex justify-between">
          <div></div>
          <div className="text-[2.7vw] underline fontPopSemibold">
            Staff Management
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="text-[3.5vw] text-black"
          >
            <MdAddCircle />
          </motion.button>
        </div>
      </div>
      <div className="mt-[3vw]">
        <div className="relative h-fit">
          <div className="w-full border-[0.19vw] px-[2vw] py-[2vw] border-black roundend-[0.6vw] flex justify-between">
            <div className="flex items-center text-[2vw] gap-x-[1vw]">
              <div className="fontPopSemibold">Core Team</div>
              <div>
                <Button
                  variant="contained"
                  sx={buttonStyle}
                  className={`${buttonStyleClass}`}
                  onClick={() => router.push("/founder/invite")}
                >
                  Invite
                </Button>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className={`text-[3vw] text-black `}
              onClick={() => setCoreTeam(!coreTeam)}
            >
              <MdOutlineArrowDropDownCircle />
            </motion.button>
          </div>
          {coreTeam && <div>{team()}</div>}
        </div>
      </div>
      <div className="mt-[10vw]">
        <div className="relative h-fit">
          <div className="w-full border-[0.19vw] px-[2vw] py-[2vw] border-black roundend-[0.6vw] flex justify-between">
            <div className="flex items-center text-[2vw] gap-x-[1vw]">
              <div className="fontPopSemibold">Community Moderators</div>
              <div>
                <Button
                  variant="contained"
                  sx={buttonStyle}
                  className={`${buttonStyleClass}`}
                  onClick={() => router.push("/founder/invite")}
                >
                  Invite
                </Button>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className={`text-[3vw] text-black `}
              onClick={() => setCommuntiy(!community)}
            >
              <MdOutlineArrowDropDownCircle />
            </motion.button>
          </div>
          {community && <div>{team()}</div>}
        </div>
      </div>
    </div>
  );
}
