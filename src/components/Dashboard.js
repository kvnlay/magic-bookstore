import React from "react";
import BooksForm from "./BooksForm";
import BooksList from "./BooksList";

export default function Dashboard() {
  return (
    <div className="container">
      <BooksList />
      <BooksForm />
    </div>
  );
}
