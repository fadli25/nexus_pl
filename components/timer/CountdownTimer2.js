import { useEffect, useMemo, useState } from "react";
import getRemainingTime from "./timer";
import { useRouter } from "next/router";

export default function CountdownTimer(time) {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime(time));
  // console.log("time")
  // console.log(time)
  // console.log("counter: ", getRemainingTime(time));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newRemainingTime = getRemainingTime(time);
      if (newRemainingTime > 0) {
        setRemainingTime(newRemainingTime);
      } else {
        setRemainingTime(0); // Countdown finished
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [remainingTime]);

  const getFormattedTime = (ms) => {
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    return `${hours.toString().padStart(2, "0")}h : ${minutes
      .toString()
      .padStart(2, "0")} min : ${seconds.toString().padStart(2, "0")} s`;
  };

  const router = useRouter();
  return (
    <div>
      <div className="text-[3vw] md:text-[1.2vw]">
        {remainingTime != 0 ? (
          getFormattedTime(remainingTime)
        ) : (
          <div className="font-[Innter]">Live</div>
        )}
      </div>
    </div>
  );
}
