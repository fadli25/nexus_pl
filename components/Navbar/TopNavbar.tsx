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
    border: "0.12vw #00ff47 solid",
    borderRaduis: "9999px",
    color: "#00ff47",
    "&hover": {
      border: "0.12vw #00ff47 solid",
      color: "#00ff47",
    },
  };
  const cwc =
    "rounded-full hover:border-[#00ff47] hover:border-[0.12vw] text-[1vw]";
  const buttonProfile = {
    fontSize: "1vw",
    padding: "0.7vw 2vw",
    color: "#000",
    background: "#00ff47",
    fontWeight: "500",
    textTransform: "none",
    "&hover": {
      background: "#00ff4799",
    },
  };
  const mpc = "bg-[#00ff47] hover:bg-[#00ff47aa]";

  const router = useRouter();

  const path = router.asPath;

  const homeImage =
    "https://s3-alpha-sig.figma.com/img/50b5/acde/e32a59999f982410fec0584893be46ea?Expires=1693180800&Signature=MWTPg9WbN7b-wmfNEk0a1do7O4Q-cAX~lufzqkgOTiJg1LEyKkkyknLGV0-RaOFoNg9lwzqjxOJIaMMmMzKarCqfO~~fYXnvPExA1c6947bNQoaZd9ooW0bNCIQ9Nay1lFirXpO38f~-fm2iJextYkufTabmnunnr~wSXZgye6PckpZf77FdMeB8mAFujPlR8M99ZhcrWyakevGn04Z823cssH2KkYtc9tx1o5Y0ubMFmFE4r3GjB5updCtpp5JIrtdNLjjFAA5H7bT00NDV3FhOzM1I8TzQJO3H~mEv0GHC1nYFAgTq0ApN6CkNDZI6snzL8dC43iLcPgiqHiWf7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  function home() {
    return (
      <div className="w-[36vw] -ml-[10vw]">
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
      <div className="mt-[9vw] px-[2vw]">
        <div className="fontPopSemibold text-[4vw]">Founder</div>
        <div className="fontPopSemibold text-[2.4vw] text-[#00ff47] mb-[2vw]">
          {pathFunction()}
        </div>
        <div className="flex justify-start items-center gap-x-[0.7vw]">
          <motion.button
            className="bg-white px-[2vw] py-[0.5vw] text-black text-[1vw]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push("/founder")}
          >
            My Projects
          </motion.button>
          <motion.button
            className="bg-white px-[2vw] py-[0.5vw] text-black text-[1vw]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push("/founder/haire")}
          >
            Hire staffs
          </motion.button>
          <motion.button
            className="bg-white px-[2vw] py-[0.5vw] text-black text-[1vw]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push("/founder/incoming")}
          >
            Incoming Applications
          </motion.button>
          <motion.button
            className="bg-white px-[2vw] py-[0.5vw] text-black text-[1vw]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            Watchlist
          </motion.button>
        </div>
      </div>
    );
  }

  function pathFunction1() {
    if (path.slice(0, 14) == "/founder/haire") {
      return <>Hire Staffs</>;
    } else if (path.slice(0, 14) === "/founder/incom") {
      return <>Incoming Projects</>;
    } else {
      return <>Find Project</>;
    }
  }

  function freelance() {
    return (
      <div className="mt-[9vw] px-[2vw]">
        <div className="fontPopSemibold text-[4.4vw]">Freelance</div>
        <div className="fontPopSemibold text-[2.4vw] text-[#00ff47] mb-[2vw]">
          {pathFunction1()}
        </div>
        <div className="flex justify-start items-center gap-x-[0.7vw]">
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

  return (
    <div className="bg-black w-[80vw] float-right px-[2vw] relative z-[100]">
      <div className="flex justify-end py-[1.4vw] z-50">
        <div className="flex flex-col gap-y-[0.7vw] items-end">
          {/* Connect Wallet */}
          <Button
            variant="outlined"
            sx={connectWalletStyle}
            className={`${cwc}`}
          >
            Connet Wallet
          </Button>
          {/* Notification */}
          <IconButton className="text-[2.2vw] text-[#00ff47] w-fit">
            <IoNotifications />
          </IconButton>
          <IconButton className="text-[2.2vw] text-[#00ff47] w-fit">
            <BsFillChatFill />
          </IconButton>
          <IconButton className="text-[2.2vw] text-[#00ff47] w-fit">
            <MdLocalGroceryStore />
          </IconButton>
          <IconButton className="text-[2.2vw] text-[#00ff47] w-fit">
            <IoSettingsOutline />
          </IconButton>
          <Button variant="contained" sx={buttonProfile} className={`${mpc}`}>
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
    </div>
  );
}

type ButtonMotion = {
  children: ReactNode;
  onClick?: () => void;
};

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
