import aptosImg from "@/public/Aptos.svg";
import polygonImg from "@/public/Polygon.svg";
import solanaImg from "@/public/Solana.svg";
import { Button } from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import { BiSolidShow } from "react-icons/bi";
import { toast } from "react-toastify";
import { init_user } from "../lib/NexusProgram/user/init_user";
import { update_user } from "../lib/NexusProgram/user/update_user";
import { get_user_info } from "../lib/NexusProgram/user/utils/user_info";

export const notify_success = (msg: string) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const notify_warning = (msg: string) => {
  toast.warning(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const notify_error = (msg: string) => {
  toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const notify_laoding = (msg: string) => {
  toast.loading(msg, {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const notify_delete = () => {
  toast.dismiss();
};


export default function profile() {
  const [exist, setExist] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const [showChains, setShowChains] = useState(false);
  const [chains, setChains] = useState<ReactNode>();
  const [level, setLevel] = useState<string>("");
  const [showLevels, setShowLevels] = useState(false);
  const [image, setImage] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [roles, setRoles] = useState<string>("");
  const [payment_rate_per_hour, setPaymentRatePerHour] = useState<number>(0);
  const [profile_overview, setProfileOverview] = useState<string>("");
  const [others, setOthers] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nogotion, setNigotion] = useState<boolean>(true);
  const [portfolio, setPortfolio] = useState<string>("");
  const [resume, setResume] = useState<string>("");
  const [tosp, setTosp] = useState<string>("Individual");
  const [timezone, setTimeZone] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [website, setW] = useState<string>("");
  const [twitter, setTw] = useState<string>("");
  const [linkdin, setL] = useState<string>("");
  const [telegram, setTE] = useState<string>("");
  const [discord, setD] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const connection = new Connection(clusterApiUrl("devnet"));

  const anchorWallet = useAnchorWallet();
  const wallet = useWallet();

  async function initialize_user() {
    try {

      if (profile_overview.length > 120) {
        return notify_warning("Profile Overview need to be at least 120 characters!")
      }

      notify_laoding("Creating Profile...");
      setLoading(true);
      await init_user(
        anchorWallet,
        connection,
        name,
        image,
        category,
        roles,
        level,
        others,
        profile_overview,
        payment_rate_per_hour,
        nogotion,
        portfolio,
        resume,
        tosp,
        timezone,
        country
      );
      notify_delete();
      notify_success("Profile Created!");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      notify_delete();
      notify_error("Transaction Failed");
      console.log(e);
    }
  }

  async function update_user_info() {
    try {

      if (profile_overview.length > 120) {
        return notify_warning("Profile Overview need to be at least 120 characters!")
      }

      notify_laoding("Updating Profile...");
      setLoading(true);
      await update_user(
        anchorWallet,
        connection,
        name,
        image,
        category,
        roles,
        level,
        others,
        profile_overview,
        payment_rate_per_hour,
        nogotion,
        discord,
        telegram,
        website,
        linkdin,
        twitter
      );
      notify_delete();
      notify_success("Profile Updated!");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      notify_delete();
      notify_error("Transaction Failed");
      console.log(e);
    }
  }

  async function check_user() {
    try {
      const user_info = await get_user_info(anchorWallet, connection);

      if (user_info) {
        setExist(true);
        setChains(user_info.chain);
        setLevel(user_info.levelOfExpertise);
        setImage(user_info.image);
        setCategory(user_info.category);
        setRoles(user_info.roles);
        setPaymentRatePerHour(user_info.paymentRatePerHour);
        setProfileOverview(user_info.profileOverview);
        setOthers(user_info.others);
        setName(user_info.name);
        setNigotion(user_info.nigotion);
        setCountry(user_info.country);
        setResume(user_info.resume);
        setTimeZone(user_info.timezone);
        setTosp(user_info.tosp);
        setPortfolio(user_info.portfolio);
        setD(user_info.discordId);
        setW(user_info.website);
        setTw(user_info.twitter);
        setTE(user_info.telegramId);
        setL(user_info.linkedin);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!anchorWallet) return;

    check_user();
  }, [anchorWallet, anchorWallet?.publicKey]);


  return (
    <div className="w-full md:w-[84vw] float-right pb-[5vw]">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="w-[90vw] md:w-[50vw] text-[4vw] md:text-[1.4vw] mx-auto pt-[5vw] text-black ">
        <div className="fontPopSemibold text-[5.5vw] md:text-[3vw]">
          {name && name}
        </div>
        <div className="flex justify-between mt-[1vw] items-center">
          <div className="flex gap-x-[3vw] text-[4vw] md:text-[1.4vw] font-semibold">
            <ButtonMotion className="text-[#00ff47]">
              BOOST PROFILE
            </ButtonMotion>
            <ButtonMotion className="">Share</ButtonMotion>
            <ButtonMotion className="">Export PDF</ButtonMotion>
          </div>
          <ButtonMotion
            onClick={() => setShow(!show)}
            className={`text-[5vw] md:text-[2.4vw] ${show && "text-[#00ff47]"
              } `}
          >
            <BiSolidShow />
          </ButtonMotion>
        </div>
        {/*  */}
        <div className="mt-[7vw] md:mt-[4vw]">
          <label className="fontPopSemibold text-base">Username</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className=" p-2 mt-[0.5vw] w-full h-[3.5rem] md:h-[4rem] shadow-md rounded-xl border border-black"
          />
          {/* <div className="mt-[0.5vw] w-full h-[4rem] rounded-[1.2vw] border-[0.14vw] border-black"></div> */}
        </div>
        {/*  */}
        {/*  */}
        <div className="mt-[6vw] md:mt-[2vw]">
          <label className="fontPopSemibold text-base">Role</label>
          <input
            value={roles}
            onChange={(e) => setRoles(e.target.value)}
            type="text"
            className=" p-2 mt-[0.5vw] w-full h-[3.5rem] md:h-[4rem] rounded-xl shadow-md border border-black"
          />
        </div>
        {/*  */}
        <div className="mt-[6vw] md:mt-[2vw] flex flex-col md:flex-row justify-start items-start md:items-center gap-[1rem]">
          <div className=" w-full md:w-[60%] relative z-10">
            <div className="fontPopSemibold text-base">
              Chains (What chains you are active on)
            </div>
            <div
              onClick={() => setShowChains(!showChains)}
              className="mt-[0.5vw] w-full px-[3vw] cursor-pointer h-[3.5rem] md:h-[4rem] shadow-md rounded-xl border-[0.14vw] border-black z-10 flex items-center bg-white"
            >
              {chains}
            </div>
            {showChains && (
              <div className="top-[-1vw] pt-[1vw] px-[3vw] relative -z-10 left-0 w-full h-[29.5vw] md:h-[13vw] text-[0.9vw] border-black border-[0.1vw] rounded-b-[1vw] bg-[#e9e9e9]">
                <div
                  onClick={() => {
                    setChains(<Chain1 />);
                    setShowChains(false);
                  }}
                  className="my-[1vw] md:my-[0.6vw] cursor-pointer w-full h-[8vw] md:h-[3vw] flex items-center rounded-full px-[4vw] md:px-[2vw] bg-white border-black border-[0.1vw]"
                >
                  <Chain1 />
                </div>
                <div
                  onClick={() => {
                    setChains(<Chain2 />);
                    setShowChains(false);
                  }}
                  className="my-[1vw] md:my-[0.6vw] cursor-pointer w-full h-[8vw] md:h-[3vw] flex items-center rounded-full px-[4vw] md:px-[2vw] bg-white border-black border-[0.1vw]"
                >
                  <Chain2 />
                </div>
                <div
                  onClick={() => {
                    setChains(<Chain3 />);
                    setShowChains(false);
                  }}
                  className="my-[1vw] md:my-[0.6vw] cursor-pointer w-full h-[8vw] md:h-[3vw] flex items-center rounded-full px-[4vw] md:px-[2vw] bg-white border-black border-[0.1vw]"
                >
                  <Chain3 />
                </div>
              </div>
            )}
          </div>
          <div className="w-full md:w-[40%] flex flex-col ">
            <label className="fontPopSemibold text-base">Country</label>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              className=" p-2 mt-[0.5vw] w-full h-[3.5rem] md:h-[4rem] shadow-md rounded-xl border border-black"
            />
          </div>
        </div>
        {/*  */}
        <div className="mt-[6vw] md:mt-[2vw] flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-[1rem]">
          <div className="md:w-[60%] w-full">
            <label className="fontPopSemibold text-base">
              Category (What type of projects do you work with)
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] h-[3.5rem] md:h-[4rem]  shadow-md rounded-xl outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80 "
            />
          </div>
          <div className="md:w-[40%] w-full flex flex-col ">
            <label htmlFor="" className="fontPopSemibold text-base">
              Timezone
            </label>
            <input
              value={timezone}
              onChange={(e) => setTimeZone(e.target.value)}
              type="text"
              className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] h-[3.5rem] md:h-[4rem] shadow-md rounded-xl outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80"
            />
          </div>
        </div>
        {/*  */}
        <div>
          <div className="mt-[5vw] md:mt-[2vw] flex flex-col">
            <label className="fontPopSemibold text-base">
              Type of service provider
            </label>
            {/* <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] rounded-[1.2vw] outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80"
            /> */}
            <select
              value={tosp}
              name=""
              id=""
              className=" border p-[1rem] border-black h-[3.5rem] md:h-[4rem] shadow-md rounded-xl bg-white text-base"
            >
              <option onClick={() => setTosp("Individual")} value="individual">Individual</option>
              <option onClick={() => setTosp("Agency")} value="agency">Agency</option>
            </select>
          </div>
          {/* <div>
            <div></div>
            <div></div>
          </div> */}
        </div>
        {/*  */}
        <div className="mt-[5vw] md:mt-[2vw]">
          <div className="fontPopSemibold text-base">
            Profile Overview (Tell us about yourself)
          </div>
          <textarea
            value={profile_overview}
            onChange={(e) => setProfileOverview(e.target.value)}
            rows={5}
            className="fontPop text-base mt-[0.5vw] w-full h-[10rem] py-[2vw] md:py-[1vw] shadow-md rounded-xl outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80"
          />
        </div>
        {/*  */}
        <div className="mt-[5vw] md:mt-[2vw]">
          <div className="fontPopSemibold text-base">Resume</div>
          <input
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            type="text"
            className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] h-[3.5rem] md:h-[4rem] shadow-md rounded-xl outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80"
          />
        </div>
        {/*  */}
        <div className="mt-[5vw] md:mt-[2vw]">
          <div className="fontPopSemibold text-base">
            Portfolio (Behance, Dribbble)
          </div>
          <input

            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            type="text"
            className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] h-[3.5rem] md:h-[4rem] shadow-md rounded-xl outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80"
          />
        </div>
        {/* */}
        <div className="mt-[5vw] md:mt-[2vw] relative z-10">
          <div className="fontPopSemibold text-base">Level of experience</div>
          <div
            onClick={() => setShowLevels(!showLevels)}
            className="mt-[0.5vw] w-full flex items-center shadow-md h-[3.5rem] md:h-[4rem] px-[3vw] cursor-pointer rounded-[1.2vw] border-[0.14vw] border-black z-10 bg-white"
          >
            {level}
          </div>
          {showLevels && (
            <div className="top-[-1vw] pt-[1vw] px-[3vw] relative -z-10 left-0 w-full h-[22.4vw] md:h-[11vw] text-[2.8vw] md:text-[0.9vw] border-black border-[0.1vw] rounded-b-[1vw] bg-[#e9e9e9]">
              <div
                onClick={() => {
                  setLevel("Entry Level");
                  setShowLevels(false);
                }}
                className="my-[1.1vw] md:my-[0.6vw] cursor-pointer w-full rounded-full py-[0.5vw] px-[2vw] bg-[#00FF47] border-black border-[0.1vw]"
              >
                Entry Level
              </div>
              <div
                onClick={() => {
                  setLevel("Intermediate");
                  setShowLevels(false);
                }}
                className="my-[1.1vw] md:my-[0.6vw] cursor-pointer w-full rounded-full py-[0.5vw] px-[2vw] bg-[#F0B90B] border-black border-[0.1vw]"
              >
                Intermediate
              </div>
              <div
                onClick={() => {
                  setLevel("Expert");
                  setShowLevels(false);
                }}
                className="my-[1.1vw] md:my-[0.6vw] cursor-pointer w-full rounded-full py-[0.5vw] px-[2vw] bg-[#1DA1F2] border-black border-[0.1vw]"
              >
                Expert
              </div>
            </div>
          )}
        </div>
        {/*  */}
        <div className="mt-[5vw] md:mt-[2vw]">
          <div className="fontPopSemibold  text-base flex justify-between items-center">
            <div>Payment Rate</div>
            <div className="flex items-center gap-x-[0.7vw] text-[2.4vw] md:text-[1vw]">
              <div>Open to negation</div>
              <div>
                <Switch sx={{ color: "#00ff47" }} />
              </div>
            </div>
          </div>
          <div className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] h-[3.5rem] md:h-[4rem] rounded-xl border-[0.14vw] border-black px-[2vw] shadow-md focus:scale-[101%] transition-all text-black/80 flex flex-row gap-[1rem] items-center justify-between">
            <div>
              <input
                value={Number(payment_rate_per_hour)}
                onChange={(e) => setPaymentRatePerHour(Number(e.target.value))}
                type="text"
                placeholder="0"
                className="w-full rounded-xl outline-none focus:scale-[101%] transition-all text-black/80 "
              />
            </div>
            <div className="flex flex-row items-center gap-[.5rem] ">
              <div>per</div>
              <div>
                <select
                  name=""
                  id=""
                  className="outline-none border border-solid border-black bg-white h-[2rem] md:h-[3rem] rounded-xl w-[6rem] text-center font-semibold"
                >
                  <option value="month">Month</option>
                  <option value="day">Day</option>
                  <option value="year">Year</option>
                  <option value="week">Week</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[5vw] md:mt-[2vw]">
          <div className="fontPopSemibold text-base">
            Others (Case Studies, Testimonials)
          </div>
          <textarea
            value={others}
            onChange={(e) => setOthers(e.target.value)}
            rows={3}
            className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] shadow-md rounded-xl outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80 h-[10rem]"
          />
        </div>
      </div>
      <div className="mt-[4vw] flex justify-center">
        <Button
          onClick={() => {
            exist ? update_user_info() : initialize_user();
          }}
          className="bg-[#00ff47] hover:bg-[#00ff47]"
          sx={{
            background: "#00ff47",
            fontSize: "1.2vw",
            textTransform: "none",
            padding: "0.6vw 2vw",
            ":hover": {
              background: "#00ff47",
            },
            color: "#000",
            "@media (max-width:767px)": {
              fontSize: "3vw",
              adding: "0.6vw 3vw",
            },
          }}
          variant="contained"
        >
          {!exist ? "Submit" : "Update"}
        </Button>
      </div>
    </div>
  );
}

