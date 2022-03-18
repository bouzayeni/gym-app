import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Table, Container } from "react-bootstrap";

export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");
  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }
  
  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else if (bmi > 30) return "Obesity";
    else return "NAN";
  }

  return (
    <div style={{ paddingTop: " 34px", paddingBottom: "34px" }}>
      <Container fluid="lg">
        <Row>
          <Col style={{ textAlign: "initial" }}>
            <div>
              <form>
                <h3 style={{ color: "white" }}>
                  {" "}
                  Calculation of Body Mass Index
                </h3>
                <p style={{ color: "#EFEFEF" }}>
                BMI is a more reliable indicator than weight for assessing
                  body shape. Male or female, calculate your BMI in one click and
                  find out its meaning according to the WHO classification.
                  Please note that this classification remains statistical, it does not
                  does not necessarily apply to everyone, especially athletes or
                  seniors.
                </p>
                <div>
                  <div>
                    <input
                      id="Height "
                      type="text"
                      placeholder="Height in cm"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      style={{
                        backgroundColor: "transparent",
                        border: " 1px solid #4b4b4b",
                        borderRadius: "90px",
                        color: "#fff",
                        padding: "7px 15px",
                        width: "130px",
                        marginRight: "38px",
                      }}
                    />

                    <input
                      id="Weight"
                      type="Weight in kg"
                      placeholder="Weight in kg"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      style={{
                        backgroundColor: "transparent",
                        border: " 1px solid #4b4b4b",
                        borderRadius: "90px",
                        color: "#fff",
                        padding: "7px 15px",
                        width: "130px",
                        marginRight: "5px",
                      }}
                    />

                    <div>
                      <button
                        type="button"
                        onClick={calculateBMI}
                        style={{
                          backgroundColor: "#9b101f",
                          cursor: "pointer",
                          borderRadius: "100px",
                          fontWeight: "600",
                          padding: "11px 19px",
                          marginTop: "40px",
                          color: "white",
                        }}
                      >
                        Calculate BMI
                      </button>
                    </div>
                  </div>
                </div>
                {bmiResult && (
                  <div style={{ color: "white" }}>
                    <p>Your BMI is: {bmiResult} </p>
                    <p>You are currently: {status}</p>
                  </div>
                )}
              </form>
            </div>
          </Col>
          <Col style={{ alignItems: "center", display: "flex" }}>
            <Table
              style={{
                color: "white",
                backgroundColor: "#8F111F",
                width: "350px",

                borderCollapse: "separate",
                borderSpacing: "1px",
                borderRadius: "5%",
              }}
            >
              <thead>
                <tr>
                  <th>BMI</th>
                  <th>WHO interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Under 18.5</th>
                  <th>thinness</th>
                </tr>
                <tr>
                  <th>18.5 - 24.9</th>
                  <th>Normal</th>
                </tr>
                <tr>
                  <th>25 - 29.9</th>
                  <th>Overweight</th>
                </tr>
                <tr>
                  <th>30 and over</th>
                  <th>Obesity</th>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}