const createBook = (payload) => ({
  type: 'CREATE_BOOK',
  payload,
});

const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id,
});

export { createBook, removeBook };
