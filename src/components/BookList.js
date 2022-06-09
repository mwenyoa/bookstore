import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  return (
    <section id="books-page">
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
      <Form />
    </section>
  );
};

export default BooksList;
