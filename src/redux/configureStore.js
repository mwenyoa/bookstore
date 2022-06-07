import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// reducer composition
const rootReducer = combineReducers(
  {
    books: booksReducer,
    categories: categoriesReducer,
  },
);

// redux books store
const store = createStore(rootReducer);

export default store;
