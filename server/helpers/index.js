const axios = require('axios');

const getCardData = () => {
  const options = {
    url: 'https://protected-taiga-89091.herokuapp.com/api/card/',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  return axios(options);
};


module.exports.getCardData = getCardData;
