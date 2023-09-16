/* eslint-disable react/prop-types */
import { useState } from "react";
import { postTodo } from "../utils/api.js";
import { AiOutlineCheckCircle } from "react-icons/ai";
import toast from "react-hot-toast";

function addTodoHandler(
  userInputs,
  setToDoList,
  setUserInput,
  getAllTodoHandler
) {
  if (userInputs.todo !== "") {
    setToDoList((currentTodoList) => {
      return [userInputs, ...currentTodoList];
    });

    setUserInput({
      todo: "",
      date: new Date().toLocaleDateString(),
      isDone: false,
    });

    postTodo(userInputs).then(() => {
      getAllTodoHandler(setToDoList);
      toast("Successfuly added!", {
        duration: 2000,
        position: "top-center",
        icon: <AiOutlineCheckCircle size={25} color="green" />,
      });
    });
  }
}

function onChangeHandler(e, setInputLength, setUserInput) {
  setInputLength(e.target.value);
  setUserInput((currentValue) => {
    return { ...currentValue, todo: e.target.value, isDone: false };
  });
}

const AddTodo = ({ setToDoList, getAllTodoHandler }) => {
  const [userInputs, setUserInput] = useState({
    todo: "",
    date: new Date().toLocaleDateString(),
    isDone: false,
  });
  const [inputLength, setInputLength] = useState("");

  return (
    <div className="add-todo">
      <div className="add-todo__title">
        <h1>Sticky todo!</h1>
      </div>
      <label htmlFor="toDoId" className="add-todo__label">
        add your todo:
      </label>
      <textarea
        placeholder="todo..."
        name="toDoInputArea"
        id="toDoId"
        cols={40}
        rows={inputLength.length > 30 ? 5 : 1}
        value={userInputs.todo}
        onChange={(e) => onChangeHandler(e, setInputLength, setUserInput)}
      />
      <button
        id="button__todo"
        onClick={() =>
          addTodoHandler(
            userInputs,
            setToDoList,
            setUserInput,
            getAllTodoHandler
          )
        }
      >
        +
      </button>
    </div>
  );
};

export default AddTodo;
