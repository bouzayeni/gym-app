import React from 'react';
import { useState} from 'react';
import PostModal from './PostModal'
import {Button} from 'react-bootstrap'
import {useDispatch,useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import {addComment,deleteComment,deletePost} from '../slices/postSlice';



const PostAll = ({title,description,owner,_id,comments}) => {
  
  const [commentInfo,setCommentInfo]=useState('')
  
  const dispatch = useDispatch();
   {/*useEffect(() => {
     dispatch(getPosts());

   },[dispatch])*/} ;
 const personInfo= JSON.parse(localStorage.getItem('connectedUser'))
 const { isAuth, role } = useSelector((state) => state.user);
//  const role = JSON.parse(localStorage.getItem('role'))
  
  return (
    <div style={{margin:'0 auto'}}>
        <Card style={{ width: '300px', margin:'0 300px',backgroundImage: 'linear-gradient(#000,#fff)' }}>
        <div
        style={{ display:'flex',justifyContent: 'space-between',flexDirection:'row',padding: '5px 10px'}}
        >
         <h6 style={{alignItems: 'center',color: 'white'}}>{owner.name}</h6>

         {((isAuth && role === "admin" )|| personInfo._id===owner._id) &&<i className="fa-solid fa-trash" variant="danger" style={{color:'red'}}
         onClick={()=> dispatch(deletePost(_id))}
  ></i>}
  
  </div>
    <Card.Img variant="top" src="https://media.gettyimages.com/photos/view-of-a-row-of-treadmills-in-a-gym-with-people-picture-id1183038884?s=612x612" />
    <Card.Body>
      <PostModal check={personInfo._id===owner._id} title ={title} description={description} id={_id} />
     
      <Card.Title style={{ paddingTop: "20px" }}>{title}</Card.Title>
      <h1 style={{ color: "#9b101f", paddingBottom: "10px" }}>____</h1>
      <Card.Text>{description}</Card.Text>
      
       <div>
       
            <form  >
              <input type="text" onChange={(e) =>setCommentInfo(e.target.value)}/>
              <Button variant="info" type="submit" style={{ marginTop: "10px" }}onClick={(e) =>{e.preventDefault();
              return dispatch(addComment({desc:commentInfo,postId:_id}))
              }}>
               Add Comment 

               </Button>{' '}
            </form>

           
           {comments.map((comment)=>(
              
              <div key={comment._id}>
                <h6 style={{display: 'inline-block'}}>{comment.commentOwner.name}</h6>
                <p style={{display: 'inline-block'}}>{comment.desc}</p>
                {((isAuth && role === "admin" )|| personInfo._id===comment.commentOwner._id) && <i className="fa-solid fa-trash"  style={{color:'red' ,cursor:'pointer' }} onClick={() =>dispatch(deleteComment({postId:_id,commentId:comment._id}))}></i>}
                </div>

            ))}
            </div>  
    </Card.Body>

  </Card>
  </div>
  )
}

export default PostAll;