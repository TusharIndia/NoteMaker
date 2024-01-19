import React,{useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import alertContext from "../context/alerts/alertcontext";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate ();
  
  const context1 = useContext(alertContext);
  const { showAlert } = context1;

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const user = await response.json();
    if(user.success){
      localStorage.setItem('token',user.authToken);
      history("/");
      showAlert("Logged in Successfully","success");
    }else{
      showAlert("Can't login","danger")
    }
  };

  return (
    <div className="container text-center">
      <h1 className="mt-5 mb-4">
        <i className="fa-solid fa-right-to-bracket"></i>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            value={credentials.email}
            onChange={onchange}
            className="form-control"
            name="email"
          />
          <label className="form-label" htmlFor="email">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            value={credentials.password}
            onChange={onchange}
            className="form-control"
            name="password"
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <Link to="/signup">Register</Link>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
