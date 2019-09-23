import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createBook } from "../actions";
import bookCategories from "../utilities/bookCategories";
import { getProgress } from "../utilities";

class BooksForm extends React.Component {
  state = {
    title: "",
    author: "Unknown",
    category: "Action",
    progress: getProgress()
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addBook } = this.props;
    const { title, author, category, progress } = this.state;
    addBook({
      title,
      author,
      category,
      progress
    });
    this.setState({
      title: "",
      author: "",
      category: "Action",
      progress: getProgress()
    });
  };

  render() {
    const { title, category } = this.state;
    return (
      <div className="add-form">
        <h3>ADD NEW RECIPE BOOK</h3>
        <form>
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

          <button
            type="submit"
            onClick={this.handleSubmit}
            className="update-button"
          >
            ADD BOOK
          </button>
        </form>
      </div>
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
