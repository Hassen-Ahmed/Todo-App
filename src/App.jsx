import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Timer from "./components/Timer";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="app">
      <Timer />
      <Toaster />
      <AddTodo />
      <TodoList />
      <Footer />
    </main>
  );
}
export default App;
