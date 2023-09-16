import toast, { Toaster } from "react-hot-toast";

const toasterForTodo = (alertMassage) =>
  toast(`${alertMassage}`, {
    duration: 2000,
    position: "top-center",
    icon: "✅️",
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
export default toasterForTodo;
