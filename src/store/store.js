import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
