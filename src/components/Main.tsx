import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from "../assets/images/avatar.jpg"
import '../assets/styles/Main.scss';
import portfolioData from '../portfolioData.json';

function Main() {
  const { name, role, github, linkedin } = portfolioData.main;

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>{name}</h1>
          <p>{role}</p>

          <div className="mobile_social_icons">
            <a href={github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
