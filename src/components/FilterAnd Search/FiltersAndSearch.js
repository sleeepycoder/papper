import React, { useState } from 'react';
import './FiltersAndSearch.css';

const FiltersAndSearch = ({ categories, locations, onCategoryChange, onLocationChange, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    onSearch(newValue); // Call the onSearch prop with the new search value
  };

  return (
    <div className="filters-search">
      <select onChange={onCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <select onChange={onLocationChange}>
        <option value="">All Locations</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>{location}</option>
        ))}
      </select>
      <input type="text" placeholder="Search..." value={searchValue} onChange={handleSearchChange} />
    </div>
  );
};

export default FiltersAndSearch;
