const createBook = (payload) => ({
  type: 'CREATE_BOOK',
  payload,
});

const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id,
});

const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

export { createBook, removeBook, changeFilter };
