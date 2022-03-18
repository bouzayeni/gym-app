import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
      <Link to="/List" className="Mylink">
        <i className="fa fa-solid fa-users" style={{marginRight:'15px'}}></i>
        
        Users
        </Link>
      </a>
      <a className="menu-item" href="/salads">
      <Link to="/Post" className="Mylink">
                  
        <i className="fa fa-solid fa-clone" style={{marginRight:'15px'}}></i>
        Posts
        </Link>
      </a>
      
    </Menu>
  );
};