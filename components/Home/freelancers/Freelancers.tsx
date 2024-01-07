import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IoArrowForward } from "react-icons/io5";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Freelancers() {
  const projectImage =
    "https://media.discordapp.net/attachments/1085293900706627595/1162186091340763207/Ellipse_4_1.png?ex=653b0524&is=65289024&hm=fd33129e7e254b9178d10f7bd2f29e30cee47ef9f6989132cae8e2079bc5f126&=&width=235&height=226";
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
    "font-semibold w-[5vw] text-md  md:w-[2.3vw] h-[5vw] md:h-[2.3vw] text-white rounded-full bg-blue-600/80 grid place-items-center";

  return (
    <div>
      <div className="">
        <div className="text-[4vw] md:text-[1.6vw] text-black fontPopSemibold flex justify-between">
          <div>Freelances</div>
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
              delay: 1600,
            }}
            pagination={true}
            modules={[Pagination, Autoplay]}
            onSwiper={(swiperInstance) => (swiper = swiperInstance)}
            className="h-[55vw] md:h-[21vw]"
          >
            {projectData.map((el) => (
              <SwiperSlide>
                <motion.div
                  whileHover={{ scale: 0.99 }}
                  className="child w-[99%] md:w-[31.6vw] mt-[0.7vw] px-[3vw] md:px-[1vw] border-[0.12vw] border-black rounded-[1vw] md:rounded-[0.5vw] text-black h-[42vw] md:h-[17vw] flex items-center gap-x-[1vw]"
                >
                  <div className="flex flex-col items-center">
                    <div className="rounded-full w-[23vw] md:w-[7.4vw] border-[0.15vw] border-[#000] overflow-hidden">
                      <Image
                        className="object-center object-cover w-[45vw] md:w-[7.4vw] rounded-full bg-white/60"
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
                    <div className="flex justify-between items-center text-black">
                      <div>
                        <div className="text-[5.5vw] md:text-[2.3vw] fontPopSemibold">
                          Stella Marris
                        </div>
                        <div className="mb-[0.5vw] text-[3.4vw] md:text-[1.4vw]">
                          <span>Content Writer </span>
                        </div>
                      </div>
                      <div>
                        <div className=" text-[3.9vw] md:text-[1.9vw] text-end">
                          4.6
                        </div>
                        <div className="text-white bg-[#1DA1F2] px-[1vw] py-[0.2vw] text-[2.5vw] md:text-[0.7vw]">
                          Expert
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-[1vw] h-[20vw] md:h-[6vw] text-[2.6vw] md:text-[0.8vw] border-[0.1vw] border-black rounded-[0.5vw] p-[2vw] md:p-[0.7vw] leading-[3.5vw] md:leading-[1.5vw]">
                      Experienced writer, SEO Expert, worked for over 50
                      projects.
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
