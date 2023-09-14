/* eslint-disable react/prop-types */
import { useState } from "react";
import { postTodo } from "../utils/api";

const AddTodo = ({ setToDoList, getAllTodoHandler }) => {
  const [userInputs, setUserInput] = useState({
    todo: "",
    date: new Date().toLocaleDateString(),
    isDone: false,
  });
  const [inputLength, setInputLength] = useState("");

  function addTodoHandler() {
    if (userInputs.todo !== "") {
      setToDoList((currentTodoList) => {
        return [userInputs, ...currentTodoList];
      });

      setUserInput({
        todo: "",
        date: new Date().toLocaleDateString(),
        isDone: false,
      });

      postTodo(userInputs).then((data) => {
        getAllTodoHandler();
      });
    }
  }

  function onChangeHandler(e) {
    setInputLength(e.target.value);
    setUserInput((currentValue) => {
      return { ...currentValue, todo: e.target.value, isDone: false };
    });
  }

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
        onChange={onChangeHandler}
      />
      <button id="button__todo" onClick={addTodoHandler}>
        +
      </button>
    </div>
  );
};

export default AddTodo;
