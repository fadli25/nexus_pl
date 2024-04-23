import Image from "next/image";
import React, { useState, useEffect } from "react";
import img1 from "@/public/landingpage/img1.png";
import { Button } from "@mui/material";
import loginimg from "@/public/landingpage/singimg.png";
import { HiMail } from "react-icons/hi";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Header1() {
  const [sing, setSing] = useState(false);

  const router = useRouter();

  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };
  const typingText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  const explainProduct = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        delay: 2.2,
        ease: "easeInOut",
      },
    },
  };
  const buttonProduct = {
    hidden: { opacity: 0, scaleX: 0 },
    show: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 2.3,
        type: "tween",
      },
    },
  };
  // Animation
  const [textA, setTextA] = useState(1);

  (function textAnimation() {
    if (textA === 1) {
      setTimeout(() => {
        setTextA(2);
      }, 5000);
    } else if (textA === 2) {
      setTimeout(() => {
        setTextA(3);
      }, 5000);
    } else if (textA === 3) {
      setTimeout(() => {
        setTextA(4);
      }, 5000);
    } else {
      setTimeout(() => {
        setTextA(1);
      }, 5000);
    }
  })();

  const newAnimation = {
    hidden: {
      opacity: 0,
      x: "30vw",
    },
    show: {
      opacity: 1,
      x: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const headerAnimation1 = {
    show: {
      x: "0",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      x: "-40vw",
      opacity: 0.1,
    },
  };

  const headerAnimation2 = {
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: { x: "40vw", opacity: 0.1, scale: 0.3 },
  };

  // Button Style
  const ButtonStyle = {
    width: "16vw",
    height: "3.5vw",
    fontSize: "1vw",
    fontWeight: "700",
    bgcolor: "#4AF846",
    borderRadius: "0.8vw",
    "&:hover": {
      bgcolor: "#4AF886",
    },
    color: "black",
    fontFamily: "innter",
    "@media (max-width:767px)": {
      width: "44vw",
      fontSize: "3vw",
      height: "10vw",
      borderRadius: "1.7vw",
    },
  };
  // Sigin Up
  const singUpAnimation = {
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: { y: 0, opacity: 0.1, scale: 0.8 },
  };
  // Join Wailist Function

  return (
    <div className="w-full overflow-x-hidden min-h-[85vh] -mt-[1vw] md:-mt-0 bg-[#000000] flex flex-col justify-end items-end">
      <div className="w-full flex-col-reverse md:flex-row flex justify-between items-center overflow-x-hidden">
        <motion.div
          variants={headerAnimation1}
          animate="show"
          initial="hidden"
          className="w-full md:w-[70vw] "
        >
          <Image src={img1} width={9000} height={2999} alt="" />
        </motion.div>
        <motion.div
          variants={headerAnimation2}
          animate="show"
          initial="hidden"
          className="w-[95vw] md:w-[37vw]"
        >
          {textA === 1 && (
            <motion.div variants={newAnimation} animate="show" initial="hidden">
              <motion.div
                variants={typingContainer}
                initial="hidden"
                animate="show"
                className="text-[14vw] md:w-[30vw] text-center md:text-start md:text-[5.5vw] text-white font-[500]"
              >
                {Array.from("Hire web3 Freelancers").map((word, i) => (
                  <motion.span key={i} variants={typingText}>
                    {word}
                  </motion.span>
                ))}
              </motion.div>
              <motion.p
                variants={explainProduct}
                initial="hidden"
                animate="show"
                className="w-[70vw] h-[3vw] md:w-[34vw] inter text-center md:text-start mx-auto md:mx-0 text-[3vw] md:text-[1vw]  font-semibold text-[#4AF846]"
              >
                Streamline and Simplify the Process of Hiring Top Talent for
                Your Startup
              </motion.p>
            </motion.div>
          )}
          {textA === 2 && (
            <motion.div variants={newAnimation} animate="show" initial="hidden">
              <motion.div
                variants={typingContainer}
                initial="hidden"
                animate="show"
                className="text-[14vw] md:w-[30vw] text-center md:text-start md:text-[5.5vw] text-white  font-extrabold"
              >
                {Array.from("Manage Your Staffs").map((word, i) => (
                  <motion.span key={i} variants={typingText}>
                    {word}
                  </motion.span>
                ))}
              </motion.div>
              <motion.p
                variants={explainProduct}
                initial="hidden"
                animate="show"
                className="w-[70vw] h-[3vw] md:w-[34vw] text-center md:text-start mx-auto md:mx-0 text-[3vw] md:text-[1vw]  font-semibold inter text-[#4AF846]"
              >
                Seamlessly Organize and Empower Your Team for Success
              </motion.p>
            </motion.div>
          )}
          {textA === 3 && (
            <motion.div variants={newAnimation} animate="show" initial="hidden">
              <motion.div
                variants={typingContainer}
                initial="hidden"
                animate="show"
                className="text-[14vw] md:w-[30vw] text-center md:text-start md:text-[5.5vw] text-white  font-extrabold"
              >
                {Array.from("Burn Rug NFTs").map((word, i) => (
                  <motion.span key={i} variants={typingText}>
                    {word}
                  </motion.span>
                ))}
              </motion.div>
              <motion.p
                variants={explainProduct}
                initial="hidden"
                animate="show"
                className="w-[70vw] h-[3vw] md:w-[34vw] inter text-center md:text-start mx-auto md:mx-0 text-[3vw] md:text-[1vw]  font-semibold text-[#4AF846]"
              >
                Burn Useless and Rug NFTs and Unlock Rewarding Opportunities
              </motion.p>
            </motion.div>
          )}
          {textA === 4 && (
            <motion.div variants={newAnimation} animate="show" initial="hidden">
              <motion.div
                variants={typingContainer}
                initial="hidden"
                animate="show"
                className="text-[14vw] md:w-[30vw] text-center md:text-start md:text-[5.5vw] text-white  font-extrabold"
              >
                {Array.from("Schedule Payments").map((word, i) => (
                  <motion.span key={i} variants={typingText}>
                    {word}
                  </motion.span>
                ))}
              </motion.div>
              <motion.p
                variants={explainProduct}
                initial="hidden"
                animate="show"
                className="w-[70vw] h-[3vw] md:w-[34vw] text-center inter md:text-start mx-auto md:mx-0 text-[3vw] md:text-[1vw]  font-semibold text-[#4AF846]"
              >
                Seamlessly Schedule Payments and Utilize Escrow for Financial
                Transactions through Money Streaming Protocols
              </motion.p>
            </motion.div>
          )}

          {/* <div className="flex justify-center gap-[3vw] md:gap-[1vw] md:justify-start mt-[16vw] md:mt-[6vw]">
            <Button
              onClick={() => setSing(true)}
              sx={{
                width: "13vw",
                height: "3.5vw",
                fontSize: "1vw",
                fontWeight: "700",
                bgcolor: "#4AF846",
                borderRadius: "0.8vw",
                "&:hover": {
                  bgcolor: "#4AF886",
                },
                color: "black",
                fontFamily: "inter",
                "@media (max-width:767px)": {
                  width: "35vw",
                  fontSize: "3vw",
                  height: "10vw",
                  borderRadius: "1.5vw",
                },
              }}
              className="inter"
              variant="contained"
            >
              Sing UP
            </Button>
            <Button
              sx={{
                width: "13vw",
                height: "3.5vw",
                fontSize: "1vw",
                fontWeight: "700",
                border: "1px solid #4AF846",
                borderRadius: "0.8vw",
                "&:hover": {
                  border: "1px solid #4AF846",
                },
                color: "#4AF886",
                fontFamily: "inter",
                "@media (max-width:767px)": {
                  width: "35vw",
                  fontSize: "3vw",
                  height: "10vw",
                  borderRadius: "1.5vw",
                },
              }}
              className="inter"
              variant="outlined"
            >
              Loging
            </Button>
          </div> */}
          <motion.div
            variants={buttonProduct}
            initial="hidden"
            animate="show"
            className="mt-[23vw] md:mt-[2vw] flex justify-center md:justify-start"
          >
            <Button
              onClick={() => router.push("/landingpage/join")}
              sx={ButtonStyle}
              className="inter"
              variant="contained"
            >
              Connect Wallet
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {/* sing up */}
      {sing && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm grid place-items-center z-[900000]">
          <div
            className="fixed top-0 left-0 w-full h-full -z-10"
            onClick={() => setSing(false)}
          ></div>
          <motion.div
            variants={singUpAnimation}
            animate="show"
            initial="hidden"
            className="w-[100vw] h-fit pb-[3vw] lg:pb-0 md:w-[48vw] lg:h-[38vw] overflow-hidden bg-black rounded-[3vw]"
          >
            <div className="w-[60vw] md:w-[25vw] mx-auto">
              <Image src={loginimg} width={9000} height={2000} alt="" />
            </div>
            <div className="flex justify-center h-[260px] overflow-hidden">
              <div
                className="launchlist-widget overflow-hidden"
                data-key-id="EcGrLs"
                data-height="250px"
              ></div>
            </div>
            {/*
            <div className="text-center text-[3.5vw] md:text-[1.2vw] -mt-[2vw] jost text-white">
              Sing Up for NEXUS
            </div>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              className="w-[50vw] transition-all md:w-[18vw] h-[7vw] md:h-[3vw] mt-[5vw] md:mt-[2vw] cursor-pointer rounded-full bg-[#00ff47] text-[2.4vw] md:text-[0.8vw] font-semibold text-center gap-[1vw] flex justify-center items-center mx-auto"
            >
              <div className="text-[4vw] md:text-[1.5vw]">
                <HiMail />
              </div>
              <div>Continue with email</div>
            </motion.button>
            <div className="mt-[8vw] md:mt-[3vw] flex justify-center items-center gap-[4vw] md:gap-[1vw]">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.93 }}
                className="w-[25vw] md:w-[8vw] bg-[#5865F2] h-[7.5vw] md:h-[2.4vw] cursor-pointer rounded-full text-white text-[5vw] md:text-[1.6vw] flex justify-center items-center"
              >
                <FaDiscord />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.93 }}
                className="w-[25vw] md:w-[8vw] bg-[#ffffff] h-[7.5vw] md:h-[2.4vw] cursor-pointer rounded-full text-white text-[5vw] md:text-[1.6vw] flex justify-center items-center"
              >
                <FcGoogle />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.93 }}
                className="w-[25vw] md:w-[8vw] bg-[#1DA1F2] h-[7.5vw] md:h-[2.4vw] cursor-pointer rounded-full text-white text-[4.7vw] md:text-[1.4vw] flex justify-center items-center"
              >
                <FaTwitter />
              </motion.button>
            </div> */}
          </motion.div>
        </div>
      )}
      {/* sing up */}
    </div>
  );
}
