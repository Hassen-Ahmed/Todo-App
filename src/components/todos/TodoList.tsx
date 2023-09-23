/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import Loading from "../notifications/Loading";
import { TodoContext } from "../../context/ContextTodo";
import { getAllTodo } from "../../utils/api";
import { useNavigate } from "react-router-dom";

interface Todos {
  todo: string;
  date: number;
  isDone: boolean;
  _id?: string | number;
  userId: string;
}

interface TodosArray {
  todos: Todos[];
}

function getAllTodoHandler(
  setToDoList: React.Dispatch<React.SetStateAction<Todos[] | []>>,
  setIsLoading: React.Dispatch<boolean>,
  userId: string
) {
  getAllTodo()
    .then(({ todos }: TodosArray) => {
      const filterTodos: Todos[] = todos.filter((todo) => {
        return todo.userId === userId;
      });

      const orderTodos = filterTodos.reverse();
      setToDoList(orderTodos);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
    });
}

const TodoList = () => {
  const {
    isRender,
    setIsRender,
    setIsLoading,
    isSortedAsd,
    theme,
    setIsTherUserId,
  } = useContext(TodoContext);
  const [color, setColor] = useState("#a9a29c84");
  const [toDoList, setToDoList] = useState<Todos[] | []>([]);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user_id")) {
      setUserId("");
      navigate("/");
    } else {
      setUserId("yes there is userId");
      setIsTherUserId("yes there is userId");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      const res = localStorage.getItem("user_id");
      const { id } = JSON.parse(res!);
      getAllTodoHandler(setToDoList, setIsLoading, id);
    }
  }, [isRender]);

  useEffect(() => {
    setToDoList((currenValue) => currenValue.reverse());
  }, [isSortedAsd]);

  return (
    <>
      {userId.length ? (
        <section
          className={`todo-list ${theme === "dark" && "todo-list--light"}`}
        >
          <div className="todo-list__color">
            <div
              className="div-1"
              onClick={() => {
                setColor("#a9a29c84");
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
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TodoList;
