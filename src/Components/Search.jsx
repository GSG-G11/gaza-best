import React from 'react';
import PropTypes from 'prop-types';

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
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Search;
