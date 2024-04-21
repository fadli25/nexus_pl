import React, { useEffect } from "react";
import image1 from "@/public/landingpage/image1.png";
import img1 from "@/public/landingpage/lean1_1.png";
import img2 from "@/public/landingpage/learn1_2.png";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/landingPage/Footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import TransitionEffect from "@/components/landingPage/transition";
import Navbar from "@/components/landingPage/Navbar/navbar";
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
    <div className="text-black overflow-x-hidden">
      <Navbar />
      <TransitionEffect />
      <Head>
        <title>Projects and Founders</title>
      </Head>
      <div className="mt-[5vw] w-[90vw] md:w-[50vw] mx-auto" data-aos="fade-up">
        <Image src={image1} width={9000} height={2000} alt="" />
      </div>
      <div
        data-aos="fade-up"
        className="my-[2vw] text-center font-semibold text-[4.4vw] md:text-[2.2vw] underline text-black"
      >
        Projects and Founders
      </div>
      <div
        data-aos="fade-right"
        className="mt-[12vw] md:mt-[6vw] flex flex-col md:flex-row justify-evenly"
      >
        <div
          className="w-[70vw] mx-auto md:mx-0 md:w-[40vw]"
          fade-aos="fade-right"
        >
          <div className="text-[3vw] md:text-[2.3vw] font-semibold leading-[5vw] md:leading-[3.8vw]">
            Streamline Operations, Fuel Growth, and Maximize Success
          </div>
          <div className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]">
            At Nexus, we understand the unique challenges that founders face in
            the digital services industry. We have developed a groundbreaking
            platform specifically tailored to address your needs and unlock your
            project's true potential. With Nexus as your partner, you can
            streamline operations, fuel growth, and maximize success in the
            dynamic and ever-evolving digital economy.
          </div>
          <div className="mt-[3vw] text-[3vw] md:text-[2.3vw] font-semibold leading-[5vw] md:leading-[3.8vw]">
            Effortless Staff Management and Crypto Payroll
          </div>
          <div className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]">
            Spend less time on administrative tasks and more time on what truly
            matters. Nexus offers a powerful staff management tool that
            simplifies onboarding, offboarding, and team member tracking. Say
            goodbye to payroll headaches as we enable secure and timely crypto
            payroll through our cutting-edge money streaming protocol. Focus on
            building your dream team and let Nexus handle the rest..
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-[50vw] md:w-[30vw] mt-[4vw] md:mt-0 mx-auto md:mx-0"
        >
          <Image src={img1} width={9000} height={2000} alt="" />
        </div>
      </div>
      <div className="mt-[6vw] flex flex-col md:flex-row-reverse justify-evenly">
        <div className="w-[70vw] md:w-[40vw] mx-auto md:mx-0">
          <div
            data-aos="fade-left"
            className="mt-[3vw] md:mt-0 text-[3vw] md:text-[2.3vw] font-semibold leading-[5vw] md:leading-[3.8vw]"
          >
            Unlock Opportunities:
          </div>
          <div
            data-aos="fade-left"
            className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
          >
            Connect with Web3 Investors Nexus goes beyond connecting you with
            talent; we provide a gateway to connect with web3 investors.
            Showcase your projects, attract potential investors, and explore
            funding opportunities in the rapidly evolving web3 space. Our
            platform facilitates networking, opening doors to a vast network of
            web3 investors who can provide the resources and support you need to
            take your project to the next level.
          </div>
          <div
            data-aos="fade-left"
            className="mt-[3vw] text-[3vw] md:text-[2.3vw] font-semibold leading-[5vw] md:leading-[3.8vw]"
          >
            Secure Escrow Services through Money Streaming Protocol
          </div>
          <div
            data-aos="fade-left"
            className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
          >
            Trust and security are paramount. Nexus ensures secure transactions
            through our innovative money streaming protocol. Our escrow services
            provide a safe environment for financial transactions, protecting
            the interests of all parties involved. With Nexus, you can transact
            with confidence, knowing that your funds are safeguarded by
            state-of-the-art security protocols.
          </div>
          <div
            data-aos="fade-left"
            className="mt-[3vw] text-[3vw] md:text-[2.3vw] font-semibold leading-[5vw] md:leading-[3.8vw]"
          >
            Seamless Recruitment and Application Management
          </div>
          <div
            data-aos="fade-left"
            className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
          >
            Finding the right talent is crucial for your project's success.
            Nexus provides a centralized marketplace where you can effortlessly
            post gigs and manage applications. Our intuitive interface allows
            you to evaluate candidates efficiently, ensuring a seamless hiring
            process that leads to assembling high-performing teams. With Nexus,
            you'll have access to a pool of exceptional talent at your
            fingertips
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-[50vw] md:w-[30vw] mx-auto md:mx-0 mt-[3vw] md:mt-0"
        >
          <Image src={img2} width={9000} height={2000} alt="" />
        </div>
      </div>
      <div className="mt-[8vw]"></div>
      <Footer />
    </div>
  );
}
