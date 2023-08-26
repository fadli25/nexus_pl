import React from "react";
import Apply from "@/components/Freelance/apply";
import Head from "next/head";

export default function apply() {
  return (
    <div className="w-[80vw] float-right">
      <Head>
        <title>Freelance | Apply</title>
      </Head>
      <Apply />
    </div>
  );
}
