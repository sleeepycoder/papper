// JobDetails.js
import React from 'react';
import './JobDetails.css';
const JobDetails = ({ title, description, responsibilities, qualifications, benefits }) => {
  return (
    <div className="job-details">
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Responsibilities:</h3>
      <p>{responsibilities}</p>
      <h3>Qualifications:</h3>
      <p>{qualifications}</p>
      <h3>Benefits:</h3>
      <p>{benefits}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;
