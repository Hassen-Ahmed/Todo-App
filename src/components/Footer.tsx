import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="github-log">
      <a
        href="https://github.com/Hassen-Ahmed/Todo-App/tree/main"
        target="_blank"
      >
        <BsGithub />
      </a>
      <p>
        <span className="copyright">&copy;</span>Copyright 2023 By Hassen Abdela
      </p>
    </div>
  );
}
