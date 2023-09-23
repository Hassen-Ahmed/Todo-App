import { createContext, useState } from "react";

interface ContextType {
  isRender: boolean;
  setIsRender: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<boolean>;
  isSortedAsd: boolean;
  setIsSortedAsd: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  IsTherUserId: string;
  setIsTherUserId: React.Dispatch<React.SetStateAction<string>>;
}
export const TodoContext = createContext<ContextType>({
  isRender: false,
  setIsRender: () => false,
  isLoading: false,
  setIsLoading: () => false,
  isSortedAsd: true,
  setIsSortedAsd: () => false,
  theme: "light",
  setTheme: () => "light",
  IsTherUserId: "",
  setIsTherUserId: () => "",
});

export const TodoContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isRender, setIsRender] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSortedAsd, setIsSortedAsd] = useState(true);
  const [theme, setTheme] = useState("light");
  const [IsTherUserId, setIsTherUserId] = useState("");

  return (
    <TodoContext.Provider
      value={{
        isRender,
        setIsRender,
        isLoading,
        setIsLoading,
        isSortedAsd,
        setIsSortedAsd,
        theme,
        setTheme,
        IsTherUserId,
        setIsTherUserId,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
