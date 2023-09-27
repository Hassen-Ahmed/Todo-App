import { useState } from "react";
import "./FormInput.scss";

interface FormInput {
  id: number;
  errormessage: string;
  label: string;
  value: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function FormInput(props: FormInput) {
  const [focused, setFocused] = useState(false);
  const { label, onChange, id, ...inputProps } = props;

  const handlerFocus = () => {
    setFocused(true);
  };

  return (
    <div className="form-input">
      <label htmlFor={label}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handlerFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        data-focused={focused.toString()}
      />
      <span className="error-message">{inputProps.errormessage}</span>
    </div>
  );
}
