import { useContext, useEffect, useState } from "react";
import {
  BsSortNumericDown,
  BsSortNumericUpAlt,
  BsSun,
  BsFillMoonFill,
} from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TodoContext } from "../../context/ContextTodo";
import { Link } from "react-router-dom";

export default function Menu() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [isProfile, setIsProfile] = useState(false);
  const { setIsSortedAsd, theme, setTheme, IsTherUserId } =
    useContext(TodoContext);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#454545" : "#d5ccc7";
  }, [theme]);

  return (
    <>
      {IsTherUserId.length ? (
        <div className="menu">
          {isProfile ? (
            <Link
              to="/todo"
              style={{ color: "#333333d6" }}
              className={`${isDropDown ? " btn" : " origin-point"}`}
              onClick={() => setIsProfile(!isProfile)}
            >
              <AiOutlineHome />
            </Link>
          ) : (
            <Link
              to="/profile"
              style={{ color: "#333333d6" }}
              className={`${isDropDown ? " btn" : " origin-point"}`}
              onClick={() => setIsProfile(!isProfile)}
            >
              <CgProfile />
            </Link>
          )}

          <div
            className={` ${isDropDown ? " btn" : " origin-point"}`}
            onClick={() => {
              setIsSort(!isSort);
              setIsSortedAsd((prevValue) => !prevValue);
            }}
          >
            {isSort ? <BsSortNumericDown /> : <BsSortNumericUpAlt />}
          </div>

          <div
            className={` ${isDropDown ? "btn" : " origin-point"}`}
            onClick={() => {
              setTheme((prevTheme) => {
                return prevTheme === "dark" ? "light" : "dark";
              });
              setIsLight(!isLight);
            }}
          >
            {isLight ? <BsSun /> : <BsFillMoonFill />}
          </div>

          <div className="menu-btn" onClick={() => setIsDropDown(!isDropDown)}>
            <p>🔘️🔘️🔘️</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
