import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/books/books';

const Book = ({
  id, title, author, category,
}) => {
  const dispatchAction = useDispatch();

  const eraseBook = (id) => {
    dispatchAction(RemoveBook(Number(id)));
  };

  return (
    <div className="book-container">
      <div className="book-info">
        <p className="book-category">{category}</p>
        <h3 className="book-title">{title}</h3>
        <h4 className="book-author">{author}</h4>
        <div className="book-button">
          <button type="button" className="commentBtn">Comments</button>
          <button type="button" className="removeBtn" bookid={id} onClick={() => eraseBook(id)}>Remove</button>
          <button type="button" className="editBtn">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="circle-wrapper">
          <div className="circle">
            <div className="mask half">
              <div className="fill">
                <div className="inside-circle" />
              </div>
            </div>
          </div>
        </div>
        <div className="progress-text">
          <p>25%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="book-update">
        <p className="current-chap">CURRENT CHAPTER</p>
        <p className="chap-num">Chapter 18</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
