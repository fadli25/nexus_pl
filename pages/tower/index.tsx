import Head from "next/head";
import React, { ReactNode, useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function index() {
  const data = [
    {
      img: "https://s3-alpha-sig.figma.com/img/cf60/377a/47c9f821e846c6fb1ee293762ab2a741?Expires=1693785600&Signature=kxCj75U7ywGFzsNLwEgxDex8NtCPSFyGqiiEjLEMi7g9fdJOBoTsgTk~gKvaiDmOGWSSRZHGt8e~P91eflHoEnLzvBLJpn7aoZoKX1aboBkC1g0z9T7XkNUNKQQ3dE5uFfIE2xyWThIPAETcC831~frmHDwtqJEqDcLLRAV6KhXrJp7iCgdXP34opcxPH314OMF0dKqsDB2oM-b2jutv21dxlFTAelTyvmlvSKg6J53LZu-g-jELlIA0b-thsiVaWcjpKTQF7QwCYlJ12OxeZq4n0JLeEGjYEweg5rCoUyyejrxXc~kn9EobhYoP6ZLvCWhHw2otKw7LfNMAo8s0ag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/adc9/60ed/34596fa94aefaa8fabf152a6c84bfd85?Expires=1693785600&Signature=B0kP8Lplbj7GIOOAepTp0JKOrsW4Sc~ILYLYWKNioARMZsxub6AEe1eKfy4UmW-NRl57PnD2baoGCc3VP7Rx-slwxAdBQ12WE8OxXC-UBfkUI0vM2VyExOGG8PHQJBv8OMfEaYzSCGQcDfdU3yruZvr~yILyboVpcjgMm4CbswZ10qHC18TsF6mH~Kbu3xnrpjgT8k1fTS5SYJDWccr6NILVnoNNL9VJzomg4IsLfLspKxXFyOztHiOsUiHstwTHvN~hI8wSYI8KFBZQ1uhhZKJ-gfy01H0uql1PwzOxiOWlyq7JODf3s2tg86CeVREIF55zr3KofhS4ZRSpxIRmwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/8009/f45e/438e698b935d231be45e531018e5a9f1?Expires=1693785600&Signature=DK03GRbYhjhSL2HRyCuKNQQCbvhGyjD6rKjdpY80n3~cOv5pgrycTruvCyUfoRH5qCfxe7UvapilGi4Km25w9Y3d~iqTvbmChmp4Apl67d9FxZZaA63nfuC2AL1xf9VdGykx4lvXXC7HFiDNBp1Pm5rPv167uF5OjXpXUA8bdO7URi1Rf0DvJfBX9-TLqkmzv3IbNO~nqcPr0BWpk8TfL~opUbCYz5EQP4k-62JYMWiHTvdPkzsSw2VNyJPTYeLOIYfja-nKUrdtKH-kRumcKKYyBaYKQYexJmCj2oy-Bzx0X1S7cHK44THySUgFkC5iXDdtkWxYyJtMcdkrv4Aijg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/8009/f45e/438e698b935d231be45e531018e5a9f1?Expires=1693785600&Signature=DK03GRbYhjhSL2HRyCuKNQQCbvhGyjD6rKjdpY80n3~cOv5pgrycTruvCyUfoRH5qCfxe7UvapilGi4Km25w9Y3d~iqTvbmChmp4Apl67d9FxZZaA63nfuC2AL1xf9VdGykx4lvXXC7HFiDNBp1Pm5rPv167uF5OjXpXUA8bdO7URi1Rf0DvJfBX9-TLqkmzv3IbNO~nqcPr0BWpk8TfL~opUbCYz5EQP4k-62JYMWiHTvdPkzsSw2VNyJPTYeLOIYfja-nKUrdtKH-kRumcKKYyBaYKQYexJmCj2oy-Bzx0X1S7cHK44THySUgFkC5iXDdtkWxYyJtMcdkrv4Aijg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/eba1/189c/1b64676b3ea1bfe8b6f719547a02ee35?Expires=1693785600&Signature=OAxYoTw3UqhY1ZErIjbcvMjHaQZf-FV48EzIQtxMFYr~sD7CWTpjrkWNv4agPRRbRu1KGl~onkmuCO5rbvP7bG36Oqkm2jvmEEb5O7vzQV4Vq~onHgsMh4Bz2IiZJTkZkwJO5tsoubPFys~PY~~8m6DAZrk98hjj-EF3DO0IaWtS6diryJfaIgxOitYUCX0riCEWM1fMb-tirtv4RZ4FBYxiqvYd3p0eObQqNYSL0Jk4BDPW3CWIwDwf0YKybng~gug6H5Sq6VMDFPROQC1dwN~UGq0IoUn5JpeNpyjJ-bAj9e6tXVoUtgkIVC7Mi8IUxzI9fFxBx7cYl1E8K8vq0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];
  const [show, setShow] = useState<boolean>();
  const [procced, setProcced] = useState<boolean>();
  const win =
    "https://s3-alpha-sig.figma.com/img/75be/a1ad/62889e6ce4a4aecbb165bdb45fa3ea05?Expires=1693785600&Signature=VbBjBTucLVDiIKni9rYOvhDr8orPqL-psfdZXOtD-Yx7LPKniq5NL4IPWznZB~top7akKBcSrZ3vo5xoRMTbMA0sNIs8U5fRREsb~3eQbxAsUxj8gox3h0IhxJTJb4ozujJTTV2tAeq~xv~zE8hBrSy3WUGsQ4h2y5vutKYKvZ4O9AmdMavps7hXdHyv6d36aK~VVQda0ifpE6dDmXky7FL9wOxOjGaSXwgISem~ioVNyJ6aT-pS965DKgtfplz5kKUSYT1Radxp0e-aNQAK26wSapbUORMOkt2U3bagyT8WV8~HOa~V1Wj2GfiVzAMELeCBRJiA~LiT0ft2hlIsjw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  return (
    <div className="w-[80vw] py-[5vw] float-right text-black">
      <Head>
        <title>Rebirth Tower</title>
      </Head>
      <div className=" w-[50vw] mx-auto">
        <div className="text-center fontPopSemibold text-[2vw] underline">
          Reward Box
        </div>
        <div className="w-full border-[0.12vw] h-[20vw] p-[2vw] border-black rounded-[1vw] mt-[0.8vw]">
          {procced && (
            <div className="w-full h-full rounded-[1vw] bg-black flex justify-between px-[4vw] py-[2vw]">
              <div>
                <Image
                  src={win}
                  width={9000}
                  height={2000}
                  alt=""
                  className="w-[12vw] h-[12vw] rounded-[1vw] bg-white/60 object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-between w-[55%] h-full">
                <div>
                  <div className="text-[2vw] text-[#00ff47] fontPopSemibold">
                    Congratulations !!!
                  </div>
                </div>
                <div className="w-[90%] text-[1.4vw] text-white">
                  <div>You have just won an NFT</div>
                  <div className="text-[#00ff47] ">The Old Ones #354 </div>
                </div>
                <div className="text-[0.8vw] text-white">
                  Click the button below to claim your prize
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-[4vw] fontPopSemibold text-[1vw]">
        <div className="text-[2vw] underline ">
          Rewards available on floor 1
        </div>
        <div className="mt-[2vw]">SMB Gen3</div>
        <div className="mt-[0.8vw]">10 Sol</div>
        <div className="mt-[0.8vw]">1 Sol</div>
        <div className="mt-[0.8vw]">Mrble Tokens</div>
      </div>
      <div className="mt-[4vw]">
        <div className="text-[2vw] underline text-center fontPopSemibold">
          NFTs in this wallet
        </div>
        <div className="flex flex-wrap gap-y-[4vw] gap-x-[3.5vw] mt-[2vw] w-[64vw] mx-auto">
          {data.map((el, i) => (
            <motion.div className="w-[19vw] rounded-[1vw] overflow-hidden">
              <div className="pb-[4vw] bg-black rounded-[1vw]">
                <Image
                  src={el.img}
                  width={9000}
                  height={2000}
                  alt=""
                  className="w-[19vw] h-[19vw] object-cover object-center"
                />
              </div>
              <div className="flex justify-center mt-[1vw]">
                <MuiButton onClick={() => setShow(true)}>Burn</MuiButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {show && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/60 z-[900000] grid place-items-center">
          <div
            className="absolute top-0 left-0 w-full h-full"
            onClick={() => setShow(false)}
          ></div>
          <div className="w-[43vw] rounded-[2vw] h-[26vw] bg-black text-center pt-[3vw] z-10">
            <div className="text-[#00ff47] text-[2vw] fontPopSemibold">
              You are about to burn this Token
            </div>
            <div className="w-[60%] mx-auto mt-[3vw] text-[1.2vw] text-white">
              Burnt Tokens are lost forever and cannot be recovered
            </div>
            <div className="flex justify-center gap-x-[1vw] mt-[6.4vw]">
              <MuiButtonProcced
                onClick={() => {
                  setShow(false);
                  setProcced(true);
                }}
              >
                Procced
              </MuiButtonProcced>
              <MuiButtonCancel onClick={() => setShow(false)}>
                Cancel
              </MuiButtonCancel>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface Icon {
  children: ReactNode;
  onClick?: () => void;
}

export function MuiButton({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "1vw",
        textTransform: "none",
        padding: "0.7vw 2.5vw",
        color: "#000",
        bgcolor: "#00ff47",
        borderRadius: "0.1vw",
        ":hover": {
          bgcolor: "#00ff47",
        },
      }}
      variant="contained"
      onClick={onClick}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
    >
      {children}
    </Button>
  );
}
export function MuiButtonProcced({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "1vw",
        textTransform: "none",
        padding: "0.7vw 2.5vw",
        color: "#000",
        bgcolor: "#00ff47",
        borderRadius: "0.6vw",
        fontFamily: "popSemibold",
        ":hover": {
          bgcolor: "#00ff47",
        },
      }}
      variant="contained"
      onClick={onClick}
      className="bg-[#00ff47] hover:bg-[#00ff47]"
    >
      {children}
    </Button>
  );
}
export function MuiButtonCancel({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "1vw",
        textTransform: "none",
        padding: "0.7vw 2.5vw",
        color: "#000",
        bgcolor: "#D9D9D9",
        borderRadius: "0.6vw",
        fontFamily: "popSemibold",
        ":hover": {
          bgcolor: "#D9D9D9",
        },
      }}
      variant="contained"
      onClick={onClick}
      className="bg-[#D9D9D9] hover:bg-[#D9D9D9]"
    >
      {children}
    </Button>
  );
}
