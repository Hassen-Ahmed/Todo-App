import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { BsGithub } from "react-icons/bs";

import "./App.css";
import { getAllTodo } from "./utils/api.js";
import Timer from "./components/Timer";
import Loading from "./components/Loading";

function getAllTodoHandler(setToDoList) {
  getAllTodo()
    .then(({ todos }) => {
      const orderTodos = todos.reverse();
      setToDoList(orderTodos);
    })
    .catch((err) => {
      console.log(err);
      setToDoList([]);
    });
}

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    getAllTodoHandler(setToDoList);
  }, [isRender]);

  return (
    <main className="app">
      <Timer />
      <AddTodo
        setToDoList={setToDoList}
        getAllTodoHandler={getAllTodoHandler}
      />
      <TodoList
        list={toDoList}
        setToDoList={setToDoList}
        setIsRender={setIsRender}
      />
      <div className="github-log">
        <a
          href="https://github.com/Hassen-Ahmed/Todo-App/tree/main"
          target="_blank"
        >
          <BsGithub />
        </a>
        <p>
          <span className="copyright">&copy;</span>Copyright 2023 By Hassen
          Abdela
        </p>
      </div>
    </main>
  );
}
export default App;
