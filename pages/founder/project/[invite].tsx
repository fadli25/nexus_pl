import InvitePage from "@/components/Home/founder/myProjects/invite";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export default function invite() {

  const router = useRouter();
  const [project, setProject] = useState<string>()

  useEffect(() => {
    if (!router.isReady) return;
    const { invite } = router.query;
    console.log(invite);
    setProject((invite as string))
  }, [router.isReady])

  return (
    <div className="w-[80vw] float-right pb-[10vw]">
      <Head>
        <title>Founder | Invite</title>
      </Head>
      {project && <InvitePage
        project={project}
      />}
    </div>
  );
}
