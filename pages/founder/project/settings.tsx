import EditeProject from "@/components/Home/founder/myProjects/EditProject";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function addproject() {

  const [project, setProject] = useState<string>()

  const searchParams = useSearchParams()

  useEffect(() => {

    const nft_address = searchParams.get("project");
    setProject(nft_address!)
    console.log()
  }, [])


  return (
    <div className="w-full md:w-[84vw] float-right pt-[3vw] mb-[10vw]">
      <Head>
        <title>Add Project</title>
      </Head>
      {<EditeProject project={project} />}
    </div>
  );
}
