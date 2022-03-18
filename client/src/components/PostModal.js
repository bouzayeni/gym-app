import {useState}from 'react';
import {Button,Modal,FloatingLabel,Form} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {useDispatch } from 'react-redux';
import {addNewPost,updatePost} from '../slices/postSlice';
import { Container, Row, Col } from "react-bootstrap";
import "../components/components.css";



function PostModal({check,title,description,id}) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const {register,handleSubmit} = useForm()
  const addPost = (data) =>{
    data['owner']= JSON.parse(localStorage.getItem('connectedUser'))
    check
    ?dispatch(updatePost({...data,id}))
    :dispatch(addNewPost(data))
    handleClose()
}
    return (
      
      <>
        <Container fluid="lg">
        <Row>
          <Col>
        
        <Button variant="primary" onClick={handleShow} style={{marginBottom:'10px'}}>
          {check ?<i className="fa-solid fa-pen-to-square"></i>:"Add Post"}
        </Button>
  
        <Modal  show={show} onHide={handleClose} >
         <form onSubmit={handleSubmit(addPost)} className="atef">
           <br />
         <FloatingLabel
    controlId="floatingInput"
    label="Title"
    className="mb-3"
  >
    <Form.Control type="text"  {...register ('title',{value:title})}/>
  </FloatingLabel>
  <br />
  <FloatingLabel
    controlId="floatingInput"
    label="Description"
    className="mb-3"
  >
    <Form.Control type="text"  {...register ('description',{value:description})}/>
  </FloatingLabel>
             {/* <label>title</label>
           <input type='text'  {...register ('title',{value:title})}/> 
             <label>description</label>
             <input type='text'  />*/}
             <center><Button variant="danger" type='submit'>{check ? 'Update post':"Add Post"}</Button> {' '}</center>
             
         </form>
        </Modal>
        </Col>
         </Row>
        </Container>
      </>
    );
  }
export default PostModal