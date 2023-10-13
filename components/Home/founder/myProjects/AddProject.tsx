import { init_project } from "@/lib/NexusProgram/project/init_project";
import { update_project } from "@/lib/NexusProgram/project/update_project";
import { Button, FormControlLabel } from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { Connection, clusterApiUrl } from "@solana/web3.js";
import Image from "next/image";
import React, { useState } from "react";

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

export default function addProject() {
  const connection = new Connection(clusterApiUrl("devnet"));

  const anchorWallet = useAnchorWallet();
  const wallet = useWallet();

  const [discod_link, setDiscodLink] = useState<string>("");
  const [twitter_link, setTwitterLink] = useState<string>("");
  const [website_link, setWebsiteLink] = useState<string>("");
  const [thread_link, setThreadLink] = useState<string>("");
  const [hiring, setHiring] = useState(false);
  const [logo, setLogo] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [project_overview, setProjectOverview] = useState<string>("");
  const [name, setName] = useState<string>("");

  const initProject = async () => {
    try {
      await init_project(
        anchorWallet,
        connection,
        name,
        logo,
        category,
        discod_link,
        thread_link,
        twitter_link,
        website_link,
        project_overview,
        hiring
      );
    } catch (e) {
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
  };

  const inputStyle =
    "bg-none border-[0.15vw] mt-[0.6vw] w-[20vw] px-[1vw] text-[0.9vw] py-[0.8vw] border-black rounded-[0.4vw] outline-none focus:border-red-600 focus:scale-[101%] transition-all";
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
  };
  return (
    <div className="px-[4vw]">
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <div className="w-[14vw] rounded-full border-[0.2vw] border-[#00ff47] overflow-hidden">
            <Image
              src={projetImage}
              width={9000}
              height={2000}
              className="w-[14vw] object-cover object-center"
              alt=""
            />
          </div>
          <div className="mt-[1vw] flex justify-center gap-x-[0.6vw]">
            <div>
              <Button
                sx={buttonStyle}
                variant="contained"
                className="bg-[#4AF846] hover:bg-[#4AF846]"
              >
                Change Logo
              </Button>
            </div>
            <div>
              <Button
                sx={buttonStyle}
                variant="contained"
                className="bg-[#4AF846] hover:bg-[#4AF846]"
              >
                Change Background
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-[2vw] gap-y-[2vw] text-black text-[1.6vw]">
          <div>
            <div className="fontPopSemibold">Name</div>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Name"
              className={`${inputStyle}`}
            />
          </div>
          <div>
            <div className="fontPopSemibold">Link Discord</div>
            <input
              onChange={(e) => setDiscodLink(e.target.value)}
              value={discod_link}
              placeholder="https://discord.com/g/12345"
              className={`${inputStyle}`}
            />
          </div>
          <div>
            <div className="fontPopSemibold">Link Thread</div>
            <input
              onChange={(e) => setThreadLink(e.target.value)}
              value={thread_link}
              placeholder="https://thread/12345"
              className={`${inputStyle}`}
            />
          </div>

          <div>
            <div className="fontPopSemibold">Link Website</div>
            <input
              onChange={(e) => setWebsiteLink(e.target.value)}
              value={website_link}
              placeholder="https://example.com"
              className={`${inputStyle}`}
            />
          </div>

          <div>
            <div className="fontPopSemibold">Link Twitter</div>
            <input
              onChange={(e) => setTwitterLink(e.target.value)}
              value={twitter_link}
              placeholder="https://twitter.com/12345"
              className={`${inputStyle}`}
            />
          </div>

          <div>
            <div className="fontPopSemibold">Select Category</div>
            <select className={`${inputStyle}`}>
              <option onClick={() => setCategory("Category 1")} value="">
                Category 1
              </option>
              <option onClick={() => setCategory("Category 2")} value="">
                Category 2
              </option>
              <option onClick={() => setCategory("Category 3")} value="">
                Category 3
              </option>
              <option onClick={() => setCategory("Category 4")} value="">
                Category 4
              </option>
              <option onClick={() => setCategory("Category 5")} value="">
                Category 5
              </option>
            </select>
          </div>
          <div></div>
          <div>
            <div className="fontPopSemibold">Select Chain</div>
            <select className={`${inputStyle}`}>
              <option value="">chain 1</option>
              <option value="">chain 2</option>
              <option value="">chain 3</option>
              <option value="">chain 4</option>
              <option value="">chain 5</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-[3vw] text-[1.6vw] text-black">
        <div>
          <div className="fontPopSemibold">Project Overview</div>
          <textarea
            onChange={(e) => setProjectOverview(e.target.value)}
            value={project_overview}
            rows={5}
            className={`${inputStyle} w-full`}
          />
        </div>
        <div>
          <div className="fontPopSemibold mt-[1vw]">Add Role</div>
          <textarea rows={3} className={`${inputStyle} w-full`} />
        </div>
      </div>
      <div className="mt-[3vw]">
        <div className="flex items-center text-[3vw] fontPopSemibold gap-x-[1vw] text-black">
          <div>Hiring</div>
          <div>
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label=""
            />
          </div>
        </div>
        <div className="flex items-center gap-x-[1vw] mt-[1vw]">
          <div>
            <Button
              variant="contained"
              sx={styleButton1}
              className="bg-[#00ff47] hover:bg-[#00ff47]"
            >
              New Role
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              sx={styleButton2}
              className="bg-[#FF2D2D] hover:bg-[#FF2D2D]"
            >
              Delete Role
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-[5vw] w-full p-[3vw] border-[0.2vw] border-black rounded-[0.6vw] text-[2vw] text-black">
        <div>
          <div className="fontPopSemibold">Category</div>
          <textarea className={`${inputStyle} w-full`} rows={3} />
        </div>
        <div className="mt-[2vw]">
          <div className="fontPopSemibold">Role Needed</div>
          <textarea className={`${inputStyle} w-full`} rows={3} />
        </div>
        <div className="mt-[2vw]">
          <div className="fontPopSemibold">Role Description</div>
          <textarea className={`${inputStyle} w-full`} rows={3} />
        </div>
      </div>
      <div className="flex justify-center mt-[5vw]">
        <Button
          onClick={(e) => {
            e.preventDefault();
            initProject();
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
