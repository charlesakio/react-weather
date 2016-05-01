var React = require('react');
var WeatherDetail = require('../components/WeatherDetail');

var WeatherDetailContainer = React.createClass({
  render: function() {
    return (
      <WeatherDetail
        weather={this.props.location.state.weather}
        city={this.props.routeParams.city}
      />
    )
  }
})

module.exports = WeatherDetailContainer
