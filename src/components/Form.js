import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddBook } from '../redux/books/books';

const Form = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const getAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const getTitle = (event) => {
    setTitle(event.target.value);
  };
  const submitBookInfo = (evt) => {
    evt.preventDefault();
    if (author && title) {
      dispatch(AddBook(
        { id: bookList.length + 1, title, author },
      ));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <div id="form-container">
      <form onSubmit={submitBookInfo}>
        <input type="text" id="title" placeholder="Book Title" onChange={getTitle} />
        <input type="text" id="author" placeholder="Book Author" onChange={getAuthor} />
        <button type="submit" id="add-book">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
