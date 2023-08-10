import React, { useState } from 'react';
import JobListing from './Job Listing/JobListing';
import JobDetails from './JobDetails/JobDetails';
import FiltersAndSearch from './FilterAnd Search/FiltersAndSearch';
import './Main.css';

const Main = () => {
  const jobListings = [
    {
      title: 'React js Developer',
      description: 'React js Developer 2 years Experience',
      department: 'Software Development',
      responsibilities: [
        'Develop and maintain user interfaces for web applications using React.js.',
        'Collaborate with cross-functional teams to design and implement user features.',
        // Add more responsibilities
      ],
      qualifications: [
        'Bachelor\'s degree in Computer Science or related field.',
        'Minimum of 2 years of experience with React.js.',
        // Add more qualifications
      ],
      benefits: [
        'Competitive salary and benefits package.',
        'Opportunity to work in a dynamic and innovative environment.',
        // Add more benefits
      ],
      location: 'New York',
    },
    {
      title: 'UI/UX Designer',
      description: 'Creative UI/UX designer to enhance user experience.',
      department: 'Design',
      responsibilities: [
        'Create visually appealing and user-friendly designs for digital products.',
        'Collaborate with development teams to ensure design feasibility.',
        // Add more responsibilities
      ],
      qualifications: [
        'Bachelor\'s degree in Design or a related field.',
        'Proficiency in design software such as Adobe XD or Sketch.',
        // Add more qualifications
      ],
      benefits: [
        'Flexible work hours and remote work options.',
        'Opportunity to shape the user experience of cutting-edge products.',
        // Add more benefits
      ],
      location: 'San Francisco',
    },
    {
      title: 'Marketing Specialist',
      description: 'Marketing specialist to lead and execute marketing campaigns.',
      department: 'Marketing',
      responsibilities: [
        'Develop and execute marketing strategies to drive brand awareness.',
        'Manage social media accounts and create engaging content.',
        // Add more responsibilities
      ],
      qualifications: [
        'Bachelor\'s degree in Marketing or a related field.',
        'Experience with digital marketing tools and platforms.',
        // Add more qualifications
      ],
      benefits: [
        'Competitive salary and performance-based bonuses.',
        'Opportunity to work in a fast-paced and creative marketing environment.',
        // Add more benefits
      ],
      location: 'Remote',
    },
    {
      title: 'Sales Representative',
      description: 'Experienced sales representative to drive business growth.',
      department: 'Sales',
      responsibilities: [
        'Generate leads, identify prospects, and close sales deals.',
        'Build and maintain strong relationships with clients.',
        // Add more responsibilities
      ],
      qualifications: [
        'Bachelor\'s degree in Business or a related field.',
        'Proven track record of successful sales experience.',
        // Add more qualifications
      ],
      benefits: [
        'Competitive commission structure and sales incentives.',
        'Opportunity to contribute directly to business growth and success.',
        // Add more benefits
      ],
      location: 'Chicago',
    },
    // Add more job listings here
  ];
  
  
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredJobList, setFilteredJobListings] = useState(jobListings); // Initialize with all job listings


  const categories = [
    "Software Development",
    "Design",
    "Marketing",
    "Sales",
    "Product Management",
    "Customer Support",
    "Data Science",
    "Quality Assurance",
    "Finance",
    "Human Resources",
  ];
  

  const locations = [
    "New York",
    "San Francisco",
    "Remote",
    "Los Angeles",
    "Chicago",
    "Seattle",
    "Boston",
    "Austin",
    "Toronto",
    "London",
  ];
  

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleCategoryChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const filteredJobListings = jobListings.filter((job) => {
    const matchesDepartment = selectedDepartment === '' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === '' || job.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });
  const handleSearch = (searchValue) => {
    // Set the search filter logic here
    const filteredBySearch = jobListings.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        job.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        job.department.toLowerCase().includes(searchValue.toLowerCase()) ||
        job.location.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  
    setFilteredJobListings(filteredBySearch); // Update the filtered job listings
  };
  
  return (
    <div className="app">
      <FiltersAndSearch
        categories={categories}
        locations={locations}
        onCategoryChange={handleCategoryChange}
        onLocationChange={handleLocationChange}
        onSearch={handleSearch}
        // Implement search functionality if needed
      />
      <div className="job-listings-container">
        {selectedJob ? (
          <JobDetails
            title={selectedJob.title}
            description={selectedJob.description}
            responsibilities={selectedJob.responsibilities}
            qualifications={selectedJob.qualifications}
            benefits={selectedJob.benefits}
          />
        ) : (
          filteredJobListings.map((job, index) => (
            <JobListing
              key={index}
              title={job.title}
              department={job.department}
              description={job.description}
              onClickApply={() => handleJobClick(job)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Main;
