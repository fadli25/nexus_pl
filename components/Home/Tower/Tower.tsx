import Image from "next/image";
import React from "react";
import imageTower from "@/public/tower.png";
import OldOnce from "@/public/OldOnes.png";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function Tower() {
  const router = useRouter();
  return (
    <div className="relative overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2600,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div
            className="w-[90vw] md:w-[64vw] mx-auto flex justify-between items-center relative cursor-pointer"
            onClick={() => router.push("/mint")}
          >
            <Image src={OldOnce} width={2000} height={200} alt="" />
            <div className="absolute top-[34%] right-[3%] text-[1.4vw] text-white">
              Countdown: --|--
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[90vw] mt-[6vw] md:w-[58vw] mx-auto tower h-[38vw] md:h-[22vw] flex justify-between items-center">
            <div>
              <Image
                src={imageTower}
                width={9000}
                height={2000}
                alt=""
                className="w-[40vw] md:w-[22vw] -mb-[4vw]"
              />
            </div>
            <div className="text-[4vw] md:text-[2.4vw] font-semibold text-[#0FA] w-[50vw] md:w-[30vw] text-center mr-[2vw]">
              Burn your Rug NFTs for a reward here
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
