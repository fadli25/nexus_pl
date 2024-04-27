import { get_user_info } from "@/lib/NexusProgram/user/utils/user_info";
import mintbg from "@/public/mintbar.png";
import { Button, IconButton } from "@mui/material";
import { web3 } from "@project-serum/anchor";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import { BsFillChatFill } from "react-icons/bs";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { toast } from "react-toastify";
import LeftNavbar from "./LeftNavbar";
import MintTitle from "./MintTitle.png";

export default function TopNavbar() {
  const notify = () => {
    toast.info("Coming Soon!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const router = useRouter();

  const path = router.asPath;
  // const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

  const { connection } = useConnection();

  const anchorWallet = useAnchorWallet();
  const wallet = useWallet();

  const homeImage =
    "https://media.discordapp.net/attachments/1085293900706627595/1162188481905315850/Group_120_1.png?ex=653b075e&is=6528925e&hm=4b730b569c232d226255a98a2bb18971413f11e82de5c020fdfa50beac1ef5fd&=&width=1036&height=368";

  async function check_user() {
    try {
      const user_info = await get_user_info(anchorWallet, connection);
      console.log("nav");
      if (!user_info) {
        console.log("nav push");
        // router.push("/login");
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!anchorWallet) return;
    check_user();
  }, [anchorWallet, anchorWallet?.publicKey]);

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
      <div className="mt-[14vw] md:mt-[6.8vw] px-[2vw]">
        <div className="fontPopSemibold text-[10vw] md:text-[4vw] mb-[-0.4vw]">
          Projects
        </div>
        <div className="fontPopSemibold text-[5vw] md:text-[1.9vw] text-[#00ff47] mb-[1vw]">
          {pathFunction()}
        </div>
        <div className="flex justify-start flex-wrap gap-y-[2vw] items-center mt-[3vw] md:mt-0 gap-x-[0.7vw]">
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
      return <>Outgoing Applications</>;
    } else if (path.slice(0, 14) === "/freelance/ong") {
      return <>Ongoing Projects</>;
    } else {
      return <>Find Project</>;
    }
  }

  function freelance() {
    return (
      <div className="mt-[14vw] md:mt-[6.8vw] px-[2vw]">
        <div className="fontPopSemibold text-[10vw] md:text-[4.4vw] mb-[-0.4vw]">
          Jobs
        </div>
        <div className="fontPopSemibold text-[5vw] md:text-[1.9vw] text-[#00ff47] mb-[1vw]">
          {pathFunction1()}
        </div>
        <div className="flex justify-start flex-wrap gap-y-[2vw] items-center gap-x-[0.7vw] h-fit">
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
            Job Invitations
          </MotionButton1>
          <MotionButton1>Job History</MotionButton1>
        </div>
      </div>
    );
  }

  function messages() {
    return (
      <div className="mt-[14vw] md:mt-[6.8vw] px-[2vw]">
        <div className="fontPopSemibold text-[10vw] md:text-[4.4vw] mb-[-0.4vw]">
          Messages
        </div>
        <div className="flex justify-start flex-wrap gap-y-[2vw] items-center gap-x-[0.7vw] ">
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
      <div className="mt-[6.8vw] px-[2vw]">
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
      <div className="mt-[6.8vw] px-[2vw] text-[10vw] md:text-[5.5vw] fontPopSemibold">
        Settings
      </div>
    );
  }

  function profile() {
    return (
      <div className="mt-[6.8vw] px-[2vw] text-[10vw] md:text-[5.5vw] fontPopSemibold">
        My Profile
      </div>
    );
  }
  function dashboard() {
    return (
      <div className="mt-[6.8vw] px-[2vw] text-[10vw] md:text-[5.5vw] fontPopSemibold">
        Dashboard
      </div>
    );
  }

  function pathFunction2() {
    if (path.slice(0, 17) == "/notification/myn") {
      return <>My Notifications</>;
    } else if (path.slice(0, 17) === "/notification/myp") {
      return <>My Project Notifications</>;
    } else if (path.slice(0, 17) === "/notification/pay") {
      return <>Payment Notification</>;
    } else if (path.slice(0, 17) === "/notification/tow") {
      return <>Rebirth Tower Notification</>;
    } else {
      return <>Annoucements</>;
    }
  }

  function notification() {
    return (
      <div className="mt-[14vw] md:mt-[6.8vw] px-[2vw]">
        <div className="fontPopSemibold text-[10vw] md:text-[4.4vw] mb-[-0.4vw]">
          Notifications
        </div>
        <div className="fontPopSemibold text-[5vw] md:text-[1.9vw] text-[#00ff47] mb-[1vw]">
          {pathFunction2()}
        </div>
        <div className="flex justify-start flex-wrap gap-y-[2vw] items-center gap-x-[0.7vw] h-fit">
          <MotionButton2 onClick={() => router.push("/notification")}>
            Announcements
          </MotionButton2>
          <MotionButton2
            onClick={() => router.push("/notification/mynotification")}
          >
            My Notifications
          </MotionButton2>
          <MotionButton2
            onClick={() => router.push("/notification/myprojectnotification")}
          >
            My Project Notificantions
          </MotionButton2>
          <MotionButton2 onClick={() => router.push("/notification/payment")}>
            Payment Notifications
          </MotionButton2>
          <MotionButton2 onClick={() => router.push("/notification/tower")}>
            Rebirth Tower Notifications
          </MotionButton2>
        </div>
      </div>
    );
  }

  function pathFunction3() {
    if (path.slice(0, 12) == "/payment/pay") {
      return <>Pay Staffs</>;
    } else if (path.slice(0, 12) === "/payment/inc") {
      return <>incoming Payment streams</>;
    } else if (path.slice(0, 12) === "/payment/out") {
      return <>Outgoing Payment streams</>;
    } else if (path.slice(0, 12) === "/payment/tra") {
      return <>Transaction History</>;
    } else {
      return <>Assets</>;
    }
  }

  function payment() {
    return (
      <div className="mt-[14vw] md:mt-[6.8vw] px-[2vw]">
        <div className="fontPopSemibold text-[10vw] md:text-[4.4vw] mb-[-0.4vw]">
          Payment
        </div>
        <div className="fontPopSemibold text-[5vw] md:text-[1.9vw] text-[#00ff47] mb-[1vw]">
          {pathFunction3()}
        </div>
        <div className="flex justify-start flex-wrap gap-y-[2vw] items-center gap-x-[0.7vw] h-fit">
          <MotionButton2 onClick={() => router.push("/payment")}>
            Assets
          </MotionButton2>
          <MotionButton2 onClick={() => router.push("/payment/pay")}>
            Pay Staffs
          </MotionButton2>
          <MotionButton2 onClick={() => router.push("/payment/incoming")}>
            Incoming Payment streams
          </MotionButton2>
          <MotionButton2 onClick={() => router.push("/payment/outgoing")}>
            Outgoing Payment streams
          </MotionButton2>
          <MotionButton2 onClick={() => router.push("/payment/transaction")}>
            Transaction History
          </MotionButton2>
        </div>
      </div>
    );
  }

  function mint() {
    return (
      <>
        <div className="w-full h-full relative">
          <Image
            src={mintbg}
            width={8000}
            height={2000}
            className="object-cover object-center w-full h-full"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
            <Image
              src={MintTitle}
              width={2000}
              height={200}
              className="w-[70vw] md:w-[34vw] -mr-[8%] md:-mr-[13%] mt-[4%]"
              alt=""
            />
          </div>
          <div className="absolute bottom-0 left-0 px-[4vw] md:px-[2vw] py-[1vw] md:py-[0.6vw] bg-black rounded-tr-[1.5vw] md:rounded-tr-[0.6vw] font-semibold text-white text-[6vw] md:text-[2vw]">
            Rebirth Tower{" "}
          </div>
        </div>
      </>
    );
  }

  const [showLeftNavbar, setShowLeftNavbar] = useState(false);

  ///////----------------------------------////////////////////

  return (
    <div className={`${path.slice(0, 4) == "/lan" && "hidden"}`}>
      {showLeftNavbar && (
        <>
          <div
            onClick={() => setShowLeftNavbar(false)}
            className="fixed md:hidden top-0 left-0 w-full h-full backdrop-blur-sm z-[101] bg-black/30"
          ></div>
          <LeftNavbar showLeftNavbar={showLeftNavbar} />
        </>
      )}
      <div
        className={`bg-black border-b border-white/20 w-full md:w-[84vw] float-right px-[2vw] relative z-[100] ${path == "/login" && "md:h-[14vw]"
          }`}
      >
        <div className="flex justify-end py-[1.4vw] z-50">
          <div
            className={`flex flex-col gap-y-[0.5vw] md:gap-y-[0.4vw] items-end ${path === "/login" && "invisible"
              }`}
          >
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
              <WalletMultiButton />
              {/* <Button
                variant="contained"
                sx={{
                  fontSite: "0.7vw",
                  padding: "0.1vw 2vw",
                  color: "#000",
                  bgcolor: "#fff !important",
                  fontWeight: "500",
                  borderRadius: "9999px",
                  ":hover": {
                    backgroundColor: "#fff",
                  },
                  "@media (max-width: 767px)": {
                    fontSize: "2.4vw",
                    padding: "0vw 5vw",
                    fontWeight: 400,
                  },
                  height: "fit",
                }}
              >

//                 Connect Wallet
//               </Button>
// =======
//                 Connet Wallet
//               </Button> */}

              <motion.button
                onClick={() => setShowLeftNavbar(!showLeftNavbar)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="text-white text-[10vw] md:hidden"
              >
                <BiMenu />
              </motion.button>
            </div>
            {/* Notification */}
            <IconButton
              sx={{
                color: "#fff",
              }}
              style={{
                ...(path === "/notification"
                  ? { color: "#00ff47" }
                  : { color: "#fff" }),
              }}
              className={`text-[6vw] md:text-[1.9vw]  w-fit `}
              // onClick={() => router.push("/notification")}
              onClick={notify}
            >
              <IoNotifications />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
              }}
              style={{
                ...(path.slice(0, 6) === "/messa"
                  ? { color: "#00ff47" }
                  : { color: "#fff" }),
              }}
              className={`text-[6vw] md:text-[1.9vw]  w-fit`}
              // onClick={() => router.push("/messages")}
              onClick={notify}
            >
              <BsFillChatFill />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
              }}
              className="text-[6vw] md:text-[1.9vw] text-white w-fit"
              onClick={notify}
            >
              <MdLocalGroceryStore />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
              }}
              style={{
                ...(path === "/settings"
                  ? { color: "#00ff47" }
                  : { color: "#fff" }),
              }}
              className={`text-[6vw] md:text-[1.9vw] w-fit `}
              onClick={() => router.push("/settings")}
            >
              <IoSettingsOutline />
            </IconButton>
            <Button
              onClick={() => router.push("/profile")}
              variant="outlined"
              sx={{
                fontSize: "0.9vw",
                padding: "0.7vw 2vw",
                color: "#fff",
                border: "0.12vw #fff solid",
                fontWeight: "500",
                textTransform: "none",
                ":hover": {
                  border: "0.12vw #fff solid",
                  color: "#fff",
                },
                "@media (max-width: 767px)": {
                  fontSize: "3vw",
                  borderRadius: "1vw",
                  padding: "0.4vw 4vw",
                },
                borderRadius: "0.4vw",
              }}
              style={{
                ...(path === "/profile"
                  ? { color: "#00ff47", border: "0.12vw #00ff47 solid" }
                  : { color: "#fff" }),
              }}
              className={`hover:bg-black`}
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
          <div className="absolute top-0 left-0 w-[70%] h-full flex items-center z-0">
            {founder()}
          </div>
        )}
        {path.slice(0, 8) === "/freelan" && (
          <>
            <div className="absolute top-0 left-0 w-[70%] h-full flex items-center ">
              {freelance()}
            </div>
          </>
        )}
        {path.slice(0, 8) === "/message" && (
          <div className="absolute top-0 left-0 w-[70%] h-full flex items-center ">
            {messages()}
          </div>
        )}
        {path.slice(0, 6) === "/tower" && (
          <div className="absolute top-0 left-0 w-[70%] h-full flex items-center ">
            {tower()}
          </div>
        )}
        {path.slice(0, 6) === "/setti" && (
          <div className="absolute top-0 left-0 w-[70%] h-full flex items-center ">
            {settings()}
          </div>
        )}
        {path.slice(0, 6) === "/profi" && (
          <div className="absolute top-0 left-0 w-[70%] h-full flex items-center -z-10">
            {profile()}
          </div>
        )}
        {path.slice(0, 6) === "/notif" && (
          <div className="absolute top-0 left-0 w-[70%] md:w-[90%] h-full flex items-center -z-10">
            {notification()}
          </div>
        )}
        {path.slice(0, 6) === "/payme" && (
          <div className="absolute top-0 left-0 w-[70%] md:w-[90%] h-full flex items-center -z-10">
            {payment()}
          </div>
        )}
        {path.slice(0, 6) === "/dashb" && (
          <div className="absolute top-0 left-0 w-[70%] md:w-[90%] h-full flex items-center -z-10">
            {dashboard()}
          </div>
        )}
        {path.slice(0, 5) === "/mint" && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center -z-10">
            {mint()}
          </div>
        )}
        {path.slice(0, 5) === "/logi" && (
          <div className="absolute top-0 left-[0] font-[100] md:left-[-3vw] text-center text-[12vw] md:text-[5vw]  justify-center font-[poppins] w-full h-full flex items-center -z-10">
            W E L C O M E
          </div>
        )}
      </div>
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
      className="bg-white px-[2vw] py-[0.5vw] text-black text-[2.4vw] md:text-[1vw]"
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
      className="bg-white px-[3vw] md:px-[1vw] py-[0.5vw] text-black text-[2.4vw] md:text-[0.9vw]"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export function MotionButton2({ children, onClick }: ButtonMotion) {
  return (
    <motion.button
      className="bg-white px-[3vw] md:px-[1vw] py-[0.5vw] text-black text-[2.4vw] md:text-[0.9vw]"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
