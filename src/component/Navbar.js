import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Main.css";
import Model from "../Model";
import Cart from "../screens/Cart";
import { useCart } from "../component/ContextReducer";

const Navbar = () => {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("tokens");
    navigate("/login");
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-danger"
        style={{
          position: "fixed",
          zIndex: 1000,
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 fst-bold fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {localStorage.getItem("tokens") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/myOrder"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("tokens") ? (
              <div className="d-flex">
                <button className="btn bg-white fw-bold me-2" type="submit">
                  <Link className="nav-link text-danger " to="/login">
                    Login
                  </Link>
                </button>
                <button className="btn bg-white fw-bold" type="submit">
                  <Link className="nav-link text-danger" to="/signup">
                    Sign Up
                  </Link>
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="btn bg-white text-danger mx-2"
                  onClick={() => setCartView(true)}
                >
                  <Link
                    className="text-danger fw-bold"
                    to="/"
                    style={{ textDecoration: "none" }}
                  >
                    My Cart
                    <span
                      className="badge bg-primary"
                      style={{ marginLeft: "0.5rem" }}
                    >
                      {data.length}
                    </span>
                  </Link>
                </button>
                {cartView ? (
                  <Model onClose={() => setCartView(false)}>
                    {" "}
                    <Cart></Cart>
                  </Model>
                ) : null}

                <button className="btn bg-white text-danger mx-2">
                  <Link
                    className="text-success fw-bold"
                    style={{ textDecoration: "none" }}
                    onClick={handleLogout}
                    to="/login"
                  >
                    Logout
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
