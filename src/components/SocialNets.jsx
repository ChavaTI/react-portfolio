import React, { useState } from "react";
import SocialNet from "./SocialNet";

const SocialNets = () => {
  const [socialNetworks] = useState([
    {
      name: "Facebook",
      url: "https://www.facebook.com/ChavaTI",
      icon: "fab fa-facebook-f",
      cssClass: "facebook-circle",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ChavaTI_",
      icon: "fab fa-twitter",
      cssClass: "twitter-circle",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/chavatloz/",
      icon: "fab fa-instagram",
      cssClass: "instagram-circle",
    },
    {
      name: "Github",
      url: "https://github.com/ChavaTI",
      icon: "fab fa-github",
      cssClass: "github-circle",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/salvador-hernández-lópez-a2ab7315a/",
      icon: "fab fa-linkedin",
      cssClass: "linkedin-circle",
    },
  ]);

  return (
    <div className="social-networks">
      {socialNetworks.map((socialNet) => (
        <SocialNet key={socialNet.name} socialNet={socialNet} />
      ))}
    </div>
  );
};

export default SocialNets;
