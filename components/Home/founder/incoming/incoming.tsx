import { Stack } from "@mui/material";
import React from "react";
import IncomingCard from "./IncomingCard";

export default function incoming() {
  return (
    <div className="py-[4vw]">
      <Stack className="gap-[10vw] md:gap-[7vw]">
        <IncomingCard />
        <IncomingCard name="Aptos Monkeys" />
      </Stack>
    </div>
  );
}
