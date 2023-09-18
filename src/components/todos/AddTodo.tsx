/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import toast from "react-hot-toast";
import { TodoContext } from "../../context/ContextTodo.js";
import { postTodo } from "../../utils/api.js";

interface UserInputs {
  todo: string;
  date: number | string;
  isDone: boolean;
  _id?: string;
}

function addTodoHandler(
  userInputs: UserInputs,
  setUserInput: React.Dispatch<React.SetStateAction<UserInputs>>,
  setIsRender: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (userInputs.todo !== "") {
    postTodo(userInputs).then(() => {
      setIsRender((preValue) => {
        return !preValue;
      });
      toast("Successfuly added!", {
        duration: 2000,
        position: "top-center",
        icon: <AiOutlineCheckCircle size={25} color="green" />,
      });

      setUserInput({
        todo: "",
        date: new Date().toLocaleDateString(),
        isDone: false,
      });
    });
  }
}

function onChangeHandler(
  e: React.ChangeEvent<HTMLTextAreaElement>,
  setInputLength: React.Dispatch<React.SetStateAction<string>>,
  setUserInput: React.Dispatch<React.SetStateAction<UserInputs>>
) {
  setInputLength(e.target.value);
  setUserInput((currentValue) => {
    return { ...currentValue, todo: e.target.value, isDone: false };
  });
}

const AddTodo = () => {
  const { setIsRender, isLoading } = useContext(TodoContext);
  const [userInputs, setUserInput] = useState<UserInputs>({
    todo: "",
    date: new Date().toLocaleDateString(),
    isDone: false,
  });
  const [inputLength, setInputLength] = useState("");

  return (
    <div className="add-todo">
      <div className="add-todo__title">
        <h1>Sticky todo!</h1>
      </div>
      <label htmlFor="toDoId" className="add-todo__label">
        add your todo:
      </label>
      <textarea
        placeholder={`${isLoading ? "Waitig..." : "todo..."}`}
        name="toDoInputArea"
        id="toDoId"
        cols={40}
        rows={inputLength.length > 30 ? 5 : 1}
        value={userInputs.todo}
        onChange={(e) => onChangeHandler(e, setInputLength, setUserInput)}
      />
      {!isLoading ? (
        <button
          id="button__todo"
          onClick={() => addTodoHandler(userInputs, setUserInput, setIsRender)}
        >
          +
        </button>
      ) : null}
    </div>
  );
};

export default AddTodo;
