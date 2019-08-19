const getRandom = () => {
  return Math.round(Math.random() * 100);
};

const initialState = [
  {
    id: getRandom(),
    title: 'The Great Gatsby',
    category: 'Action',
  },
  {
    id: getRandom(),
    title: 'The Grapes of Wrath',
    category: 'Action',
  },
  {
    id: getRandom(),
    title: 'Nineteen Eighty-Four',
    category: 'Sci-Fi',
  },
];

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_BOOK:
      return [...state, ...payload];

    case REMOVE_BOOK:
      return state.filter((book) => payload.id !== book.id);
    default:
      return state;
  }
};
