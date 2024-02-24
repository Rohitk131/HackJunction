import React, { useState } from 'react';
import HackathonPopover from './HackathonPopover';

const HackathonHostingPage = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    togglePopover();
    // Do something with the selected option (e.g., navigate to a different page)
  };

  return (
    <div className="hackathon-hosting-page" style={pageContainerStyle}>
      <h2 style={pageTitleStyle}>Host a Hackathon</h2>
      <p style={paragraphStyle}>
        The only thing that can match the thrill of attending a hackathon is the exhilaration of organizing one yourself! Join 100s of other hackathons on Devfolio and manage your applications, submissions, comms, reimbursements, and judging, all on our platform.
      </p>
      <button
        onClick={togglePopover}
        className="organize-button"
        style={organizeButtonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Organize a Hackathon
      </button>
      {isPopoverOpen && <HackathonPopover onClose={togglePopover} onSelect={handleOptionSelect} />}
    </div>
  );
};

const pageContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px',
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

const pageTitleStyle = {
  fontSize: '54px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
};

const paragraphStyle = {
  marginBottom: '100px',
  marginTop: '50px',
  textAlign: 'center',
  color: '#555',
  fontSize: '20px',
};

const organizeButtonStyle = {
  padding: '15px 30px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
};

// Define hover effect using CSS class
const handleMouseEnter = (event) => {
  event.target.classList.add('hovered');
};

const handleMouseLeave = (event) => {
  event.target.classList.remove('hovered');
};

export default HackathonHostingPage;
