import React from "react";
import Pofile from "@/components/Home/founder/haire/pofile";
import Head from "next/head";

export default function profile() {
  return (
    <div className="w-full md:w-[84vw] float-right">
      <Head>
        <title>Profile</title>
      </Head>
      <Pofile />
    </div>
  );
}
