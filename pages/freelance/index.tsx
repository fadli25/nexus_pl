import React from "react";
import Freelance from "@/components/Freelance/freelance";
import Head from "next/head";

export default function index() {
  return (
    <div className="w-full md:w-[84vw] float-right">
      <Head>
        <title>Jobs</title>
      </Head>
      <Freelance />
    </div>
  );
}
