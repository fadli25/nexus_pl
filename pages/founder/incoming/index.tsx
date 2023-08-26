import Head from "next/head";
import React from "react";
import Incoming from "@/components/Home/founder/incoming/incoming";

export default function index() {
  return (
    <div className="w-[80%] float-right">
      <Head>
        <title>Incoming Projects</title>
      </Head>
      <Incoming />
    </div>
  );
}
