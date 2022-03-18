import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/userSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../pages/pages.css";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { errors: userErrors } = useSelector((state) => state.user);
  const userInfo = (data) => {
    dispatch(registerUser({ data, navigate }));
  };
  return (
    <div className="container">
      <div className="title"></div>
      <div className="content">
        <form onSubmit={handleSubmit(userInfo)}>
          <div className="user-details">
            <div className="input-box">
              <span className="details" style={{color: 'black'}}>Username</span>
              <input
                placeholder="Enter your username"
                type="text"
                {...register("name", {
                  required: true,
                })}
              />
              {errors.name?.message}
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                placeholder="Enter your email"
                type="text"
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "invalid email",
                  },
                })}
              />
              {errors.email?.message}
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                placeholder="Enter your password"
                type="password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 6,
                    message: "password should be at least 6 characters",
                  },
                })}
              />
              {errors.password?.message}
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
            <h3>{userErrors && userErrors}</h3>
          </div>
           <div>
          <h4> already have an account ?</h4>
          <Link to="/Login" className="Mylink">
            login
          </Link>
        </div> 
        </form>
      </div>
    </div>
  );
};

export default Register;