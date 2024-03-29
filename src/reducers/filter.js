import { CHANGE_FILTER } from '../actions/actionTypes';

export default (state = '', { type, filter }) => {
  switch (type) {
    case CHANGE_FILTER:
      if (filter === 'All') return '';
      return filter;
    default:
      return state;
  }
};
