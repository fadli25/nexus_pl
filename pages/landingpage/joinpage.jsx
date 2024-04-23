import Head from "next/head";
import React, { useEffect } from "react";
import joinImg from "@/public/landingpage/joinimg.png";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "@/components/landingPage/Footer/footer";
import { Button } from "@mui/material";
import TransitionEffect from "@/components/landingPage/transition";

export default function join() {
  const link = () => {
    const externalURL = "https://discord.gg/G2QrHQX8Te";
    window.open(externalURL, "_blank");
  };
  const btnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "17vw",
    height: "2.8vw",
    background: "#00ff47",
    color: "#000",
    fontFamily: "pop",
    fontWeight: "600",
    fontSize: "0.88vw",
    borderRadius: "0.4vw",
    gap: "1vw",
    ":hover": {
      background: "#00ff47aa",
      color: "#000",
    },
    "@media (max-width:778px)": {
      fontSize: "1.9vw",
      width: "38vw",
      height: "5.6vw",
      borderRadius: "0.8vw",
      gap: "3vw",
    },
  };
  return (
    <div>
      <Head>
        <title>Join</title>
        <script src="https://getlaunchlist.com/js/widget.js" defer></script>
      </Head>
      <TransitionEffect />
      <div className="bg-[#0f0f0f] -mt-[1vw] md:-mt-0 w-full py-[10vw] md:py-[2vw]">
        <div className="w-[55vw] md:w-[18vw] mx-auto ">
          <Image src={joinImg} width={9000} height={9000} alt="" />
        </div>
        <div className="text-[3vw] md:text-[1.2vw] w-[85vw] md:w-[75vw] mx-auto text-center mt-[6vw] md:mt-[1vw] pop leading-[6vw] md:leading-[3.3vw] text-white ">
          Join the <span className="text-[#00ff47]">NEXUS</span> waitlist,{" "}
          <br /> refer your friends and join our community to win a{" "}
          <span className="text-[#00ff47]">Free mint WL</span>
        </div>
        <div className="mt-[3vw] md:mt-[1vw] flex justify-center">
          <Button onClick={() => link()} className="bg-[#00ff47]" sx={btnStyle}>
            <div className="text-[4vw] md:text-[1.8vw]">
              <FaDiscord />
            </div>
            Join our Community
          </Button>
        </div>
      </div>
      <div className="flex justify-center my-[10vw] md:my-[5vw] min-h-[59vh]">
        <div className="flex flex-col gap-y-6 text-[#0f0f0f] text-[28px] mt-[26px]">
          <div>
            <FaDiscord />
          </div>
          <div>
            <FiMail />
          </div>
        </div>
        <div
          className="launchlist-widget"
          data-key-id="EcGrLs"
          data-height="250px"
        ></div>
      </div>
      <Footer />
    </div>
  );
}
