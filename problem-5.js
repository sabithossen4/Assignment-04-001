
function calculateWatchTime(times) {
  if (!Array.isArray(times)) {
  return "Invalid";
  }
  let totalSeconds = 0;
  for (const time of times) {
  if (typeof time !== 'number') {
  return "Invalid";
  }
  // totalSeconds += time; অথবা --
   totalSeconds =totalSeconds + time;
  }
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return { hour: hours, minute: minutes, second: seconds };
  }
const mone=  [];
const ashOut=calculateWatchTime(mone);
console.log(ashOut);   