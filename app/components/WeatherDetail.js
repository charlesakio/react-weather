var React = require('react');
var PropTypes = React.PropTypes;


function WeatherDetail (props) {
  return (
    <div>
      <p>{props.icon}</p>
      <p>{props.city}</p>
      <p>{props.description}</p>
      <p>{props.minTemp}</p>
      <p>{props.maxTemp}</p>
      <p>{props.humidity}</p>
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
