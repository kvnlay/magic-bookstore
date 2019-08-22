/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import Book from './Book';
import './App.css';
import CategoryFilter from './CategoryFilter';


const mapStateToProps = (state) => ({
  books: state.books.filter((book) => (state.filter === '' ? true : book.category === state.filter)),
});

const BooksList = ({ books, deleteBook, handleFilterChange }) => (
  <div>
    <CategoryFilter handleFilterChange={handleFilterChange} />
    <table className="book-table">
      <tbody>
        {books.map(({ id, title, category }) => (
          <Book
            key={id}
            id={id}
            title={title}
            category={category}
            removeBook={deleteBook}
          />
        ))}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};


export default connect(
  mapStateToProps,
  {
    deleteBook: removeBook,
    handleFilterChange: changeFilter,
  },
)(BooksList);
