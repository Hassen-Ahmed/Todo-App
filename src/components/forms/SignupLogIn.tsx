import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function SignLogIn() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      navigate("/todo");
    }
  }, []);

  return (
    <div className="sign-login">
      <h1 className="sign-login--heading">Hello, welcome!</h1>
      <Link aria-label="login button" className="sign-login--btn" to="/login">
        LogIn
      </Link>
      <Link aria-label="signup button" className="sign-login--btn" to="/signup">
        SignUp
      </Link>
    </div>
  );
}
