const defaultState = {
  searchCityName: ''
};
/* ----------------- REDUCERS -------------------- */

export default function (state = defaultState, action) {
  switch (action.type) {
    // updates state when user searchs by city name
    case SEARCH_BY_CITY_NAME:
      // Object.assign maintians immutiblity for redux
      return Object.assign({}, state, { searchCityName: action.value });
    default: return state;
  }
}

/* ------------- ACTION TYPES ------------------- */

const SEARCH_BY_CITY_NAME = 'SEARCH_BY_CITY_NAME';

/* ------------- ACTION CREATORS ---------------- */

export const searchByCityName = value => {
  return { type: SEARCH_BY_CITY_NAME, value: value };
};
