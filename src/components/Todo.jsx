/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { deleteTodoById, patchTodoById } from "../utils/api.js";
import toast from "react-hot-toast";

function isCheckHandler(toDoItem, setIsChecked, setIsRender) {
  patchTodoById(toDoItem["_id"], !toDoItem.isDone).then(() => {
    setIsRender((prevValue) => !prevValue);
    setIsChecked((currenIsChecked) => {
      return currenIsChecked ? false : true;
    });
    toast(!toDoItem.isDone ? "Checked!" : "Unchecked!", {
      duration: 2000,
      position: "top-center",
      icon: <AiOutlineCheckCircle size={25} color="green" />,
    });
  });
}

function deleteHandler(toDoItem, setIsRender) {
  deleteTodoById(toDoItem["_id"]).then(() => {
    setIsRender((prevValue) => !prevValue);
    toast("Successfuly deleted!", {
      duration: 2000,
      position: "top-center",
      icon: <MdDeleteForever size={25} color="red" />,
    });
  });
}

function isLessHandler(setIsLess) {
  setIsLess((currentValue) => {
    return currentValue ? false : true;
  });
}

const Todo = ({ todo, date, toDoItem, color, setIsRender }) => {
  const [isChecked, setIsChecked] = useState(toDoItem.isDone);
  const [isLess, setIsLess] = useState(true);

  return (
    <section className="todo" style={{ backgroundColor: color }}>
      {todo.length > 100 ? (
        <button onClick={() => isLessHandler(setIsLess)}>
          See {isLess ? "more" : "less"}...
        </button>
      ) : (
        ""
      )}
      <p
        className="todo__todo"
        style={{ textDecoration: `${isChecked ? "line-through" : "none"} ` }}
      >
        {isLess && todo.length > 100 ? todo.slice(0, 60) + " ..." : todo}
      </p>
      <p className="todo__date">{date}</p>
      <div className="todo__btn--bottom">
        <MdDeleteForever
          className="btn--delete"
          onClick={() => deleteHandler(toDoItem, setIsRender)}
        />
        <BsFillCheckCircleFill
          className="btn--check"
          onClick={() => isCheckHandler(toDoItem, setIsChecked, setIsRender)}
        />
      </div>
    </section>
  );
};

export default Todo;
