import Image from "next/image";
import React, { ReactNode, useState } from "react";
import { motion, Variants, Variant } from "framer-motion";
import { Button } from "@mui/material/";
import { useRouter } from "next/router";

type showLeftNavbar = {
  showLeftNavbar: boolean;
};

export default function LeftNavbar({ showLeftNavbar }: any) {
  //   Profile Image
  const imageSrc =
    "https://media.discordapp.net/attachments/1085293900706627595/1162185596601647255/Ellipse_18_2.png?ex=653b04ae&is=65288fae&hm=fb327e5a676c925fbfd3cd968a2df42b7731031bb7a53dc07964bab70c84a5cf&=&width=287&height=286";

  const buttonClass = "rounded-full bg-[#FF2D2D] hover:bg-[#FF2D2D99] ";

  const menu = [
    {
      name: "Homepage",
      link: "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Founder",
      link: "/founder",
    },
    {
      name: "Freelance",
      link: "/freelance",
    },

    {
      name: "Payment",
      link: "/payment",
    },

    {
      name: "Support",
      link: "/support",
    },
  ];

  const tap: Variant = {
    scale: 0.89,
  };

  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.2 }}
      className={`fixed top-0 left-0 border-r border-white/20 h-full bg-[#0F0F0F] w-[60vw] md:w-[20vw] z-[9999] ${
        !showLeftNavbar && "hidden md:block"
      }`}
    >
      <div className="flex flex-col justify-between min-h-[46vw] pt-[2vw] items-center gap-y-[1vw] text-[1vw] font-[500]">
        <div>
          <Image
            src={imageSrc}
            width={9000}
            height={9000}
            className="w-[30vw] h-[30vw] md:w-[10vw] mb-[2vw] md:h-[10vw] rounded-full object-cover object-center"
            alt="profile image"
            style={{
              border: "0.28vw #fff solid",
            }}
          />
        </div>
        <div className="flex flex-col items-center md:-mt-[7vw]">
          {menu.map((el, index) => (
            <MuiButton
              onClick={() => router.push(el.link)}
              className={` md:mb-[1.2vw] ${
                el.link.slice(0, 6) === router.asPath.slice(0, 6) &&
                "!text-[#00ff47] !font-semibold !scale-105"
              }`}
            >
              {el.name}
            </MuiButton>
          ))}
        </div>
        <Button
          variant="contained"
          className="!normal-case !text-[4vw] md:!text-[1vw] !px-[5vw] md:!px-[2vw] !py-[0.8vw] md:!py-[0.6vw] !rounded-full !bg-[#FF2D2D] hover:!bg-[#FF2D2D99] !mt-[3vw] md:!mt-[1.4vw]"
        >
          Sing Out
        </Button>
      </div>
    </motion.div>
  );
}

interface Button {
  children: ReactNode;
  onClick?: () => void;
  className: string;
}
export function MuiButton({ children, onClick, className }: Button) {
  return (
    <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.06 }}>
      <Button
        variant="text"
        onClick={onClick}
        sx={{
          fontSize: "1vw",
          color: "#fff",
          textTransform: "none",
          mb: "1.2vw",
          "&hover": {
            color: "#fff",
          },
          "@media (max-width:767px)": {
            fontSize: "4vw",
            mb: "3vw",
          },
        }}
        className={`${className}`}

        // whileTap={tap}
      >
        {children}
      </Button>
    </motion.div>
  );
}
