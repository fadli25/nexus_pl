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
  const [links, setLinks] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [nogotion, setNigotion] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const connection = new Connection(clusterApiUrl("devnet"));

  const anchorWallet = useAnchorWallet()
  const wallet = useWallet()

  async function initialize_user() {
    try {
      notify_laoding("transaction pending...");
      setLoading(true);
      await init_user(
        anchorWallet,
        connection,
        name,
        image,
        category,
        roles,
        level,
        links,
        profile_overview,
        payment_rate_per_hour,
        nogotion
      )
      notify_delete();
      notify_success("transaction successful");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      notify_delete();
      notify_error("transaction failed");
      console.log(e);
    }
  }


  async function update_user_info() {
    try {
      notify_laoding("transaction pending...");
      setLoading(true);
      await update_user(
        anchorWallet,
        connection,
        name,
        image,
        category,
        roles,
        level,
        links,
        profile_overview,
        payment_rate_per_hour,
        nogotion
      )
      notify_delete();
      notify_success("transaction successful");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      notify_delete();
      notify_error("transaction failed");
      console.log(e);
    }
  }

  async function check_user() {
    try {

      const user_info = await get_user_info(anchorWallet, connection);

      if (user_info) {
        setExist(true);
        setChains(user_info.chain);
        setLevel(user_info.levelOfExpertise)
        setImage(user_info.image)
        setCategory(user_info.category)
        setRoles(user_info.roles)
        setPaymentRatePerHour(user_info.paymentRatePerHour)
        setProfileOverview(user_info.profileOverview)
        setLinks(user_info.links)
        setName(user_info.name)
        setNigotion(user_info.nigotion)

      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (!anchorWallet) return;

    check_user();

  }, [anchorWallet, anchorWallet?.publicKey])

  const notify_success = (msg: string) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const notify_warning = (msg: string) => {
    toast.warning(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const notify_error = (msg: string) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const notify_laoding = (msg: string) => {
    toast.loading(msg, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const notify_delete = () => {
    toast.dismiss();
  };


  return (
    <div className="w-full md:w-[80vw] float-right pb-[5vw]">
      <Head>
        <title>Profile</title>
      </Head>
      <div className="w-[90vw] md:w-[50vw] text-[4vw] md:text-[1.4vw] mx-auto pt-[5vw] text-black ">
        <div className="fontPopSemibold text-[5.5vw] md:text-[3vw]">
          Zetsu | The Shaman King
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
          <div className="fontPopSemibold">Protfolio (images)</div>
          <div className="mt-[0.5vw] w-full h-[22vw] md:h-[16vw] rounded-[1.2vw] border-[0.14vw] border-black"></div>
        </div>
        {/*  */}
        <div className="mt-[5vw] md:mt-[2vw] relative z-10">
          <div className="fontPopSemibold">Chains</div>
          <div
            onClick={() => setShowChains(!showChains)}
            className="mt-[0.5vw] w-full px-[3vw] cursor-pointer h-[10vw] md:h-[4.2vw] rounded-[1.2vw] border-[0.14vw] border-black z-10 flex items-center bg-white"
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
                  setChains(<Chain1 />);
                  setShowChains(false);
                }}
                className="my-[1vw] md:my-[0.6vw] cursor-pointer w-full h-[8vw] md:h-[3vw] flex items-center rounded-full px-[4vw] md:px-[2vw] bg-white border-black border-[0.1vw]"
              >
                <Chain1 />
              </div>
            </div>
          )}
        </div>
        {/*  */}
        <div className="mt-[5vw] md:mt-[2vw]">
          <div className="fontPopSemibold">Category</div>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] rounded-[1.2vw] outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80"
          />
        </div>
        {/*  */}
        <div className="mt-[5vw] md:mt-[2vw]">
          <div className="fontPopSemibold">Roles</div>
          <input
            value={roles}
            onChange={(e) => setRoles(e.target.value)}
            type="text"
            className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] rounded-[1.2vw] outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80"
          />
        </div>
        {/*  */}
        <div className="mt-[5vw] md:mt-[2vw] relative z-10">
          <div className="fontPopSemibold">Level of expertise</div>
          <div
            onClick={() => setShowLevels(!showLevels)}
            className="mt-[0.5vw] w-full flex items-center h-[10vw] md:h-[4.2vw] px-[3vw] cursor-pointer rounded-[1.2vw] border-[0.14vw] border-black z-10 bg-white"
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
          <div className="fontPopSemibold flex justify-between items-center">
            <div>Payment Rate per hour</div>
            <div className="flex items-center gap-x-[0.7vw] text-[2.4vw] md:text-[1vw]">
              <div>Open to negation</div>
              <div>
                <Switch sx={{ color: "#00ff47" }} />
              </div>
            </div>
          </div>
          <input
            value={Number(payment_rate_per_hour)}
            onChange={(e) => setPaymentRatePerHour(Number(e.target.value))}
            type="text"
            className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] rounded-[1.2vw] outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80"
          />
        </div>
        {/*  */}
        <div className="mt-[5vw] md:mt-[2vw]">
          <div className="fontPopSemibold">Profile Overview</div>
          <textarea
            value={profile_overview}
            onChange={(e) => setProfileOverview(e.target.value)}
            rows={5}
            className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] rounded-[1.2vw] outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80"
          />
        </div>
        {/*  */}
        <div className="mt-[5vw] md:mt-[2vw]">
          <div className="fontPopSemibold">Links</div>
          <textarea
            value={links}
            onChange={(e) => setLinks(e.target.value)}
            rows={3}
            className="mt-[0.5vw] w-full py-[2vw] md:py-[1vw] rounded-[1.2vw] outline-none border-[0.14vw] border-black px-[2vw] focus:scale-[101%] transition-all text-black/80"
          />
        </div>
      </div>
      <div className="mt-[4vw] flex justify-center">
        <Button
          onClick={() => {
            exist ?
              update_user_info()
              :
              initialize_user()
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
          {
            !exist ?
              "Submit"
              :
              "Update"
          }
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
  const chainImg =
    "https://s3-alpha-sig.figma.com/img/9f2c/d78e/2949648c95c65ad5bb038ddaff7c3a17?Expires=1694390400&Signature=DMGkXeuvwBYIwWYs9JtttkbkfLtcXEUuYJrIXx1iq8N8YSrRa8owneJ3EQj7ResMsiXRzFlheO3sEkPLIbf~lDdpfVVNXcjiAbDL4t1k7K3nChRpwKaCuz50rUvzW-qnYqXhDyF3KIUNZPiqb2A8LF5nYppt7iZ0GxbRh76oajgsf0X4WAse0UWhhfAmrTBsxAr5z3yT-Im6MV1zfCyOWW5VzWbfUNEkaJFAxk8WmcuRYfxCz62fM18CBxuMYHx1QPEZuGUSnCF3GdYeYaeKzajUqSGGrqYOtm9MwpV3hHyycYlFKEFjwn36sr4dLU6W2ih-KWp8DQRa75epECXXuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  return (
    <motion.div className="flex items-center gap-x-[0.5vw]">
      <div className="w-[20vw] md:w-[5vw]">
        <Image src={chainImg} width={9000} height={2000} alt="" />
      </div>
    </motion.div>
  );
}
export function Chain2() {
  const chainImg =
    "https://s3-alpha-sig.figma.com/img/8c77/db9b/1bd6ae82b38daaf0abae070b391ed1e1?Expires=1694390400&Signature=J~iUv6kPz5a~yHAjFnLVqd02aHAQHbrzEuVPAeN3JPN0Ciyy8BPa4VzLKiPCf4Ai~n4Ryo5p31HRL50RTfGy8FL7~fG4AiMuO9fEO9kaiL~foLjDIpHZ22ChBrdNdHqI2FRmBf~E5ZK59GjAvVfAXGds4jTiNqfOcrNpcKBaYOPDpkwa8Vy-~9pH2aKsK9xeLM6y~d3kA6pfHB55S6Ln901Mbd04dXh8euagdKcSaXOYAsIGha-bdY6R~MCzE5E2blYx4ydrpMbUSLokr8jPFbgf~jXHaXIlF8r4pZY20R~obL37VGCwhjPGF8JLnHJrFk31VEfzv8q8c8V9BfcnOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  return (
    <motion.div className="flex items-center gap-x-[0.5vw]">
      <div className="w-[20vw] md:w-[5vw]">
        <Image src={chainImg} width={9000} height={2000} alt="" />
      </div>
    </motion.div>
  );
}

export function Chain3() {
  const chainImg =
    "https://s3-alpha-sig.figma.com/img/9f2c/d78e/2949648c95c65ad5bb038ddaff7c3a17?Expires=1694390400&Signature=DMGkXeuvwBYIwWYs9JtttkbkfLtcXEUuYJrIXx1iq8N8YSrRa8owneJ3EQj7ResMsiXRzFlheO3sEkPLIbf~lDdpfVVNXcjiAbDL4t1k7K3nChRpwKaCuz50rUvzW-qnYqXhDyF3KIUNZPiqb2A8LF5nYppt7iZ0GxbRh76oajgsf0X4WAse0UWhhfAmrTBsxAr5z3yT-Im6MV1zfCyOWW5VzWbfUNEkaJFAxk8WmcuRYfxCz62fM18CBxuMYHx1QPEZuGUSnCF3GdYeYaeKzajUqSGGrqYOtm9MwpV3hHyycYlFKEFjwn36sr4dLU6W2ih-KWp8DQRa75epECXXuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  return (
    <motion.div className="flex items-center gap-x-[0.5vw]">
      <div className="w-[20vw] md:w-[5vw]">
        <Image src={chainImg} width={9000} height={2000} alt="" />
      </div>
    </motion.div>
  );
}
