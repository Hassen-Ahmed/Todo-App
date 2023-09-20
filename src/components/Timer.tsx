import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/ContextTodo";

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const { theme } = useContext(TodoContext);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
  }, []);

  return (
    <p className={`${theme === "light" ? "app-time" : "app-time--light"}`}>
      {currentTime}
    </p>
  );
}
