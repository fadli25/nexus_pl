import React from "react";
import Freelance from "@/components/Freelance/freelance";
import Head from "next/head";

export default function index() {
  return (
    <div className="w-full md:w-[80vw] float-right">
      <Head>
        <title>Freelancers</title>
      </Head>
      <Freelance />
    </div>
  );
}
