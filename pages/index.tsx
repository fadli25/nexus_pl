import Head from "next/head";
import Image from "next/image";
import Tower from "@/components/Home/Tower/Tower";
import Projects from "@/components/Home/projects/Projects";
import Freelancers from "@/components/Home/freelancers/Freelancers";

export default function Home() {
  return (
    <div className="float-right w-full md:w-[84vw] pb-[7vw]">
      <Head>
        <title>Nexus</title>
      </Head>
      <Tower />
      <div className="mt-[5vw] border-[0.15vw] border-black rounded-[0.6vw] py-[1vw] mx-[5vw] md:mx-[6vw] px-[5vw] md:px-[3.5vw]">
        <div className="mb-[3vw] mt-[2vw] text-start fontPopSemibold text-black text-[5.4vw] md:text-[2.4vw]">
          Recommendations
        </div>
        <Projects />
        <Freelancers />
      </div>
    </div>
  );
}
