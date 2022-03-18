import React from 'react';import { useDispatch, useSelector } from "react-redux";
import { loadUserInfos } from "../slices/adminSlice";
import { useEffect } from "react";
import './List.css'

const List = () => {
  const dispatch = useDispatch();
  const { userList,loading,errors } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(loadUserInfos());
  }, [dispatch]);
  return (
    <div className="AAA"  style={{backgroundImage: 'linear-gradient(#000,#fff)'}}>
      <div className="CCC" style={{height: '30px'}}></div>
    
      
<div className="containers">
        <table className="rwd-table">

          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          {loading && <p>loading ...</p> }
      
      
       {errors && <p>{errors}</p> }
       <tbody>
       {userList && userList.map(userInfo=>
        
        <tr className="prioirty-200">
              <td>{userInfo.name}</td>
              <td>{userInfo.email}</td>
              <td>
                <i className="fa fa-circle"></i>
                {userInfo.role}
              </td>
            </tr>
       )
        }
          
           
          </tbody>
        </table>
      </div>
      
    </div>

  )
}

export default List