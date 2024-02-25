import React, { useState, useEffect } from 'react';

const CollegeSearch = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const response = await fetch('https://colleges-api.onrender.com/colleges?limit=2&page=69');
      const data = await response.json();
      setColleges(data.colleges);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching colleges:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Colleges</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="college-list">
          {colleges.map((college, index) => (
            <div className="college-card" key={index}>
              <h2>{college.Name}</h2>
              <p>State: {college.State}</p>
              <p>City: {college.City}</p>
              <p>Address: {college.Address_line1}, {college.Address_line2}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollegeSearch;
