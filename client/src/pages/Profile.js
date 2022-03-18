import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserInfo, updateProfilePicture } from "../slices/userSlice";
import './pages.css'
const Profile = () => {
  const dispatch = useDispatch();
  const [file,setFile] = useState({})
  const { profilePic, name, email } = useSelector(
    (state) => state.user.userInfo
  );
  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);
  const handleImageUpdate =(e) =>{
    e.preventDefault();
    dispatch(updateProfilePicture(file));
  }
  return (
    <div>
      <div className="blank">

      </div>
    <div className="profile">
       <div className="containerProfile">
        <div className="shape">
            {/* <div class="image"> */}
            <img src={profilePic} alt="" width="200px" className="image"/>
              {/* </div> */}
        </div>
          <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
      <button onClick={handleImageUpdate}>update file</button>

        <h3>{name}</h3>
        <h3 className="title">Web Developer</h3>
        <p>{email}</p>
        {/* <div class="icons">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
        </div> */}
    </div>
   
    </div>
    </div>
  );
};

export default Profile;