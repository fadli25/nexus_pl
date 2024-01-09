import Project from "@/components/Home/founder/myProjects/Project";
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
    <div className="w-full md:w-[80vw] float-right pb-[10vw]">
      <Head>
        <title>Founder | Project name</title>
      </Head>
      {project && <Project project={project} />}
    </div>
  );
}
