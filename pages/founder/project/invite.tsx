import React from "react";
import InvitePage from "@/components/Home/founder/myProjects/invite";
import Head from "next/head";

export default function invite() {
  return (
    <div className="w-[80vw] float-right pb-[10vw]">
      <Head>
        <title>Founder | Invite</title>
      </Head>
      <InvitePage />
    </div>
  );
}
