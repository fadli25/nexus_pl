import { payment } from "@/lib/NexusProgram/payment/payment";
import { getPaymentstreamUser } from "@/lib/NexusProgram/payment/utils.ts/getPaymentstreamUser";
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

export default function incoming() {

  const anchorWallet = useAnchorWallet()
  const { connection } = useConnection();
  const [payments, setPayments] = useState<any[]>();
  const [showInformation, setShowInformation] = useState(false);

  const get_payment = async () => {
    try {
      const _payments = await getPaymentstreamUser(
        connection, anchorWallet, "confirmed"
      )
      console.log(_payments)
      setPayments(_payments)
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    if (!anchorWallet) return;
    get_payment();
  }, [anchorWallet])


  const time = (t: number) => {
    if (t == HOUR) return " Hour"
    else if (t == DAY) return " Day"
    else if (t == WEEK) return " Week"
    else if (t == MONTH) return " Month"
  }

  const start_At = (t: number) => {
    const start = t * 1000;
    const date = new Date(start)
    return date.toString()
  }

  const address_slice = (address: string) => {
    const first_silce = address.slice(0, 8)
    const last_slice = address.slice(address.length - 10, address.length)
    return first_silce.concat("...", last_slice)
  }

  const payment_info = (payment: any) => {
    const last_update = Number(payment.lastUpdateAt);
    const start = Number(payment.startAt);
    const time_rate = Number(payment.timeRate);
    const end_At = Number(payment.endAt);
    const payment_per_one = (Number(payment.totalAmount) / Number(payment.workingTime) / web3.LAMPORTS_PER_SOL);
    const total_amount = Number(payment.totalAmount) / web3.LAMPORTS_PER_SOL;
    let now = Date.now() / 1000;

    if (now > end_At) {
      now = end_At;
    }

    const objct = {
      available_fund: 0,
      amount_taken: 0,
      amount_to_withdraw: 0
    }
    console.log(last_update)
    console.log("last_update")
    if (last_update == 0) {
      objct.available_fund = total_amount;
      const working_time = now - start;
      const n = working_time / time_rate;
      objct.amount_to_withdraw = n * payment_per_one
    } else {

    }
    return objct
  }

  const withdraw = async (i: number) => {
    try {
      const _payment = payments![i];

      await payment(
        anchorWallet,
        connection,
        _payment.pubkey,
        _payment.reciever,
        _payment.founder
      )

    } catch (e) {
      console.log(e);
    }
  }



  return (
    <div className="w-full md:w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Incoming Payment Streams</title>
      </Head>
      <div className="w-[90vw] md:w-[60vw] mx-auto flex flex-col gap-y-[4vw] md:gap-y-[2vw]">
        {payments && payments.map((el, i) => (
          <div key={i}>
            <motion.div
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowInformation(!showInformation)}
              className="w-full cursor-pointer bg-black rounded-[1vw] md:rounded-[0.6vw] text-white px-[3vw] md:px-[2vw] py-[1.2vw] md:py-[0.9vw] flex justify-between items-center"
            >
              <div className="leading-[7vw] md:leading-[3.3vw]">
                <div className="text-[3.3vw] md:text-[1.2vw] font-semibold">
                  Bone Shamans
                </div>
                <div className="text-[6vw] md:text-[3.2vw] font-semibold">
                  Salary Pay
                </div>
                <div className="text-[4vw] md:text-[2vw] text-[#00ff47]">
                  {(Number(el.totalAmount) / web3.LAMPORTS_PER_SOL) / Number(el.workingTime)} /
                  {time(el.timeRate)}
                </div>
              </div>
              <div>
                <Button
                  variant="contained"
                  className={`!text-[3vw] md:!text-[1vw] !normal-case !text-black !w-[22.5vw] md:!w-[10vw] !py-[0.8vw] md:!py-[0.4vw] ${status === "running"
                    ? "!bg-[#00ff47]"
                    : "!bg-[#FF2D2D] !text-white"
                    }`}
                >
                  {el.live ? "Runnig" : "Ended"}
                </Button>
              </div>
            </motion.div>
            {showInformation && (
              <div className="w-[90%] mx-auto border-black border-[0.16vw] rounded-b-[0.4vw] border-t-0 pt-[1vw] px-[2vw] text-black text-[3vw] md:text-[1.4vw]">
                <div>Funds available to withdraw now</div>
                <div className="flex items-center gap-x-[1vw]">
                  <div className="text-[5vw] md:text-[2.5vw] font-semibold">
                    {payment_info(el).amount_to_withdraw}
                  </div>
                  <div>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        withdraw(i)
                      }}
                      variant="contained"
                      className={`!text-[3vw] md:!text-[1vw] !normal-case !text-black !w-[22.5vw] md:!w-[10vw] !py-[0.8vw] md:!py-[0.4vw] !bg-[#00ff47]`}
                    >
                      Withdraws funds
                    </Button>
                  </div>
                </div>
                <div className="text-[5vw] md:text-[2.5vw] font-semibold mt-[1vw]">
                  Details Activity
                </div>
                <table className="table-fixed text-[2.6vw] md:text-[1vw] leading-[5vw] md:leading-[2.6vw] mt-[0.7vw] md:mt-[0.3vw]">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="px-[1vw]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Started on:</td>
                      <td className="px-[3vw] font-semibold">
                        {start_At(Number(el.startAt))}
                      </td>
                    </tr>
                    <tr>
                      <td>Receiving from</td>
                      <td className="px-[3vw] font-semibold">{address_slice(el.authority.toBase58())}</td>
                    </tr>
                    <tr>
                      <td>Payment rate:</td>
                      <td className="px-[3vw] font-semibold">
                        {(Number(el.totalAmount) / web3.LAMPORTS_PER_SOL) / Number(el.workingTime)} /
                        {time(el.timeRate)}
                      </td>
                    </tr>
                    <tr>
                      <td>Reserved allocation:</td>
                      <td className="px-[3vw] font-semibold">{
                        payment_info(el).amount_taken
                      }</td>
                    </tr>
                    <tr>
                      <td>Funds left in account:</td>
                      <td className="px-[3vw] font-semibold">
                        {payment_info(el).available_fund}
                      </td>
                    </tr>
                    <tr>
                      <td>Stream id:</td>
                      <td className="px-[3vw] font-semibold">{address_slice(el.pubkey.toBase58())}</td>
                    </tr>
                  </tbody>
                </table>

              </div>
            )}
          </div>))}
      </div>
    </div>
  );
}