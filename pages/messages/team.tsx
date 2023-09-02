import Head from "next/head";
import React from "react";

export default function team() {
  const data = [1, 2, 3];
  return (
    <div className="w-full md:w-[80vw] float-right">
      <Head>
        <title>Messages</title>
      </Head>
      <div className="w-[95vw] md:w-[60vw] mx-auto pt-[5vw]">
        {data.map((el, index) => (
          <MessageSec />
        ))}
      </div>
    </div>
  );
}

export function MessageSec() {
  return (
    <div className="w-full mb-[5vw] md:mb-[2vw] text-black rounded-[1vw] bg-[#4AF846] py-[1vw] px-[2vw] flex justify-between">
      <div className="rounded-full w-[23vw] md:w-[10vw] h-[23vw] md:h-[10vw] bg-black/40"></div>
      <div className="w-[73%] md:w-[80%]">
        <div className="fontPopSemibold text-[5vw] md:text-[2vw]">
          Zetsu | The Shaman King
        </div>
        <div className="mt-[0.7vw] text-[2vw] md:text-[1vw] font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic amet
          totam, rerum quia magnam officiis consequuntur deserunt et voluptas
          nostrum, vel autem ullam cumque natus veritatis labore repudiandae
          vitae suscipit!
        </div>
      </div>
    </div>
  );
}
