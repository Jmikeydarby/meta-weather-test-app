'use strict'

const router = require('express')();
const axios = require('axios');

router.get('/name/:searchValue', (req, res, next) => {
  axios.get(`https://www.metaweather.com/api/location/search/?query=${req.params.searchValue}`)
    .then(response => {
      res.json(response.data);
    })
    .catch(next);
});

module.exports = router;
