import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Book = ({ id, title, category }) => (
  <tr className="book">
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
