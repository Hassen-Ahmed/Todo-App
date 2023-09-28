import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/ContextTodo";
import { getUserById } from "../../utils/api";

export default function Profile() {
  const [username, setUsername] = useState("");
  const { theme, setIsTherUserId } = useContext(TodoContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      const userId: string | null = localStorage.getItem("user_id");
      const { id } = JSON.parse(userId!);

      getUserById(id).then(({ user }) => {
        setUsername(user[0].username);
        setIsTherUserId("Yes there is userId");
      });
    } else {
      navigate("/");
    }
  }, []);

  const handlerLogout = () => {
    localStorage.removeItem("user_id");
    navigate("/");
    setIsTherUserId("");
  };

  return (
    <div
      className="profile"
      style={{ color: `${theme === "light" ? "#31313188" : "#ffffff87"}` }}
    >
      {username.length ? (
        <>
          <p>Profile</p>
          <h2>{username || "Username"}</h2>
          <button className="logout-btn" onClick={handlerLogout}>
            logout
          </button>
        </>
      ) : null}
    </div>
  );
}
