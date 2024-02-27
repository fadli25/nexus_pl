import Pofile from "@/components/Home/founder/haire/pofile";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function profile() {

  const router = useRouter();
  const [user, setUser] = useState<string>();

  useEffect(() => {
    if (!router.isReady) return;
    const { profile } = router.query;
    console.log(profile);
    setUser(profile as string);
  }, [router.isReady]);


  return (
    <div className="w-full md:w-[84vw] float-right">
      <Head>
        <title>Profile</title>
      </Head>
      {user && <Pofile user={user} />}
    </div>
  );
}
