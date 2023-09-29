import axios from "axios";

const todoApi = axios.create({
  // baseURL: "http://localhost:9090/",
  baseURL: "https://api-todo-app-vqgm.onrender.com",
});

interface Todo {
  todo: string;
  date: number | string;
  isDone: boolean;
  _id?: string | number;
  userId?: string;
}

// /todo
export const getAllTodo = () => {
  return todoApi.get("/todo", { withCredentials: true }).then(({ data }) => {
    return data;
  });
};

export const postTodo = ({ todo, date = Date.now(), isDone, userId }: Todo) => {
  return todoApi
    .post(`/todo`, { todo, date, isDone, userId })
    .then(({ data }) => {
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

// /user

export const getUserById = (id: number | string | undefined) => {
  return todoApi.get(`/user/${id}`).then(({ data }) => {
    return data;
  });
};

export const getUserByUsername = (username: string) => {
  return todoApi.get("/user", { params: { username } }).then(({ data }) => {
    return data;
  });
};

export const postUser = (username: string, password: string) => {
  return todoApi.post(`/user`, { username, password }).then(({ data }) => {
    return data;
  });
};
