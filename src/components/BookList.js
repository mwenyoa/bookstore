import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayBooksList } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  dispatch(displayBooksList());
  return (
    <section id="books-page">
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          id={book.item_id}
          category={book.category}
        />
      ))}
      <Form />
    </section>
  );
};

export default BooksList;
