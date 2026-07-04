import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import portfolioData from '../portfolioData.json';

function Footer() {
  const { author, templateRepo, github, linkedin } = portfolioData.footer;

  return (
    <footer>
      <div>
        <a href={github} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href={templateRepo} target="_blank" rel="noreferrer">{author}</a> with 💜</p>
    </footer>
  );
}

export default Footer;