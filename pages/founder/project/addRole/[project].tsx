import AddRole from "@/components/Home/founder/myProjects/AddRole";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function addproject() {

  const router = useRouter();
  const [project, setProject] = useState<string>();

  useEffect(() => {
    if (!router.isReady) return;
    const { project } = router.query;
    console.log(project);
    setProject(project as string);
  }, [router.isReady]);


  return (
    <div className="w-full md:w-[84vw] float-right pt-[3vw] mb-[10vw]">
      <Head>
        <title>Add Project</title>
      </Head>
      {project && <AddRole project={project} />}
    </div>
  );
}
