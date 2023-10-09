import { Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

export default function index() {
  const data = [
    {
      state: "You have been hired !!!!",
      name: "Bone Shamans",
      sl: true,
    },
    {
      state: "",
      name: "Bone Shamans",
      sl: false,
    },
    {
      state: "Custom GIG",
      name: "UI/UX Designer",
      sl: false,
    },
  ];
  const router = useRouter();
  return (
    <div className="pt-[2vw] w-full md:w-[80vw] float-right">
      <Head>
        <title>Outgoing</title>
      </Head>
      <div className="w-[90vw] md:w-[60vw] mx-auto">
        {data.map((el, i) => (
          <div
            key={i}
            className="w-full my-[3vw] relative rounded-[1.5vw] md:rounded-[1vw] bg-black px-[3vw] flex justify-between text-white items-center h-[20vw] md:h-[12vw]"
          >
            <div>
              <div className="absolute top-[9%] text-[3vw] md:text-[1.5vw] fontPopSemibold left-[5%] text-[#00ff47]">
                {el.state}
              </div>
              <div
                className="text-[5.3vw] md:text-[3vw]  cursor-pointer"
                onClick={() => router.push("/freelance/ongoing/project")}
              >
                {el.name}
              </div>
            </div>
            {el.sl === true ? (
              <div className="flex items-center gap-x-[1vw]">
                <MuiButtonAprove>Approve</MuiButtonAprove>
                <MuiButtonReject>Reject</MuiButtonReject>
              </div>
            ) : (
              <div>
                <MuiButtonClose>Close</MuiButtonClose>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface Icon {
  children: ReactNode;
  onClick?: () => void;
}

export function MuiButtonReject({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "0.9vw",
        textTransform: "none",
        padding: "0.4vw 2vw",
        color: "#fff",
        bgcolor: "#FF2D2D",
        borderRadius: "0.1vw",
        ":hover": {
          bgcolor: "#FF2D2D",
        },
        "@media (max-width:767px)": {
          fontSize: "2.4vw",
        },
      }}
      variant="contained"
      onClick={onClick}
      className="bg-[#FF2D2D] hover:bg-[#FF2D2D]"
    >
      {children}
    </Button>
  );
}
export function MuiButtonAprove({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "0.9vw",
        textTransform: "none",
        padding: "0.4vw 2vw",
        color: "#000",
        bgcolor: "#00ff47",
        borderRadius: "0.1vw",
        ":hover": {
          bgcolor: "#00ff47",
        },
        "@media (max-width:767px)": {
          fontSize: "2.4vw",
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

export function MuiButtonClose({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "0.9vw",
        textTransform: "none",
        padding: "0.4vw 2vw",
        color: "#fff",
        bgcolor: "#FF2D2D",
        borderRadius: "0.1vw",
        ":hover": {
          bgcolor: "#FF2D2D",
        },
        "@media (max-width:767px)": {
          fontSize: "2.4vw",
        },
      }}
      variant="contained"
      onClick={onClick}
      className="bg-[#FF2D2D] hover:bg-[#FF2D2D]"
    >
      {children}
    </Button>
  );
}
