/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Todo = ({ todo, date, setToDoList, toDoItem, color }) => {
    const [isChecked, setIsChecked] = useState(toDoItem.isDone);
    const [isLess, setIsLess] = useState(true);

    function isCheckHandler() {
        setIsChecked((currenIsChecked) => {
            return currenIsChecked ? false : true;
        });
        setToDoList((currentTodoList) => {
            return currentTodoList.map((elm) => {
                if (elm.todo === todo) {
                    elm.isDone = isChecked ? false : true;
                    return elm;
                } else {
                    return elm;
                }
            });
        });
    }
    function deleteHandler() {
        setToDoList((currentTodoList) => {
            return currentTodoList.filter((elm) => elm.todo !== todo);
        });
    }
    function isLessHandler() {
        setIsLess((currentValue) => {
            return currentValue ? false : true;
        });
    }

    return (
        <section className="todo" style={{ backgroundColor: color }}>
            {todo.length > 100 ? (
                <button onClick={isLessHandler}>See {isLess ? "more" : "less"}...</button>
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
                <MdDeleteForever className="btn--delete" onClick={deleteHandler} />
                <BsFillCheckCircleFill className="btn--check" onClick={isCheckHandler} />
            </div>
        </section>
    );
};

export default Todo;
