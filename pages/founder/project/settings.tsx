import React from "react";
import EditeProject from "@/components/Home/founder/myProjects/EditProject";
import Head from "next/head";

export default function addproject() {
  return (
    <div className="w-full md:w-[84vw] float-right pt-[3vw] mb-[10vw]">
      <Head>
        <title>Add Project</title>
      </Head>
      <EditeProject />
    </div>
  );
}
