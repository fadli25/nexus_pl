import React from "react";
import Projectpage from "@/components/Freelance/project";
import Head from "next/head";

export default function project() {
  return (
    <div className="w-full md:w-[80vw] float-left md:float-right">
      <Head>
        <title>Freelance | Project</title>
      </Head>
      <Projectpage />
    </div>
  );
}
