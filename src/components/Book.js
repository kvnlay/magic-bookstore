/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Book = (props) => {
  const {
    id, title, category, removeBook,
  } = props;
  return (
    <tr className="book">
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button
          className="remove"
          type="button"
          onClick={() => { removeBook(id); }}
        >
          Remove book
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
