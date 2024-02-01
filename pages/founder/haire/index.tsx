import React from "react";
import Haire from "@/components/Home/founder/haire/haire";
import Head from "next/head";

export default function index() {
  return (
    <div className="w-full md:w-[84vw] float-left md:float-right">
      <Head>
        <title>Founder | Haire Staffs</title>
      </Head>
      <Haire />
    </div>
  );
}
