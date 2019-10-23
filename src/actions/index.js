import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, CREATE_BOOK_ERROR } from "./actionTypes";
import { getProgress } from "../utilities";

const createBook = book => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection("books").add({
      ...book,
      author: "unknown",
      category: "Action",
      progress: getProgress()
    }).then(() => {
      dispatch({
        type: CREATE_BOOK,
        book
      });
    }).catch((err) => {
      dispatch({
        type: CREATE_BOOK_ERROR,
        err
      })
    })
  };
};

const removeBook = id => ({
  type: REMOVE_BOOK,
  id
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter
});

export { createBook, removeBook, changeFilter };
