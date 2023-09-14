import axios from "axios";

const todoApi = axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://todo-app-mongodb-vxfw.onrender.com/",
});

export const getAllTodo = () => {
  return todoApi.get("/").then(({ data }) => {
    return data;
  });
};

export const postTodo = ({ todo, date = Date.now(), isDone }) => {
  return todoApi.post(`/`, { todo, date, isDone }).then(({ data }) => {
    return data;
  });
};

export const deleteTodoById = (id) => {
  return todoApi.delete(`/${id}`);
};

export const patchTodoById = (id, isDone) => {
  return todoApi.patch(`/${id}`, { isDone }).then(({ data }) => {
    return data;
  });
};
