import React from 'react'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'

const Coach = () => {
  return (
    <div className="cont" style={{}}>
      
     <div className="box">
       <div className="imgBx">
        <img className="img"
            
src={image7}
            alt="Image One"
          />
          </div>
          <div className="content">
          <div>
          <h2>james kolhak</h2>
            <p>Cardio Trainer</p>
            </div>
            </div>
            </div>
            <div className="box">
       <div className="imgBx">
        <img className="img"
            
src={image5}
            alt="Image One"
          />
          </div>
          <div className="content">
          <div>
          <h2>Andrew forest</h2>
            <p>Physique Trainer</p>
            </div>
            </div>
            </div>
            <div className="box">
       <div className="imgBx">
        <img className="img"
            
src={image6}
            alt="Image One"
          />
          </div>
          <div className="content">
          <div>
          <h2>will dayton</h2>
            <p>boxing trainer</p>
            </div>
            </div>
            </div>
         
    </div>
  )
}

export default Coach