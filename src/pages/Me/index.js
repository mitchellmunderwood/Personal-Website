import React from "react";
import "./index.css";
import Title from "../../components/Title/index";

// what to list
// qualifications
// technical stack
// links to networked material
// history.

function Me() {
  const paragraph =
    "I'm a full stack web developer, recently certified through the UNC bootcamp. I work primarily with the MERN stack, but am also somewhat familiar with Ruby and Rails. You can find out more about me and my projects by going to my github, github.com/mitchellmunderwood, or finding me on linkedin. These resources and my resume can be found in the lower right section of the navigation bar.";

  return (
    <div>
      <img
        className="mitchell-image"
        src={process.env.PUBLIC_URL + "/mitchell2.jpg"}
      />
      <Title title="Hi! I'm Mitchell Underwood." subtitle="" />
      <Title title="About Me" subtitle={paragraph} />
      <Title
        title="Work With Me!"
        subtitle="Have a position you'd like to talk with me about? Email mitchellmunderwood@gmail.com. Or check out the 'Contact' page for others ways to reach me."
      />
    </div>
  );
}

export default Me;
