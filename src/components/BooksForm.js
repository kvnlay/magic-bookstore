/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import bookCategories from '../bookCategories';

const getProgress = () => Math.round(Math.random() * 100);

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: 'Unknown',
      category: 'Action',
      progress: getProgress(),
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
    const {
      title, author, category, progress,
    } = this.state;
    createBook({
      title, author, category, progress,
    });
    this.setState({
      title: '',
      author: '',
      category: 'Action',
      progress: getProgress(),
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
