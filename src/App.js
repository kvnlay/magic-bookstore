import React from 'react';
import BooksForm from './components/BooksForm';
import BooksList from './components/BooksList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
