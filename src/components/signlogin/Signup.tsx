import { Link } from "react-router-dom";

export default function Signup() {
  const handlerOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handlerOnSubmit(e)}
      className="signup-form--container"
    >
      <div className="signup-form">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Passwrod" />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" />

        <Link className="singup-btn" to="/login">
          <button>SignUp</button>
        </Link>
      </div>
    </form>
  );
}
