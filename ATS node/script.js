const axios = require('axios');

const url = 'https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=A4D8086ADCC2A7387C216572EB27FB28&appid=646570&l=spanish';

axios.get(url)
  .then(response => {
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
