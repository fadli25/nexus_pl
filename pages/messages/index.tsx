import Head from "next/head";
import React, { ReactNode } from "react";

export default function index() {
  const data = [
    { name: "Manay", role: "Community Manager", children: "Bone Shamans" },
    { name: "Sayed", role: "Marketing Manager", children: "Bone Shamans" },
    { name: "Khady", role: "Community Moderator", children: "Bone Shamans" },
  ];
  return (
    <div className="w-full md:w-[84vw] float-right pt-[5vw]">
      <Head>
        <title>Messages</title>
      </Head>
      <div className="w-[90vw] md:w-[60vw] mx-auto">
        {data.map((el, i) => (
          <div key={i}>
            <MessageCard name={el.name} role={el.role} children={el.children} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface MessageCardTypes {
  children: ReactNode;
  name: string;
  role: string;
  onClick?: () => void;
}

export function MessageCard({ children, name, role }: MessageCardTypes) {
  return (
    <div className="w-full bg-black rounded-[1.5vw] md:rounded-[1vw] px-[2vw] py-[2vw] my-[3vw] h-full flex items-center justify-between">
      <div className="flex gap-x-[1vw]">
        <div className="w-[12vw] md:w-[8vw] h-[12vw] md:h-[8vw] rounded-full border-[#00ff47] border-[0.26vw]"></div>
        <div>
          <div className="fontPopSemibold text-[4.4vw] md:text-[2.4vw] text-white mt-[1vw]">
            {name}
          </div>
          <div className="text-[2.5vw] md:text-[1.5vw] text-[#00ff47]">
            {role}
          </div>
        </div>
      </div>
      <div>
        <div className="fontPopSemibold text-[4vw] md:text-[2.4vw] text-white">
          {children}
        </div>
      </div>
    </div>
  );
}
