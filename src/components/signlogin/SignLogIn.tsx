import { Link } from "react-router-dom";
import "./SignLogIn.css";
export default function SignLogIn() {
  return (
    <div className="sign-login">
      <h1 className="sign-login--heading">Hello welcome!</h1>
      <Link className="sign-login--btn" to="/login">
        LogIn
      </Link>
      <Link className="sign-login--btn" to="/signup">
        SignUp
      </Link>
    </div>
  );
}
