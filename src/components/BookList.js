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
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            id={book.item_id}
            category={book.category}
          />
        ))}
        <hr />
        <h2 className="add-book-caption">ADD NEW BOOK</h2>
        <Form />
      </div>
    </section>
  );
};

export default BooksList;
