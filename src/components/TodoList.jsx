/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import Loading from "./notifications/Loading";
import { getAllTodo } from "../utils/api";
import { TodoContext } from "../context/ContextTodo";

function getAllTodoHandler(setToDoList, setIsLoading) {
  getAllTodo()
    .then(({ todos }) => {
      const orderTodos = todos.reverse();
      setToDoList(orderTodos);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
}

const TodoList = () => {
  const { isRender, setIsRender, setIsLoading } = useContext(TodoContext);
  const [color, setColor] = useState("#a9a29c84");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    getAllTodoHandler(setToDoList, setIsLoading);
  }, [isRender]);

  return (
    <section className="todo-list">
      {toDoList.length ? (
        <>
          <div className="todo-list__color">
            <div
              className="div-1"
              onClick={() => {
                setColor("#d5ccc7");
              }}
            ></div>
            <div
              className="div-2"
              onClick={() => {
                setColor("#7ed4e184");
              }}
            ></div>
            <div
              className="div-3"
              onClick={() => {
                setColor("#dc9d5f84");
              }}
            ></div>
            <div
              className="div-4"
              onClick={() => {
                setColor("#b158e484");
              }}
            ></div>
          </div>

          {toDoList.map((toDoItem) => {
            return (
              <Todo
                key={`${toDoItem["_id"]}`}
                todo={toDoItem.todo}
                date={toDoItem.date}
                setToDoList={setToDoList}
                color={color}
                toDoItem={toDoItem}
                setIsRender={setIsRender}
              />
            );
          })}
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default TodoList;
