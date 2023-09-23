import AddTodo from "./components/todos/AddTodo";
import Timer from "./components/Timer";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Menu from "./components/menu/Menu";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Profile = lazy(() => import("./components/profile/Profile"));
const SignLogIn = lazy(() => import("./components/forms/SignupLogIn"));
const TodoList = lazy(() => import("./components/todos/TodoList"));
const Signup = lazy(() => import("./components/forms/Signup"));
const LogIn = lazy(() => import("./components/forms/LogIn"));

function App() {
  return (
    <main className="app">
      <Menu />
      <Timer />
      <Toaster />
      <AddTodo />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <SignLogIn />
            </Suspense>
          }
        />
        <Route
          path="/todo"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <TodoList />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <LogIn />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <Profile />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </main>
  );
}
export default App;
