import { Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

export default function index() {
  const data = [
    {
      state: "",
      name: "Bone Shamans",
    },
    {
      state: "",
      name: "Aptos Monkeys",
    },
    {
      state: "Custom Request",
      name: "Graphic Designer",
    },
    {
      state: "Custom Requet",
      name: "UI/UX Designer",
    },
  ];
  const router = useRouter();
  return (
    <div className="pt-[2vw] w-[80vw] float-right">
      <Head>
        <title>Ongoing</title>
      </Head>
      <div className="w-[60vw] mx-auto">
        {data.map((el, i) => (
          <div
            key={i}
            className="w-full my-[3vw] relative rounded-[1vw] bg-black px-[3vw] flex justify-between text-white items-center h-[12vw]"
          >
            <div>
              <div className="absolute top-[9%] text-[1.5vw] fontPopSemibold left-[5%] text-[#00ff47]">
                {el.state}
              </div>
              <div
                className="text-[3vw] fontPopSemibold cursor-pointer"
                onClick={() => router.push("/freelance/ongoing/project")}
              >
                {el.name}
              </div>
            </div>
            <div>
              <MuiButton>Close</MuiButton>
            </div>
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

export function MuiButton({ children, onClick }: Icon) {
  return (
    <Button
      sx={{
        fontSize: "1vw",
        textTransform: "none",
        padding: "0.7vw 2.5vw",
        color: "#fff",
        bgcolor: "#FF2D2D",
        borderRadius: "0.1vw",
        ":hover": {
          bgcolor: "#FF2D2D",
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
