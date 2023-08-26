import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IoArrowForward } from "react-icons/io5";

export default function Freelancers() {
  const projectImage =
    "https://s3-alpha-sig.figma.com/img/0bdf/67b4/683aa8620d81b877c5f6f4a1f300e5a9?Expires=1693785600&Signature=SiI1li3sicVTdGKYEYk6zRzYOkLquWoaAA8aL10bud48OGnCyFIlRgpcWtaXgNL2K~3e~RPZtPPkZtfy61MG4Ypvv9fVGFcibJy8IE0aE3CcAG-KW0XNyPp5RKR2Buux0UAF1W-XawE~hbPAKjSYs0E6HWQifXLhEcN3RN5x~rDjAyV9Vj77cLxpETTYZF8ueBSkmqYIooqr1uin3xk~b-XwnIRv4XhIpf3XwMUdNDyvmi4Ss9SRZN6CgLHFrwFbA7Z8a9RQFLO-j1UDCPYRSV-0URCsgpwjPb5VCUnxGne7o0H55~uObS3bh5HZIMniPlsduIYiu7lXdmchxIlzWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
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
    <div>
      <div className="px-[4vw] ">
        <div className="text-[2vw] text-black fontPopSemibold flex justify-between">
          <div>Freelances</div>
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
              delay: 1600,
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
                  className="child w-[34.6vw] mt-[0.7vw] px-[1vw] bg-black h-[17vw] flex items-center gap-x-[1vw]"
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
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-[2.3vw] fontPopSemibold">
                          Stella Marris
                        </div>
                        <div className="mb-[0.5vw] text-[#00ff47] text-[1.4vw]">
                          <span>Content Writer </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-[#00ff47] text-[1.9vw] text-end">
                          4.6
                        </div>
                        <div className="text-black bg-[#1DA1F2] px-[1vw] py-[0.2vw] text-[0.6vw]">
                          Expert
                        </div>
                      </div>
                    </div>
                    <div className="w-full mt-[1vw] h-[6vw] text-[0.8vw] bg-[#282828] p-[0.7vw] leading-[1.5vw]">
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
