/* eslint-disable react/prop-types */
import { useState } from "react";
import Todo from "./Todo";
import Loading from "./Loading";

const TodoList = ({ list, setToDoList, setIsRender }) => {
  const [color, setColor] = useState("#a9a29c84");

  return (
    <section className="todo-list">
      {list.length ? (
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

          {list.map((toDoItem) => {
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
