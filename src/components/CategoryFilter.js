import React from 'react';
import PropTypes from 'prop-types';
import bookCategories from '../utilities/bookCategories';
import './App.css';

export default function CategoryFilter({ handleFilterChange }) {
  return (
    <div className="category-filter">
      <label htmlFor="filter">
        {' '}
        <span className="filter-label">Filter by category:</span>{' '}
        <select
          name="category"
          id="filter"
          onChange={e => handleFilterChange(e.target.value)}
        >
          {['All', ...bookCategories].map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired
};
