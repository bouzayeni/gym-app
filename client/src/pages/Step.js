import React from 'react';
import { Container, Row, Col } from "react-bootstrap";


const Step = () => {
  return (
    <div>Step
      <Container fluid="lg">
      <Row>
          <Col>

        <h3 style={{ paddingTop: "50px" }}>MUSCLE GYM/OUR COURSES/Step</h3>
        <h1 style={{ color: "#9b101f", paddingBottom: "20px" }}>_________</h1>
        </Col>
         </Row>
         <Row>
          <Col>
          <iframe width="560" height="315"
       src="https://www.youtube.com/embed/7Uoa3tqMDAY"
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
         </Col>
         </Row>
         <Row>
          <Col>
          <Row>
          <Col>
          <h3 style={{ color: "#9b101f", paddingBottom: "20px" }}>PHYSICAL AND ARTISTIC BENEFITS</h3>

        
        </Col>
         </Row>
          <p style={{ textAlign: "initial" }}>Step's group classes are choreographed cardiovascular classes. You walk around a step (stair step) to music, which helps develop your endurance, breath and coordination.

The dance steps solicit the lower limbs (legs, buttocks, thighs). Your muscles will come out toned and sculpted. A session always begins with a warm-up of the body using simple aerobic movements.</p>
          </Col>
          </Row>
        </Container>
      
    </div>
  )
}

export default Step