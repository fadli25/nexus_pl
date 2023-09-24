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
    "https://s3-alpha-sig.figma.com/img/3b02/7d7a/4ea0cde542a6ecaf8e32f1db3e0ce672?Expires=1694390400&Signature=mImbzZ3BrwylI3-fwtRkWzIlAqZ0d0PlWzzCgttg4yi2tRcZjgi8FRZh1TTQqIgRdyVAHHRlFvPmwxyfze6AazIUQBsnEpvvKHyZ3JM2PLB8XIoKMbT-08iSiaLbds5Ouou4NCTftG3LVFViAqTcig-qvtrulRCvBykIVv1NuVVWufgbLp3eTqFJt~5JxBSmkSW~QojaAxdmy7FCjfBvBC8MCvBC215usbapkWL27UmuqHycwdKA1u3ZeUwKmLuRfW6fn5qCgxqt5MXjQXRmtcq-jehdOdpb7nfIGEOUPfD29PbN3blRTI59deXmV~ug-aGBKztJyx5OCHfFy7UzKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  const buttonClass = "rounded-full bg-[#FF2D2D] hover:bg-[#FF2D2D99] ";

  const menu = [
    {
      name: "Homepage",
      link: "/",
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

  const singOut = {
    fontSize: "1vw",
    padding: "0.6vw 2vw",
    borderRaduis: "9999px",
    background: "#FF2D2D",
    fontWeight: "500",
    mt: "1.4vw",
    textTransform: "none",
    ":hover": {
      background: "#FF2D2D99 !important",
      borderRaduis: "9999px",
    },
    "@media (max-width:767px)": {
      fontSize: "4vw",
      padding: "0.8vw 5vw",
      borderRaduis: "9999px",
      mt: "3vw",
    },
  };

  const router = useRouter();

  const buttonVariants = {
    whileTap: { scale: 0.95 },
    whileHover: { scale: 1.06 },
  };

  const buttonStyle = {
    fontSize: "1vw",
    color: "#fff",
    textTransform: "none",
    "&hover": {
      color: "#fff",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
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
        <div className="flex flex-col items-center md:-mt-[10vw]">
          {menu.map((el, index) => (
            <MuiButton
              style={{
                ...(el.link.slice(0, 6) === router.asPath.slice(0, 6) && {
                  color: "#00ff47",
                  fontWeight: "bold",
                }),
              }}
              onClick={() => router.push(el.link)}
              className={` md:mb-[1.2vw] fontsi`}
            >
              {el.name}
            </MuiButton>
          ))}
        </div>
        <Button variant="contained" sx={singOut} className={`${buttonClass} `}>
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
  style: any;
}
export function MuiButton({ children, onClick, className, style }: Button) {
  return (
    <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.06 }}>
      <Button
        variant="text"
        onClick={onClick}
        style={style}
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
