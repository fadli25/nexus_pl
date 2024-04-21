import React, { useEffect } from "react";
import imgg from "@/public/landingpage/imagos.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

export default function header2() {
  useEffect(() => {
    Aos.init({
      duration: 1700,
      easing: "ease-in-out",
      once: true,
      offset: 200,
    });
  }, []);
  return (
    <div>
      <div className="mt-[20vw] text-black md:mt-[16vw] mb-[7vw] relative z-10 w-[84vw] h-[55vw] overflow-hidden md:overflow-visible md:h-[30vw] bg-[#090909] rounded-[1.8vw] mx-auto flex justify-center md:justify-between items-center">
        <div
          data-aos="zoom-in"
          className=" -z-10 w-[80vw] md:w-[40vw] absolute md:relative ml-[1vw] -mt-[3vw] md:-mt-[11.8vw]"
        >
          <Image
            src={imgg}
            width={9000}
            className="opacity-40 md:opacity-100"
            height={2000}
            alt=""
          />
        </div>
        <div className="px-[3vw] w-[90vw] md:w-[50vw] text-[#00FF47] inter text-[5vw] md:text-[2.6vw] text-center md:text-end font-semibold">
          <div>
            Explore <span className="text-[#fff]">NEXUS</span> more with the
            Bone Shamans
          </div>
          <div className="mt-[5vw] md:mt-[2vw] gap-x-[2.4vw] md:gap-x-[1.4vw] flex justify-center items-center">
            <div data-aos="fade-up">
              <motion.img
                className="w-[20vw] md:w-[10vw]"
                src="https://res.cloudinary.com/du3hsfykz/image/upload/v1690131585/imag1_li0b3c.png"
                alt=" Image"
                drag
                dragConstraints={{ top: 1, right: 1, bottom: 1, left: 1 }}
                // whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
            <div data-aos="fade-down">
              <motion.img
                className="w-[20vw] md:w-[10vw]"
                src="https://res.cloudinary.com/du3hsfykz/image/upload/v1690131975/imag2_dwaohe.png"
                alt=" Image"
                drag
                dragConstraints={{ top: 1, right: 1, bottom: 1, left: 1 }}
                // whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
            <div data-aos="fade-up">
              <motion.img
                className="w-[20vw] md:w-[10vw]"
                src="https://res.cloudinary.com/du3hsfykz/image/upload/v1690131975/imag3_vlcquo.png"
                alt=" Image"
                drag
                dragConstraints={{ top: 1, right: 1, bottom: 1, left: 1 }}
                // whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-[17vw] md:mt-[2vw] mb-[9vw] text-center">
        <div className="text-black text-[5vw] md:text-[3vw]  font-semibold">
          Backed By
        </div>
        <div className="mt-[0.9vw] w-[55vw] md:w-[30vw] mx-auto">
          <Image src={dora} width={9000} height={2000} alt="" />
        </div>
      </div> */}
    </div>
  );
}
