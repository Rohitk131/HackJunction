import React from 'react';

const HackathonPopover = ({ onSelect }) => {
  return (
    <div className="hackathon-popover" style={popoverStyle}>
      <div className="left-section" style={leftSectionStyle}>
        <button onClick={() => onSelect('students')} className="option" style={buttonStyle}>Organize a hackathon for students</button>
      </div>
      <div className="right-section" style={rightSectionStyle}>
        <button onClick={() => onSelect('companies')} className="option" style={buttonStyle}>Organize a hackathon for companies/communities</button>
      </div>
      <span className="close-button" style={closeButtonStyle} onClick={() => onSelect(null)}>✖</span>
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
};

const leftSectionStyle = {
  marginRight: '20px',
};

const rightSectionStyle = {
  marginLeft: '20px',
};

const buttonStyle = {
  display: 'block',
  marginBottom: '10px',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  border: 'none',
  cursor: 'pointer',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
};

export default HackathonPopover;
