import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MovieContext from '../Contexts';

function Search(props) {
  const { searchTerm, setSearchTerm } = props;
  const { setLoading } = useContext(MovieContext);

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
};

export default Search;
