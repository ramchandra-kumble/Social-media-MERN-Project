// import { useContext, useRef } from "react";
import "./login.css";
// import { loginCall } from "../../apiCalls";
// import { AuthContext } from "../../context/AuthContext";
// import { CircularProgress } from "@material-ui/core";

export default function Login() {
//   const email = useRef();
//   const password = useRef();
//   const { isFetching, dispatch } = useContext(AuthContext);

//   const handleClick = (e) => {
//     e.preventDefault();
//     loginCall(
//       { email: email.current.value, password: password.current.value },
//       dispatch
//     );
//   };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" >
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              
            />
            <button className="loginButton" type="submit" >
            Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
                Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
