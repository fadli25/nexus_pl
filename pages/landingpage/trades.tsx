import React, { useEffect } from "react";
import image1 from "@/public/landingpage/image4.png";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/landingPage/Footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";

import TransitionEffect from "@/components/landingPage/transition";

export default function projects() {
  useEffect(() => {
    Aos.init({
      duration: 1700,
      easing: "ease-in-out",
      once: true,
      offset: 200,
    });
  }, []);
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <TransitionEffect />
      <Head>
        <title>NFT Traders and Collectors</title>
      </Head>
      <div className="min-h-[70vh]">
        <div
          data-aos="fade-up"
          className="mt-[5vw] w-[90vw] md:w-[50vw] mx-auto"
        >
          <Image src={image1} width={9000} height={2000} alt="" />
        </div>
        <div
          data-aos="fade-up"
          className="my-[2vw] text-center font-semibold text-[4.4vw] md:text-[2.2vw] underline text-black"
        >
          NFT Traders and Collectors
        </div>
        <div className="mt-[12vw] md:mt-[6vw] flex justify-center">
          <div className="w-[70vw] mx-auto md:mx-0 md:w-[50vw] text-center">
            <div
              data-aos="fade-up"
              className="text-[3vw] md:text-[2.7vw] font-semibold leading-[5vw] "
            >
              Transform Valueless NFTs into Exciting Incentives
            </div>
            <div
              data-aos="fade-up"
              className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
            >
              At Nexus, we offer a unique opportunity for you to derive value
              from your unused or irrelevant NFTs. With our innovative program,
              you can burn these NFTs and unlock exciting rewards, creating a
              win-win situation. Turn your valueless NFTs into valuable
              incentives and embark on a rewarding journey with Nexus.
            </div>
            <div
              data-aos="fade-up"
              className="mt-[2vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
            >
              Rewards can range from tokens, NFTs, whitelists and many more.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[8vw]"></div>
      <Footer />
    </div>
  );
}
