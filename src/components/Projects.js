import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.jpg";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import projImg4 from "../assets/img/proj4.png";
import projImg5 from "../assets/img/proj5.png";
import projImg6 from "../assets/img/proj6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Insta DM Bot",
      description: "Automated Instagram messages through Selenium Webdriver, headless-chrome and Python, it can be used for promoting campaigns, letting people know about you(your brand, mission, etc) by reaching them without missing a single day, as these DMs are pre-scheduled.",
      imgUrl: projImg1,
    },
    {
      title: "TIO IT Services",
      description: "You can get quotations for taking your businesses online, thats what the name is about: Take It Online!",
      imgUrl: projImg3,
    },
    {
      title: "Trendy Wardrobe",
      description: "Fast Fashion at low prices!",
      imgUrl: projImg4,
    },
    {
      title: "Blood Any Time",
      description: "BATs that won't suck, but donate instead!",
      imgUrl: projImg2,
    },
    {
      title: "Seedsly",
      description: "Interactive dashboard for weather updates and a one-stop seed certification portal.",
      imgUrl: projImg5,
    },
    {
      title: "Espiro",
      description: "Academics made easy! Yup a print on demand service that delivers documents to your doorstep, provide students with Ideas on new projects they can pursue and much more!",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am passionate about bringing ideas to life through coding and design. Below, you'll find a collection of projects that reflect my skills, creativity, and commitment to delivering high-quality solutions. Each project is a testament to the knowledge and experience I've gained in various domains.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  {/* </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
