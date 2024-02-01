import { one_time_payment } from "@/lib/NexusProgram/payment/recuring_payment";
import { get_apa_info } from "@/lib/NexusProgram/project/utils/get_Apa_info";
import { Button } from "@mui/material";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

let HOUR = 60 * 60;
let DAY = 60 * 60 * 24;
let WEEK = 60 * 60 * 24 * 7;
let MONTH = 60 * 60 * 24 * 30;

export default function recurringpayment() {
  const router = useRouter();
  const anchorWallet = useAnchorWallet();
  const { connection } = useConnection();
  const [apa, setApa] = useState<any>();
  const [payment_rate, setPaymentrate] = useState<any>();
  const [time_rate, setTimeRate] = useState<any>();
  const [amount, setAmount] = useState<any>();
  const [showLevels, setShowLevels] = useState(false);

  const get_apa = async (_apa: string) => {
    try {
      const apa = await get_apa_info(anchorWallet, connection, _apa);
      setApa(apa);
      console.log(apa);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!anchorWallet) return;
    if (!router.isReady) return;
    console.log("_projects");

    const { address } = router.query;
    console.log(address);

    get_apa(address as string);
  }, [anchorWallet, router.isReady]);

  const init_payment = async () => {
    try {
      let time = 0;
      if (time_rate == "Month") {
        time = MONTH;
      } else if (time_rate == "Week") {
        time = WEEK;
      } else if (time_rate == "Day") {
        time = DAY;
      } else if (time_rate == "Hour") {
        time = HOUR;
      }

      console.log(time);
      console.log(amount);
      console.log(payment_rate);

      await one_time_payment(
        anchorWallet,
        connection,
        apa.user,
        apa.projectRole,
        amount,
        payment_rate,
        time
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full md:w-[84vw] float-right py-[5vw]">
      <Head>
        <title>Payment | Recurring Payment</title>
      </Head>
      <div className="text-center underline text-[3vw] font-semibold text-black">
        Recurring Payment
      </div>
      <div className="mt-[3vw] w-[90vw] md:w-[60vw] mx-auto text-[2.5vw] md:text-[1.2vw] text-black font-semibold">
        {apa && (
          <div className="mt-[3vw]">
            <div className="my-[0.5vw]">Stream Name</div>
            <input
              value={apa.name}
              type="text"
              className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all"
            />
          </div>
        )}
        {anchorWallet && (
          <div className="mt-[3vw]">
            <div className="my-[0.5vw]">Input recipient address</div>
            <input
              value={anchorWallet.publicKey.toBase58()}
              type="text"
              className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all"
            />
          </div>
        )}
        {apa && (
          <div className="mt-[3vw]">
            <div className="my-[0.5vw]">Recipient Profile</div>
            <input
              value={apa.address.toBase58()}
              type="text"
              className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all"
            />
          </div>
        )}
        <div className="mt-[5vw]">
          <div className="my-[0.5vw]">Payment Rate</div>
          <div
            // type="text"
            className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all my-[0.4vw]"
          >
            Solana
          </div>
          <div className="mt-[5vw] md:mt-[2vw] relative z-10">
            <div className="fontPopSemibold">Payment Rate</div>
            <div
              onClick={() => setShowLevels(!showLevels)}
              className="mt-[0.5vw] w-full flex items-center h-[10vw] md:h-[4.2vw] px-[3vw] cursor-pointer rounded-[1.2vw] border-[0.14vw] border-black z-10 bg-white"
            >
              {time_rate}
            </div>
            {showLevels && (
              <div className="top-[-1vw] pt-[1vw] px-[3vw] relative -z-10 left-0 w-full h-[22.4vw] md:h-[14vw] text-[2.8vw] md:text-[0.9vw] border-black border-[0.1vw] rounded-b-[1vw] bg-[#e9e9e9]">
                <div
                  onClick={() => {
                    setTimeRate("Month");
                    setShowLevels(false);
                  }}
                  className="my-[1.1vw] md:my-[0.6vw] cursor-pointer w-full rounded-full py-[0.5vw] px-[2vw] bg-[#00FF47] border-black border-[0.1vw]"
                >
                  Month
                </div>
                <div
                  onClick={() => {
                    setTimeRate("Week");
                    setShowLevels(false);
                  }}
                  className="my-[1.1vw] md:my-[0.6vw] cursor-pointer w-full rounded-full py-[0.5vw] px-[2vw] bg-[#F0B90B] border-black border-[0.1vw]"
                >
                  Week
                </div>
                <div
                  onClick={() => {
                    setTimeRate("Day");
                    setShowLevels(false);
                  }}
                  className="my-[1.1vw] md:my-[0.6vw] cursor-pointer w-full rounded-full py-[0.5vw] px-[2vw] bg-[#1DA1F2] border-black border-[0.1vw]"
                >
                  Day
                </div>
                <div
                  onClick={() => {
                    setTimeRate("Hour");
                    setShowLevels(false);
                  }}
                  className="my-[1.1vw] md:my-[0.6vw] cursor-pointer w-full rounded-full py-[0.5vw] px-[2vw] bg-[#1DA1F2] border-black border-[0.1vw]"
                >
                  Hour
                </div>
              </div>
            )}
          </div>
          <div className="mt-[3vw]">
            <div className="my-[0.5vw]">Amount to Stream</div>
            <input
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
              type="text"
              className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all"
            />
          </div>
          <div className="mt-[3vw]">
            <div className="my-[0.5vw]">
              Payment per {time_rate ? time_rate : "--"}
            </div>
            <input
              onChange={(e) => setPaymentrate(Number(e.target.value))}
              value={payment_rate}
              type="text"
              className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all"
            />
          </div>
        </div>
        {/* <div

          className="mt-[6vw]">
          <div className="my-[0.5vw]">Send on</div>
          <input
            type="text"
            className="outline-none border-[0.12vw] px-[3vw] py-[0.6vw] w-full rounded-full border-black focus:scale-[101%] transition-all"
          />
        </div> */}
      </div>
      <div className="mt-[4vw] flex justify-center">
        <Button
          onClick={(e) => {
            e.preventDefault();
            init_payment();
          }}
          variant="contained"
          className="!text-[3vw] md:!text-[1.2vw] !rounded-full !normal-case !text-black !px-[4vw] md:!px-[3vw] !py-[1vw] md:!py-[0.6vw] !bg-[#00ff47] hover:!bg-[#00ff48ed]"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
