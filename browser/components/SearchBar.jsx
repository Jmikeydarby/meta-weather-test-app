import React from 'react';
import { connect } from 'react-redux';

import { searchByCityName } from '../reducers/search.jsx';
import { getResultsCityName } from '../reducers/results.jsx';

// Creates input fields for the user to search for their city's forecast
function SearchBar (props) {
  return (
    <div id="searchbar">
      <span>Search: </span>
      <form>
        <input type="text" value={props.searchCityValue} placeholder="Search by City Name" onChange={props.handleCityNameChange} />
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchCityName: state.searchValues.searchCityName
  }
};

const mapDispatchToProps = dispatch => ({
  handleCityNameChange (event) {
    dispatch(getResultsCityName(event.target.value));
    dispatch(searchByCityName(event.target.value));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
