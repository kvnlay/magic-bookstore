import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

const createBook = (book) => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export { createBook, removeBook };
