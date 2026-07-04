import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import portfolioData from '../portfolioData.json';

const iconMap: { [key: string]: any } = {
  faBriefcase: faBriefcase
};

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {portfolioData.history.map((item, index) => {
            const isImage = item.icon.startsWith('http') || item.icon.startsWith('/') || item.icon.includes('.');
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={index === 0 ? { background: 'white', color: 'rgb(39, 40, 34)' } : undefined}
                contentArrowStyle={index === 0 ? { borderRight: '7px solid  white' } : undefined}
                date={item.date}
                iconStyle={
                  isImage
                    ? { background: '#ffffff', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }
                    : { background: '#5000ca', color: 'rgb(39, 40, 34)' }
                }
                icon={
                  isImage ? (
                    <img
                      src={item.icon}
                      alt={`${item.subtitle} Logo`}
                      style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                    />
                  ) : (
                    <FontAwesomeIcon icon={iconMap[item.icon] || faBriefcase} />
                  )
                }
              >
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;