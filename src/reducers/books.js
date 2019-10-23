import {
  CREATE_BOOK,
  REMOVE_BOOK,
  CREATE_BOOK_ERROR
} from "../actions/actionTypes";

const uuid = require("uuid/v1");

const initialState = [
  {
    id: uuid(),
    title: "Harry Potter: The Goblet Of Fire",
    author: "Samuel O Katale",
    category: "Action",
    progress: 100
  },
  {
    id: uuid(),
    title: "The Gifted Hands",
    author: "Matain Aoth",
    category: "Action",
    progress: 23
  },
  {
    id: uuid(),
    title: "48 Laws Of Power",
    author: "Fredic Ojambo",
    category: "Sci-Fi",
    progress: 89
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, { ...action.book, id: uuid() }];

    case CREATE_BOOK_ERROR:
      console.log("this is the error", action.err);
      break;

    case REMOVE_BOOK:
      return state.filter(book => action.id !== book.id);
    default:
      return state;
  }
};
