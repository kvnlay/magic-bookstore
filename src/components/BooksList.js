/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from './Book';
import '../App.css';


const mapStateToProps = (state) => ({
  books: state.books,
});

const BooksList = ({ books, deleteBook }) => (
  <div>
    <h1>Books list</h1>
    <table className="book-table">
      <tbody>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
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
};


export default connect(
  mapStateToProps,
  {
    deleteBook: removeBook,
  },
)(BooksList);
