import React from "react";
import { motion } from "framer-motion";

export default function transitionEffect() {
  return (
    <>
      <motion.div
        animate={{
          x: 0,
          width: 0,
        }}
        initial={{
          x: "100%",
          width: "100%",
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="fixed top-0 bottom-0 right-full w-screen z-30 h-screen bg-[#00ff47]"
      ></motion.div>

      <motion.div
        animate={{
          x: 0,
          width: 0,
        }}
        initial={{
          x: "100%",
          width: "100%",
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="fixed top-0 bottom-0 right-full w-screen z-20 h-screen bg-[#fff]"
      ></motion.div>

      <motion.div
        animate={{
          x: 0,
          width: 0,
        }}
        initial={{
          x: "100%",
          width: "100%",
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="fixed top-0 bottom-0 right-full w-screen z-10 h-screen bg-[#0f0f0f]"
      ></motion.div>
    </>
  );
}
