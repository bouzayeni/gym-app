import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "../pages/pages.css";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image8 from "../images/image8.png";
import bien from "../images/bien.png";
import dumbel from "../images/dumbel.jpg";
import RPM from "../images/1.jpg";
import BP from "../images/2.jpg";
import BA from "../images/3.jpg";
import BO from "../images/4.jpg";
import BX from "../images/5.jpg";
import ST from "../images/6.jpg";
import fit from "../images/fit.png";
import iconSlim3 from "../images/icon-slim3.png";
import musc from "../images/musc.png";
import BMI from "./BMI";
import Coach from "./Coach";
import Planning from "./Planning";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";


export default function Home() {
  return (
    <div>
      
      <Carousel className="carousel">
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            style={{ height: "550px" }}
            src={image1}
            alt="Image One"
          />
          <Carousel.Caption>
            <h2>TAKE ACTION!</h2>
            <p>Be stronger than your excuses!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "550px" }}
            src={image8}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2>NO PAIN, NO GAIN</h2>
            <p>If your mind is motivated, your body will follow!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "550px" }}
            src={image2}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2>DON'T DREAM ABOUT IT</h2>
            <p>Do it !</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "550px" }}
            src={image3}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2>THE ONLY LIMIT IS YOURSELF</h2>
            <p>Ready to challenge your limits?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "550px" }}
            src={image4}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2>ONE DAY OR DAY 1?</h2>
            <p>You choose !</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container fluid="lg">
        <Row>
          <Col>
            
            <h3 style={{ paddingTop: "50px" }}>OUR PROGRAM</h3>
        <h1 style={{ color: "#9b101f", paddingBottom: "20px" }}>_________</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <img src={iconSlim3} />
                <h4 style={{ textAlign: "initial" }}>Weightloss</h4>
                <p style={{ textAlign: "initial" }}>
                  Benefit from personalized follow-up from our nutritionist, and with our qualified coaches, have a tailor-made program to achieve your goals.
                </p>
              </Col>
              <Col>
                <img src={musc} />
                <h4 style={{ textAlign: "initial" }}>Bodybuilding</h4>
                <p style={{ textAlign: "initial" }}>
                High-tech equipment and professional support from
                  our coaches, with a program adapted to your morphology, to
                  develop a dream body.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={fit} />
                <h4 style={{ textAlign: "initial" }}>Fitness</h4>
                <p style={{ textAlign: "initial" }}>
                Equipment perfectly suited for targeted strengthening,
                  and group lessons to work on the different groups
                  muscle.
                </p>
              </Col>
              <Col>
                <img src={bien} />
                <h4 style={{ textAlign: "initial" }}>well being</h4>
                <p style={{ textAlign: "initial" }}>
                The hammam and the swimming pool for relaxation, yoga classes and
                  pilates for complete relaxation. And for the release
                  participates in Afro Zumba, Afro Dance, BodyAttack and
                  BodyCombat.
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <img src={dumbel} />
          </Col>
        </Row>
      </Container>
      <Row>
        <Col>
          <div
            style={{
              backgroundImage: `url("https://www.olympegym.com/wp-content/uploads/2018/11/alteres.jpg")`,
              height: "500px",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "white", paddingTop: "125px" }}>
            Book your session!
            </h1>
            <h2 style={{ color: "white" }}>Discover one of our clubs</h2>
            <Link to="/Payment" className="Mylink">
            <button
              style={{
                backgroundColor: "#9b101f",
                cursor: "pointer",
                borderRadius: "100px",
                fontWeight: "600",
                padding: "15px 40px",
                marginTop: "40px",
                color: "white",
              }}
            >
              I'm registering
            </button>
            </Link>
          </div>
        </Col>
      </Row>
      <Container fluid="lg">
        <h3 style={{ paddingTop: "50px" }}>OUR COURSES</h3>
        <h1 style={{ color: "#9b101f", paddingBottom: "20px" }}>_________</h1>
        <h6>More than 60 lessons per week.</h6>
        <Row>
          <Col style={{ position: "relative" }}>
            {" "}
            <img src={RPM} style={{ width: "250px", padding: "5px" }} />
            <h2
              style={{
                position: "absolute",
                bottom: "87px",
                left: "100px",
                color: "white",
              }}
            >
              RPM
            </h2>
            <Link to="/RPM" className="Mylink">
            <button
              style={{
                position: "absolute",
                bottom: "40px",
                left: "100px",
                borderColor: "#9b101f",
                borderRadius: "65px",

                color: " #fff",
                fontSize: "18px",
                fontWeight: "600",
                backgroundColor: "transparent",
              }}
            >
              Discover
            </button>
            </Link>
          </Col>
          <Col style={{ position: "relative" }}>
            {" "}
            <img src={BP} style={{ width: "250px", padding: "5px" }} />
            <h2
              style={{
                position: "absolute",
                bottom: "87px",
                left: "100px",
                color: "white",
              }}
            >
              BodyPump
            </h2>
            <Link to="/BodyPump" className="Mylink">
            <button
              style={{
                position: "absolute",
                bottom: "40px",
                left: "100px",
                borderColor: "#9b101f",
                borderRadius: "65px",

                color: " #fff",
                fontSize: "18px",
                fontWeight: "600",
                backgroundColor: "transparent",
              }}
            >
              Discover
            </button>
            </Link>
          </Col>
          <Col style={{ position: "relative" }}>
            {" "}
            <img src={BA} style={{ width: "250px", padding: "5px" }} />
            <h2
              style={{
                position: "absolute",
                bottom: "87px",
                left: "100px",
                color: "white",
              }}
            >
              BodyAttack™
            </h2>
            <Link to="/BodyAttack" className="Mylink">
            <button
              style={{
                position: "absolute",
                bottom: "40px",
                left: "100px",
                borderColor: "#9b101f",
                borderRadius: "65px",

                color: " #fff",
                fontSize: "18px",
                fontWeight: "600",
                backgroundColor: "transparent",
              }}
            >
              Discover
            </button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col style={{ position: "relative" }}>
            {" "}
            <img src={BO} style={{ width: "250px", padding: "5px" }} />
            <h2
              style={{
                position: "absolute",
                bottom: "87px",
                left: "100px",
                color: "white",
              }}
            >
              BodyCombat™
            </h2>
            <Link to="/BodyCombat" className="Mylink">
            <button
              style={{
                position: "absolute",
                bottom: "40px",
                left: "100px",
                borderColor: "#9b101f",
                borderRadius: "65px",

                color: " #fff",
                fontSize: "18px",
                fontWeight: "600",
                backgroundColor: "transparent",
              }}
            >
              Discover
            </button>
            </Link>
          </Col>
          <Col style={{ position: "relative" }}>
            {" "}
            <img src={BX} style={{ width: "250px", padding: "5px" }} />
            <h2
              style={{
                position: "absolute",
                bottom: "87px",
                left: "100px",
                color: "white",
              }}
            >
              Cxworx™
            </h2>
            <Link to="/Cxworx" className="Mylink">
            <button
              style={{
                position: "absolute",
                bottom: "40px",
                left: "100px",
                borderColor: "#9b101f",
                borderRadius: "65px",

                color: " #fff",
                fontSize: "18px",
                fontWeight: "600",
                backgroundColor: "transparent",
              }}
            >
              Discover
            </button>
            </Link>
          </Col>
          <Col style={{ position: "relative" }}>
            {" "}
            <img src={ST} style={{ width: "250px", padding: "5px" }} />
            <h2
              style={{
                position: "absolute",
                bottom: "87px",
                left: "100px",
                color: "white",
              }}
            >
              Step
            </h2>
            <Link to="/Step" className="Mylink">
            
         
            <button
              style={{
                position: "absolute",
                bottom: "40px",
                left: "100px",
                borderColor: "#9b101f",
                borderRadius: "65px",

                color: " #fff",
                fontSize: "18px",
                fontWeight: "600",
                backgroundColor: "transparent",
              }}
            >
              Discover
            </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <div className="BMI-mal" style={{ backgroundColor: "#1F1F1F" }}>
        <BMI />
      </div>
      <br />

      <div className="Coach-mal">
        <Container fluid="lg">
        <h3 style={{ paddingTop: "50px" }}>Our coaches</h3>
        <h1 style={{ color: "#9b101f", paddingBottom: "20px" }}>_________</h1>
        <h6 style={{marginBottom:'50px'}}>State-certified professional coaches, with extensive experience and certified Les Mills.</h6>
        <Coach />
        </Container>
      </div>
      <br />

      <div className="Planning-mal">
      <h2 style={{ paddingTop: "50px" }}>COURSE SCHEDULE</h2>
        <h1 style={{ color: "#9b101f", paddingBottom: "20px" }}>_________</h1>
        <Planning />
      </div>
    </div>
  );
}
