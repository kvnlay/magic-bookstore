import React from 'react';

function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Choose the book category: 
          <select>
            {categories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default BooksForm;
