const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WnHPz4XrHMWYBaPfNiBC/books';
// Add book to online storage
const ADD_BOOK = 'bookstore/booksReducer/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/booksReducer/REMOVE_BOOK';
const DISPLAY_BOOKS = 'bookstore/booksReducer/DISPLAY_BOOKS';
// book API base url

export const AddBook = (book) => async (dispatch) => {
  await fetch(baseUrl, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: ADD_BOOK, payload: book }))
    .catch((error) => error.message);
};

// Remove  book from storage
export const RemoveBook = (bookId) => async (dispatch) => {
  await fetch(`${baseUrl}/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(() => dispatch({ type: REMOVE_BOOK, payload: bookId }));
};

// display books from APi
export const displayBooksList = () => async (dispatch) => {
  await fetch(baseUrl)
    .then((res) => res.json())
    .then((books) => {
      const booksArr = [];
      Object.keys(books).forEach((key) => {
        booksArr.push({
          item_id: key,
          title: books[key][0].title,
          author: books[key][0].author,
          category: books[key][0].category,
        });
      });
      dispatch({ type: DISPLAY_BOOKS, payload: booksArr });
    }).catch((error) => error.message);
};
// reduce
const booksReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((bookItem) => (bookItem.id !== action.payload))];
    case DISPLAY_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
