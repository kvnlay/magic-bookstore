// eslint-disable-next-line import/named
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const uuid = require('uuid/v1');

const initialState = [
  {
    id: uuid(),
    title: 'The Great Gatsby',
    author: 'Samuel O Katale',
    category: 'Action',
  },
  {
    id: uuid(),
    title: 'The Grapes of Wrath',
    author: 'Matain Aoth',
    category: 'Action',
  },
  {
    id: uuid(),
    title: 'Nineteen Eighty-Four',
    author: 'Fredic Ojambo',
    category: 'Sci-Fi',
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        { ...action.book, id: uuid() },
      ];


    case REMOVE_BOOK:
      return state.filter((book) => action.id !== book.id);
    default:
      return state;
  }
};
