import { Button } from "@mui/material";
import React, { ReactNode } from "react";

export default function apply() {
  return (
    <div className="py-[5vw] text-black w-[90vw] md:w-[66vw] mx-auto">
      <div className="text-[4vw] md:text-[1.6vw] fontPopSemibold text-center text-black">
        Review
      </div>
      <textarea
        className="w-full border-[0.12vw] focus:scale-[101%] focus:border-red-500 transition-all p-[2vw] border-black rounded-[1vw] mt-[0.8vw]"
        rows={13}
      ></textarea>
      <div className="mt-[4vw] flex justify-center">
        <MuiButton>Apply</MuiButton>
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
        padding: "0.7vw 2vw",
        color: "#000",
        bgcolor: "#00ff47",
        borderRadius: "0.6vw",
        ":hover": {
          bgcolor: "#00ff47",
        },
        "@media (max-width:767px)": {
          fontSize: "3vw",
          padding: "0.7vw 3vw",
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
