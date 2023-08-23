import Image from "next/image";
import React from "react";
import { Button } from "@mui/material";

export default function invite() {
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
      <div className="mt-[5vw] fontPopSemibold">
        <div className="flex items-center gap-x-[1vw] text-[2vw]">
          <div className="w-[27vw]">New Role</div>
          <div>
            <Button
              variant="contained"
              sx={buttonStyle}
              className={`${buttonStyleClass}`}
            >
              Invite
            </Button>
          </div>
        </div>
        <div className="flex mt-[2vw] items-center gap-x-[1vw] text-[2vw]">
          <div className="w-[27vw]">Core Team</div>
          <div>
            <Button
              variant="contained"
              sx={buttonStyle}
              className={`${buttonStyleClass}`}
            >
              Invite
            </Button>
          </div>
        </div>
        <div className="flex mt-[2vw] items-center gap-x-[1vw] text-[2vw]">
          <div className="w-[27vw]">Community Moderators</div>
          <div>
            <Button
              variant="contained"
              sx={buttonStyle}
              className={`${buttonStyleClass}`}
            >
              Invite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
