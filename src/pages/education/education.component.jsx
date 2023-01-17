import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_Gtu from "../../assets/img/education/gtulogo.png";
import L_TSF from "../../assets/img/experience/TSF-removebg-preview.jpg";
import Tilt from "react-tilt";
import "./education.styles.css";

const Education = () => {
  return (
    <div id="education">
      <h1 className="pt-3 text-center font-details-b pb-3">EDUCATION</h1>
      <Jumbotron className="jumbo-style3">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_Gtu} alt="gtu logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Gujarat Technological University</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Full Stack Developer</strong> */}
                    {/* <br /> */}
                    <strong>Year:</strong> 2018-2022
                    <br />
                    <strong>CGPA:</strong> 8.79
                    <br/>
                     {/* <strong> Description </strong>
                    <ul className="text-center">
                      <li>Developed model that could predict the reddit post popularity score.</li>
                       <li><strong>Developed</strong> automation system to create SQL bulk query scripts that 
                        increased efficiency by 80% and decreased working hours from 4 hours to 30 mins per task.
                      </li>
                      <li><strong>Provided</strong> application maintenance while working as `Production Support`. 
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according 
                      to the business requirements.</li> 
                       <li><strong>Co-created</strong> React Document used as a guide for new developers.</li>

                    </ul>  */}
                    {/* <a href="https://drive.google.com/file/d/18Xv8YN5CbXji9txNJ1xWDUT-ugxVGrZk/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button class="button1">See here</button></a> */}
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};


export default Education;
