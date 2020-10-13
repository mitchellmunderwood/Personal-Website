import React from "react";
import Title from "../../components/Title/index";
import IconTitle from "../../components/IconTitle/index";

function Contact() {
  return (
    <div>
      <Title
        title="Let's Work Together!"
        subtitle="Have a position you'd like to talk with me about? Contact ..."
      />

      <IconTitle icon="email.png" title="mitchellmunderwood@gmail.com" />
      <IconTitle icon="iphone.png" title="(919) 757-7864" />
    </div>
  );
}

export default Contact;
