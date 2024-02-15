// SortBy.js
import React from 'react';
import './SortBy.css'

const SortBy = ({ onChange, value }) => {
  return (
    <div className="sort-section">
      <label>Sort by:</label>
      <select onChange={(e) => onChange(e.target.value)} value={value}>
        <option value="">--Select--</option>
        <option value="highToLow">High to Low</option>
        <option value="lowToHigh">Low to High</option>
      </select>
    </div>
  );
};

export default SortBy;
