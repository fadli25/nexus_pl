import React, { useEffect } from "react";
import image1 from "@/public/landingpage/image5.png";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/landingPage/Footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/landingPage/Navbar/navbar";
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
    <div className="text-black overflow-x-hidden">
      <Navbar />
      <TransitionEffect />
      <Head>
        <title>Crypto Payments</title>
      </Head>
      <div className="min-h-[70vh]">
        <div
          className="mt-[5vw] w-[90vw] md:w-[50vw] mx-auto"
          data-aos="fade-up"
        >
          <Image src={image1} width={9000} height={2000} alt="" />
        </div>
        <div
          data-aos="fade-up"
          className="my-[2vw] text-center font-semibold text-[4.4vw] md:text-[2.2vw] underline text-black"
        >
          Crypto Payments
        </div>
        <div className="mt-[12vw] md:mt-[6vw] flex flex-col md:flex-row justify-evenly">
          <div className="w-[70vw] mx-auto md:mx-0 md:w-[40vw]">
            <div
              data-aos="fade-right"
              className="text-[3vw] md:text-[2.7vw] font-semibold leading-[5vw] "
            >
              Secure Escrow Services through Money Streaming Protocol
            </div>
            <div
              data-aos="fade-right"
              className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
            >
              Trust and security are paramount. Nexus ensures secure
              transactions through our innovative money streaming protocol. Our
              escrow services provide a safe environment for financial
              transactions, protecting the interests of all parties involved.
              With Nexus, you can transact with confidence, knowing that your
              funds are safeguarded by state-of-the-art security protocols.
            </div>
          </div>
          <div className="w-[70vw] mx-auto md:mx-0 md:w-[40vw]">
            <div
              data-aos="fade-left"
              className="text-[3vw] mt-[3vw] md:mt-0 md:text-[2.7vw] font-semibold leading-[5vw] md:leading-[3.8vw]"
            >
              In real-time Recurring Payment through money streaming protocol
            </div>
            <div
              data-aos="fade-left"
              className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
            >
              Nexus offers a cutting-edge Money Streaming Protocol that
              revolutionizes payment processing and management. With real-time
              recurring payment capabilities, founders can seamlessly schedule
              and automate regular payments to their staff. This innovative
              solution ensures timely compensation, enhances financial
              transparency, and fosters a productive and satisfied workforce.
              Say goodbye to payment delays and hello to a smoother and more
              streamlined payment experience with Nexus.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[8vw]"></div>
      <Footer />
    </div>
  );
}
