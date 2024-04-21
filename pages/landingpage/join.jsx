import Head from "next/head";
import React, { useEffect } from "react";
import joinImg from "@/public/landingpage/joinimg.png";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "@/components/landingPage/Footer/footer";
import { Button } from "@mui/material";
import TransitionEffect from "@/components/landingPage/transition";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { RiTwitterXFill } from "react-icons/ri";
import Navbar from "@/components/landingPage/Navbar/navbar";

export default function join() {
  const goToLink = (link) => {
    const externalURL = link;
    window.open(externalURL, "_blank");
  };

  const btnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "2.8vw",
    background: "#00ff47",
    color: "#000",
    fontFamily: "innter",
    fontWeight: "600",
    fontSize: "0.88vw",
    borderRadius: "0.4vw",
    gap: "1vw",
    ":hover": {
      background: "#00ff47aa",
      color: "#000",
    },
    padding: "0 1vw",
    "@media (max-width:778px)": {
      fontSize: "1.9vw",
      padding: "0 2vw",
      height: "5.6vw",
      borderRadius: "0.8vw",
      gap: "3vw",
    },
  };
  const router = useRouter();
  const path = router.asPath;
  return (
    <div className="text-black">
      <Head>
        <title>Join</title>
        <script src="https://getlaunchlist.com/js/widget.js" defer></script>
      </Head>
      <Navbar />
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
        <div className="mt-[3vw] md:mt-[1vw] flex justify-center flex-col md:flex-row gap-[2vw]">
          <div className="flex justify-center">
            <Button
              onClick={() => goToLink("https://twitter.com/BoneShamansNFT")}
              className="bg-[#00ff47]"
              sx={btnStyle}
            >
              <div className="text-[4vw] md:text-[1.8vw]">
                <RiTwitterXFill />
              </div>
              Follow Boneshamans on Twitter
            </Button>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => goToLink("https://twitter.com/Nexus_mls")}
              className="bg-[#00ff47]"
              sx={btnStyle}
            >
              <div className="text-[4vw] md:text-[1.8vw]">
                <RiTwitterXFill />
              </div>
              Follow Nexus on Twitter
            </Button>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => goToLink("https://discord.gg/G2QrHQX8Te")}
              className="bg-[#00ff47]"
              sx={btnStyle}
            >
              <div className="text-[4vw] md:text-[1.8vw]">
                <FaDiscord />
              </div>
              Join our Community
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-[10vw] md:my-[5vw] min-h-[59vh] gap-x-2">
        <div className="flex flex-col gap-y-9 text-[#0f0f0f] text-[28px] mt-[8px]">
          <div>
            <FaDiscord />
          </div>
          <div>
            <FiMail />
          </div>
        </div>

        <form
          className="launchlist-form flex flex-col max-w-[700px] gap-6"
          action={`https://getlaunchlist.com/s/EcGrLs/`}
          method="POST"
        >
          <input
            className="outline-none border px-5 py-2 w-full border-black focus:scale-[103%] focus:border-red-600 transition-all rounded-lg"
            placeholder="Discord ID"
            name="discord_id"
            type="text"
            required
          />
          <input
            className="outline-none border px-5 py-2 w-full border-black focus:scale-[103%] focus:border-red-600 transition-all rounded-lg"
            placeholder="Your Email"
            name="email"
            type="email"
            required
          />
          <input
            className="outline-none border px-5 py-2 w-full border-black focus:scale-[103%] focus:border-red-600 transition-all rounded-lg"
            placeholder="Referral Code"
            name="referral_rode"
            type="text"
          />
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="bg-[#00ff47] text-sm w-full rounded-lg font-semibold cursor-pointer px-4 py-3"
            type="submit"
          >
            Join early access waitlist
          </motion.button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
