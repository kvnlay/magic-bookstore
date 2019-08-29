import React from 'react';
import BooksForm from './BooksForm';
import BooksList from './BooksList';
import './App.css';
import Nav from './Nav';

const App = () => (
  <div className="App">
    <Nav />
    <div className="container">
      <BooksList />
      <BooksForm />
    </div>
  </div>
);

export default App;
