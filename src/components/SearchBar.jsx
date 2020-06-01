import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <form action="">
        <label htmlFor="search-input">Search</label>
        <input
          type="text"
          placeholder="Search for any product"
          id="search-input"
          onChange={props.handleInputChange}
        />

        <input
          type="checkbox"
          id="stock-checkbox"
          onChange={props.handleCheckboxChange}
          checked={props.onlyAllowedStocked}
        />
        <label htmlFor="stock-checkbox">Only show products on stock</label>
      </form>
    </div>
  );
}

export default SearchBar;
