import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import FormInput from "./FormInput";
import { getUserByUsername } from "../../utils/api";
import { TodoContext } from "../../context/ContextTodo";
import "./LogIn.scss";

interface FormInput {
  id: number;
  name: string;
  type: string;
  errormessage: string;
  placeholder: string;
  label: string;
  required: boolean;
  pattern: string;
}

export default function LogIn() {
  const [loading, setLoading] = useState(false);
  const { setIsTherUserId } = useContext(TodoContext);
  const [values, setValues] = useState<Record<string, string>>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      navigate("/todo");
    }
  }, []);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const inputs: FormInput[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      errormessage:
        "Username must be 4-16 character and should not include special characters.",
      placeholder: "Username",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{4,16}",
    },
    {
      id: 2,
      name: "password",
      type: "text",
      errormessage:
        "Password should be 8-20 character and should include at list 1 letter, 1 number and only 1 spcecial character.",
      placeholder: "Password",
      label: "Password",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[#$@!%&*?])[A-Za-z0-9#$@!%&*?]{8,20}$",
    },
  ];

  const handlerOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    getUserByUsername(values.username).then(({ user }) => {
      setLoading(false);
      if (user.length) {
        const { _id, password } = user[0];
        if (password === values.password) {
          localStorage.setItem("user_id", JSON.stringify({ id: _id }));
          navigate("/todo");
          setIsTherUserId("yes there is.");
        } else {
          alert("Password not match");
        }
      } else {
        alert("Wrong Username and Password!");
      }
    });
  };

  return (
    <form
      onSubmit={(e) => handlerOnSubmit(e)}
      className="login-form--container"
    >
      <div className="login-form">
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onchange}
            />
          );
        })}

        <button>LogIn</button>
        {loading && <p>Loadding...</p>}
      </div>
    </form>
  );
}
