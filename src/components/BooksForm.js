import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import bookCategories from '../bookCategories';

// function BooksForm() {
//   const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
//   return (
//     <div>
//       <form>
//         <label>
//           Title:
//           <input type="text" name="title" />
//         </label>
//         <label>
//           Choose the book category: 
//           <select>
//             {categories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

class BooksForm extends React.Component {
  state = {
    title: '',
    category: 'Action',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { createBook } = this.props;
    const { title, category} = this.state;
    createBook({ title, category });
    this.setState({
      title: '',
      category: 'Action',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form>
        ADD NEW BOOK
        <br />
        <input name="title" value={title} placeholder="Book title" onChange={this.handleChange} />

        <select name="category" value={category} onChange={this.handleChange} >
          {
            bookCategories.map(c => (<option key={c}>{c}</option>))
          }
        </select>

        <button type="button" onClick={this.handleSubmit}>ADD BOOK</button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
