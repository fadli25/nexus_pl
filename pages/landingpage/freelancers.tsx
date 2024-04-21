import React, { useEffect } from "react";
import image1 from "@/public/landingpage/image2.png";
import img1 from "@/public/landingpage/learn2_1.png";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/landingPage/Footer/footer";
import Navbar from "@/components/landingPage/Navbar/navbar";
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
    <div className="overflow-x-hidden text-black">
      <Navbar />
      <TransitionEffect />
      <Head>
        <title>Web3 Freelancers</title>
      </Head>
      <div data-aos="fade-up" className="mt-[5vw] w-[90vw] md:w-[50vw] mx-auto">
        <Image src={image1} width={9000} height={2000} alt="" />
      </div>
      <div
        data-aos="fade-up"
        className="my-[2vw] text-center font-semibold text-[4.4vw] md:text-[2.2vw] underline text-black"
      >
        Web3 and Freelancers
      </div>
      <div className="mt-[12vw] md:mt-[6vw] flex flex-col md:flex-row justify-evenly">
        <div className="w-[70vw] mx-auto md:mx-0 md:w-[40vw]">
          <div
            data-aos="fade-right"
            className="text-[3vw] md:text-[2.7vw] font-semibold leading-[5vw] "
          >
            Seize Opportunities, Fuel Creativity, and Thrive
          </div>
          <div
            data-aos="fade-right"
            className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
          >
            At Nexus, we understand the challenges that freelancers face in the
            competitive digital services landscape. We have created an
            innovative platform tailored to empower you, providing a gateway to
            seize opportunities, fuel creativity, and thrive in the evolving
            digital economy. With Nexus by your side, you can unlock your full
            potential and take your freelance career to new heights.
          </div>
          <div
            data-aos="fade-right"
            className="mt-[3vw] text-[3vw] md:text-[2.7vw] font-semibold leading-[5vw] md:leading-[3.8vw]"
          >
            Build an Impressive Resume
          </div>
          <div
            data-aos="fade-right"
            className="mt-[1vw] md:mt-[0.4vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
          >
            Stand out from the crowd with our robust resume builder. Showcase
            your skills, expertise, and accomplishments in a professional and
            visually appealing format. Craft a compelling resume that catches
            the attention of potential clients and positions you as a top choice
            for their projects.
          </div>
        </div>
        <div className="w-[70vw] mx-auto md:mx-0 md:w-[40vw]">
          <div
            data-aos="fade-left"
            className="text-[3vw] mt-[3vw] md:mt-0 md:text-[2.7vw] font-semibold leading-[5vw] md:leading-[3.8vw]"
          >
            Apply to Hiring Projects
          </div>
          <div
            data-aos="fade-left"
            className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
          >
            Access a diverse range of hiring projects that align with your
            skills and interests. Nexus connects you with an extensive network
            of founders searching for top freelance talent. Browse through
            project listings, apply directly, and demonstrate why you are the
            perfect fit. With Nexus, finding exciting and rewarding projects has
            never been easier.
          </div>
          <div
            data-aos="fade-left"
            className="mt-[3vw] text-[3vw] md:text-[2.7vw] font-semibold leading-[5vw]"
          >
            Effortless Collaboration with In-Platform Messaging
          </div>
          <div
            data-aos="fade-left"
            className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
          >
            Enhance collaboration and streamline communication with our
            intuitive in-platform messaging system. Stay connected with clients,
            ask questions, provide updates, and seek clarifications - all within
            a single interface. Enjoy a seamless collaboration experience that
            fosters productive and engaging client relationships.
          </div>
          <div
            data-aos="fade-left"
            className="mt-[3vw] text-[3vw] md:text-[2.7vw] font-semibold leading-[5vw]"
          >
            Real-Time Payments
          </div>
          <div
            data-aos="fade-left"
            className="mt-[1vw] text-[2vw] md:text-[1vw] leading-[4vw] md:leading-[2.2vw]"
          >
            Say goodbye to waiting for payment. Nexus ensures real-time
            payments, enabling you to receive compensation for your hard work
            immediately upon project completion. Experience the convenience and
            financial stability that comes with instant payments, enhancing your
            freelance journey.
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="w-[50vw] md:w-[40vw] mt-[4vw] mx-auto">
        <Image src={img1} width={9000} height={2000} alt="" />
      </div>

      <div className="mt-[8vw]"></div>
      <Footer />
    </div>
  );
}
