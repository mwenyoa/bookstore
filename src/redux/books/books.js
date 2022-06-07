const ADD_BOOK = 'bookstore/booksReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/booksReducer/REMOVE_BOOK';

// act
export const AddBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const RemoveBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});

// reduce
const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((bookItem) => (bookItem.id !== action.payload))];
    default:
      return state;
  }
};

export default booksReducer;
