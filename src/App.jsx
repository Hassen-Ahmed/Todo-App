import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { BsGithub } from "react-icons/bs";

import "./App.css";

function App() {
    const [toDoList, setToDoList] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const todoData = JSON.parse(localStorage.getItem("todo")) || [];
        setToDoList(todoData);
    }, []);

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(toDoList));
    }, [toDoList]);

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date().toLocaleString());
        }, 1000);
    }, []);

    return (
        <main className="app">
            <p className="app-time">{currentTime}</p>
            <AddTodo setToDoList={setToDoList} />
            <TodoList list={toDoList} setToDoList={setToDoList} />
            <div className="github-log">
                <a href="https://github.com/Hassen-Ahmed/Todo-App/tree/main" target="_blank">
                    <BsGithub />
                </a>
                <p>2023</p>
            </div>
        </main>
    );
}
export default App;
