const createBook = (payload) => ({
  type: 'CREATE_BOOK',
  payload,
});

const removeBook = (payload) => ({
  type: 'REMOVE_BOOK',
  payload,
});

export { createBook, removeBook };
