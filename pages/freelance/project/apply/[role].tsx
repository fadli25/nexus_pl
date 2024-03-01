import Apply from "@/components/Freelance/apply";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function apply() {

  const router = useRouter();
  const [role, setRole] = useState<string>();

  useEffect(() => {
    if (!router.isReady) return;
    const { role } = router.query;
    console.log(role);
    setRole(role as string);
  }, [router.isReady]);

  return (
    <div className="w-full md:w-[84vw] float-right">
      <Head>
        <title>Freelance | Apply</title>
      </Head>
      {role && <Apply role={role} />}
    </div>
  );
}
