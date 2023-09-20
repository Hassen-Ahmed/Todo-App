/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import Loading from "../notifications/Loading";
import { TodoContext } from "../../context/ContextTodo";
import { getAllTodo } from "../../utils/api";

interface Todos {
  todo: string;
  date: number;
  isDone: boolean;
  _id?: string | number;
}

function getAllTodoHandler(
  setToDoList: React.Dispatch<React.SetStateAction<Todos[] | []>>,
  setIsLoading: React.Dispatch<boolean>
) {
  getAllTodo()
    .then(({ todos }) => {
      const orderTodos: Todos[] = todos.reverse();
      setToDoList(orderTodos);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
}

const TodoList = () => {
  const { isRender, setIsRender, setIsLoading, isSortedAsd } =
    useContext(TodoContext);
  const [color, setColor] = useState("#a9a29c84");
  const [toDoList, setToDoList] = useState<Todos[] | []>([]);

  useEffect(() => {
    getAllTodoHandler(setToDoList, setIsLoading);
  }, [isRender]);

  useEffect(() => {
    setToDoList((currenValue) => currenValue.reverse());
  }, [isSortedAsd]);

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
                id={`${toDoItem["_id"]}`}
                todo={toDoItem.todo}
                date={toDoItem.date}
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
