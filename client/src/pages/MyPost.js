import PostAll from '../components/PostAll';
import PostModal from '../components/PostModal';
import {useEffect} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {getPostsByOwner} from '../slices/postSlice';
import { Container, Row, Col } from "react-bootstrap";


const Post = () => {
  const personInfo= JSON.parse(localStorage.getItem('connectedUser'))
  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getPostsByOwner(personInfo._id));
     
     

   },[]) ;
   const {loading,postList,errors} = useSelector((state)=>state.post)
  return (
    <div className="MMM" style={{backgroundImage: 'linear-gradient(#000,#fff)'}} >
       <Container fluid="lg">
         <h1>Hello word</h1>
        
        
        <Row>
        <Col>
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