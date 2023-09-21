import AddTodo from "./components/todos/AddTodo";
import Timer from "./components/Timer";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import TodoList from "./components/todos/TodoList";
import Menu from "./components/menu/Menu";
import SignLogIn from "./components/signlogin/SignLogIn";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/signlogin/LogIn";
import Signup from "./components/signlogin/Signup";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <main className="app">
      <Menu />
      <Timer />
      <Toaster />
      <AddTodo />
      <Routes>
        <Route path="/" element={<SignLogIn />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </main>
  );
}
export default App;
