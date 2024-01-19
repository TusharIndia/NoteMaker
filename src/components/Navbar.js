import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let nav = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('token');
    nav('/login');
  }
  React.useEffect(() => {}, [location]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand mx-2" to="/">
          NoteMaker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        {/* <span className="navbar-toggler-icon"></span> */}
        </button>

        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token')?<form className="mx-3">
            <Link className="btn btn-outline-primary mx-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-outline-primary" to="/signup">
              Signup
            </Link>
          </form>:<form className="mx-3">
            <button className="btn btn-outline-primary mx-2" onClick={handlelogout}>
              Logout
            </button></form>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
