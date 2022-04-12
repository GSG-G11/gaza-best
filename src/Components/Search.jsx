import React from 'react';
import propTypes from 'prop-types';

function Search(props) {
  const { searchTerm, setSearchTerm } = props;

  return (
    <form>
      <div className="input-holder">
        <input
          type="text"
          placeholder="Search for a Movie"
          id="search-field"
          name="search"
          value={searchTerm}
          onChange={({ target: { value } }) => setSearchTerm(value)}
        />
      </div>
    </form>
  );
}

Search.propTypes = {
  searchTerm: propTypes.string.isRequired,
  setSearchTerm: propTypes.func.isRequired,
};

export default Search;
