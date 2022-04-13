import React from 'react';
import PropTypes from 'prop-types';

function Search(props) {
  const { searchTerm, setSearchTerm, setLoading } = props;

  return (
    <form>
      <div className="input-holder">
        <input
          type="text"
          placeholder="Search for a Movie"
          id="search-field"
          name="search"
          value={searchTerm}
          onChange={({ target: { value } }) => {
            setSearchTerm(value);
            setLoading(true);
          }}
        />
      </div>
    </form>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Search;
