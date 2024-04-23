import Head from "next/head";
import React from "react";

export default function singnow() {
  return (
    <>
      <Head>
        <title>Test</title>

        <script src="https://getlaunchlist.com/js/widget.js" defer></script>
      </Head>
      <div className="w-[500px] mx-auto"></div>
    </>
  );
}
