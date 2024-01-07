import React from "react";
import AddProj from "@/components/Home/founder/myProjects/AddProject";
import Head from "next/head";

export default function addproject() {
  return (
    <div className="w-full md:w-[80vw] float-right pt-[3vw] mb-[10vw]">
      <Head>
        <title>Add Project</title>
      </Head>
      <AddProj />
    </div>
  );
}
