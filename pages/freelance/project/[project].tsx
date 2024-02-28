import Projectpage from "@/components/Freelance/project";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function project() {

  const router = useRouter();
  const [project, setProject] = useState<string>();

  useEffect(() => {
    if (!router.isReady) return;
    const { project } = router.query;
    console.log(project);
    setProject(project as string);
  }, [router.isReady]);



  return (
    <div className="w-full md:w-[84vw] float-left md:float-right">
      <Head>
        <title>Freelance | Project</title>
      </Head>
      {project && <Projectpage project={project} />}
    </div>
  );
}
