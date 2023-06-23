import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Python Full Stack Developer",
          "I Think Iam excel in Django, React",
          "Helping Students to Completing their  Django, MERN Projects and Deployment",
          "Blog ",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
