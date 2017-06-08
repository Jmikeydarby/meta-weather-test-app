import React from 'react';
import SearchBar from '../components/SearchBar.jsx';
import Results from './Results.jsx';

export default function (props) {
  return (
    <div id="main" className="container">
      <h3>MetaWeather Forecast</h3>
      <SearchBar />
      <Results />
    </div>
  );
}
