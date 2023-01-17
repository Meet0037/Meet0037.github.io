import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_Technocolabs from "../../assets/img/experience/technocolabs.png";
import L_TSF from "../../assets/img/experience/TSF-removebg-preview.jpg";
import L_CTS from "../../assets/img/experience/cognizant.png"
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>

      {/* CTS */}
      <Jumbotron className="jumbo-style0">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_CTS} alt="CTS logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Programmer Analyst Intern</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Full Stack Developer</strong> */}
                    {/* <br /> */}
                    <strong>Technology:</strong> ASP .NET CORE, REACT, ASP .NET WEB API
                    <br />
                    <strong>Duration:</strong> Jan 2022 - August 2022
                    <br/>
                    <strong>Description: </strong>
                    <ul className="text-center">
                      <li>The mentor trained us on Dotnet full-stack technology.</li>
                      <br />
                      <li>Code challenges and ICT tests were taken after and in between each milestone. In fact, it was worth evaluating our progress regularly with certain evaluation criteria.</li>
                      <br />
                      <li>At the end of an Internship, we worked on project they given in a team of 4 members.</li>
                      <br />
                      <li>The project consist of various tech stack like reactjs, ASP.net core web api, Azure cloud etc.</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1eUrC1d6tDOK-qCLtHj3JGp0-lf29_QeV/view?usp=share_link" target="_blank" rel="noopener noreferrer"><button class="button1">See here</button></a>
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      {/* Technocolabs */}
      <Jumbotron className="jumbo-style1">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_Technocolabs} alt="Technocolabs logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Machine Learning Developer Intern</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Full Stack Developer</strong> */}
                    {/* <br /> */}
                    <strong>Technology:</strong> Python, Machine learning algorithm
                    <br />
                    <strong>Duration:</strong> Jan 2021 - Feb 2021
                    <br/>
                    <strong>Description: </strong>
                    <ul className="text-center">
                      <li>Created a machine learning model which predicts the Severity of Adverse Drug Reactions on huge dataset(of GB size).</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1BSqtud6f3mXLxm9hlxBQzqGBstm-qcTo/view?usp=share_link" target="_blank" rel="noopener noreferrer"><button class="button1">See here</button></a>
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      {/*Sparks foundation*/}
      <Jumbotron className="jumbo-style2">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_TSF} alt="Technocolabs logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Data Science Intern</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/* <strong className="body-title-style ">Full Stack Developer</strong> */}
                    {/* <br /> */}
                    <strong>Technology:</strong> Python, Data Science
                    <br />
                    <strong>Duration:</strong> Nov 2020 - Dec 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-center">
                      <li>Perform using Supervised &amp; Unsupervised machine learning on given Dataset.</li>
                      <br/>
                      <li>Perform Exploratory Data Analysis on given Dataset.</li> 
                    </ul>

                    <a href="https://drive.google.com/file/d/1nYnjE17e6Sooj0CfopqNw4zpIWWM8YxW/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button class="button1">See here</button></a>
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


export default Experience;
