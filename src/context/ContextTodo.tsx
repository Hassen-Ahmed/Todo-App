import { createContext, useState } from "react";

interface ContextType {
  isRender: boolean;
  setIsRender: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<boolean>;
}
export const TodoContext = createContext<ContextType>({
  isRender: false,
  setIsRender: () => false,
  isLoading: false,
  setIsLoading: () => false,
});

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
