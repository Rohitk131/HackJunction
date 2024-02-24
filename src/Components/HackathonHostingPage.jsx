import React, { useState } from 'react';
import HackathonPopover from './HackathonPopover';
import Navbar from './Navbar';
import { color } from '@mui/system';

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

  return (<div className='bg-black h-[100vh]'>
    <Navbar />
    <div className="hackathon-hosting-page" style={pageContainerStyle}>
      <h2 style={pageTitleStyle}>Host a Hackathon</h2>
      <p style={paragraphStyle}>
        The only thing that can match the thrill of attending a hackathon is the exhilaration of organizing one yourself! Join 100s of other hackathons on Devfolio and manage your applications, submissions, comms, reimbursements, and judging, all on our platform.
      </p>
      <button
        onClick={togglePopover}
        className="organize-buttons shadow-blue-600"
        style={organizeButtonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Organize a Hackathon
      </button>
      {isPopoverOpen && <HackathonPopover onClose={togglePopover} onSelect={handleOptionSelect} />}
    </div></div>
  );
};

const pageContainerStyle = {
  display: 'flex',
  height:'80vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px',
  backgroundColor: 'black',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

const pageTitleStyle = {
  fontSize: '54px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: 'white',
};

const paragraphStyle = {
  marginBottom: '100px',
  marginTop: '50px',
  textAlign: 'center',
  color: 'gray',
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
  event.target.classList.add('shadow-2xl');
};

const handleMouseLeave = (event) => {
  event.target.classList.remove('hovered');
  event.target.classList.remove('shadow-2xl');
};

export default HackathonHostingPage;
