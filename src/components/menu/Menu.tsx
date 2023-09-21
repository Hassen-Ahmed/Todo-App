import { useContext, useEffect, useState } from "react";
import {
  BsSortNumericDown,
  BsSortNumericUpAlt,
  BsSun,
  BsFillMoonFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./Menu.css";
import { TodoContext } from "../../context/ContextTodo";

export default function Menu() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const { setIsSortedAsd, theme, setTheme } = useContext(TodoContext);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "dark" ? "#454545" : "#d5ccc7";
  }, [theme]);
  return (
    <div className="menu">
      <div className={`${isDropDown ? " btn" : " origin-point"}`}>
        <CgProfile />
      </div>

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
  );
}
