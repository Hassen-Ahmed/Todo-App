import AddTodo from "./components/todos/AddTodo";
import Timer from "./components/Timer";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import TodoList from "./components/todos/TodoList";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <main className="app">
      <Menu />
      <Timer />
      <Toaster />
      <AddTodo />
      <TodoList />
      <Footer />
    </main>
  );
}
export default App;
