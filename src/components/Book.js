/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Book = (props) => {
  const {
    id, title, category, removeBook,
  } = props;
  return (
    <tr className="book">
      <td className="details">
        <p className="category">
          {category}
        </p>
        <h3 className="title">
          {title}
        </h3>
        <p className="id">
          {id}
        </p>
        <div className="btn-row">
          <button type="button">
            Comment
          </button>
          |
          <button
            className="remove"
            type="button"
            onClick={() => { removeBook(id); }}
          >
            Remove
          </button>
          |
          <button type="button">
            Edit
          </button>
        </div>
      </td>
      <td className="progress">
        <div className="progress-circle"></div>
        <div className="progress-percentage"></div>
      </td>
      <td className="update">
        <button type="button" className="update-button">
          UPDATE PROGRESS
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
