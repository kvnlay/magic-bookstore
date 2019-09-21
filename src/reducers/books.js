import { CREATE_BOOK, REMOVE_BOOK } from "../actions/actionTypes";

const uuid = require("uuid/v1");

const initialState = [
  {
    id: uuid(),
    title: "Asma's Indian Kitchen",
    author: "Asma Kahn",
    category: "Miscellaneous",
    progress: 80
  },
  {
    id: uuid(),
    title: "Cake Confidence",
    author: "Mandy Merriman",
    category: "Appetizers",
    progress: 100
  },
  {
    id: uuid(),
    title: "Salt & Straw",
    author: "Tyler Malek and JJ Goode",
    category: "Desserts",
    progress: 50
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, { ...action.book, id: uuid() }];

    case REMOVE_BOOK:
      return state.filter(book => action.id !== book.id);
    default:
      return state;
  }
};
