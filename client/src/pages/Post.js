import PostAll from '../components/PostAll';
import PostModal from '../components/PostModal';
import {useEffect} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {getPosts} from '../slices/postSlice';
import { Container, Row, Col } from "react-bootstrap";
import { loadUserInfo} from "../slices/userSlice";

const Post = () => {
  
  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getPosts());
     
     

   },[]) ;
   const {loading,postList,errors} = useSelector((state)=>state.post)
  return (
    <div className='BBB' style={{backgroundImage: 'linear-gradient(#000,#fff)'}}>
      <div style={{height:'20px'}}></div>
       <Container fluid="lg" style={{display:''}}>
        <br/>
        <Row>
        <Col >
      {loading && <p>loading ...</p> }
      
     <PostModal />
      {errors && <p>{errors}</p> }
      {postList && postList.map(post=>
       // <div key={post._id}>
        //  <h4>{post.owner.name}</h4>
        //  <h6>{post.title}</h6>
         // <h6>{post.description}</h6>
         // <h6>{post.comments}</h6>
         

       // </div>
       <PostAll key={post._id} {...post} />
      
      )
       }
 </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Post