import React from 'react';
import BooksForm from './BooksForm';
import BooksList from './BooksList';
import './App.css';

const App = () => (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
);

export default App;
