var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5';
var _APIKEY = 'a8e29972d260d0df1639bf0d7199f680';
var _Accurate = 'accurate';
var _Cnt = 5;

function getCurrentWeather(city) {
  return axios.get(_baseURL + '/weather?q=' + city + '&type=' + _Accurate  + '&appid=' + _APIKEY)
   .then(function (currentWeather) {
    console.log(currentWeather.data)
   })
}

function getForeCast(city) {
  return axios.get(_baseURL + '/forecast/daily?q=' + city + '&type' + _Accurate + '&appid=' + _APIKEY + '&cnt=5')
  .then(function (forecast) {
    //console.log(forecast.data)
    return forecast.data
  })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForeCast: getForeCast
};


