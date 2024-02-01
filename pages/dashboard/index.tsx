import Head from "next/head";
import React, { useState } from "react";
import plImage from "@/public/pl.png";
import Image from "next/image";
import { Button } from "@mui/material";

export default function index() {
  const TextStyle = "text-[3vw] md:text-[1.2vw] underline font-normal";

  const data = [
    {
      name: "Bone Shamans",
    },
    {
      name: "Bone Shamans",
    },
    {
      name: "Bone Shamans",
    },
    {
      name: "Bone Shamans",
    },
    {
      name: "Bone Shamans",
    },
  ];

  const [connectWallet, setConnetWallet] = useState(false);

  return (
    <div className="w-full text-black md:w-[84vw] float-right px-[5vw] py-[4vw]">
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex justify-between gap-x-[2vw] flex-col md:flex-row">
        <div className="w-full md:w-[55vw] overflow-hidden relative">
          {!connectWallet && (
            <div className="absolute top-0 left-0 w-full h-full rounded-[0.6vw] bg-gray-500/30 backdrop-blur-sm grid place-items-center">
              <Button
                onClick={() => setConnetWallet(true)}
                variant="contained"
                className="!text-[4vw] md:!text-[1.4vw] !w-[40vw] md:!w-[20vw] !text-black !px-[3.4vw] !py-[0.6vw] !rounded-[0.6vw] !bg-[#00ff47]"
              >
                Connect Wallet to view
              </Button>
            </div>
          )}
          <div className={`${TextStyle}`}>Wallet Balance:</div>
          <div className="mt-[3vw] mx-auto md:mx-0 w-[70vw] md:w-[30vw] flex flex-col justify-center">
            <Image src={plImage} width={9000} height={2000} alt="" />
            <div className="text-center mt-[3vw] text-[5vw] md:text-[4vw] font-semibold">
              $ 200,000
            </div>
          </div>
        </div>
        <div className="w-full md:w-[35vw] text-[4vw] md:text-[1.5vw] font-semibold">
          <div className={`${TextStyle}`}>Live Transactions:</div>
          <div className="w-full relative overflow-hidden p-[5vw] md:p-[2vw] flex flex-col gap-y-[4vw] mt-[1vw] border-black border-[0.12vw] rounded-[0.6vw]">
            {!connectWallet && (
              <div className="absolute top-0 left-0 w-full h-full rounded-[0.6vw] bg-gray-500/30 backdrop-blur-sm grid place-items-center">
                <Button
                  onClick={() => setConnetWallet(true)}
                  variant="contained"
                  className="!text-[4vw] md:!text-[1.4vw] !w-[40vw] md:!w-[20vw] !text-black !px-[3.4vw] !py-[0.6vw] !rounded-[0.6vw] !bg-[#00ff47]"
                >
                  Connect Wallet to view
                </Button>
              </div>
            )}
            <div>
              <div className={`${TextStyle}`}>Incoming Streams:</div>5 |{" "}
              <span className="text-[#00ff47]">$ 50,000</span>
            </div>
            <div>
              <div className={`${TextStyle}`}>Outgoing Stream:</div>5 |{" "}
              <span className="text-[#FF0000]">$100,000</span>
            </div>
            <div>
              <div className={`${TextStyle}`}>Incoming Escrow:</div>5 |{" "}
              <span className="text-[#00ff47]">$ 10,000</span>
            </div>
            <div>
              <div className={`${TextStyle}`}>Outgoing Escrow:</div>5 |{" "}
              <span className="text-[#FF0000]">$ 5,000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[3vw] font-semibold flex flex-col md:flex-row justify-between gap-x-[2vw]">
        <div className="w-full h-fit overflow-hiddens md:w-[55vw] p-[2vw] mt-[1vw] border-black border-[0.12vw] rounded-[0.6vw]">
          <div className={`${TextStyle}`}>My Projects:</div>
          <div className="flex justify-between items-center">
            <div className="text-[10vw] md:text-[6vw] flex justify-center items-center w-[30%] ">
              4
            </div>
            <div className="flex flex-col gap-y-[2.5vw] md:gap-y-[1.5vw] h-[30vw] md:h-[16vw] px-[1vw] overflow-y-scroll">
              {data.map((el, i) => (
                <div key={i}>
                  <Button
                    variant="contained"
                    className="!text-2vw !text-black !px-[3.4vw] !py-[0.6vw] !rounded-[0.6vw] !bg-[#00ff47]"
                  >
                    {el.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full text-[5vw] md:text-[1.5vw] md:w-[35vw] p-[2vw] flex flex-col gap-y-[4vw] mt-[1vw] border-black border-[0.12vw] rounded-[0.6vw]">
          <div>
            <div className={`${TextStyle}`}>Ongoing Jobs:</div>
            <div>3 Jobs | 5 Gigs</div>
          </div>
          <div className="mt-[3.4vw]">
            <div className={`${TextStyle}`}>Ongoing Applications:</div>
            <div>5 Job applications</div>
            <div>5 Gigs applications</div>
          </div>
        </div>
      </div>
      <div className="mt-[3vw] p-[2vw] h-[40vw] md:h-[24vw] !text-[1.6vw] border-black border-[0.12vw] rounded-[0.6vw]">
        <div className={`${TextStyle}`}>Transaction History:</div>
      </div>
      <div className="mt-[3vw] p-[2vw] h-[40vw] md:h-[24vw] !text-[1.6vw] border-black border-[0.12vw] rounded-[0.6vw]">
        <div className={`${TextStyle}`}>Job History:</div>
      </div>
    </div>
  );
}
