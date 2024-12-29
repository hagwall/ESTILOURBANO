import React from 'react';
import './Construction.module.css';

const Drone = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="48" 
    height="48" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="gray" 
    strokeWidth="2"
  >
    <path d="M12 8a4 4 0 0 1 4 4m-4-8a8 8 0 0 1 8 8m-8-4a4 4 0 0 0-4 4m-4 8h16" />
    <path d="M16 12h4v4h-4zm-4-4h4v4h-4zm-4 4h4v4H8z" />
  </svg>
);

const ConstructionPage = () => {
  return (
    <div className="construction-container">
      <div className="sky">
        <div className="drone drone-1">
          <Drone />
        </div>
        <div className="drone drone-2">
          <Drone />
        </div>
        
        <div className="banner">
          <h1>Sitio en Construcción</h1>
        </div>
        
        <div className="construction-elements">
          <div className="hammer"></div>
          <div className="wrench"></div>
          <div className="hard-hat"></div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionPage;

