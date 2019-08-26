import React from 'react';
import PropTypes from 'prop-types';
import bookCategories from '../bookCategories';

export default function CategoryFilter({ handleFilterChange }) {
  return (
    <div>
      <select
        name="category"
        onChange={e => handleFilterChange(e.target.value)}
      >
        {['All', ...bookCategories].map(c => (
          <option key={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired
};
