
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../components/components.css";
import { logout } from "../slices/userSlice";
import logo from "../images/Gym-logo.png";

import {Button} from 'react-bootstrap';
const Navbar = () => {
  const { isAuth, role,userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <header>
      <img className="logo" src={logo} />
      <h2 style={{color:'#82837E',transform: 'translateX(-370px)'}}>MUSCLE</h2>
      
      <h2 style={{color:'#82837E',transform: 'translateX(-370px)'}}> GYM</h2>
      <div className="nav">
      <Link to="/" className="Mylink">
        Home
      </Link>
      {isAuth && role === "admin" ? (
        <>
          <Link to="/Dashboard" className="Mylink">
            Dashboard
          </Link>
          <Link to="/Profile" className="Mylink">
          Profile
          </Link>
          <Link to="/Post" className="Mylink">
          Post
        </Link>
        <Link to="/MyPost" className="Mylink">
        MyPost
        </Link>
          
        </>
      ) : isAuth && role === "user" ? (
        <>
        <Link to="/Profile" className="Mylink">
          Profile
        </Link>
        <Link to="/Post" className="Mylink">
          Post
        </Link>
        <Link to="/MyPost" className="Mylink">
        MyPost
        </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="Mylink">
            Login
          </Link>
                                              
        </>
      )}
      
     
      
      {isAuth && <Button className="logout Mylink" onClick={() => dispatch(logout())} variant="dark">logOut</Button>}
   
    </div>
    </header>
  );
};

export default Navbar;