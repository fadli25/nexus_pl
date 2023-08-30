import React, { ReactNode, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";
import { BsFillChatFill } from "react-icons/bs";
import { MdLocalGroceryStore } from "react-icons/md";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TopNavbar() {
  const connectWalletStyle = {
    fontSite: "1.1vw",
    padding: "0.6vw 2vw",
    border: "0.12vw #fff solid",
    borderRaduis: "9999px",
    color: "#fff",
    "&hover": {
      border: "0.12vw #00ff47 solid",
      color: "#fff",
    },
    "@media (max-width: 767px)": {
      fontSize: "2.4vw",
    },
  };
  const cwc =
    "rounded-full hover:border-[#fff] hover:border-[0.12vw] text-[2.4vw] md:text-[1vw]";
  const buttonProfile = {
    fontSize: "1vw",
    padding: "0.7vw 2vw",
    color: "#fff",
    border: "0.12vw #fff solid",
    fontWeight: "500",
    textTransform: "none",
    "&hover": {
      border: "0.12vw #fff solid",
      color: "#fff",
    },
    "@media (max-width: 767px)": {
      fontSize: "2.4vw",
    },
  };
  // const mpc = "";

  const router = useRouter();

  const path = router.asPath;

  const homeImage =
    "https://s3-alpha-sig.figma.com/img/50b5/acde/e32a59999f982410fec0584893be46ea?Expires=1693180800&Signature=MWTPg9WbN7b-wmfNEk0a1do7O4Q-cAX~lufzqkgOTiJg1LEyKkkyknLGV0-RaOFoNg9lwzqjxOJIaMMmMzKarCqfO~~fYXnvPExA1c6947bNQoaZd9ooW0bNCIQ9Nay1lFirXpO38f~-fm2iJextYkufTabmnunnr~wSXZgye6PckpZf77FdMeB8mAFujPlR8M99ZhcrWyakevGn04Z823cssH2KkYtc9tx1o5Y0ubMFmFE4r3GjB5updCtpp5JIrtdNLjjFAA5H7bT00NDV3FhOzM1I8TzQJO3H~mEv0GHC1nYFAgTq0ApN6CkNDZI6snzL8dC43iLcPgiqHiWf7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  function home() {
    return (
      <div className="w-[60vw] md:w-[36vw] -ml-[10vw]">
        <Image src={homeImage} width={9000} height={9000} alt="logo" />
      </div>
    );
  }
  // const [newtext, setnewText] = useState("My Projects");

  function pathFunction() {
    if (path.slice(0, 14) == "/founder/haire") {
      return <>Hire Staffs</>;
    } else if (path.slice(0, 14) === "/founder/incom") {
      return <>Incoming Projects</>;
    } else {
      return <>My Projects</>;
    }
  }

  function founder() {
    return (
      <div className="mt-[14vw] md:mt-[11.6vw] px-[2vw]">
        <div className="fontPopSemibold text-[8vw] md:text-[4vw] mb-[-0.4vw]">
          Founder
        </div>
        <div className="fontPopSemibold text-[5vw] md:text-[1.9vw] text-[#00ff47] mb-[1vw]">
          {pathFunction()}
        </div>
        <div className="flex justify-start items-center mt-[3vw] md:mt-0 gap-x-[0.7vw]">
          <MotionButton onClick={() => router.push("/founder")}>
            My Projects
          </MotionButton>

          <MotionButton onClick={() => router.push("/founder/haire")}>
            Hire staffs
          </MotionButton>
          <MotionButton onClick={() => router.push("/founder/incoming")}>
            Incoming Applications
          </MotionButton>
          <MotionButton>Watchlist</MotionButton>
        </div>
      </div>
    );
  }

  function pathFunction1() {
    if (path.slice(0, 14) == "/freelance/out") {
      return <>Outgoing Jobs</>;
    } else if (path.slice(0, 14) === "/freelance/ong") {
      return <>Ongoing Projects</>;
    } else {
      return <>Find Project</>;
    }
  }

  function freelance() {
    return (
      <div className="mt-[14vw] md:mt-[11.6vw] px-[2vw]">
        <div className="fontPopSemibold text-[8vw] md:text-[4.4vw] mb-[-0.4vw]">
          Freelance
        </div>
        <div className="fontPopSemibold text-[5vw] md:text-[1.9vw] text-[#00ff47] mb-[1vw]">
          {pathFunction1()}
        </div>
        <div className="flex justify-start items-center gap-x-[0.7vw] ">
          <MotionButton1 onClick={() => router.push("/freelance")}>
            Find Project
          </MotionButton1>
          <MotionButton1 onClick={() => router.push("/freelance/ongoing")}>
            Ongoing Jobs
          </MotionButton1>
          <MotionButton1 onClick={() => router.push("/freelance/outgoing")}>
            Outgoing Applications
          </MotionButton1>
          <MotionButton1>Watchlist</MotionButton1>
          <MotionButton1 onClick={() => router.push("/freelance/job")}>
            Job Invitatons
          </MotionButton1>
          <MotionButton1>Job History</MotionButton1>
        </div>
      </div>
    );
  }

  function messages() {
    return (
      <div className="mt-[14vw] md:mt-[12.6vw] px-[2vw]">
        <div className="fontPopSemibold text-[8vw] md:text-[4.4vw] mb-[-0.4vw]">
          Messages
        </div>
        <div className="fontPopSemibold text-[5vw] md:text-[1.9vw] text-[#00ff47] my-[2vw]">
          {/* {pathFunction1()} */}
        </div>
        <div className="flex justify-start items-center gap-x-[0.7vw] ">
          <MotionButton1 onClick={() => router.push("/messages/team")}>
            Team
          </MotionButton1>
          <MotionButton1 onClick={() => router.push("/messages")}>
            Messages
          </MotionButton1>
          <MotionButton1>Incoming Requests</MotionButton1>
        </div>
      </div>
    );
  }

  function tower() {
    return (
      <div className="mt-[12vw] px-[2vw]">
        <div className=" text-[8vw] md:text-[5vw] uppercase fontPopSemibold">
          REBIRTH TOWER
        </div>
        <div className="fontPopSemibold text-[4vw] md:text-[2vw] text-[#00ff47] mb-[2vw]">
          Burn Rug NFTS for a rewards
        </div>
      </div>
    );
  }
  function settings() {
    return (
      <div className="mt-[13vw] px-[2vw] text-[5.5vw] fontPopSemibold">
        Settings
      </div>
    );
  }
  return (
    <div className="bg-black border-b border-white/20 w-full md:w-[80vw] float-right px-[2vw] relative z-[100]">
      <div className="flex justify-end py-[1.4vw] z-50">
        <div className="flex flex-col gap-y-[0.5vw] md:gap-y-[0.7vw] items-end">
          {/* Connect Wallet */}
          <div className="flex gap-x-[3vw] md:gap-x-[1.4vw] ] itemes-center">
            <motion.button
              className="text-[3.2vw] md:text-[1.2vw] font-semibold text-[#0FA]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => router.push("/tower")}
            >
              Rebirth Tower
            </motion.button>
            <Button
              variant="outlined"
              sx={connectWalletStyle}
              className={`${cwc}`}
            >
              Connet Wallet
            </Button>
          </div>
          {/* Notification */}
          <IconButton className="text-[4vw] md:text-[2.2vw] text-white w-fit">
            <IoNotifications />
          </IconButton>
          <IconButton
            className="text-[4vw] md:text-[2.2vw] text-white w-fit"
            onClick={() => router.push("/messages")}
          >
            <BsFillChatFill />
          </IconButton>
          <IconButton className="text-[4vw] md:text-[2.2vw] text-white w-fit">
            <MdLocalGroceryStore />
          </IconButton>
          <IconButton
            className="text-[4vw] md:text-[2.2vw] text-white w-fit"
            onClick={() => router.push("/settings")}
          >
            <IoSettingsOutline />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              fontSize: "1vw",
              padding: "0.7vw 2vw",
              color: "#fff",
              border: "0.12vw #fff solid",
              fontWeight: "500",
              textTransform: "none",
              "&hover": {
                border: "0.12vw #fff solid",
                color: "#fff",
                bgcolor: "#000",
              },
              "@media (max-width: 767px)": {
                fontSize: "2.4vw",
              },
            }}
            className="hover:bg-black"
          >
            My Profile
          </Button>
        </div>
      </div>

      {path.length === 1 && (
        <div className="absolute top-0 left-0 w-full h-full grid place-items-center -z-10">
          {home()}
        </div>
      )}
      {path.slice(0, 8) === "/founder" && (
        <div className="absolute top-0 left-0 w-[70%] h-full flex items-center">
          {founder()}
        </div>
      )}
      {path.slice(0, 8) === "/freelan" && (
        <div className="absolute top-0 left-0 w-[70%] h-full flex items-center">
          {freelance()}
        </div>
      )}
      {path.slice(0, 8) === "/message" && (
        <div className="absolute top-0 left-0 w-[70%] h-full flex items-center">
          {messages()}
        </div>
      )}
      {path.slice(0, 6) === "/tower" && (
        <div className="absolute top-0 left-0 w-[70%] h-full flex items-center">
          {tower()}
        </div>
      )}
      {path.slice(0, 6) === "/setti" && (
        <div className="absolute top-0 left-0 w-[70%] h-full flex items-center">
          {settings()}
        </div>
      )}
    </div>
  );
}

type ButtonMotion = {
  children: ReactNode;
  onClick?: () => void;
};

export function MotionButton({ children, onClick }: ButtonMotion) {
  return (
    <motion.button
      className="bg-white px-[1vw] py-[0.5vw] text-black text-[2vw] md:text-[1vw]"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
export function MotionButton1({ children, onClick }: ButtonMotion) {
  return (
    <motion.button
      className="bg-white px-[1vw] py-[0.5vw] text-black text-[0.9vw]"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
