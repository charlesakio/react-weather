var React = require('react');
var PropTypes = React.PropTypes;
var City = require('../components/City');

var axios = require('axios');
var _baseURL = 'http://api.openweathermap.org/data/2.5';
var _APIKEY = 'a8e29972d260d0df1639bf0d7199f680';

function getCurrentWeather(city) {
  return axios.get(_baseURL + '/weather?q=' + city + '&appid=' + _APIKEY)
    .then(function (currentWeather) {
      console.log(currentWeather.data)
    })
}

var CityContainer = React.createClass({
  getDefaultProps: function () {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState: function () {
    return {
      city: '',
    }
  },
  handleSubmitCity: function (e) {
    e.preventDefault();
    var city = this.state.city;
    getCurrentWeather(city)
  },
  handleUpdateCity: function (event) {
    this.setState({
      city: event.target.value
    });
  },
  render: function () {
    return (
      <City
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        direction={this.props.direction}
        city={this.state.city} 
      />
    )
  }
});

module.exports = CityContainer
