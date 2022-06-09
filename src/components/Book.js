import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatchAction = useDispatch();

  const eraseBook = (bookid) => {
    dispatchAction(RemoveBook(bookid));
  };

  return (
    <div className="book-container">
      <div className="book-info">
        <p className="book-category">Category</p>
        <h3 className="book-title">{title}</h3>
        <h4 className="book-author">{author}</h4>
        <div className="book-button">
          <button type="button">Comments</button>
          <button type="button" className="removeBtn" bookid={id} onClick={() => eraseBook(id)}>Remove</button>
          <button type="button" className="editBtn">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="progress-text">
          <p>60%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-update">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 18</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
