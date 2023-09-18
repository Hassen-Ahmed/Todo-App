/* eslint-disable no-unused-vars */

import ReactDOM from "react-dom/client";
import { TodoContextProvider } from "./context/ContextTodo.js";
import App from "./App.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
