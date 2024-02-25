import React, { useState } from 'react';
import HackathonModePopover from './HackathonModePopover';

const HackathonPopover = ({ onSelect }) => {
  const [showModePopover, setShowModePopover] = useState(false);

  const handleStartSetup = (type) => {
    onSelect(type);
    setShowModePopover(true);
  };

  const handlePopoverClick = (e) => {
    // Prevent the default behavior (if any), but do not stop event propagation
    e.preventDefault();
  };

  return (
    <div className="hackathon-popover gap-10 p-20" style={popoverStyle} onClick={handlePopoverClick}>
      <div className="left-section" style={leftSectionStyle}>
        <div className="card">
          <div className="description">
            <h1 style={headingStyle}>Organize a Hackathon for Students</h1>
            <p>Partner with great companies for exciting bounties and sponsorships</p>
            <ul>
              <li>Engage students with challenging problem statements</li>
              <li>Provide mentorship and guidance throughout the hackathon</li>
              <li>Create networking opportunities for participants</li>
            </ul>
          </div>
          <button onClick={() => handleStartSetup('students')} className="start-button mt-4" style={buttonStyle}>Start Hackathon Setup</button>
        </div>
      </div>
      <div className="right-section" style={rightSectionStyle}>
        <div className="card">
          <div className="description ">
            <h1 style={headingStyle}>Organize a Hackathon for Companies/Communities</h1>
            <p>Get Listed on the Hackathon Page for more reach</p>
            <ul>
              <li>Attract companies and community groups to participate</li>
              <li>Offer valuable prizes and incentives for winning solutions</li>
              <li>Promote collaboration and innovation within the community</li>
            </ul>
          </div>
          <button onClick={() => handleStartSetup('companies')} className="start-button mt-4" style={buttonStyle}>Start Hackathon Setup</button>
        </div>
      </div>
      <span className="close-button" style={closeButtonStyle} onClick={() => onSelect(null)}>✖</span>
      {showModePopover && <HackathonModePopover onSelectMode={onSelect} onCancel={() => setShowModePopover(false)} />}
    </div>
  );
}

const popoverStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  display: 'flex', 
};

const leftSectionStyle = {
  marginRight: '20px',
  flex: '1', 
};

const rightSectionStyle = {
  flex: '1', 
};

const headingStyle = {
  fontSize: '24px',
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
};

export default HackathonPopover;
