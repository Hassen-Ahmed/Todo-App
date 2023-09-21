/* eslint-disable no-unused-vars */

import ReactDOM from "react-dom/client";
import { TodoContextProvider } from "./context/ContextTodo.js";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </BrowserRouter>
);
