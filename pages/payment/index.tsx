import Head from "next/head";
import React, { ReactNode } from "react";
import pay from "@/public/pay.png";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function index() {
  const data = [
    {
      name: "Marble",
      num: 200,
      price: "4500",
    },
    {
      name: "USDC",
      num: 5000,
      price: "3500",
    },
    {
      name: "Aptos",
      num: 5000,
      price: "2000",
    },
  ];

  const router = useRouter();
  return (
    <div className="w-full float-right md:w-[80vw] py-[4vw]">
      <Head>
        <title>Payment</title>
      </Head>
      <div>
        <div className="w-[80vw] md:w-[45vw] mx-auto">
          <Image src={pay} width={9000} height={2000} alt="payment" />
        </div>
        <div className="flex py-[5vw] md:pt-[2vw] justify-center gap-x-[3vw] md:gap-x-[1vw]">
          <Buttons>Multisig Safe</Buttons>
          <Buttons>Generate Paylink</Buttons>
        </div>
      </div>
      {/*  */}
      <div className="w-[95vw] md:w-[67vw] mx-auto pt-[5vw] flex flex-col gap-y-[6vw] md:gap-y-[5vw]">
        {data.map((el, i) => (
          <div key={i}>
            <div className="w-full bg-black text-white font-semibold rounded-[1vw] flex justify-between items-center px-[3.4vw] md:px-[2.4vw] py-[3vw] md:py-[1.6vw] text-[5vw] md:text-[2.4vw]">
              <div className="flex items-center gap-x-[1vw]">
                <div className="w-[20vw] md:w-[10vw] h-[20vw] md:h-[10vw] rounded-full bg-white/50"></div>
                <div>
                  <div>{el.name}</div>
                  <div>{el.num}</div>
                </div>
              </div>
              <div>${el.price}</div>
            </div>
            <div className="pt-[3vw] md:pt-[2vw] flex justify-center gap-x-[1.4vw] md:gap-x-[1vw] items-center">
              <Buttons onClick={() => router.push("payment/assets")}>
                Onetime payment
              </Buttons>
              <Buttons>Reccuring Payment</Buttons>
              <Buttons>Escorw</Buttons>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type ButtonType = {
  children: ReactNode;
  onClick?: () => void;
};

export function Buttons({ children, onClick }: ButtonType) {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      className="!text-[2.4vw] md:!text-[1vw] !font-[popSemibold] !px-[4vw] !py-[1.2vw] md:!py-[0.7vw] md:!px-[3vw] !rounded-[0.4vw] !bg-[#00ff47] !text-black hover:!bg-[#00ff47]"
    >
      {children}
    </Button>
  );
}
