// JobListing.js
import React from 'react';
import './JobListing.css';

const JobListing = ({ title, department, description, onClickApply }) => {
  return (
    <div className="job-listing">
      <h2>{title}</h2>
      <p>Department: {department}</p>
      <p>{description}</p>
      <button onClick={onClickApply}>Apply Now</button>
    </div>
  );
};

export default JobListing;
