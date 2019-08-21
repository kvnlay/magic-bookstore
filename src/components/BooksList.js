import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';
import '../App.css';


const mapStateToProps = (state) => ({
  books: state.books,
});

function BooksList({ books }) {
  return (
    <div>
      <h1>Books list</h1>
      <table className="book-table">
        <tbody>
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              category={book.category}
              title={book.title}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default connect(mapStateToProps, null)(BooksList);