interface ButtonMotionType {
  children: ReactNode;
  className: string;
  onClick?: () => void;
}

export function ButtonMotion({
  children,
  className,
  onClick,
}: ButtonMotionType) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      className={`${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

interface chainType {
  className: string;
}

export function Chain1() {
  return (
    <motion.div className="flex items-center gap-x-[0.5vw]">
      <div className="w-[6vw] md:w-[2vw] flex items-center gap-x-[0.6vw] font-semibold text-[3vw] md:text-[1vw]">
        <Image src={solanaImg} width={9000} height={2000} alt="" />
        <div>Solana</div>
      </div>
    </motion.div>
  );
}
export function Chain2() {
  return (
    <motion.div className="flex items-center gap-x-[0.5vw]">
      <div className="w-[5vw] md:w-[1.6vw] flex items-center gap-x-[0.6vw] font-semibold text-[3vw] md:text-[1vw]">
        <Image src={aptosImg} width={9000} height={2000} alt="" />
        <div>Aptos</div>
      </div>
    </motion.div>
  );
}

export function Chain3() {
  return (
    <motion.div className="flex items-center gap-x-[0.5vw]">
      <div className="w-[6vw] md:w-[2vw] flex items-center gap-x-[0.6vw] font-semibold text-[3vw] md:text-[1vw]">
        <Image src={polygonImg} width={9000} height={2000} alt="" />
        <div>Polygon</div>
      </div>
    </motion.div>
  );
}
