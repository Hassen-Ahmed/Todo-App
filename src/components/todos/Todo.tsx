/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { deleteTodoById, patchTodoById } from "../../utils/api";
import { BiSolidEditAlt } from "react-icons/bi";

import toast from "react-hot-toast";

interface Todos {
  todo: string;
  date: number;
  isDone: boolean;
  _id?: string | number;
}

interface TodoProps {
  todo: string;
  date: number;
  toDoItem: Todos;
  color: string;
  setIsRender: React.Dispatch<React.SetStateAction<boolean>>;
}

function isCheckHandler(
  toDoItem: Todos,
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>,
  setIsRender: React.Dispatch<React.SetStateAction<boolean>>
) {
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

function deleteHandler(
  toDoItem: Todos,
  setIsRender: React.Dispatch<React.SetStateAction<boolean>>
) {
  deleteTodoById(toDoItem["_id"]).then(() => {
    setIsRender((prevValue) => !prevValue);
    toast("Successfuly deleted!", {
      duration: 2000,
      position: "top-center",
      icon: <MdDeleteForever size={25} color="red" />,
    });
  });
}

function isLessHandler(
  setIsLess: React.Dispatch<React.SetStateAction<boolean>>
) {
  setIsLess((currentValue) => {
    return currentValue ? false : true;
  });
}

const Todo = ({ todo, date, toDoItem, color, setIsRender }: TodoProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(toDoItem.isDone);
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
        <BiSolidEditAlt className="btn--edit" />
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
