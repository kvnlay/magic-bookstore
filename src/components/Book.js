/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

const Book = (props) => {
  const {
    id, title, author, category, progress, removeBook,
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
        <p className="author">
          {author}
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
        <ProgressBar progress={progress} />
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
