import React from "react";
import "../components/components.css";
import { FaTwitter,FaFacebook,FaLinkedin ,FaYoutube} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <div className="Mylinks">
     
    
        <a className="dav">
          <FaTwitter/>
        </a>
       
        <a className="dav" >
          <FaFacebook/>
        </a>
        
        <a  className="dav">
          <FaYoutube/>
        </a>
        <a  className="dav">
          <FaLinkedin/>
        </a>
        
      </div>
      <br />
      <h2>Like What You See?</h2>
      <h3> 
        If you're ready to rock harder than your competition 
      </h3>
      <h3> 
         ,get in touch with us today!
      </h3>
      <a href="/" className="copyright">
        <p>&copy; copyright: HTTP200 2022. All Right Reserved.</p>
      </a>
    </div>
  );
};

export default Footer;