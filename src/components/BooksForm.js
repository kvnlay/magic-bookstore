/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import bookCategories from '../bookCategories';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-shadow
    const { createBook } = this.props;
    const { title, category } = this.state;
    createBook({ title, category });
    this.setState({
      title: '',
      category: 'Action',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <div className="add-form">
        <h3>ADD NEW BOOK</h3>
        <form>
          <br />
          <input name="title" value={title} placeholder="Book title" onChange={this.handleChange} />

          <select name="category" value={category} onChange={this.handleChange}>
            {
            bookCategories.map((c) => (<option key={c}>{c}</option>))
          }
          </select>

          <button type="submit" onClick={this.handleSubmit} className="update-button">ADD BOOK</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
