import { header } from "express-validator";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("data>>", credentials);
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log("data>>>", json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      alert("User Created Successfully");
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("tokens", json.authToken);
      navigate("/");
    }
  };

  const handleData = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="form-container m-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleName" className="form-label">
              Name
            </label>
            <input
              name="name"
              onChange={handleData}
              value={credentials.name}
              type="text"
              className="form-control w-50"
              id="exampleInputName"
              aria-describedby="NameHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              onChange={handleData}
              value={credentials.email}
              type="email"
              className="form-control w-50"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              onChange={handleData}
              value={credentials.password}
              type="password"
              className="form-control w-50"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              GeoLocation
            </label>
            <input
              name="geolocation"
              onChange={handleData}
              value={credentials.geolocation}
              type="text"
              className="form-control w-50"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link type="submit" to="/login" className="btn m-3 btn-danger">
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
