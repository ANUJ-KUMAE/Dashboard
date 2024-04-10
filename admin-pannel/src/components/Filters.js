// Filters.js
import React from 'react';
import "./Filter.css"

const Filters = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className='select-option'>
      <option value="" className='option-name' style={{fontSize:'1.2rem'}}>All</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default Filters;
