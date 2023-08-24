import React from "react";
import Project from "@/components/Home/founder/myProjects/Project";
import Head from "next/head";

export default function project() {
  return (
    <div className="w-[80vw] float-right pb-[10vw]">
      <Head>
        <title>Founder | Project name</title>
      </Head>
      <Project />
    </div>
  );
}
