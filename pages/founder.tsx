import Head from "next/head";
import React from "react";
import IndexFounder from "@/components/Home/founder";

export default function founder() {
  return (
    <div className="w-[80vw] float-right">
      <Head>
        <title>Nexus | Founder</title>
      </Head>
      <IndexFounder />
    </div>
  );
}
