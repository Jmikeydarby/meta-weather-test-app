import axios from 'axios';

const defaultState = [];
/* ----------------- REDUCERS -------------------- */

export default function (state = defaultState, action) {
  switch (action.type) {
    // assigns the results from metaweather to the state
    case GET_RESULTS_CITY_NAME:
      // Object.assign maintians immutiblity for redux
      return action.value;
    default: return state;
  }
}

/* ------------- ACTION TYPES ------------------- */

const GET_RESULTS_CITY_NAME = 'GET_RESULTS_CITY_NAME';

/* ------------- ACTION CREATORS ---------------- */

//Request to the backend prevents Cross Origin scripting request in the browser
export const getResultsCityName = searchValue =>
  dispatch => {
    if (!searchValue) {
      dispatch(updateResults([]))
    } else {
      axios.get(`/api/search/name/${searchValue}`)
        .then(res => {
          dispatch(updateResults(res.data));
        })
        .catch(() => console.log("Error!  No Results!"));
    }
  }

const updateResults = results => {
  return { type: GET_RESULTS_CITY_NAME, value: results}
}
