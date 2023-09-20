/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { deleteTodoById, patchTodoById } from "../../utils/api";
import { BiSolidEditAlt } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";

import toast from "react-hot-toast";

interface Todos {
  todo: string;
  date: number;
  isDone: boolean;
  _id?: string | number;
}

interface TodoProps {
  id: string | number;
  todo: string;
  date: number;
  toDoItem: Todos;
  color: string;
  setIsRender: React.Dispatch<React.SetStateAction<boolean>>;
}

function isCheckHandler(
  toDoItem: Todos,
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>,
  setIsRender: React.Dispatch<React.SetStateAction<boolean>>,
  editedInput: string
) {
  patchTodoById(toDoItem["_id"], editedInput, !toDoItem.isDone).then(() => {
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

const Todo = ({ id, todo, date, toDoItem, color, setIsRender }: TodoProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(toDoItem.isDone);
  const [isLess, setIsLess] = useState(true);
  const [editedInput, setEditedInput] = useState(todo);
  const [isEdited, setIsEdited] = useState(true);

  return (
    <section className="todo" style={{ backgroundColor: color }}>
      {todo.length > 100 ? (
        <button onClick={() => isLessHandler(setIsLess)}>
          See {isLess ? "more" : "less"}...
        </button>
      ) : (
        ""
      )}
      {isEdited && (
        <p
          className="todo__todo"
          style={{ textDecoration: `${isChecked ? "line-through" : "none"} ` }}
        >
          {isLess && editedInput.length > 100
            ? editedInput.slice(0, 60) + " ..."
            : editedInput}
        </p>
      )}
      <p className="todo__date">{date}</p>
      {isEdited || (
        <div>
          <textarea
            name="edit-todo"
            id=""
            value={editedInput}
            onChange={(e) => setEditedInput(e.target.value)}
            className="edit-textarea"
            style={{
              padding: ".5rem 1rem",
              width: "100%",
            }}
            rows={todo.length > 100 ? 10 : 4}
          />
          <div
            className="edit-ok"
            onClick={() => {
              patchTodoById(id, editedInput, toDoItem.isDone).then(() =>
                setIsEdited(true)
              );
            }}
          >
            <ImCheckmark />
          </div>
        </div>
      )}

      <div className="todo__btn--bottom">
        <BiSolidEditAlt
          className="btn--edit"
          onClick={() => setIsEdited(false)}
        />

        <MdDeleteForever
          className="btn--delete"
          onClick={() => deleteHandler(toDoItem, setIsRender)}
        />
        <BsFillCheckCircleFill
          className="btn--check"
          onClick={() =>
            isCheckHandler(toDoItem, setIsChecked, setIsRender, editedInput)
          }
        />
      </div>
    </section>
  );
};

export default Todo;
