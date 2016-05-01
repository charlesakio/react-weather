var React = require('react');
var PropTypes = React.PropTypes;

var DayItem = require('./DayItem');

var toDegrees = require('../helpers/weatherConverters').toDegrees
var styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function WeatherDetail (props) {
  return (
    <div style={styles.container}>
      <DayItem day={props.weather} />
      <div style={styles.descriptionContainer}>
        <p>{props.city}</p>
        <p>{props.weather.weather[0].description}</p>
        <p>min temp: {toDegrees(props.weather.temp.min)} degrees</p>
        <p>max temp: {toDegrees(props.weather.temp.max)} degrees</p>
        <p>humidity: {props.weather.humidity}</p>
      </div>
    </div>
  )
}
/*
WeatherDetail.propTypes = {
  icon: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired
}
*/
module.exports = WeatherDetail
