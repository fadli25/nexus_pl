import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function hire() {
  const img =
    "https://s3-alpha-sig.figma.com/img/0bdf/67b4/683aa8620d81b877c5f6f4a1f300e5a9?Expires=1693785600&Signature=SiI1li3sicVTdGKYEYk6zRzYOkLquWoaAA8aL10bud48OGnCyFIlRgpcWtaXgNL2K~3e~RPZtPPkZtfy61MG4Ypvv9fVGFcibJy8IE0aE3CcAG-KW0XNyPp5RKR2Buux0UAF1W-XawE~hbPAKjSYs0E6HWQifXLhEcN3RN5x~rDjAyV9Vj77cLxpETTYZF8ueBSkmqYIooqr1uin3xk~b-XwnIRv4XhIpf3XwMUdNDyvmi4Ss9SRZN6CgLHFrwFbA7Z8a9RQFLO-j1UDCPYRSV-0URCsgpwjPb5VCUnxGne7o0H55~uObS3bh5HZIMniPlsduIYiu7lXdmchxIlzWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";
  return (
    <div className="w-[80vw] float-right py-[5vw]">
      <Head>
        <title>Founder | Hire</title>
      </Head>
      <div className="w-[56vw] mx-auto bg-black rounded-[1.4vw] px-[2vw] py-[1vw] flex justify-between">
        <div className="flex flex-col items-center">
          <div className="rounded-full border-[0.12vw] border-[#00ff47]">
            <Image
              src={img}
              width={2000}
              height={2000}
              alt=""
              className="w-[14vw] object-cover object-center rounded-full"
            />
          </div>
          <div className="mt-[1vw] flex justify-center items-center gap-x-[0.2vw]">
            <div>
              <Image
                src={solanaIcon}
                width={2000}
                height={2000}
                alt=""
                className="w-[2.8vw]"
              />
            </div>
            <div>
              <Image
                src={solanaIcon}
                width={2000}
                height={2000}
                alt=""
                className="w-[2.8vw]"
              />
            </div>
            <div>
              <Image
                src={solanaIcon}
                width={2000}
                height={2000}
                alt=""
                className="w-[2.8vw]"
              />
            </div>
          </div>
        </div>
        <div className="w-[67%]">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-[2.5vw] fontPopSemibold">Stella Marris</div>
              <div className="text-[#00ff47] text-[1.5vw]">Content Writer</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-[#00ff47] text-[1.5vw]">4.6</div>
              <div className="text-black text-[0.8vw] px-[2vw] py-[0.7vw] bg-[#1DA1F2]">
                Expert
              </div>
            </div>
          </div>
          <div className="mt-[1vw] w-full h-[12vw] rounded-[1.4vw] px-[2vw] py-[1vw] bg-[#282828] text-[1vw] text-white/80">
            Experienced writer, SEO Expert, worked for over 50 projects
          </div>
        </div>
      </div>
      <div className="w-[40vw] mx-auto h-[6vw] border-[0.12vw] border-black rounded-b-[1.4vw] bg-[#00ff47] text-black text-[0.9vw] grid place-items-center">
        <div>
          You are about to hire STELLA MARRIS, please confirm all details before
          approval
        </div>
      </div>
      <div className="mt-[4vw] w-[50vw] text-black text-[1.8vw] mx-auto">
        <div>
          <div>Select Project</div>
          <select
            name="select project"
            className="px-[2vw] mt-[1vw] text-[1vw] rounded-[1vw] py-[1.6vw] w-full border-[0.12vw] border-black"
            id=""
          >
            <option>Aptos Monkeys</option>
            <option>Aptos Monkeys</option>
            <option>Aptos Monkeys</option>
          </select>
        </div>
        <div className="mt-[2vw]">
          <div>Select Role</div>
          <select
            name="select project"
            className="px-[2vw] mt-[1vw] text-[1vw] rounded-[1vw] py-[1.6vw] w-full border-[0.12vw] border-black"
            id=""
          >
            <option>Role 1</option>
            <option>Role 2</option>
            <option>Role 3</option>
          </select>
        </div>
      </div>
      <div className="mt-[4vw] flex justify-center">
        <Button2>Hire</Button2>
      </div>
    </div>
  );
}

interface IconProps {
  children: ReactNode;
  onClick?: () => void;
}

export function Button2({ children, onClick }: IconProps) {
  return (
    <Button
      sx={{
        padding: "0.7vw 2vw",
        borderRadius: "0.6vw",
        fontSize: "1.1vw",
        color: "#000",
        background: "#00ff47",
        textTransform: "none",
        ":hover": {
          background: "#00ff47",
        },
      }}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
