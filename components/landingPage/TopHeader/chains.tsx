import React, { useRef, useEffect } from "react";
import img1 from "@/public/landingpage/solanaImg.png";
import img2 from "@/public/landingpage/aptosImg.png";
import img3 from "@/public/landingpage/polygonImg.png";
import img4 from "@/public/landingpage/binanceImg.png";
import img5 from "@/public/landingpage/cardanoImg.png";
import img6 from "@/public/landingpage/ethereumImg.png";
import img7 from "@/public/landingpage/suiImg.png";
import img8 from "@/public/landingpage/bitcoinImg.png";
import image1 from "@/public/landingpage/image1.png";
import image2 from "@/public/landingpage/image2.png";
import image3 from "@/public/landingpage/image5.png";
import image4 from "@/public/landingpage/image4.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion, useAnimation, useInView } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

export default function chains() {
  const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 1700,
      easing: "ease-in-out",
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <div className="text-black overflow-x-hidden">
      <Head>
        <script src="https://getlaunchlist.com/js/widget.js" defer></script>
      </Head>
      {/* part one */}
      <div className="py-[6vw] md:py-[2vw] ">
        {/* <div className="scroll-container">
          {imgs.map((el, i) => (
            <div key={i} className="content bg-[#f4f4f4]">
              <div className=" px-8 m-4 rounded-[8px] max-w-[420px]">
                <Image src={img1} width={200} height={80} alt="" />
              </div>
            </div>
          ))}
        </div> */}
        <div className="text-center font-semibold text-black text-[4.6vw] md:text-[2.6vw]">
          Built to work for every chain
        </div>
        <div className="px-[1vw] md:px-[3vw] mt-[4vw] py-[1.2vw] flex justify-between items-center  bg-[#f4f4f4]">
          <div className="w-[13vw] md:w-[9.4vw]">
            <Image src={img1} width={9000} height={2000} alt="" />
          </div>
          <div className="w-[9vw] md:w-[6vw]">
            <Image src={img2} width={9000} height={2000} alt="" />
          </div>
          <div className="w-[11vw] md:w-[7.4vw]">
            <Image src={img3} width={9000} height={2000} alt="" />
          </div>
          <div className="w-[11vw] md:w-[7.4vw]">
            <Image src={img4} width={9000} height={2000} alt="" />
          </div>
          <div className="w-[11vw] md:w-[8vw]">
            <Image src={img5} width={9000} height={2000} alt="" />
          </div>
          <div className="w-[11vw] md:w-[8.9vw]">
            <Image src={img6} width={9000} height={2000} alt="" />
          </div>
          <div className="w-[5vw] md:w-[3vw]">
            <Image src={img7} width={9000} height={2000} alt="" />
          </div>
          <div className="w-[8vw] md:w-[6.2vw]">
            <Image src={img8} width={9000} height={2000} alt="" />
          </div>
        </div>
      </div>
      <div className="mb-[5vw] mt-[1vw] font-bold text-center hidden">
        <div className="text-[7vw] md:text-[5vw]">26475</div>
        <div className="text-[3vw] md:text-[2vw]">Waitlist Sinups</div>
      </div>
      {/* part two */}
      <div>
        <div className="flex flex-col md:flex-row mt-[3vw] justify-center md:justify-around items-center">
          <div
            data-aos="fade-right"
            // variants={{
            //   hidden: { y: 100, opacity: 0 },
            //   visible: { y: 0, opacity: 1 },
            // }}
            // initial="hidden"
            // animate="visible"
            // transition={{ duration: 1.2, delay: 1 }}
            className="w-[90vw] md:w-[46vw] z-[100]"
          >
            <Image src={image1} width={9000} height={2000} alt="" />
          </div>
          <div
            data-aos="fade-left"
            className="w-[68vw] md:w-[20vw] mt-[4vw] md:mt-0 text-start mx-auto md:mx-0"
          >
            <div className="md:-ml-[14vw]">
              <div className="text-[5vw] md:text-[2vw] font-semibold">
                Projects and Founders
              </div>
              <ul className="text-[2.6vw] md:text-[0.9vw] mt-[2vw] md:mt-[1vw] leading-[5.2vw] md:leading-[1.6vw]">
                <li>Staff Management Tool</li>
                <li>Crypto Payroll through Money Streaming Protocol</li>
                <li>Recruit and Mange applications</li>
                <li>Collaborate with in-platform messaging</li>
                <li>Post gigs and hire freelancers</li>
                <li>Connect with web3 investors</li>
                <li>Market and Boost project page</li>
                <li>Escrow through money streaming protocol</li>
              </ul>
              <div className="mt-[8vw] md:mt-[4vw] flex justify-center md:justify-start">
                <motion.button
                  drag
                  dragConstraints={{
                    right: 0.7,
                    bottom: 0.7,
                    left: 0.7,
                    top: 0.7,
                  }}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => router.push("/landingpage/projects")}
                  className="text-[2.9vw] mx-auto md:mx-0 md:text-[0.9vw] font-semibold text-black px-[5vw] md:px-[3.4vw] cursor-pointer py-[1vw] md:py-[0.6vw] w-fit rounded-full bg-[#00FF47] inter"
                >
                  Learn more
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[10vw] md:-mt-[3vw] md:flex-row-reverse justify-centerx md:justify-around items-center">
          <div data-aos="fade-right" className="w-[90vw] md:w-[46vw] z-[50]">
            <Image src={image2} width={9000} height={2000} alt="" />
          </div>
          <div
            data-aos="fade-left"
            className="w-[68] mt-[4vw] md:mt-0 md:w-[24vw] text-start md:text-end"
          >
            <div className="relative md:-right-[10vw]">
              <div className="text-[5vw] md:text-[2vw] font-semibold">
                Web3 Freelancers
              </div>
              <ul className="text-[2.6vw] md:text-[0.9vw] mt-[2vw] md:mt-[1vw] leading-[5.2vw] md:leading-[1.6vw]">
                <li>Resume builder</li>
                <li>Apply to hiring projects</li>
                <li>Accept gigs</li>
                <li>Collaborate with in-platform messaging</li>
                <li>Learn about web3 and NFT Trading</li>
                <li>Get payments in realtime</li>
                <li>Boost freelance profile</li>
              </ul>
              <div className="mt-[4vw] flex justify-center md:justify-end">
                <motion.button
                  drag
                  dragConstraints={{
                    right: 0.7,
                    bottom: 0.7,
                    left: 0.7,
                    top: 0.7,
                  }}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => router.push("/landingpage/freelancers")}
                  className="mx-auto md:mx-0 md:ml-auto text-center text-[2.9vw] md:text-[0.9vw] font-semibold text-black px-[5vw] md:px-[3.4vw] cursor-pointer py-[1vw] md:py-[0.6vw] w-fit rounded-full bg-[#00FF47] inter"
                >
                  Learn more
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  mt-[10vw] md:-mt-[3vw] justify-center md:justify-around items-center">
          <div data-aos="fade-right" className="w-[90vw] md:w-[46vw] z-[40]">
            <Image src={image3} width={9000} height={2000} alt="" />
          </div>
          <div
            data-aos="fade-left"
            className="w-[68vw] mx-auto flex justify-center md:justify-start md:w-[20vw] mt-[4vw] md:mt-0 text-start md:mx-0"
          >
            <div className="md:-ml-[14vw]">
              <div className="text-[5vw] md:text-[2vw] font-semibold">
                Crypto Payments
              </div>
              <ul className="text-[2.6vw] md:text-[0.9vw] mt-[2vw] md:mt-[1vw] leading-[5.2vw] md:leading-[1.6vw]">
                <li>Secure crypto payment</li>
                <li>Stream recurring payments in real time</li>
                <li>Setup Escrow Services for service payments.</li>
              </ul>
              <div className="mt-[4vw] flex justify-center md:justify-start">
                <motion.button
                  drag
                  dragConstraints={{
                    right: 0.7,
                    bottom: 0.7,
                    left: 0.7,
                    top: 0.7,
                  }}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => router.push("/landingpage/payments")}
                  className="text-[2.9vw] mx-auto md:mx-0 md:text-[0.9vw] font-semibold text-black px-[5vw] md:px-[3.4vw] cursor-pointer py-[1vw] md:py-[0.6vw] w-fit rounded-full bg-[#00FF47] inter"
                >
                  Learn more
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[10vw] md:-mt-[3vw] md:flex-row-reverse justify-center md:justify-around items-center">
          <div data-aos="fade-right" className="w-[90vw] md:w-[46vw] ">
            <Image src={image4} width={9000} height={2000} alt="" />
          </div>
          <div
            data-aos="fade-left"
            className="w-[68] mt-[4vw] md:mt-0 md:w-[24vw] text-start md:text-end"
          >
            <div className="relative md:-right-[10vw]">
              <div className="text-[5vw] md:text-[2vw] font-semibold">
                NFT Traders and Collectors
              </div>
              <ul className="text-[2.6vw] md:text-[0.9vw] mt-[2vw] md:mt-[1vw] leading-[5.2vw] md:leading-[1.6vw]">
                <li>Burn Rug and useless NFTs for rewards</li>
              </ul>
              <div className="mt-[4vw] flex justify-center md:justify-end">
                <motion.button
                  drag
                  dragConstraints={{
                    right: 0.7,
                    bottom: 0.7,
                    left: 0.7,
                    top: 0.7,
                  }}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => router.push("/landingpage/trades")}
                  className="mx-auto md:mx-0 md:ml-auto text-[2.9vw] md:text-[0.9vw] font-semibold text-black px-[5vw] md:px-[3.4vw] cursor-pointer py-[1vw] md:py-[0.6vw] w-fit rounded-full bg-[#00FF47] inter"
                >
                  Learn more
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
