import React from 'react';
import { connect } from 'react-redux';

function ResultsContainer (props) {
  let results = props.results;
  return (
    <div id="searchresults" className="container">
      {
        results && results.map(result => {
          return (
            <div key={result.woeid}>{result.title}</div>
          )
        })
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    results: state.results,
    searchCityName: state.searchValues.searchCityName
  }
};

const mapDispatchToProps = dispatch => ({
  handleCityNameChange (event) {
    dispatch(searchByCityName(event.target.value));
  }
})

export default connect(mapStateToProps)(ResultsContainer);
