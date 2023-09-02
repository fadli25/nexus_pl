import Head from "next/head";
import React from "react";
import Incoming from "@/components/Home/founder/incoming/incoming";

export default function index() {
  return (
    <div className=" w-[95%] md:w-[80%] mx-auto md:mx-0 top-[5vw] md:top-0 relative md:float-right">
      <Head>
        <title>Incoming Projects</title>
      </Head>
      <Incoming />
    </div>
  );
}
