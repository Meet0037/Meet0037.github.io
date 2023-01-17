import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_Unichat from "../../assets/img/projects/unichat.png";
import L_PythonMiniProjects from "../../assets/img/projects/pythonminiprojects.jpg";
import L_SimpleBlog from "../../assets/img/projects/simpleblog.png";
import L_LoginSystem from "../../assets/img/projects/loginsystem.png"

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_PHP from "../../assets/img/skills/phplogo.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">Project Work</h1>
      <Timeline>
        <Events>
        {/* Project: chatgpt clone */}
        <ImageEvent
            date="Dec'22"
            className="text-center"
            text="ChatGPT clone"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/ChatGPT.png/1200px-ChatGPT.png"
            alt="Face mask detection"
          >
            <div className="d-flex justify-content-between flex-column mt-2">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> On each user requests, generate responses in the form of human natural language.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Call OpenAPI and get responses on each request.</li>
                          <li>It is designed to provide an interactive experience for users, allowing them to ask questions and receive answers in natural language.</li>
                          <li>ChatGPT can be used for customer service, virtual assistants, and other conversational applications.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU"
                                alt="html"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              HTML
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                                alt="css"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              CSS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                alt="javascript"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              JS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://expressjs.com/images/express-facebook-share.png"
                                alt="expressjs"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://pbs.twimg.com/profile_images/1603113436757389313/wpYDqrIf_400x400.jpg"
                                alt="openai"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              OpenAI API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
               {/* className="d-flex justify-content-between flex-nowrap text-center" */}
              <div>
                {/* <UrlButton
                  href="https://akjha96.github.io/Todo-List-React/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  className="urlbutton"
                  href="https://chatgpt-by-meet.vercel.app/"
                  target="_blank"
                >
                  Use here
                </UrlButton>
                {/* <UrlButton
                  href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
        </ImageEvent>


           {/* Project: Unichat web app  */}
        <ImageEvent
            date="June'21"
            className="text-center"
            text="Unichat Web App"
            src={L_Unichat}
            alt="Unichat Web App"
          >
            <div className="d-flex justify-content-between flex-column mt-2">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Chat app 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>It is a chat app that allows users to interact with eachother.</li>
                          <li>It uses chat engine API to create a virtualization of chat.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                                alt="react"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png"
                                alt="firebase"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              Firebase
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://chat-engine-assets.s3.amazonaws.com/temp-logo-min.png"
                                alt="chatengine"
                                rounded
                                className="image-style m-1 chatengine-logo-style"
                              ></Image>
                              Chatengine API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div>
                <UrlButton
                  className="urlbutton"
                  href="https://unichat-webapp.netlify.app/"
                  target="_blank"
                >
                  Use here
                </UrlButton>
              </div>
            </div>
        </ImageEvent>


          {/* Project: Uniswap */}
        <ImageEvent
            date="Sep'22"
            className="text-center"
            text="Uniswap 2.0"
            src="https://media.licdn.com/dms/image/C4D22AQHxVxNA_wdhdQ/feedshare-shrink_2048_1536/0/1663318432481?e=1677110400&v=beta&t=B9xJySlV62uMDdr6_nTLQgM-9T57Ek9ydibZzmy-KRs"
            alt="Uniswap 2.0"
          >
            <div className="d-flex justify-content-between flex-column mt-2">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Exchange tokens in a moment. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles">
                          <li>Connect your wallet using Metamask.</li>
                          <li>Automatically fetch the available balance of a particular token to exchange with another available pair of tokens.</li>
                          <li>Dynamically shows the amount you receive as per the supply of a particular token.</li>
                          <li>Approve the transaction before you swap and get your amount.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                                alt="react"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="data:image/png;base64,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"
                                alt="cranq"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              Cranq
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://repository-images.githubusercontent.com/24655114/c71c5800-6a8c-11e9-9117-8ec357c9f69e"
                                alt="web3"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              Web3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="data:image/png;base64,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"
                                alt="tailwind css"
                                rounded
                                className="image-style m-1"
                              ></Image>
                              Tailwind css
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div>
                <UrlButton
                  className="urlbutton"
                  href="https://uniswap-exchange2.netlify.app/"
                  target="_blank"
                >
                  Use here
                </UrlButton>
              </div>
            </div>
        </ImageEvent>


          {/* Project: Get GitHub Info */}
          {/* <ImageEvent
            date="19/07/2020"
            className="text-center"
            text="Get GitHub Info"
            src={L_GetGitHubInfo}
            alt="Get GitHub Info"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that searches
                        people on GitHub with non-private account and see all
                        their details using GitHub API
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search any Github profile</li>
                          <li>Real-time API calls</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_GIT}
                                alt="Github API"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              GitHub API
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://akjha96.github.io/getGithubInfo/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/akjha96/getGithubInfo"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=K3h95l2YxmY&feature=youtu.be"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent> */}

          {/* Project: Smart Brain */}
          {/* <ImageEvent
            date="21/01/2020"
            className="text-center"
            text="Smart Brain Face Detect app"
            src={L_SmartBrain}
            alt="Smart Brain Face Detect"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that detects face
                        in a picture.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register new user</li>
                          <li>Signin exiting user</li>
                          <li>Keep tracks of entries for each user</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PostgreSQL
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>SignUp/ Signin:</strong>
                          <br />
                          <br />
                          You can <strong>register</strong> as new user or{" "}
                          <strong>log in</strong> using the demo account below.
                          <br />
                          <br />
                          <strong>Demo Account Details:</strong>
                          <br />
                          email: demo@demo.com
                          <br />
                          password: demo
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://smart-face-detect-app.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/akjha96/Smart_Brain"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/watch?v=ZZYSpi_blL0"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent> */}

          {/* Project: RoboFriends */}

          {/* <ImageEvent
            date="14/01/2020"
            className="text-center"
            text="RoboFriends"
            src={L_RoboFriends}
            alt="Robo Friends"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that allows to
                        search through robots fetched in real-time with users.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search through Robots</li>
                          <li>Users and Robots being fetched via API call</li>
                          <li>Usage of Redux store</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REDUX}
                                alt="Redux"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Redux
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://akjha96.github.io/RoboFriends/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/akjha96/RoboFriends"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent> */}

          {/* Project: Product_Hunt_Clone */}

          {/* <ImageEvent
            date="15/12/2019"
            className="text-center"
            text="Product Hunt Clone"
            src={L_ProductHuntClone}
            alt="Product Hunt Clone"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This website is a clone of
                        Product Hunt built using Django.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                          <li>Raise a Product for people to see and Vote</li>
                          <li>Delete a product</li>
                          <li>Like and Dislike a product</li>
                          <li>Fully funtional Administration panel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DJANGO}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PostgreSQL
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/akjha96/product_hunt_clone"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent> */}

          {/* Project: Portfolio using Django */}
          {/* <ImageEvent
            date="07/12/2019"
            className="text-center"
            text="Portfolio using Django"
            src={L_PortfolioUsingDjango}
            alt="Portfolio using Django"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first portfolio
                        website built using Django.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Send emails</li>
                          <li>View my projects</li>
                          <li>Write a blog</li>
                          <li>
                            Hosted using Digital ocean under www.akjfun.com
                          </li>
                          <li>Fully funtional Administration panel</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Bootstrap 4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Bootstrap 4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DJANGO}
                                alt="Django"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Django
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_POSTGRESQL}
                                alt="PostgreSQL"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              PostgreSQL
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_DIGITAL_OCEAN}
                                alt="Digital Ocean"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Digital-Ocean
                            </span>
                          </li>
                        </ul>
                        <hr />
                        <em>
                          <strong>View Demo Video:</strong>
                          <br />
                          <br />
                          If you are reading this, that means I have updated my
                          Portfolio website to recent one.
                          <br />
                          You can still see a video of my old portfolio by
                          clicking on the button below.
                          <br />
                          <br />
                        </em>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://youtu.be/PCwEuW4OmWA" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent> */}
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
