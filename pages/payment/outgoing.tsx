import { getPaymentstreamFounder } from "@/lib/NexusProgram/payment/utils.ts/getPaymentstreamFounder";
import { Button } from "@mui/material";
import { web3 } from "@project-serum/anchor";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

let HOUR = 60 * 60;
let DAY = 60 * 60 * 24;
let WEEK = 60 * 60 * 24 * 7;
let MONTH = 60 * 60 * 24 * 30;


export default function outgoing() {



  const anchorWallet = useAnchorWallet()
  const { connection } = useConnection();
  const [payments, setPayments] = useState<any[]>();

  const get_payment = async () => {
    try {
      const _payments = await getPaymentstreamFounder(
        connection, anchorWallet, "confirmed"
      )
      console.log(_payments)
      setPayments(_payments)
    } catch (e) {
      console.log(e);
    }
  }

  const time = (t: number) => {
    if (t == HOUR) return "Hour"
    else if (t == DAY) return "Day"
    else if (t == WEEK) return "Week"
    else if (t == MONTH) return "Month"
  }

  useEffect(() => {
    if (!anchorWallet) return;
    get_payment();
  }, [anchorWallet])

  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Outgoing Payment Streams</title>
      </Head>
      <div className="w-[90vw] md:w-[70vw] mx-auto flex flex-col gap-y-[4vw] md:gap-y-[2vw]">
        {payments && payments.map((el, i) => (
          <div key={i}>
            <motion.div
              whileTap={{ scale: 0.96 }}
              className="w-full cursor-pointer bg-black rounded-[1vw] md:rounded-[0.6vw] text-white px-[3vw] md:px-[2vw] py-[1.2vw] md:py-[0.9vw] flex justify-between items-center"
            >
              <div className="flex items-center gap-x-[2vw] md:gap-x-[1vw]">
                <div className="w-[15vw] md:w-[8vw] h-[15vw] md:h-[8vw] bg-white/60 rounded-full"></div>
                <div className="leading-[6vw] md:leading-[3.3vw]">
                  <div className="text-[2.3vw] md:text-[1.2vw] font-semibold">
                    Bone Shamans
                  </div>
                  <div className="text-[5vw] md:text-[3.2vw] font-semibold">
                    Salary Pay
                  </div>
                  <div className="text-[4vw] md:text-[2vw] text-[#00ff47]">
                    {(Number(el.totalAmount) / web3.LAMPORTS_PER_SOL) / Number(el.workingTime)} /
                    {time(el.timeRate)}
                  </div>
                </div>
              </div>
              <div>
                <Button
                  variant="contained"
                  className={`!text-[2vw] md:!text-[1vw] !normal-case !text-black !w-[20vw] md:!w-[10vw] !py-[0.8vw] md:!py-[0.4vw] ${el.live
                    ? "!bg-[#00ff47]"
                    : "!bg-[#FF2D2D] !text-white"
                    }`}
                >
                  {el.live ? "Runnig" : "Ended"}
                </Button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

