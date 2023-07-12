import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

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
        </main>
    );
}
export default App;
