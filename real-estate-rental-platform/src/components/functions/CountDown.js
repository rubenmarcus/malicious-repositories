import { useState } from "react";

function CountDown({ h, m, s }) {
  const [hours, setHour] = useState(h);
  const [menotes, setMenotes] = useState(m);
  const [seconds, setSeconds] = useState(s);

  const timer = setTimeout(() => {
    setSeconds(seconds - 1);
    if (seconds === 0) {
      setMenotes(menotes - 1);
      setSeconds(59);
    }
    if (menotes === 0 && seconds === 0) {
      setHour(hours - 1);
      setMenotes(59);
    }
  }, 1000);

  if (hours === 0 && menotes === 0 && seconds === 0) {
    clearTimeout(timer);
  }

  return (
    <h6 className="text-white">
      {hours < 10 ? "0" + hours : hours}h :{" "}
      {menotes < 10 ? "0" + menotes : menotes}m :{" "}
      {seconds < 10 ? "0" + seconds : seconds}s
    </h6>
  );
}

export default CountDown;
