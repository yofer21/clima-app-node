const axios = require('axios');

const getClima = async (lat, lng) => {

  let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=144128dc5e5e77259bfd2461acf6ef82`)

  return resp.data.main.temp;
}


module.exports = {
  getClima
}