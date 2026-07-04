import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import portfolioData from '../portfolioData.json';

const iconMap: { [key: string]: any } = {
    faReact: faReact,
    faDocker: faDocker,
    faPython: faPython
};

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {portfolioData.expertise.map((skill, index) => (
                    <div key={index} className="skill">
                        <FontAwesomeIcon icon={iconMap[skill.icon]} size="3x"/>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {skill.skills.map((label, idx) => (
                                <Chip key={idx} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;