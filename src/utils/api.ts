import axios from "axios";

const todoApi = axios.create({
  baseURL: "https://api-todo-app-vqgm.onrender.com/",
});

export const getAllTodo = () => {
  return todoApi.get("/todo").then(({ data }) => {
    return data;
  });
};

interface Todo {
  todo: string;
  date: number | string;
  isDone: boolean;
  _id?: string | number;
}

export const postTodo = ({ todo, date = Date.now(), isDone }: Todo) => {
  return todoApi.post(`/todo`, { todo, date, isDone }).then(({ data }) => {
    return data;
  });
};

export const deleteTodoById = (id: number | string | undefined) => {
  return todoApi.delete(`/todo/${id}`);
};

export const patchTodoById = (
  id: number | string | undefined,
  todo: string,
  isDone: boolean
) => {
  return todoApi.patch(`/todo/${id}`, { todo, isDone }).then(({ data }) => {
    return data;
  });
};
