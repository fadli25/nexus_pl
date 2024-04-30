import moment from "moment-timezone";

export default function getRemainingTime(time) {
  // console.log(time.time)
  const now = Date.now();
  const targetTime = moment.tz(time.time, "UTC"); // 5 Pm UTC
  // console.log("time now:", now);
  const difference = targetTime - now;
  // console.log("target time: ", targetTime);

  // Handle negative values (optional)
  // if (difference < 0) {
  //   difference = 0; // Set to 0 if target time has passed
  // }

  return difference;
}
