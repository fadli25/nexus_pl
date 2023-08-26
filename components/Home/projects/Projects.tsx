import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IoArrowForward } from "react-icons/io5";

export default function Projects() {
  const projectImage =
    "https://s3-alpha-sig.figma.com/img/b4c6/bbe1/ba43061ac1f212ffd3ba799d16f82244?Expires=1693180800&Signature=lzbFRwPGKhD1bqjJBtYGPLaBWOc9dsM9jtZmDBFkIqOAA4tGenGjm7hhYVrLAqhKalDuYAJflGAGhF4Udwk5lGdchl5i7REsUw1beY3gWYcQZZAKmS4s0lkZOvoNtczjFsWGKzaew0~bVUhUqakQDTEHzGmd5681YNJ8UeyXWuYzExOSs39wmjwzGk15HlPAJ7YEgRW5g505kyocKX~FX6Cw3kNIkq0802kEIXyNwcG~P2YRK~3Yf3IIbFuCPsR8Z-N066zqYSlmLcj2WLWf6ck5Rn3SfVEaCXWjYVTc~lVlzkRkGOtYFdUq7Nw3b2XZoB8hJUeLiHCCU6nSqLRpsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  const solanaIcon = "https://img.icons8.com/nolan/64/solana.png";
  const projectData = [1, 2, 3, 4, 5, 6];

  let swiper: any;

  const handlePrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  const buttonStyle =
    "font-semibold w-[2.3vw] h-[2.3vw] text-white rounded-full bg-blue-600/80 grid place-items-center";
  return (
    <div className="px-[4vw] ">
      <div className="text-[2vw] text-black fontPopSemibold flex justify-between">
        <div>Projects</div>
        <div className="flex gap-x-[1vw] text-[0.9vw] mr-[1vw]">
          <motion.button
            whileHover={{ scale: 1.08, background: "red" }}
            whileTap={{ scale: 0.96 }}
            className={`${buttonStyle}`}
            onClick={handlePrevSlide}
          >
            <ArrowBackIcon />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08, background: "red" }}
            whileTap={{ scale: 0.96 }}
            className={`${buttonStyle}`}
            onClick={handleNextSlide}
          >
            <IoArrowForward />
          </motion.button>
        </div>
      </div>
      <div className="my-[1.3vw]">
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          loop={true}
          autoplay={{
            delay: 1300,
          }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          onSwiper={(swiperInstance) => (swiper = swiperInstance)}
          className="h-[21vw]"
        >
          {projectData.map((el) => (
            <SwiperSlide>
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="child w-[34.4vw] mt-[0.7vw] px-[1vw] bg-black h-[17vw] flex items-center gap-x-[1vw]"
              >
                <div className="flex flex-col items-center">
                  <div className="rounded-full w-fit border-[0.15vw] border-[#00ff47] overflow-hidden">
                    <Image
                      className="object-center object-cover w-[7.4vw]"
                      src={projectImage}
                      width={9000}
                      height={899}
                      alt="project image"
                    />
                  </div>
                  <div className="flex justify-center items-center mt-[0.5vw]">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-[2.5vw]"
                    >
                      <Image
                        src={solanaIcon}
                        width={9000}
                        height={2000}
                        alt=""
                      />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-[2.5vw]"
                    >
                      <Image
                        src={solanaIcon}
                        width={9000}
                        height={2000}
                        alt=""
                      />
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-[2.5vw]"
                    >
                      <Image
                        src={solanaIcon}
                        width={9000}
                        height={2000}
                        alt=""
                      />
                    </motion.button>
                  </div>
                </div>
                <div>
                  <div className="text-[2.3vw] fontPopSemibold">
                    Marble Labs
                  </div>
                  <div className="my-[0.5vw] text-[#00ff47] text-[1.2vw]">
                    <span>Social, </span>
                    <span>NFT, </span>
                    <span>DeFI</span>
                  </div>
                  <div className="w-full mt-[1vw] text-[0.8vw] bg-[#282828] p-[0.7vw] leading-[1.5vw]">
                    Mrble Labs aims to revolutionize the way people connect,
                    collaborate, and thrive in the evolving landscape of digital
                    services.
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
