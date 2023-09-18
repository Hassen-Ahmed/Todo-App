import { useEffect, useState } from "react";

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
  }, []);

  return <p className="app-time">{currentTime}</p>;
}
