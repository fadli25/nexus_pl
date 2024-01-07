import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Projects() {
  const projectImage =
    "https://media.discordapp.net/attachments/1085293900706627595/1162185959572516976/Ellipse_27_1.png?ex=653b0505&is=65289005&hm=1ce34d84dbb4f26571b994fe2521313f5885e3eea9c4e96641074f6fafd06244&=&width=190&height=183";
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
    "font-semibold w-[5vw] text-sm  md:w-[2.3vw] h-[5vw] md:h-[2.3vw] text-white rounded-full bg-blue-600/80 grid place-items-center";

  return (
    <div className="">
      <div className="text-[4vw] md:text-[1.6vw] text-black fontPopSemibold flex justify-between">
        <div>Projects</div>
        <div className="flex gap-x-[1vw] text-[2vw] md:text-[0.9vw] mr-[1vw]">
          <motion.button
            whileHover={{ scale: 1.08, background: "red" }}
            whileTap={{ scale: 0.96 }}
            className={`${buttonStyle}`}
            onClick={handlePrevSlide}
          >
            <AiOutlineArrowLeft />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08, background: "red" }}
            whileTap={{ scale: 0.96 }}
            className={`${buttonStyle} `}
            onClick={handleNextSlide}
          >
            <AiOutlineArrowRight />
          </motion.button>
        </div>
      </div>
      <div className="my-[1.3vw]">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={5}
          loop={true}
          autoplay={{
            delay: 1300,
          }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          onSwiper={(swiperInstance) => (swiper = swiperInstance)}
          className="h-[55vw] md:h-[21vw]"
        >
          {projectData.map((el) => (
            <SwiperSlide>
              <motion.div
                whileTap={{ scale: 0.98 }}
                className="child w-[99%] md:w-[31.4vw] mt-[0.7vw] px-[3vw] md:px-[1vw] border-[0.12vw] border-black h-[42vw] md:h-[17vw] flex items-center gap-x-[2.5vw] md:gap-x-[1vw] rounded-[1vw] md:rounded-[0.5vw] text-black"
              >
                <div className="flex flex-col items-center ">
                  <div className="rounded-full w-[23vw] md:w-[7.4vw] border-[0.15vw]  border-[#000] overflow-hidden">
                    <Image
                      className="object-center object-cover w-[45vw] md:w-[7.4vw]"
                      src={projectImage}
                      width={9000}
                      height={899}
                      alt="project image"
                    />
                  </div>
                  <div className="flex justify-center items-center mt-[3vw] md:mt-[0.5vw]">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-[6vw] md:w-[2.5vw]"
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
                      className="w-[6vw] md:w-[2.5vw]"
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
                      className="w-[6vw] md:w-[2.5vw]"
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
                  <div className="text-[6vw] md:text-[2.3vw] fontPopSemibold">
                    Marble Labs
                  </div>
                  <div className="my-[0.5vw] text-[3.4vw] md:text-[1.2vw]">
                    <span>Social, </span>
                    <span>NFT, </span>
                    <span>DeFI</span>
                  </div>
                  <div className="w-full mt-[1vw] h-[20vw] md:h-[6vw] text-[2.4vw] md:text-[0.8vw] border-[0.1vw] border-black rounded-[0.5vw] p-[2vw] md:p-[0.7vw] leading-[3.5vw] md:leading-[1.5vw]">
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
