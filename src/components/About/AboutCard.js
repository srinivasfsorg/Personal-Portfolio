import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Maram Srinivasa Reddy </span>
            from <span className="purple"> Ongole, India.</span>
            <br />I am a Full Stack Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do! and Interested in
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Working and Researching on Learning, Productivity and Education System
            </li>
            <li className="about-activity">
              <ImPointRight /> Training to Bull pull heavy rocks <a href="https://en.wikipedia.org/wiki/Ongole_cattle" target="_blank">@OngoleBulls</a> 
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving, Trouble Shooting, Problems solving for Juniors
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling, Bike Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on How we can do it Differently Rather Than repetitive
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovativity and Implementation starts from here"{" "}
          </p>
          <footer className="blockquote-footer">Srinivasa Reddy Maram</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
