import { Link } from "react-router-dom";

export default function LogIn() {
  const handlerOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => handlerOnSubmit(e)}
      className="login-form--container"
    >
      <div className="login-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="username"
          placeholder="Username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Passwrod"
        />

        <Link to="/todo">
          <button>LogIn</button>
        </Link>
      </div>
    </form>
  );
}
