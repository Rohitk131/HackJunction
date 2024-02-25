import React from 'react';

const HackathonModePopover = ({ onSelectMode, onCancel }) => {
  return (
    <div className="hackathon-mode-popover" style={popoverStyle}>
      <h1 style={headingStyle}>Select Hackathon Mode</h1>
      <div className="card-container" style={cardContainerStyle}>
        <div className="card" style={cardStyle}>
          <h2 style={subHeadingStyle}>Online Hackathon</h2>
          <p>For Beginner-friendly hackathons where anyone can apply and make their submission during the hackathon duration directly.</p>
        </div>
        <div className="card" style={cardStyle}>
          <h2 style={subHeadingStyle}>Offline Hackathon</h2>
          <p>For regular on-site hackathons.</p>
        </div>
        <div className="card" style={cardStyle}>
          <h2 style={subHeadingStyle}>Online + Application Review</h2>
          <p>For Online Hackathons where organizers have control over the quality of hackers by screening their applications.</p>
        </div>
      </div>
      <div className="button-container" style={buttonContainerStyle}>
        <button className="cancel-button" style={buttonStyle} onClick={onCancel}>Cancel</button>
        <button className="continue-button" style={buttonStyle} onClick={() => onSelectMode(null)}>Continue</button>
      </div>
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
  flexDirection: 'column',
  alignItems: 'center',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
};

const cardStyle = {
  width: '30%',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
};

const subHeadingStyle = {
  fontSize: '20px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
};

export default HackathonModePopover;
