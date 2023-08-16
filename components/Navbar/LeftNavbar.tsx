import Image from "next/image";
import React from "react";
import { motion, Variants, Variant } from "framer-motion";
import { Button } from "@mui/material/";
import { useRouter } from "next/router";

export default function LeftNavbar() {
  //   Profile Image
  const imageSrc =
    "https://s3-alpha-sig.figma.com/img/3b02/7d7a/4ea0cde542a6ecaf8e32f1db3e0ce672?Expires=1693180800&Signature=fTJD6tlpTDZhr4w2HL0dPW7EdwCVAgMeDhcz9SbNaWGLcwM47AFIhN6LokoE0xZTyJcVRTGIXm2f0IJtnS94XFD7JYYrhfeYJuq5NZccElJ8KoQQvNrXrvONpY6W-wcf7nuDV9-9cVaFFhRR4uXEHmpD0VbbWDa34mFW78KeoypPnTqZz3JxOamqIBwHV-LTCJY1-O7uZ2Q9N6vEIN1BcmnHANZ9o2~z02hgvSphyyWJkLqXu3p1itrajt0FmbnD~0W0RJXw9A3ACXlaCrVccu2daeCoZiJbxOZ2UjDB4NWC5KpazVKlcfay5xHAL9U46LhCE8Qy2TX2iBiYdSaRvg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

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
      name: "Freelace",
      link: "/freelace",
    },
    {
      name: "Investor",
      link: "/investor",
    },
    {
      name: "Payment",
      link: "/payment",
    },
    {
      name: "Merch Store",
      link: "/",
    },
    {
      name: "Support",
      link: "/",
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
    "&hover": {
      background: "#FF2D2D99",
    },
    "@media (max-width:767px)": {
      fontSize: "4vw",
      padding: "0.6vw 2vw",
      borderRaduis: "9999px",
    },
  };

  const router = useRouter();

  const buttonVariants = {
    whileTap: { scale: 0.95 },
    whileHover: { scale: 1.05 },
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
    <div className="fixed top-0 left-0 h-full bg-[#0F0F0F] w-[20vw]">
      <div className="flex flex-col pt-[2vw] items-center gap-y-[1vw] text-[1vw] font-[500]">
        <div className="w-[12vw]">
          <Image
            src={imageSrc}
            width={9000}
            height={9000}
            className="w-[12vw] h-[12vw] rounded-full object-cover object-center"
            alt="profile image"
            style={{
              border: "0.28vw #00ff47 solid",
            }}
          />
        </div>
        {menu.map((el, index) => (
          <motion.div
            variants={buttonVariants}
            whileTap="whileTap"
            whileHover="whileHover"
          >
            <Button
              variant="text"
              onClick={() => router.push(el.link)}
              sx={buttonStyle}
              // whileTap={tap}
            >
              {el.name}
            </Button>
          </motion.div>
        ))}
        <Button variant="contained" sx={singOut} className={`${buttonClass}`}>
          Sing Out
        </Button>
      </div>
    </div>
  );
}
