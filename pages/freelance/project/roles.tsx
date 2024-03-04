import { Button, Stack } from "@mui/material";
import Head from "next/head";
import React from "react";
import { PiMapPinFill } from "react-icons/pi";

const styleButton = {
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
    fontSize: "3vw",
    padding: "0.7vw 5vw",
    borderRadius: "1vw",
  },
};

const inputStyle2 =
  "border-[0.16vw] md:border-[0.16vw] mt-[0.6vw] border-black rounded-[1vw] md:rounded-[0.4vw] px-[2vw] md:px-[1vw] py-[1.4vw] md:py-[0.7vw] outline-none";

export default function roles() {
  return (
    <div className="w-full md:w-[84vw] float-right px-[8vw] py-[2vw] text-black">
      <Head>
        <title>Roles</title>
      </Head>
      <Stack className="!flex-row border-[0.16vw] items-center border-black rounded-[0.6vw] w-full px-[3vw] py-[2vw] justify-between">
        <div>
          <div className="text-[6vw] md:text-[3vw] font-semibold">
            Collab Manager
          </div>
          <div className="text-[3.5vw] md:text-[1.5vw] ">
            Community Development
          </div>

          <Stack className="mt-[3vw] md:mt-[1.8vw] !flex-row items-center gap-[0.5vw] text-black/60 text-[3vw] md:text-[1.2vw] font-semibold">
            <PiMapPinFill />
            <div>Remote</div>
          </Stack>
        </div>

        <Stack className="w-fit items-end">
          <div className="text-[2.5vw] md:text-[1.2vw] font-semibold">
            Qualification
          </div>
          <div className="text-[4vw] md:text-[1.6vw] mt-[0.7vw] px-[2vw] py-[0.6vw] font-semibold bg-[#00ff47] rounded-[0.6vw]">
            Entry Level
          </div>
        </Stack>
      </Stack>

      <Stack className="md:!flex-row gap-[5vw] md:gap-[1vw] mt-[6vw] md:mt-[3vw] justify-between">
        <Stack className="border-[0.16vw] font-[500] text-[4vw] md:text-[1.4vw] gap-[3vw] md:gap-[1vw] px-[5vw] md:px-[2vw] w-full md:w-[50%] py-[3vw] md:py-[1vw] border-black rounded-[0.6vw]">
          <div>
            <Stack direction="row" justifyContent="space-between">
              <label>Payement</label>
              <label>Time</label>
            </Stack>
            <Stack direction="row" alignItems="center">
              <input
                className={`${inputStyle2} !border-r-0 !rounded-r-none w-full`}
              />
              <div
                className={`border-[0.12vw] mt-[0.6vw] border-black rounded-l-none rounded-[0.4vw] px-[1vw] py-[1.8vw] md:py-[0.7vw] text-[3.4vw] md:text-[1.4vw]`}
              >
                Mnth
              </div>
            </Stack>
          </div>

          <div>
            <Stack direction="row" justifyContent="space-between">
              <label>Country</label>
            </Stack>
            <input className={`${inputStyle2} w-full`} />
          </div>
        </Stack>

        <div className="bg-black h-auto text-white  px-[4vw] md:px-[1vw] py-[2vw] md:py-[0.6vw] rounded-[0.6vw]">
          <div className="text-[6vw] md:text-[3vw] font-semibold">
            Bone Shamans
          </div>
          <div className="text-[4vw] md:text-[1.4vw]">
            <span className="text-[#00ff47]">Project Categories: </span> NFT,
            DeFI, DAO, Social FI
          </div>
        </div>
      </Stack>

      <div className="mt-[6vw] md:mt-[3vw] text-[4vw] md:text-[1.4vw] font-[500]">
        <div>Role Description</div>
        <textarea rows={10} className={`${inputStyle2}  w-full`}></textarea>
      </div>

      <div className="mt-[5vw] flex justify-center">
        <Button variant="contained" sx={styleButton}>
          Apply
        </Button>
      </div>
    </div>
  );
}
