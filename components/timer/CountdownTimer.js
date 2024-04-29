import { useState, useEffect, useMemo } from "react";
import getRemainingTime from "./timer";

export default function CountdownTimer() {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  console.log("counter: ", getRemainingTime());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const newRemainingTime = getRemainingTime();
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

  return (
    <div>
      <div className="text-[5vw] md:text-[1.8vw]">
        {remainingTime != 0 ? (
          getFormattedTime(remainingTime)
        ) : (
          <div className="font-[Innter]">Live</div>
        )}
      </div>
    </div>
  );
}