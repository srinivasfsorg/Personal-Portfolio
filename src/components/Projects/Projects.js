import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Passionate <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently,<br/>
          Thank You visit again my endless journey.
        </p>
      
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BlogApp"
              description="Blog Application for Enthusiastic Blog Writers, Developed by backed technologies Like Python, Django, DjangoRestFramework, Frontend technologies like React and Axios For API   "
              ghLink="https://github.com/srinivasfsorg/Blog-Application.git"
              demoLink="https://github.com/srinivasfsorg/Blog-Application.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ecom Store Amazon Clone"
              description="This Amazon Clone App was built with ReactJs, the features are cart functionality, Remove From Cart, SubTotal Amount, Increasing item count in Cart, Well Design, Ready For Selling My Project to Business persons those who need, Deployed in Firebase"
              ghLink="https://github.com/srinivasfsorg/amazon-clone.git"
              demoLink="https://warhosty.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RestAPI"
              description="This is RestAPI Project using django, generic views and Mixins"
              ghLink="https://github.com/srinivasfsorg/GenericAPIViewandMixins.git"
              demoLink="https://github.com/srinivasfsorg/GenericAPIViewandMixins.git" 
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Moview APP"
              description=" This is Movie App by Django and React, still its updating Mode"
              ghLink="https://github.com/srinivasfsorg/DJ_React_CRUD_MovieApp.git"
              demoLink="https://github.com/srinivasfsorg/DJ_React_CRUD_MovieApp.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tic Tic Toe Game"
              description="This Simple Tic Tic Toe Game , developed by using React, it will show winner of game at last"
              ghLink="https://github.com/srinivasfsorg/tic-tic-toe-game.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              demoLink="https://1war.company/tic-tic-toe-game-react/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Quiz APP"
              description=" This Quiz Built by Using Django, bootstrap, JavaScript..... it shows time, on funal it gives, results, no. of correct and incorrect answers, percentage of marks..."
              ghLink="https://github.com/srinivasfsorg/Quiz-App.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
        <h2>Happy Cool Coding.....</h2>
      </Container>
    </Container>
  );
}

export default Projects;
