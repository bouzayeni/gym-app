import React from 'react';
import Sidebar from './Sidebar';
import './Sidebar.css'
import Post from './Post';
import { Link } from "react-router-dom";
import List from './List';
const Dashboard = () => {
  
  return <div className="TBS" style={{backgroundImage: 'linear-gradient(#000,#fff)'}}>
    <br/>
   <div className="App" id="outer-container" style={{paddingTop:'20px'}} >
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
     
    </div>
    <div style={{height: '300px'}}>

    </div>
   {/* <Post/>
   <br />
   <List/> */}
  </div>;
};

export default Dashboard;