import { BsGithub } from "react-icons/bs";
import { TodoContext } from "../context/ContextTodo";
import { useContext } from "react";

export default function Footer() {
  const { theme } = useContext(TodoContext);
  return (
    <div className="github-log">
      <a
        style={{ color: `${theme === "light" ? "#4a4a4a" : "#989898"}` }}
        href="https://github.com/Hassen-Ahmed/Todo-App/tree/main"
        target="_blank"
      >
        <BsGithub />
      </a>
      <p style={{ color: `${theme === "light" ? "#4a4a4a" : "#989898"}` }}>
        <span className="copyright">&copy;</span>Copyright 2023 By Hassen Abdela
      </p>
    </div>
  );
}
