import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../utils/firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log({ res });
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log({ res });
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form className="login__form" action="">
          <h5>Email</h5>
          <input
            className="login__input"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            className="login__input"
            type="password"
            name="email"
            id="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login} type="submit" className="login__sign-btn">
            Sign In
          </button>
        </form>
        <p className="login__agreement">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__register-btn">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
