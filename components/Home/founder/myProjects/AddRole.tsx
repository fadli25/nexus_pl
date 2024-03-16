import { init_project } from "@/lib/NexusProgram/project/init_project";
import { init_role } from "@/lib/NexusProgram/project/init_role";
import { update_project } from "@/lib/NexusProgram/project/update_project";
import { notify_delete, notify_error, notify_laoding, notify_success, notify_warning } from "@/pages/profile";
import { Button, FormControlLabel, Stack } from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { web3 } from "@project-serum/anchor";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function addRole({ project }: any) {
  const connection = new Connection(clusterApiUrl("devnet"));

  const anchorWallet = useAnchorWallet();
  // const wallet = useWallet();

  const [loex, setLoEx] = useState<string>("");
  const [hiring, setHiring] = useState(false);
  const [country, setCountry] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [payment, setPayment] = useState<number>();
  const [role, setRole] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const initRole = async () => {
    if (description.length > 120) {
      return notify_warning("Description Need to be less than 120 characters");
    }
    notify_laoding("Transaction Pending...");
    try {
      await init_role(
        anchorWallet,
        connection,
        new web3.PublicKey(project),
        time!,
        payment!,
        role,
        loex,
        description,
        country
      );
      notify_delete()
      notify_success("Roles Created Successfully!")
    } catch (e) {
      notify_delete()
      notify_error("Transaction Failed!")
      console.log(e);
    }
  };

  const projetImage =
    "https://media.discordapp.net/attachments/1085293900706627595/1162188869798736053/Ellipse_18_3.png?ex=653b07ba&is=652892ba&hm=879a3e9d39738e485a66832817a0913f193639592d3b5b36bd607bd37d554ba8&=&width=486&height=443";

  const buttonStyle = {
    fontSize: "1vw",
    padding: "0.6vw 1vw",
    color: "#000",
    background: "#4AF846",
    textTransform: "none",
    ":hover": {
      background: "#4AF846",
    },
    "@media (max-width:767px)": {
      fontSize: "2.4vw",
      width: "40vw",
      padding: "1.5vw",
    },
  };

  const inputStyle =
    "bg-none border-[0.15vw] mt-[0.6vw] w-full md:w-[20vw] px-[3vw] md:px-[1vw] text-[3vw] md:text-[0.9vw] py-[1.4vw] md:py-[0.8vw] border-black rounded-[1vw] md:rounded-[0.4vw] outline-none focus:border-red-600 focus:scale-[101%] transition-all";

  const inputStyle2 =
    "border-[0.16vw] md:border-[0.12vw] mt-[0.6vw] border-black rounded-[1vw] md:rounded-[0.4vw] px-[2vw] md:px-[1vw] py-[1.4vw] md:py-[0.7vw] outline-none";

  const styleButton1 = {
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
  const styleButton2 = {
    fontSize: "1vw",
    padding: "0.7vw 2vw",
    borderRadius: "0.6vw",
    background: "#FF2D2D",
    textTransform: "none",
    color: "#fff",
    ":hover": {
      background: "#FF2D2D",
    },
    "@media (max-width:767px)": {
      fontSize: "3vw",
      padding: "0.7vw 4vw",
    },
  };

  const [data, setData] = useState([1]);

  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    // Increment the click count
    setClickCount((prevCount) => prevCount + 1);

    // Update the state with [1, 2, 3, 4]
    setData((prevData) => [...prevData, clickCount + 2]);
  };
  return (
    <div className="px-[4vw]">
      {/* <div className="mt-[3vw]">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[5vw] md:text-[3vw] fontPopSemibold gap-x-[3vw] md:gap-x-[1vw] text-black">
            <div>Recruiting</div>
            <div>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label=""
              />
            </div>
          </div>
          <Button
            variant="contained"
            sx={styleButton2}
            className="bg-[#FF2D2D] hover:bg-[#FF2D2D]"
          >
            Delete Role
          </Button>
        </div>
      </div> */}

      <div className="pt-[5vw] text-[3.5vw] md:text-[1.2vw] font-semibold text-black">
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-between gap-[5vw] md:gap-[2vw]">
          {data.map((el, i) => (
            <Stack className="p-[3vw] md:p-[1vw] border-[0.2vw] md:border-[0.16vw] border-black rounded-[1vw] md:rounded-[0.6vw] w-full h-fit gap-y-[1vw]">
              <Stack direction="row" spacing={1} justifyContent="space-between">
                <div className="w-full">
                  <div>Role Needed</div>
                  <input
                    onChange={(e) => setRole(e.target.value)}
                    className={`${inputStyle2} w-full`}
                  />
                </div>
                <div className="w-[60%]">
                  <Stack direction="row" justifyContent="space-between">
                    <label>Payement</label>
                    <label>Time</label>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <input
                      onChange={(e) => setPayment(Number(e.target.value))}
                      className={`${inputStyle2} !border-r-0 !rounded-r-none w-full`}
                    />
                    <div
                      className={`border-[0.12vw] mt-[0.6vw] border-black rounded-l-none rounded-[0.4vw] px-[1vw] py-[1.8vw] md:py-[0.85vw] text-[3vw] md:text-[1vw]`}
                    >
                      Mnth
                    </div>
                  </Stack>
                </div>
              </Stack>

              <Stack direction="row" spacing={1} justifyContent="space-between">
                <div className="w-full">
                  <div>Category</div>
                  <input
                    onChange={(e) => setCategory(e.target.value)}
                    className={`${inputStyle2} w-full`}
                  />
                </div>
                <div className="w-[60%]">
                  <Stack direction="row" justifyContent="space-between">
                    <label>Country</label>
                  </Stack>
                  <input
                    onChange={(e) => setCountry(e.target.value)}
                    className={`${inputStyle2} w-full`}
                  />
                </div>
              </Stack>

              <Stack>
                <div className="w-full">
                  <div>Level of experience</div>
                  <input
                    onChange={(e) => setLoEx(e.target.value)}
                    className={`${inputStyle2} w-full`}
                  />
                </div>
              </Stack>

              <Stack>
                <div className="w-full">
                  <div>Role Description</div>
                  <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className={`${inputStyle2} w-full`}
                  />
                </div>
              </Stack>
            </Stack>
          ))}

          {/* <Stack className="relative w-full flex justify-center items-center py-[4vw] border-[0.2vw] h-full border-black rounded-[0.6vw]">
            <div className="absolute top-[5%] left-[5%] text-[3vw] md:text-[1.4vw] text-black">
              Add new role
            </div>
            <motion.button whileTap={{ scale: 0.96 }} onClick={handleClick}>
              <IoIosAddCircle className="text-[35vw] md:text-[15vw] text-black/40" />
            </motion.button>
          </Stack> */}
        </div>
      </div>

      <div className="flex justify-center mt-[5vw]">
        <Button
          onClick={(e) => {
            e.preventDefault();
            initRole();
          }}
          variant="contained"
          sx={styleButton1}
          className="bg-[#00ff47] hover:bg-[#00ff47]"
        >
          Done
        </Button>
      </div>
    </div>
  );
}
