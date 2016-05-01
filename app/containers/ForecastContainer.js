var React = require('react');
var Forecast = require('../components/Forecast');

var getCurrentWeather = require('../helpers/api').getCurrentWeather
var getForeCast = require('../helpers/api').getForeCast

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    console.log('getInitialState')
    return {
      isLoading: true,
      forecastInfo: {},
    }
  },
  componentWillMount: function() {
    console.log('componentWillMount')
  },
  componentDidMount: function() {
    //Refer: https://github.com/charlesakio/react_tutorial/blob/lifecycle/app/containers/ConfirmBattleContainer.js
    var city = this.props.routeParams.city 
    console.log('In ForecastContainer.componentDidMount')
    this.requestForecast(city)
  },
  componentWillReceiveProps: function (nextProps) {
    this.requestForecast(nextProps.routeParams.city)
  },
  requestForecast: function(city) {
    console.log('In ForecastContainer.requestForecast')
    getForeCast(city) 
    .then(function (forecastInfo) {
       this.setState({
        isLoading: false,
        forecastInfo: forecastInfo
      })
    }.bind(this))
  },

  handleClick: function(weather) {
    this.context.router.push({
      pathname: '/details/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  componentWillUnmount: function() {
    console.log('componentWillUnMount')
  },
  render: function () {
    return (
      <Forecast 
        isLoading={this.state.isLoading}  
        city={this.props.routeParams.city}
        forecastInfo={this.state.forecastInfo}
        handleClick={this.handleClick}
      />
    )
  }
});

module.exports = ForecastContainer;
