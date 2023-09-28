import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import { useContext, useEffect, useState } from "react";
import { getUserByUsername, postUser } from "../../utils/api";
import { TodoContext } from "../../context/ContextTodo";

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

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const { setIsTherUserId } = useContext(TodoContext);
  const [values, setValues] = useState<Record<string, string>>({
    username: "",
    password: "",
    confirmPassword: "",
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
    {
      id: 3,
      name: "confirmPassword",
      type: "text",
      errormessage: "Password does not match!",
      placeholder: "ConfirmPassword",
      label: "Confirm Password",
      required: true,
      pattern: values.password,
    },
  ];

  const handlerOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    getUserByUsername(values.username).then(({ user }) => {
      setLoading(false);
      if (user.length) {
        alert("This user already take!");
      } else {
        postUser(values.username, values.password).then(({ user }) => {
          const { _id } = user;
          localStorage.setItem("user_id", JSON.stringify({ id: _id }));
          setIsTherUserId("yes there is.");
          navigate("/todo");
        });
      }
    });
  };

  return (
    <form
      onSubmit={(e) => handlerOnSubmit(e)}
      className="signup-form--container"
    >
      <div className="signup-form">
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
        <button>SignUp</button>
        {loading && <p>Loadding...</p>}
      </div>
    </form>
  );
}
