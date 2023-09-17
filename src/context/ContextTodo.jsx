import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [isRender, setIsRender] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <TodoContext.Provider
      value={{ isRender, setIsRender, isLoading, setIsLoading }}
    >
      {children}
    </TodoContext.Provider>
  );
};
