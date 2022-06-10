import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddBook } from '../redux/books/books';

const Form = () => {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  // add category state
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  // get book information
  const getAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const getTitle = (event) => {
    setTitle(event.target.value);
  };

  const getBooKCat = (event) => {
    setCategory(event.target.value);
  };

  // submit book
  const submitBookInfo = (evt) => {
    evt.preventDefault();
    if (category && author && title) {
      dispatch(AddBook(
        {
          item_id: bookList.length + 1, title, author, category,
        },
      ));
    }

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div id="form-container">
      <form onSubmit={submitBookInfo}>
        <input type="text" id="title" placeholder="Book Title" onChange={getTitle} value={title} required />
        <input type="text" id="author" placeholder="Book Author" onChange={getAuthor} value={author} required />
        <input type="text" id="category" placeholder="Book category" onChange={getBooKCat} value={category} required />
        <button type="submit" id="add-book">ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
