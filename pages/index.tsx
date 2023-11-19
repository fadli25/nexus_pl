import Head from "next/head";
import Image from "next/image";
import Tower from "@/components/Home/Tower/Tower";
import Projects from "@/components/Home/projects/Projects";
import Freelancers from "@/components/Home/freelancers/Freelancers";

export default function Home() {
  return (
    <div className="float-right w-full md:w-[80vw] pb-[7vw]">
      <Head>
        <title>Nexus</title>
      </Head>
      <Tower />
      <div className="mt-[7vw] mb-[3vw] text-start px-[3.5vw] fontPopSemibold text-black text-[5.4vw] md:text-[3vw]">
        Recommendations
      </div>
      <Projects />
      <Freelancers />
    </div>
  );
}
