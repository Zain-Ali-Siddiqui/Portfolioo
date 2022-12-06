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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFi6WNo-Olp3G_XJ0J6LFSEgi6guUsfyaMvQ&usqp=CAU'}
              isBlog={false}
              title="Snake Game"
              description="Snake games let you slither around like a snake, often picking up bits of food and growing in size."
              ghLink="https://github.com/Zain-Ali-Siddiqui/snake-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://1.bp.blogspot.com/-i78iKr_P9Pk/X9ohjXyc5eI/AAAAAAAAA_4/8UauxZaOgUshGK7MXwW1gZqts7Zrf_AewCLcBGAsYHQ/s1280/Todo%2BList%2BApp%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp'}
              isBlog={false}
              title="Todo App"
              description="Save Article. ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules."
              ghLink="https://github.com/Zain-Ali-Siddiqui/Todo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIPHyxMx-kyvyoavk7ldD_d2G45AXKOUOOorYhGJa9x9YQeyd1GVtM-x_PS1H34FS_Ug&usqp=CAU'}
              isBlog={false}
              title="Music App"
              description="Such apps as Soundcloud, Spotify, and Apple Music are the most widely used music streaming apps. The primary purpose of the music streaming application is to play music available in the databases of the service, compose custom playlists and suggest similar songs."
              ghLink="https://github.com/Zain-Ali-Siddiqui/music-app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6BAVd8wo14sDUcaNJNwHqBHaEZ6EJYM44Q&usqp=CAU'}
              isBlog={false}
              title="Instagram UI"
              description="I make this Instagram UI for practice purpose, using React js.Instagram is a free photo and video sharing app available on iPhone and Android. People can upload photos or videos to our service and share them with their followers or with a select group of friends. They can also view, comment and like posts shared by their friends on Instagram.  "
              ghLink="https://github.com/Zain-Ali-Siddiqui/Instagram"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://i.ytimg.com/vi/-CNT9vSD0K8/maxresdefault.jpg'}
              isBlog={false}
              title="YouTube"
              description="YouTube is a free video sharing website that makes it easy to watch online videos. You can even create and upload your own videos to share with others. Originally created in 2005, YouTube is now one of the most popular sites on the Web, with visitors watching around 6 billion hours of video every month."
              ghLink="https://github.com/Zain-Ali-Siddiqui/youtube"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'http://ecommerceguide.com/wp-content/uploads/2020/02/India-1Amazon.webp'}
              isBlog={false}
              title="E-commerce"
              description="An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service"
              ghLink="https://github.com/Zain-Ali-Siddiqui/e-commerce"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
