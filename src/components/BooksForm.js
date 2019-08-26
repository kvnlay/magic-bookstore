import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import bookCategories from '../bookCategories';

class BooksForm extends React.Component {
  state = {
    title: '',
    category: 'Action'
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addBook } = this.props;
    const { title, category } = this.state;
    addBook({ title, category });
    this.setState({
      title: '',
      category: 'Action'
    });
  };

  render() {
    const { title, category } = this.state;
    return (
      <form>
        ADD NEW BOOK
        <br />
        <input
          name="title"
          value={title}
          placeholder="Book title"
          onChange={this.handleChange}
        />
        <select name="category" value={category} onChange={this.handleChange}>
          {bookCategories.map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <button type="submit" onClick={this.handleSubmit}>
          ADD BOOK
        </button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired
};

export default connect(
  null,
  { addBook: createBook }
)(BooksForm);
