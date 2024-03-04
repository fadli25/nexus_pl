import IncomingCard from "@/components/Home/founder/incoming/IncomingCard";
import { Stack } from "@mui/material";
import React from "react";

export default function other() {
  return (
    <div className=" w-[95%] md:w-[80%] mx-auto md:mx-0 top-[5vw] md:top-0 relative md:float-right py-[4vw]">
      <Stack className="gap-[10vw] md:gap-[7vw]">
        <IncomingCard name="Other" />
      </Stack>
    </div>
  );
}
