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
    category: '',
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
      category: '',
    });
  }
}

export default BooksForm;
