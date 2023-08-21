import Image from "next/image";
import React from "react";

export default function Tower() {
  const imageTower =
    "https://s3-alpha-sig.figma.com/img/3d5f/f872/85573b3148b6989a65ba0e2ee52ea225?Expires=1693180800&Signature=UXcA5EV579vB74r31aRJ5P4J0jGnZ1LuWbMjUzfElB7BgRy4eM4iUguzQpIC9NHbJyrvVseH-fGSr8ojFBn3SrscPtXd5v1L-4fUfHcytnBexBVj7GWWaaYhFNHcI6jZidNT3gySWulYTMchO0d0dCyTjoFpnS5fCQ-f96tNHkDDAb7NrJcQtS~LlonMiaSxy3rbEUp01GgJYakST7c-Co96EgKCyXWtfdWmjFtcbTQ-ZhnS4uWcD-kGTbggHjOc0jmLIk8EWPBvDygG8ePL-3pGLx6sQSKfS3Zy7E1dGXltl8ayZ-X9YAi9HXMdLROCo~u3gT6gCzrwa3wVL2LS~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";
  return (
    <div className="relative pt-[14vw] overflow-hidden">
      <div className="w-[67vw] mx-auto tower h-[25vw] flex justify-between items-center">
        <div>
          <Image
            src={imageTower}
            width={9000}
            height={2000}
            alt=""
            className="w-[29vw] -mt-[3vw]"
          />
        </div>
        <div className="text-[2.6vw] font-semibold text-[#0FA] w-[30vw] text-center mr-[2vw]">
          Burn your Rug NFTs for a reward here
        </div>
      </div>
    </div>
  );
}
