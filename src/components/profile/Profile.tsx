import { Link } from "react-router-dom";
import "./Profile.css";
import { useContext } from "react";
import { TodoContext } from "../../context/ContextTodo";
export default function Profile() {
  const { theme } = useContext(TodoContext);
  return (
    <div
      className="profile"
      style={{ color: `${theme === "light" ? "#31313188" : "#ffffff87"}` }}
    >
      <p>Profile</p>
      <h2>{"Username"}</h2>
      <Link to="/">
        <button className="logout-btn">logout</button>
      </Link>
    </div>
  );
}
